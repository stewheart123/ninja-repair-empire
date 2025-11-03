# How to Add the Environment Variable - Simple Guide

This guide shows you how to add the Google Apps Script URL to your project so the form works.

**You'll need:** The Google Apps Script Web App URL (from the Google Sheet setup)

---

## Option 1: Add it in Lovable (For Published Websites)

If you're publishing your website through Lovable, follow these steps:

### Step 1: Open Your Lovable Project
1. Go to https://lovable.dev
2. Sign in to your account
3. Open your project (it should be in your projects list)

### Step 2: Find Environment Variables Settings
1. Look for a **Settings** or **Config** button (usually in the left sidebar or top menu)
2. Click on it
3. Look for **"Environment Variables"**, **"Env Variables"**, or **"Configuration"**
4. If you can't find it, try:
   - Click on **"Project Settings"**
   - Or look under **"Deploy"** or **"Publish"** settings

### Step 3: Add the Variable
1. Click **"Add Variable"** or **"New Environment Variable"** button
2. Fill in these two fields:
   - **Variable Name:** `VITE_GOOGLE_APPS_SCRIPT_URL`
     - (Copy this exactly - it's case-sensitive!)
   - **Variable Value:** Paste your Google Apps Script URL here
     - It should look like: `https://script.google.com/macros/s/AKfycbwXyZ123abc456def789/exec`
3. Click **"Save"** or **"Add"**

### Step 4: Redeploy (If Needed)
- If you've already published your site, you may need to click **"Publish"** or **"Redeploy"** again
- This makes sure the new variable is used

**Done!** Your published website will now use this URL.

---

## Option 2: Add it Locally (For Testing on Your Computer)

If you're running the website on your own computer (localhost), follow these steps:

### Step 1: Open Your Project Folder
1. Navigate to your project folder on your computer
2. This is where you have all your code files

### Step 2: Create or Open the .env File
1. In your project folder (the main folder, not inside `src` or other folders)
2. Look for a file named `.env`
   - **If it exists:** Double-click to open it in a text editor (Notepad, VS Code, etc.)
   - **If it doesn't exist:** 
     - Create a new file
     - Name it exactly: `.env` (including the dot at the start)
     - Open it in a text editor

### Step 3: Add Your Variable
1. In the `.env` file, type or paste this line:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_URL_HERE/exec
   ```
2. Replace `YOUR_URL_HERE` with your actual Google Apps Script URL
   - Example: If your URL is `https://script.google.com/macros/s/AKfycbwXyZ123abc456def789/exec`
   - The line should be: `VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwXyZ123abc456def789/exec`

### Step 4: Save the File
1. Save the `.env` file (Ctrl+S or Cmd+S)
2. **Important:** If your development server is running, stop it (press Ctrl+C in the terminal)
3. Start it again by running: `npm run dev`
4. The form should now work!

---

## Example .env File

Your `.env` file should look exactly like this (with your actual URL):

```
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwXyZ123abc456def789/exec
```

**Important notes:**
- No spaces around the `=` sign
- No quotes around the URL
- Make sure there are no extra spaces or blank lines (unless you're adding comments with `#`)

---

## Where Do I Get the Google Apps Script URL?

If you haven't set up Google Apps Script yet, you need to:
1. Follow the guide in `SETUP_GUIDE_FOR_CLIENT.md` first
2. After deploying the Apps Script, you'll get a Web App URL
3. That's the URL you paste here

---

## Troubleshooting

**"Form submission is not configured" error:**
- The environment variable isn't set correctly
- Double-check the variable name is exactly: `VITE_GOOGLE_APPS_SCRIPT_URL`
- Make sure there are no typos in the URL

**Local development not working:**
- Make sure the `.env` file is in the root folder (same level as `package.json`)
- Restart your dev server after adding/changing the `.env` file
- Check the file name is exactly `.env` (not `.env.txt` or `env`)

**Lovable deployment not working:**
- Make sure you saved the environment variable in Lovable
- Try redeploying/publishing your site
- Check that the variable name starts with `VITE_` (required for Vite projects)

---

## Need Help?

If you're stuck:
1. Check that you copied the URL correctly from Google Apps Script
2. Make sure there are no extra spaces in the variable name or value
3. Try copying the variable name exactly from this guide: `VITE_GOOGLE_APPS_SCRIPT_URL`


