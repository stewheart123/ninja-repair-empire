# Complete Setup Guide - For Non-Technical Users

This guide will walk you through setting up your contact form to save submissions to a Google Sheet.

## What You Need:
1. A Google account (Gmail account works)
2. About 10 minutes
3. Your website's .env file (we'll add the URL there)

---

## Step 1: Create Your Google Sheet (2 minutes)

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Name it something like "Contact Form Submissions" (click the title at the top)
4. In the first row, type these headers:
   - **Cell A1**: `Timestamp`
   - **Cell B1**: `Name`
   - **Cell C1**: `Email`
5. That's it! Leave this sheet open for now.

---

## Step 2: Add the Apps Script Code (3 minutes)

1. In your Google Sheet, click **Extensions** in the menu bar (at the top)
2. Click **Apps Script** (this opens a new browser tab with the Apps Script editor)
3. You'll see a new page with a code editor in the middle. It might have some default code like:
   ```
   function myFunction() {
   
   }
   ```
4. **Delete everything** in that code editor (select all with `Ctrl+A` or `Cmd+A`, then delete)
5. Open the file `google-apps-script-code.js` that the developer provided you
   - This is a text file you should have received
   - Open it in Notepad, TextEdit, or any text editor
6. **Copy ALL the code** from that file (select all with `Ctrl+A` or `Cmd+A`, then `Ctrl+C` or `Cmd+C`)
7. **Go back to the Apps Script editor tab** (the browser tab that opened in step 2)
8. **Paste the code** into the empty code editor (click in the editor and press `Ctrl+V` or `Cmd+V`)
9. Click the **Save** button (💾) in the top left, or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
10. Name your project (click the project name at the top left - it might say "Untitled project") - name it something like "Contact Form Handler"

---

## Step 3: Deploy as Web App (3 minutes)

**This is the most important step!**

1. In the Apps Script editor, click **Deploy** in the top right
2. Click **New deployment**
3. Click the gear icon (⚙️) next to "Select type"
4. Choose **Web app** from the dropdown
5. Fill in the settings:
   - **Description**: "Contact Form Handler" (optional)
   - **Execute as**: Select **Me** (your email address)
   - **Who has access**: Select **Anyone** (this is safe - it just lets your website submit data)
6. Click **Deploy**
7. You may see an **Authorization Required** screen:
   - Click **Authorize access**
   - Select your Google account
   - Click **Advanced** at the bottom
   - Click **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
8. **IMPORTANT**: You'll see a Web App URL that looks like:
   ```
   https://script.google.com/macros/s/AKfycbwXyZ123abc456def789/exec
   ```
   **COPY THIS ENTIRE URL** - you'll need it!

---

## Step 4: Send the URL to Your Developer

Send the Web App URL to your developer. They'll add it to your website's `.env` file.

---

## Step 5: Test It (2 minutes)

1. Go to your website
2. Fill out the contact form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
3. Submit the form
4. Go back to your Google Sheet
5. You should see a new row with the data and timestamp!

---

## Troubleshooting

**"Authorization Required" keeps appearing:**
- Make sure you selected "Anyone" in Step 3
- Make sure you clicked "Allow" when prompted

**Form submits but nothing appears in sheet:**
- Check if you named your sheet tab "Form Submissions" (bottom of Google Sheets)
- Or check the `SHEET_NAME` in the Apps Script code matches your sheet tab name

**"Something went wrong" error on website:**
- Double-check the URL in the .env file matches exactly what you copied
- Make sure there are no extra spaces or characters

---

## Need Help?

If you get stuck, send a screenshot of what you see and we can help troubleshoot!


