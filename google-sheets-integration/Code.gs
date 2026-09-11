/**
 * Mount Litera Zee School, Wagholi-Pune
 * Admission Leads Capture Web App - Google Apps Script
 *
 * Target Sheet Name: "Mount Litera Admission Leads"
 *
 * Header Columns:
 * 1. Timestamp (IST Server Time)
 * 2. Parent Name
 * 3. Phone Number
 * 4. Email
 * 5. Student Name
 * 6. Class Applying For
 * 7. Residential Address
 * 8. Location Confirmed
 * 9. UTM Source
 * 10. UTM Medium
 * 11. UTM Campaign
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Prevent concurrent write collisions (wait up to 30s)
    lock.waitLock(30000);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: "Server busy. Please retry." })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var sheetName = "Mount Litera Admission Leads";
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);

    // If the sheet doesn't exist, create it and add the header row
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var headers = [
        "Timestamp",
        "Parent Name",
        "Phone Number",
        "Email",
        "Student Name",
        "Class Applying For",
        "Residential Address",
        "Location Confirmed",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign"
      ];
      sheet.appendRow(headers);

      // Apply styling to header
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#2A60E4");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // Parse incoming JSON payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Server-side timestamp in Indian Standard Time (IST)
    var timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "yyyy-MM-dd HH:mm:ss"
    );

    // Format location confirmation string
    var locationConfirmedVal = "";
    if (data.locationConfirmed !== undefined && data.locationConfirmed !== null && data.locationConfirmed !== "") {
      locationConfirmedVal = data.locationConfirmed === true || String(data.locationConfirmed).toLowerCase() === "yes" ? "Yes" : "No";
    }

    // Prepare row matching the exact 11 header columns
    var row = [
      timestamp,
      data.parentName || "",
      data.phone || data.phoneNumber || "",
      data.email || "",
      data.studentName || "",
      data.classApplyingFor || data.seekingClass || data.grade || "",
      data.residentialAddress || data.address || "",
      locationConfirmedVal,
      data.utmSource || (data.utm && data.utm.source) || "direct",
      data.utmMedium || (data.utm && data.utm.medium) || "organic",
      data.utmCampaign || (data.utm && data.utm.campaign) || "admission_2026_27"
    ];

    sheet.appendRow(row);

    // Return structured JSON response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Admission lead appended successfully",
        timestamp: timestamp
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: err.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      service: "Mount Litera Zee School Wagholi - Lead Ingestion Webhook",
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
