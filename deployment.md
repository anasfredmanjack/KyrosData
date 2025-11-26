# Deploying KyrosData to Vercel

This guide provides step-by-step instructions to deploy your MERN stack application to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com/) account.
- [Vercel CLI](https://vercel.com/docs/cli) installed (optional, but recommended) or GitHub repository connected to Vercel.
- Your MongoDB Atlas connection string.
- Your Email credentials (as provided).

## Step 1: Prepare Your Project

Ensure your project structure is correct (which it is):
- `client/`: React frontend
- `server/`: Node.js backend
- `vercel.json`: Configuration for Vercel

## Step 2: Environment Variables

You need to set up the following environment variables in your Vercel project settings.

1.  Go to your Vercel Project Dashboard.
2.  Navigate to **Settings** > **Environment Variables**.
3.  Add the following variables:

| Key | Value |
| :--- | :--- |
| `MONGODB_URI` | `mongodb+srv://fredt2069_db_user:vxsoLq9G4xnuwyr4@cluster0.d0nu2a3.mongodb.net/?appName=Cluster0` |
| `EMAIL_USER` | `sarahjacobs1677@gmail.com` |
| `EMAIL_PASS` | `kbra yehf dxip zyty` |
| `EMAIL_FROM` | `KyrosData <kyrosdata>` |

> [!IMPORTANT]
> Ensure there are no extra spaces in the values.

## Step 3: Deploy

### Option A: Using Vercel CLI (Recommended for first time)

1.  Open your terminal in the root directory of your project (`/Users/license/Documents/kyrosdata`).
2.  Run the following command:
    ```bash
    vercel
    ```
3.  Follow the prompts:
    - Set up and deploy? **Y**
    - Which scope? (Select your account)
    - Link to existing project? **N**
    - Project name? **kyrosdata** (or your preferred name)
    - In which directory is your code located? **./** (Just press Enter)
    - Want to modify these settings? **N** (The `vercel.json` handles this)

4.  Wait for the deployment to complete. You will get a Production URL.

### Option B: Using GitHub Integration

1.  Push your code to a GitHub repository.
2.  Log in to Vercel and click **Add New** > **Project**.
3.  Import your GitHub repository.
4.  In the "Configure Project" screen:
    - **Framework Preset**: Other (or leave as default, Vercel usually detects it)
    - **Root Directory**: `./`
    - **Environment Variables**: Add the variables from Step 2.
5.  Click **Deploy**.

## Step 4: Verify Deployment

1.  Visit the deployed URL.
2.  Go to the **Contact** page.
3.  Fill out the form and submit.
4.  **Check:**
    - You (the user) should receive a confirmation email from "KyrosData".
    - The Admin (`sarahjacobs1677@gmail.com`) should receive a notification email with the details.
    - The inquiry should be stored in your MongoDB database.

## Troubleshooting

- **Email not sent?** Check the Vercel Function logs.
    - Go to Vercel Dashboard > Deployments > [Your Deployment] > Functions.
    - Look for logs related to `/api/contact`.
- **Database connection error?** Ensure your IP address is whitelisted in MongoDB Atlas (allow access from anywhere `0.0.0.0/0` for Vercel).
