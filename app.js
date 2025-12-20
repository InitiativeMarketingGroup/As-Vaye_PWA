function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  const data = JSON.parse(e.postData.contents);

  // Append in exact column order
  sheet.appendRow([
    data.name,          // Name
    data.phone,         // Phone
    data.pickup,        // Pickup
    data.destination,   // Destination
    data.time,          // Time
    new Date(),         // Timestamp
    "NEW",              // Status
    "",                 // Assigned Driver (blank for manual entry)
    ""                  // Fare (blank for manual entry)
  ]);

  // Send admin email notification
  MailApp.sendEmail({
    to: "initiativemarketinggroup@gmail.com",
    subject: "🚨 New Ride Request",
    htmlBody:
      "<h3>New Ride Request</h3>" +
      "<b>Name:</b> " + data.name + "<br>" +
      "<b>Phone:</b> " + data.phone + "<br>" +
      "<b>Pickup:</b> " + data.pickup + "<br>" +
      "<b>Destination:</b> " + data.destination + "<br>" +
      "<b>Time:</b> " + data.time
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile("index")
    .setTitle("As'Vaye - Request a Ride");
}
