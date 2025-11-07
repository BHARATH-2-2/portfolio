# Deployment Guide

This guide will help you deploy your portfolio to Vercel (recommended) or Netlify.

## Prerequisites

- GitHub account
- Vercel or Netlify account (both offer free tiers)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

1. Initialize git (if not already done):
```bash
cd D:\portfolio
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `portfolio` (or your preferred name)
   - Don't initialize with README

3. Push your code:
```bash
git remote add origin https://github.com/BHARATH-2-2/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub

2. Click "Add New Project"

3. Import your repository:
   - Select the `portfolio` repository
   - Vercel will auto-detect Astro settings

4. Configure project:
   - **Framework Preset:** Astro (auto-detected)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
   - **Install Command:** `npm install` (default)

5. Click "Deploy"

6. Wait for deployment (usually 1-2 minutes)

7. Your site will be live at: `https://your-project-name.vercel.app`

### Step 3: Update Site URL

After deployment, update `astro.config.mjs`:
```js
site: 'https://your-actual-vercel-url.vercel.app',
```

Then commit and push:
```bash
git add astro.config.mjs
git commit -m "Update site URL"
git push
```

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to https://app.netlify.com and sign in with GitHub

2. Click "Add new site" → "Import an existing project"

3. Select your GitHub repository

4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click "Deploy site"

6. Your site will be live at: `https://your-project-name.netlify.app`

## Custom Domain (Optional)

Both Vercel and Netlify support custom domains:

1. **Vercel:** Go to Project Settings → Domains → Add Domain
2. **Netlify:** Go to Site Settings → Domain Management → Add custom domain

Follow the DNS configuration instructions provided.

## Continuous Deployment

Both platforms automatically deploy when you push to GitHub:
- Push to `main` branch → Production deployment
- Create a pull request → Preview deployment

## Environment Variables

If you need environment variables:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables

## Build Optimization

Your site is already optimized with:
- HTML compression
- Auto-inlined stylesheets
- Sitemap generation
- RSS feed

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version (Astro requires Node 18+)

### 404 Errors
- Ensure all routes are using proper Astro file-based routing
- Check that content collections are properly configured

### Images Not Loading
- Verify image paths are correct
- Check that images are in the `public/` folder

## Need Help?

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
