# GitHub Pages Deployment Guide 🚀

This guide will walk you through deploying your portfolio to GitHub Pages step by step.

## 🔍 Quick Troubleshooting

**Is your website not working?** Check these first:
1. ✅ Verify GitHub Pages is enabled (Settings → Pages)
2. ✅ Confirm correct branch is selected (`copilot/create-responsive-portfolio`)
3. ✅ Wait 2-5 minutes after any changes for GitHub to rebuild
4. ✅ Check Actions tab for deployment status
5. ✅ Ensure `.nojekyll` file exists in root directory
6. ✅ Clear browser cache and try incognito mode

## Prerequisites
- A GitHub account
- Your portfolio code in a GitHub repository

## Step-by-Step Deployment Process

### Step 1: Prepare Your Repository
1. Make sure all your files are committed and pushed to GitHub
2. Your main files should be in the root directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `content.js`
   - `cv.pdf` (if you have your CV)

### Step 2: Access Repository Settings
1. Go to your GitHub repository: `https://github.com/pedrozi18/Portefolio`
2. Click on **"Settings"** tab (near the top of the page)
3. In the left sidebar, scroll down and click on **"Pages"**

### Step 3: Configure GitHub Pages
1. Under **"Build and deployment"** section:
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select your branch (usually `main` or `copilot/create-responsive-portfolio`)
   - **Folder**: Select **"/ (root)"**
2. Click **"Save"**

### Step 4: Wait for Deployment
1. GitHub will start building your site (this usually takes 1-2 minutes)
2. Refresh the page after a minute
3. You'll see a message: **"Your site is live at https://pedrozi18.github.io/Portefolio/"**

### Step 5: Visit Your Live Site
Your portfolio will be accessible at:
```
https://pedrozi18.github.io/Portefolio/
```

## Common Issues and Solutions

### Issue 1: 404 Page Not Found
**Solution**: 
- Make sure your `index.html` is in the root directory (not in a subfolder)
- Verify you selected the correct branch in GitHub Pages settings
- Wait 2-3 minutes after configuration for GitHub to build the site
- Check that your branch name is correct (e.g., `copilot/create-responsive-portfolio`)

### Issue 2: CSS/JS Not Loading
**Solution**: 
- Check that your file paths in `index.html` are correct and relative (not absolute):
```html
<link rel="stylesheet" href="styles.css">
<script src="content.js"></script>
<script src="script.js"></script>
```
- Ensure `.nojekyll` file exists in root (this prevents Jekyll from processing files)
- Check browser console (F12) for specific error messages

### Issue 3: CV Download Not Working
**Solution**: Make sure `cv.pdf` is in the root directory and committed to your repository

### Issue 4: Changes Not Showing
**Solution**: 
1. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Wait 2-5 minutes for GitHub Pages to rebuild
3. Check the "Actions" tab to see if the deployment completed successfully
4. Try accessing in incognito/private browsing mode

### Issue 5: Website Not Deploying at All
**Solution**:
1. Go to your repository "Actions" tab
2. Look for "pages build and deployment" workflow
3. Check if there are any errors
4. Make sure GitHub Pages is enabled in Settings → Pages
5. Verify your repository is public (or you have GitHub Pro for private repos)
6. Ensure `.nojekyll` file exists in the root directory

### Issue 6: Blank Page or JavaScript Errors
**Solution**:
1. Check browser console for errors (Press F12 → Console tab)
2. Verify all three files load correctly: `content.js`, `script.js`, and `styles.css`
3. Make sure `content.js` loads BEFORE `script.js` in your HTML
4. Test locally by opening `index.html` in your browser

## Updating Your Portfolio

After your initial deployment, whenever you want to update your portfolio:

1. Make changes to your files (especially `content.js` for easy content updates)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. GitHub Pages will automatically rebuild (takes 1-2 minutes)
4. Your changes will be live!

## Custom Domain (Optional)

If you want to use a custom domain (e.g., www.yourdomain.com):

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings at your domain registrar:
   - Add a CNAME record pointing to `pedrozi18.github.io`
   - Or add A records pointing to GitHub's IP addresses
4. Wait for DNS propagation (can take up to 48 hours)

## Verification Checklist

✅ Repository is public (or you have GitHub Pro for private repos)
✅ `index.html` is in the root directory
✅ All files are committed and pushed
✅ GitHub Pages is enabled in settings
✅ Correct branch is selected
✅ Site is accessible at your GitHub Pages URL

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Check GitHub Status: https://www.githubstatus.com/
- Repository Issues: Create an issue in your repository

---

**Congratulations! 🎉**

Your portfolio is now live and accessible to the world. Share your URL with potential employers, clients, and on your resume!
