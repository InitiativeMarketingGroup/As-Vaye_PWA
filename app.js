function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.phone,
    data.pickup,
    data.destination,
    data.time,
    new Date(),   // timestamp
    "NEW",       // status
    "",          // assigned driver
    ""           // fare
  ]);

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

  // Enable cross-origin requests
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST");
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
