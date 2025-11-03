/**
 * Google Apps Script Code for Contact Form to Google Sheets
 * 
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name the first sheet "Form Submissions" (or change SHEET_NAME below)
 * 3. In row 1, add headers: "Timestamp" | "Name" | "Email"
 * 4. Go to Extensions > Apps Script
 * 5. Paste this code and save the project
 * 6. Click Deploy > New deployment > Select type: Web app
 * 7. Set "Execute as" to "Me" and "Who has access" to "Anyone"
 * 8. Click Deploy and copy the Web App URL
 */

// Name of the sheet tab where data will be written
const SHEET_NAME = "Form Submissions";

/**
 * Handles POST requests from your website form
 * @param {Object} e - The event object containing form data
 * @return {Object} - JSON response indicating success or error
 */
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      newSheet.appendRow(["Timestamp", "Name", "Email"]);
      return createResponse(false, "Sheet created. Please try submitting again.");
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const name = data.name || "";
    const email = data.email || "";
    
    // Basic validation
    if (!name || !email) {
      return createResponse(false, "Name and email are required.");
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return createResponse(false, "Invalid email address.");
    }
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Append the new row to the sheet
    // Format: [Timestamp, Name, Email]
    sheet.appendRow([timestamp, name, email]);
    
    // Return success response
    return createResponse(true, "Form submitted successfully!");
    
  } catch (error) {
    // Log error for debugging (visible in Apps Script execution log)
    Logger.log("Error: " + error.toString());
    return createResponse(false, "An error occurred: " + error.toString());
  }
}

/**
 * Handles GET requests (optional - useful for testing)
 * @param {Object} e - The event object
 * @return {Object} - JSON response
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: "This is a web app endpoint for form submissions. Use POST to submit data."
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Helper function to create a consistent JSON response
 * @param {Boolean} success - Whether the operation was successful
 * @param {String} message - Response message
 * @return {Object} - TextOutput object with JSON response
 */
function createResponse(success, message) {
  const response = {
    success: success,
    message: message
  };
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}


