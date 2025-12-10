# cPanel Deployment Guide

## Steps to Deploy to cPanel

### 1. Build the React Application

First, navigate to the `react-final` folder and build the production version:

```bash
cd react-final
npm install
npm run build
```

This will create a `build` folder with all the optimized production files.

### 2. Upload to cPanel

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's `public_html` folder (or the subdirectory where you want to deploy)
4. Upload **ALL contents** from the `build` folder to `public_html`
   - You can either:
     - Upload the files via File Manager (drag and drop)
     - Or use FTP/SFTP to upload the files
5. Make sure the `.htaccess` file is uploaded (it should be in the build folder)

### 3. Verify File Structure

After uploading, your `public_html` folder should contain:
- `index.html`
- `static/` folder (with CSS, JS, and other assets)
- `.htaccess` file
- Other files from the build folder

### 4. Set Permissions (if needed)

If you encounter issues, you may need to set proper file permissions:
- Files: `644`
- Folders: `755`

### 5. Test Your Deployment

Visit your domain in a web browser to verify the application is working correctly.

## Important Notes

- The `.htaccess` file is included in the `public` folder and will be automatically copied to the `build` folder during the build process
- If you're deploying to a subdirectory (e.g., `yoursite.com/subfolder`), you may need to add `"homepage": "/subfolder"` to your `package.json` before building
- Always test the build locally before uploading to ensure everything works correctly

## Troubleshooting

### 404 Errors
- Make sure the `.htaccess` file is uploaded and in the root of your `public_html` folder
- Verify that mod_rewrite is enabled on your server

### Assets Not Loading
- Check that all files from the `build` folder were uploaded
- Verify file permissions are set correctly
- Clear your browser cache

### Blank Page
- Check the browser console for errors
- Verify that `index.html` is in the root of `public_html`
- Make sure JavaScript is enabled in your browser

