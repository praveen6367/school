import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

/**
 * Fallback storage helper
 * If Google Sheets webhook is unreachable, writes lead to local filesystem so no lead is lost.
 */
async function saveLeadToFallback(lead: Record<string, unknown>, reason: string) {
  try {
    const fallbackDir = process.env.TMPDIR || os.tmpdir();
    const fallbackFile = path.join(fallbackDir, "mount_litera_leads_fallback.jsonl");
    const entry = {
      ...lead,
      fallbackReason: reason,
      savedAt: new Date().toISOString(),
    };
    await fs.promises.appendFile(fallbackFile, JSON.stringify(entry) + "\n", "utf8");
    console.warn(`[Lead Fallback Saved] Saved lead ${lead.leadId} to fallback file: ${fallbackFile}`);
  } catch (fallbackErr) {
    console.error("[Lead Fallback Write Failed]", fallbackErr);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      parentName,
      phone,
      email,
      studentName,
      currentClass,
      seekingClass,
      grade,
      residentialAddress,
      address,
      locationConfirmed,
      callbackTime,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      referrer,
    } = body;

    // 1. Parent Name validation
    if (!parentName || typeof parentName !== "string" || parentName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter parent or guardian's full name." },
        { status: 400 }
      );
    }

    // 2. Phone validation
    const cleanPhone = phone ? String(phone).replace(/[^\d+]/g, "") : "";
    const phoneDigitsOnly = cleanPhone.replace(/\D/g, "");

    if (phoneDigitsOnly.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // 3. Student Name validation
    if (!studentName || typeof studentName !== "string" || studentName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter the student's name." },
        { status: 400 }
      );
    }

    // 4. Current Class validation
    if (!currentClass || typeof currentClass !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the current class." },
        { status: 400 }
      );
    }

    // 5. Seeking Class validation
    const targetClass = seekingClass || grade;
    if (!targetClass || typeof targetClass !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the class seeking admission for." },
        { status: 400 }
      );
    }

    const leadId = `MLZS-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Prepare clean payload conforming to Google Sheets column structure
    const sheetsPayload = {
      leadId,
      timestamp,
      parentName: parentName.trim(),
      phone: cleanPhone,
      phoneNumber: cleanPhone,
      email: email ? String(email).trim() : "",
      studentName: studentName.trim(),
      classApplyingFor: targetClass,
      seekingClass: targetClass,
      currentClass: currentClass || "",
      residentialAddress: (residentialAddress || address || "").trim(),
      locationConfirmed:
        locationConfirmed !== undefined && locationConfirmed !== null && locationConfirmed !== ""
          ? Boolean(locationConfirmed)
          : "",
      callbackTime: callbackTime || "",
      campus: "Wagholi, Pune",
      affiliationNo: "1131377",
      utmSource: utmSource || "direct",
      utmMedium: utmMedium || "organic",
      utmCampaign: utmCampaign || "admission_2026_27",
      utmContent: utmContent || "",
      utmTerm: utmTerm || "",
      referrer: referrer || "",
      utm: {
        source: utmSource || "direct",
        medium: utmMedium || "organic",
        campaign: utmCampaign || "admission_2026_27",
        content: utmContent || "",
        term: utmTerm || "",
        referrer: referrer || "",
      },
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // Check if webhook URL is configured in environment
    if (!webhookUrl || webhookUrl.trim() === "" || webhookUrl.includes("EXAMPLE_ID_HERE")) {
      console.warn("[Google Sheets Webhook] GOOGLE_SHEETS_WEBHOOK_URL is not set or using placeholder.");
      
      // Store in local fallback so the lead is safely preserved
      await saveLeadToFallback(sheetsPayload, "MISSING_GOOGLE_SHEETS_WEBHOOK_URL");

      return NextResponse.json(
        {
          success: false,
          error:
            "Google Sheets webhook URL is not configured. The inquiry was safely stored in local backup. Please configure GOOGLE_SHEETS_WEBHOOK_URL in .env.",
          leadId,
        },
        { status: 503 }
      );
    }

    // Call Google Apps Script Web App endpoint with 15s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const sheetsRes = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetsPayload),
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!sheetsRes.ok) {
        throw new Error(`Google Sheets HTTP status ${sheetsRes.status} (${sheetsRes.statusText})`);
      }

      let sheetsResult: { success?: boolean; error?: string } = {};
      try {
        sheetsResult = await sheetsRes.json();
      } catch {
        // Apps Script may respond with non-JSON on certain redirect configurations
        sheetsResult = { success: true };
      }

      if (sheetsResult.success === false) {
        throw new Error(sheetsResult.error || "Google Apps Script reported an error while appending row.");
      }

      // 6. Existing Analytics & Conversion Event Logs (fired only after Sheets write succeeds)
      console.log("[Student Admission Inquiry Received]", JSON.stringify(sheetsPayload, null, 2));
      console.log("[Analytics Event: lead_submitted]", {
        event: "lead_submitted",
        leadId,
        grade: targetClass,
        utmSource: utmSource || "direct",
        utmCampaign: utmCampaign || "admission_2026_27",
        timestamp,
      });

      return NextResponse.json(
        {
          success: true,
          leadId,
          message: "Inquiry received. Our admissions team will contact you shortly.",
        },
        { status: 200 }
      );
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      const errorMessage = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
      console.error("[Google Sheets Webhook Failed]", errorMessage);

      // Save to local fallback file so the lead is never lost
      await saveLeadToFallback(sheetsPayload, errorMessage);

      return NextResponse.json(
        {
          success: false,
          error:
            "Could not connect to Google Sheets. Your inquiry was saved to the local fallback storage and our Wagholi coordinator will reach out.",
          leadId,
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[Admission API Unexpected Error]", error);
    return NextResponse.json(
      { success: false, error: "Submission failed. Please call our admissions desk directly." },
      { status: 500 }
    );
  }
}
