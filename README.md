# KyrosDoxa Portfolio Website

A modern, high-performance portfolio website for KyrosDoxa Consulting Limited, built with **Vite React**, **Tailwind CSS**, **Node.js**, and **MongoDB**.

## 🚀 Features

- **Modern UI/UX**: Premium design using "Royal Blue" and "Gold" brand colors.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Animations**: Smooth transitions powered by Framer Motion.
- **Contact Form**: Functional inquiry form connected to a backend API.
- **Service & Package Listings**: Detailed views of services and pricing tiers.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (for the database)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd kyrosdata
```

### 2. Install Dependencies
You need to install dependencies for both the root (backend) and the client (frontend).

**Root (Backend):**
```bash
npm install
```

**Client (Frontend):**
```bash
cd client
npm install
cd ..
```

### 3. Environment Variables
Create a `.env` file in the **root** directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
*Replace `your_mongodb_connection_string` with your actual MongoDB Atlas URI.*

For the frontend to know where the API is, create a `.env` file in the **client** directory (optional for local dev as it defaults to localhost, but good practice):

```env
VITE_API_URL=http://localhost:5000/api
```

## 🏃‍♂️ Running Locally

### Start the Backend
From the root directory:
```bash
node server/index.js
```
*Server will run on http://localhost:5000*

### Start the Frontend
Open a new terminal, navigate to the client folder, and start the dev server:
```bash
cd client
npm run dev
```
*Client will run on http://localhost:5173 (or similar)*

## ☁️ Deployment to Vercel

This project is configured as a **monorepo** for easy deployment on Vercel.

1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.
2.  **Import to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
3.  **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect `Vite`. If not, select it.
    - **Root Directory**: Leave as `./` (root).
    - **Build Command**: `cd client && npm install && npm run build` (or Vercel might auto-detect `npm run build` inside client if you set Root Directory to `client`, but for this monorepo setup, keep Root Directory as `./` and Vercel will handle the `vercel.json` configuration).
    - **Output Directory**: `client/dist`
4.  **Environment Variables**:
    - Add `MONGODB_URI` with your production MongoDB connection string.
    - Add `VITE_API_URL` with your production URL (e.g., `https://your-project.vercel.app/api`).
5.  **Deploy**: Click **Deploy**.

### `vercel.json` Configuration
The included `vercel.json` handles routing requests to the correct destination (API vs Frontend):

```json
{
  "version": 2,
  "builds": [
    { "src": "server/index.js", "use": "@vercel/node" },
    { "src": "client/package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server/index.js" },
    { "src": "/(.*)", "dest": "/client/$1" }
  ]
}
```

## 📂 Project Structure

```
kyrosdata/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Static data (services, packages)
│   │   └── index.css       # Tailwind directives
│   ├── tailwind.config.js  # Tailwind configuration
│   └── package.json
├── server/                 # Node.js Backend
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── index.js            # Server entry point
├── vercel.json             # Vercel deployment config
├── package.json            # Root dependencies
└── README.md               # Project documentation
```
