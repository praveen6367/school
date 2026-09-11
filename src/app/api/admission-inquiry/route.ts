import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      studentName,
      grade,
      parentName,
      phone,
      email,
      address,
      residesNearby,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      referrer,
    } = body;

    // Validation
    if (!studentName || typeof studentName !== "string" || studentName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter the student's name." },
        { status: 400 }
      );
    }

    if (!grade || typeof grade !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the class applying for." },
        { status: 400 }
      );
    }

    if (!parentName || typeof parentName !== "string" || parentName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter the parent or guardian's name." },
        { status: 400 }
      );
    }

    // Sanitize and validate Indian phone number
    const cleanPhone = phone ? String(phone).replace(/[^\d+]/g, "") : "";
    const phoneDigitsOnly = cleanPhone.replace(/\D/g, "");

    if (phoneDigitsOnly.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const leadId = `MLZS-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const leadRecord = {
      leadId,
      studentName: studentName.trim(),
      grade,
      parentName: parentName.trim(),
      phone: cleanPhone,
      email: email ? String(email).trim() : null,
      address: address ? String(address).trim() : null,
      residesNearby: residesNearby === "yes" || residesNearby === true,
      campus: "Wagholi, Pune",
      timestamp,
      utm: {
        source: utmSource || "direct",
        medium: utmMedium || "organic",
        campaign: utmCampaign || "admission_2026_27",
        content: utmContent || null,
        term: utmTerm || null,
        referrer: referrer || null,
      },
    };

    console.log("[Student Registration Received]", JSON.stringify(leadRecord, null, 2));

    return NextResponse.json(
      {
        success: true,
        leadId,
        message:
          "Registration received. Our admissions team will contact you within 2 hours to confirm your campus visit.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Admission API Error]", error);
    return NextResponse.json(
      { success: false, error: "Submission failed. Please call our admissions desk directly." },
      { status: 500 }
    );
  }
}
