# Deployment Guide: Hosting on GoDaddy cPanel

## Files Ready for Upload

Your production build is ready in the `dist/` folder. The following files need to be uploaded to your GoDaddy hosting:

### Required Files:

- `dist/index.html` (486B)
- `dist/assets/index-BO5-QYOl.css` (15KB)
- `dist/assets/index-WB2M04DP.js` (218KB)
- `dist/.htaccess` (newly created)

## Step-by-Step Deployment Instructions

### 1. Access GoDaddy cPanel

1. Log into your GoDaddy account
2. Go to your hosting control panel (cPanel)
3. Navigate to the **File Manager**

### 2. Navigate to Your Domain Directory

1. In File Manager, go to `public_html/` (or your domain's root directory)
2. If you want to host on a subdomain, create a new folder (e.g., `ai-interface/`)

### 3. Upload Files

1. **Upload the entire `dist` folder contents:**
   - Select all files from your local `dist/` folder
   - Upload them to your web directory
   - Make sure to maintain the folder structure (assets folder)

### 4. Alternative Upload Methods

#### Option A: File Manager Upload

- Use cPanel's File Manager to upload files directly
- Drag and drop or use the upload button

#### Option B: FTP/SFTP (Recommended for large files)

- Use an FTP client like FileZilla, Cyberduck, or WinSCP
- Connect using your GoDaddy FTP credentials
- Upload the `dist/` folder contents to `public_html/`

#### Option C: ZIP Upload

1. Create a ZIP file of your `dist/` folder contents
2. Upload the ZIP to cPanel
3. Extract it in the File Manager

### 5. Verify File Structure

Your web directory should look like this:

```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-BO5-QYOl.css
    └── index-WB2M04DP.js
```

### 6. Test Your Application

1. Visit your domain (e.g., `https://yourdomain.com`)
2. Test all routes and functionality
3. Check browser console for any errors

## Important Notes

### React Router Configuration

- The `.htaccess` file handles client-side routing
- All routes will redirect to `index.html` for proper SPA behavior

### Performance Optimization

- Files are already minified and optimized
- CSS and JS files have cache headers set
- Gzip compression is enabled

### Troubleshooting

#### If pages show 404 errors:

- Ensure `.htaccess` file is uploaded
- Check that mod_rewrite is enabled on your hosting
- Verify file permissions (644 for files, 755 for folders)

#### If assets don't load:

- Check that the `assets/` folder structure is correct
- Verify file paths in `index.html`

#### If the app doesn't work:

- Check browser console for JavaScript errors
- Ensure all files were uploaded completely
- Verify your domain has SSL certificate (recommended)

## Updating Your Application

To update your application:

1. Run `npm run build` locally
2. Upload the new `dist/` folder contents
3. Replace existing files on your server

## Security Considerations

- Keep your source code private
- Only upload the `dist/` folder contents
- Consider setting up environment variables for any API keys

## Support

If you encounter issues:

1. Check GoDaddy's hosting documentation
2. Verify your hosting plan supports the required features
3. Contact GoDaddy support if needed 