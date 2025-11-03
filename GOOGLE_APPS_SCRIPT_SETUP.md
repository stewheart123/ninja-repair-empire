# Google Apps Script Setup Instructions

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename it to something like "Contact Form Submissions"
4. In the first row (A1, B1, C1), add these headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
5. Name the sheet tab at the bottom to "Form Submissions" (or note what you name it)

## Step 2: Create the Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. This opens the Apps Script editor in a new tab
3. Delete any default code that's there
4. Copy and paste the code from `google-apps-script-code.js`
5. If you named your sheet tab something other than "Form Submissions", change the `SHEET_NAME` constant on line 18
6. Click **Save** (floppy disk icon) or press `Ctrl+S`
7. Give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the **Select type** dropdown (gear icon) and choose **Web app**
3. Configure the deployment:
   - **Description**: "Contact Form Web App" (optional)
   - **Execute as**: Select **Me** (your Google account)
   - **Who has access**: Select **Anyone** (this allows your website to call it)
4. Click **Deploy**
5. You may see an authorization screen:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. **IMPORTANT**: Copy the **Web App URL** that appears (it looks like: `https://script.google.com/macros/s/...`)
7. This URL is what you'll use in your website code

## Step 4: Test the Web App (Optional)

You can test if it works by:
1. Copying the Web App URL
2. Opening it in a new browser tab
3. You should see a JSON message saying it's ready for POST requests

Or use a tool like Postman/curl to test:
```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

## Step 5: Configure Environment Variable

1. Copy the `.env.example` file to create a `.env` file in your project root:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace `YOUR_WEB_APP_URL_HERE` with your actual Web App URL from Step 3:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```

3. **Important**: Restart your development server after adding/changing the `.env` file:
   - Stop your current dev server (Ctrl+C)
   - Run `npm run dev` again

4. The form will now use this environment variable automatically. No need to hardcode the URL in your code!

## Important Notes

- **First-time authorization**: The first time someone uses the deployed app, they may need to authorize it. This only happens once.
- **Deployment versions**: If you update your Apps Script code later, create a new deployment version (Deploy > Manage deployments > Edit > New version) and update the URL in your website.
- **Rate limits**: Google Apps Script has quotas. For normal contact forms, you shouldn't hit them, but be aware of [Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas).
- **Security**: The "Anyone" access setting means anyone with the URL can submit data. This is fine for contact forms, but don't expose sensitive operations.

