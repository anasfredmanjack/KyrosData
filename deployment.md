# Complete Vercel Deployment Guide for KyrosDoxa

This comprehensive guide will walk you through deploying your MERN stack application to Vercel with full email functionality.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- ✅ A [Vercel](https://vercel.com/) account (free tier works)
- ✅ [Git](https://git-scm.com/) installed on your computer
- ✅ A GitHub account
- ✅ MongoDB Atlas connection string
- ✅ Gmail account with App Password enabled

---

## 🔐 Step 1: Set Up Gmail App Password (If Not Done)

Your email functionality requires a Gmail App Password. If you haven't set this up:

1. Go to your Google Account settings
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Save the 16-character password (format: `xxxx xxxx xxxx xxxx`)

---

## 🗄️ Step 2: Configure MongoDB Atlas

1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Go to your cluster → **Network Access**
3. Click **Add IP Address**
4. Select **Allow Access from Anywhere** (`0.0.0.0/0`)
   - This is required for Vercel's serverless functions
5. Click **Confirm**

---

## 📦 Step 3: Push Your Code to GitHub

### If you haven't initialized Git yet:

```bash
cd /Users/license/Documents/kyrosdata
git init
git add .
git commit -m "Initial commit - KyrosDoxa platform"
```

### Create a new repository on GitHub:

1. Go to [GitHub](https://github.com) and click **New Repository**
2. Name it `kyrosdata` (or your preferred name)
3. **Do NOT** initialize with README, .gitignore, or license
4. Click **Create repository**

### Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/kyrosdata.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Your Project**
   - Click **Add New...** → **Project**
   - Select **Import Git Repository**
   - Find and select your `kyrosdata` repository
   - Click **Import**

3. **Configure Project Settings**
   - **Project Name**: `kyrosdata` (or your preferred name)
   - **Framework Preset**: Leave as "Other" or "Vite"
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty (handled by `vercel.json`)
   - **Output Directory**: Leave empty (handled by `vercel.json`)

4. **Add Environment Variables**
   
   Click **Environment Variables** and add the following:

   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | Your MongoDB Atlas connection string |
   | `EMAIL_USER` | Your Gmail address (e.g., `sarahjacobs1677@gmail.com`) |
   | `EMAIL_PASS` | Your Gmail App Password (e.g., `kbra yehf dxip zyty`) |
   | `EMAIL_FROM` | `KyrosDoxa <noreply@kyrosdoxa.com>` |

   > **Important**: Make sure there are no extra spaces in the values!

5. **Deploy**
   - Click **Deploy**
   - Wait 2-3 minutes for the build to complete
   - You'll see a success screen with your live URL

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd /Users/license/Documents/kyrosdata

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (Select your account)
# - Link to existing project? N
# - Project name? kyrosdata
# - In which directory is your code located? ./ (press Enter)
# - Want to modify settings? N

# Add environment variables
vercel env add MONGODB_URI
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add EMAIL_FROM

# Deploy to production
vercel --prod
```

---

## ✅ Step 5: Verify Your Deployment

### 5.1 Check Homepage

1. Visit your Vercel URL (e.g., `https://kyrosdata.vercel.app`)
2. Verify the homepage loads correctly
3. Check that all images and styles are working

### 5.2 Test SPA Routing

Test that page reloads work correctly:

1. Navigate to `/services` → Reload the page (should NOT show 404)
2. Navigate to `/packages` → Reload the page (should NOT show 404)
3. Navigate to `/contact` → Reload the page (should NOT show 404)
4. Navigate to `/dashboard` → Reload the page (should NOT show 404)

✅ **If all pages reload without 404 errors, your routing is working!**

### 5.3 Test Backend API

1. Visit `https://your-domain.vercel.app/api`
2. You should see: **"KyrosDoxa API Running"**

✅ **If you see this message, your backend is deployed correctly!**

### 5.4 Test Email Functionality

This is the most important test:

1. Go to the **Contact** page on your live site
2. Fill out the form:
   - Name: Test User
   - Email: Your personal email
   - Phone: Any number
   - Service/Package: Select any option
   - Message: "Testing email functionality"
3. Click **Submit**

**Expected Results:**

✅ **User Email**: You should receive a confirmation email at the email address you entered
- Subject: "We received your request - KyrosData"
- From: "KyrosDoxa"
- Content: Confirmation message with your inquiry details

✅ **Admin Email**: The admin email (`sarahjacobs1677@gmail.com`) should receive a notification
- Subject: "New Inquiry: Test User - KyrosData"
- Content: Full inquiry details including name, email, phone, service, and message

### 5.5 Verify Database Storage

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com)
2. Go to **Collections** in your cluster
3. Find the `inquiries` collection
4. Verify your test inquiry was saved with all fields

---

## 🐛 Troubleshooting

### Emails Not Sending

**Check Vercel Function Logs:**

1. Go to Vercel Dashboard
2. Click on your project → **Deployments**
3. Click on the latest deployment
4. Go to **Functions** tab
5. Look for `/api/contact` function
6. Click to view logs

**Common Issues:**

- **"Invalid login"**: Gmail App Password is incorrect or expired
  - Solution: Generate a new App Password in Google Account settings
  
- **"MONGODB_URI is not defined"**: Environment variable not set
  - Solution: Add the variable in Vercel Dashboard → Settings → Environment Variables
  
- **"Connection timeout"**: MongoDB Atlas network access issue
  - Solution: Ensure `0.0.0.0/0` is whitelisted in MongoDB Atlas Network Access

### Build Failures

**Check Build Logs:**

1. Go to Vercel Dashboard → Deployments
2. Click on the failed deployment
3. View the build logs

**Common Issues:**

- **"Module not found"**: Missing dependencies
  - Solution: Run `npm install` locally and commit `package-lock.json`
  
- **"Build failed"**: Frontend build error
  - Solution: Run `cd client && npm run build` locally to identify the issue

### 404 Errors on Page Reload

If you still get 404 errors when reloading pages:

1. Check that `vercel.json` has the correct routing configuration
2. Redeploy the project
3. Clear your browser cache

---

## 🔄 Updating Your Deployment

Whenever you make changes to your code:

```bash
# Commit your changes
git add .
git commit -m "Description of changes"
git push

# Vercel will automatically redeploy!
```

---

## 🎯 Post-Deployment Best Practices

### Security

1. **Remove credentials from documentation**
   - Delete sensitive info from `deployment.md`
   - Keep credentials only in Vercel environment variables

2. **Enable Vercel Authentication** (optional)
   - For admin pages, consider adding password protection

### Monitoring

1. **Set up Vercel Analytics**
   - Go to your project → Analytics
   - Enable to track page views and performance

2. **Monitor Function Logs**
   - Regularly check `/api/contact` logs for errors
   - Set up email alerts for function failures

### Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate to be issued (automatic)

---

## 📞 Support

If you encounter issues:

1. Check Vercel's [documentation](https://vercel.com/docs)
2. Review function logs in Vercel Dashboard
3. Verify all environment variables are set correctly
4. Ensure MongoDB Atlas allows connections from anywhere

---

## ✨ Success Checklist

Before considering deployment complete, verify:

- [ ] Homepage loads at production URL
- [ ] All pages are accessible and reload without 404 errors
- [ ] Backend API responds at `/api`
- [ ] Contact form submissions work
- [ ] User receives confirmation email
- [ ] Admin receives notification email
- [ ] Inquiries are saved to MongoDB
- [ ] All images and assets load correctly
- [ ] Mobile responsive design works

**Congratulations! Your KyrosDoxa platform is now live! 🎉**
