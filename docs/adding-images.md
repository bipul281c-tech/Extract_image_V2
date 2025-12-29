# Adding Infographic Images - Complete Guide

This guide explains how to add new infographic images to ExtractPics with automatic search engine indexing.

## Overview

When you add a new infographic image, the system automatically:
1. Updates the sitemap with the new image
2. Notifies Google, Bing, and other search engines via IndexNow
3. Triggers crawling within minutes instead of days
4. Indexes the image in Google Images search

## Prerequisites

Before adding images, ensure you have:
- Cloudflare R2 bucket configured for image storage
- Images optimized (recommended: 1200x750, under 300KB)
- IndexNow API key (optional but recommended for auto-crawl)

## Step-by-Step: Adding a New Infographic

### Step 1: Prepare Your Image

**Recommended Specifications:**
- **Dimensions**: 1200x750 pixels (4:3 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: 150-300KB (optimized for web)
- **Quality**: High-resolution but web-optimized

**Image Optimization Tools:**
- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- Photoshop: Save for Web (Legacy) at 70-80% quality

### Step 2: Upload to Cloudflare R2

**Option A: R2 Dashboard**
1. Go to Cloudflare Dashboard → R2
2. Select your bucket (e.g., `extractpics-images`)
3. Click "Upload" and select your image
4. Note the public URL (e.g., `https://pub-abc123.r2.dev/infographics/my-image.jpg`)

**Option B: Wrangler CLI**
```bash
npx wrangler r2 object put extractpics-images/infographics/my-image.jpg --file ./my-image.jpg
```

**Naming Convention:**
Use descriptive, SEO-friendly filenames:
- ✅ `bulk-image-extractor-guide.jpg`
- ✅ `how-to-download-images.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `screenshot-2024.jpg`

### Step 3: Add Image Metadata

Edit `/data/seo-images.json` and add a new entry:

```json
{
  "images": [
    // ... existing images ...
    {
      "id": "4",
      "imageUrl": "https://pub-abc123.r2.dev/infographics/your-image.jpg",
      "title": "Your Infographic Title - Complete Guide",
      "description": "Detailed description of what this infographic covers. Include keywords naturally and explain the value to users. Aim for 150-200 characters.",
      "mainKeyword": "your primary keyword",
      "altText": "Descriptive alt text for accessibility and SEO. Describe what's shown in the image.",
      "category": "tutorial",
      "datePublished": "2024-12-25",
      "dateModified": "2024-12-25"
    }
  ]
}
```

**Field Guidelines:**

| Field | Description | Best Practices |
|-------|-------------|----------------|
| `id` | Unique identifier | Sequential number as string ("4", "5", etc.) |
| `imageUrl` | Full R2 URL | Must be HTTPS and publicly accessible |
| `title` | SEO-optimized title | 50-70 characters, include target keyword |
| `description` | Detailed explanation | 150-250 characters, natural keyword usage |
| `mainKeyword` | Primary search term | 2-5 words, what users search for |
| `altText` | Accessibility text | Describe the image content, 100-125 characters |
| `category` | Content type | `tutorial`, `guide`, `news`, or `advanced` |
| `datePublished` | First publication | ISO format: YYYY-MM-DD |
| `dateModified` | Last update | ISO format: YYYY-MM-DD |

**Category Definitions:**
- **tutorial**: Step-by-step instructional content
- **guide**: Comprehensive overview or best practices
- **news**: Timely or trending topics
- **advanced**: Technical or expert-level content

### Step 4: Trigger Automatic Crawl

After committing your changes, notify search engines:

**Option A: Automatic (GitHub Actions)**

If you have GitHub Actions configured, the crawl notification happens automatically on push to main branch.

**Option B: Manual API Call**

```bash
# Local development
curl -X POST http://localhost:3000/api/notify-crawl

# Production
curl -X POST https://extractpics.com/api/notify-crawl
```

**Option C: With Authentication (if NOTIFY_CRAWL_SECRET is set)**

```bash
curl -X POST https://extractpics.com/api/notify-crawl \
  -H "Authorization: Bearer YOUR_SECRET_TOKEN"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Sitemap update notification completed",
  "timestamp": "2024-12-25T10:30:00.000Z",
  "operations": {
    "sitemapRevalidation": "success",
    "indexNow": {
      "status": "success",
      "error": null
    }
  },
  "sitemapUrl": "https://extractpics.com/sitemap.xml"
}
```

### Step 5: Verify Implementation

**Immediate Checks (Within 5 minutes):**

1. **View Updated Sitemap**
   - Visit: https://extractpics.com/sitemap.xml
   - Verify your new image URL appears in `<image:image>` tags

2. **Check Infographics Page**
   - Visit: https://extractpics.com/infographics
   - Confirm new infographic displays correctly
   - Check that image loads (not 404 error)

3. **Validate XML**
   - Use: https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - Paste: https://extractpics.com/sitemap.xml
   - Ensure no validation errors

**Google Search Console (Within 24-48 hours):**

1. Go to: https://search.google.com/search-console
2. Select property: `extractpics.com`
3. Navigate to: Sitemaps
4. Check last crawl date updated
5. Verify no crawl errors

**Google Images Indexing (Within 1-2 weeks):**

Search Google Images:
```
site:extractpics.com/infographics
```

Your new infographic should appear in results.

## Environment Setup (One-Time)

### IndexNow API Configuration

**Step 1: Get API Key**

1. Visit: https://www.indexnow.org/getstarted
2. Generate a random API key (or use UUIDv4)
3. Example: `1234567890abcdef1234567890abcdef`

**Step 2: Add to Environment Variables**

Create/edit `.env.local`:
```bash
INDEXNOW_API_KEY=your_indexnow_api_key_here
NOTIFY_CRAWL_SECRET=optional_secret_for_api_auth
```

**Step 3: Create Key File**

Create `/public/[your-key].txt` with the key as content:

```bash
echo "1234567890abcdef1234567890abcdef" > public/1234567890abcdef1234567890abcdef.txt
```

**Step 4: Verify Configuration**

```bash
curl https://extractpics.com/api/notify-crawl
```

Check that `INDEXNOW_API_KEY` shows as "configured".

### GitHub Actions Automation (Optional)

Create `.github/workflows/notify-crawl.yml`:

```yaml
name: Notify Search Engines

on:
  push:
    branches:
      - main
    paths:
      - 'data/seo-images.json'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Notify crawl API
        run: |
          curl -X POST https://extractpics.com/api/notify-crawl \
            -H "Authorization: Bearer ${{ secrets.NOTIFY_CRAWL_SECRET }}"
```

**Setup:**
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add secret: `NOTIFY_CRAWL_SECRET` with your token value
3. Commit the workflow file
4. Future changes to `seo-images.json` will trigger automatically

## Troubleshooting

### Image Not Appearing in Sitemap

**Symptoms:** New image URL not in sitemap.xml

**Solutions:**
1. Clear Next.js cache: `rm -rf .next && npm run build`
2. Verify JSON syntax in `seo-images.json` (use JSONLint)
3. Check that `imageUrl` field is correct
4. Redeploy application

### Image Not Loading on Page

**Symptoms:** Broken image icon or 404 error

**Solutions:**
1. Verify R2 bucket has public read access
2. Check image URL is accessible: `curl -I [your-image-url]`
3. Confirm R2 domain in `next.config.ts` remotePatterns
4. Check browser console for CORS errors

### IndexNow Notification Failing

**Symptoms:** `indexNow.status: "failed"` in API response

**Solutions:**
1. Verify `INDEXNOW_API_KEY` is set correctly
2. Check key file exists at `/public/[key].txt`
3. Ensure key file contains only the key (no extra whitespace)
4. Try regenerating API key from indexnow.org

### Google Not Indexing Image

**Symptoms:** Image not showing in Google Images after 2+ weeks

**Solutions:**
1. Verify image is publicly accessible (not behind auth)
2. Check robots.txt allows Googlebot-Image
3. Ensure image quality is high (not blurry/pixelated)
4. Add more descriptive alt text and title
5. Manually submit URL in Google Search Console: Indexing → Request Indexing

## Best Practices

### SEO Optimization

**Title Formatting:**
- ✅ "How to Extract Images - Complete 2024 Guide"
- ✅ "Bulk Image Downloader - Save Time Extracting"
- ❌ "image1" or "download"
- ❌ "Click here to learn more"

**Keyword Usage:**
- Use primary keyword in: title, description, mainKeyword, altText
- Don't stuff keywords unnaturally
- Focus on user intent and value

**Image Quality:**
- High-resolution but optimized file size
- Clear, readable text in infographic
- Professional design and branding
- Consistent color scheme across infographics

### Content Strategy

**Frequency:**
- Add 2-4 infographics per month for steady growth
- Batch create but release gradually
- Monitor performance before scaling

**Topic Selection:**
- Research keyword volume and competition
- Address common user questions
- Create content series (beginner → advanced)
- Update existing infographics annually

**Performance Tracking:**
- Use Google Search Console → Performance → Image Search
- Track impressions, clicks, CTR per infographic
- Identify high-performers and create similar content
- Update underperforming images with better designs

## Quick Reference

### Adding Image Checklist

- [ ] Create/optimize image (1200x750, <300KB)
- [ ] Upload to R2 bucket with SEO-friendly filename
- [ ] Add entry to `/data/seo-images.json`
- [ ] Commit and push changes
- [ ] Trigger crawl notification (manual or automatic)
- [ ] Verify image appears in sitemap.xml
- [ ] Check image displays on /infographics page
- [ ] Submit to Google Search Console (first time only)
- [ ] Monitor indexing progress over 1-2 weeks

### Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Manually trigger crawl notification
curl -X POST http://localhost:3000/api/notify-crawl

# Validate JSON syntax
cat data/seo-images.json | jq

# Check if image URL is accessible
curl -I https://your-r2-url/image.jpg

# View sitemap locally
open http://localhost:3000/sitemap.xml
```

## Support

If you encounter issues:
1. Check this documentation thoroughly
2. Review error messages in browser console
3. Verify all environment variables are set
4. Test in local development first
5. Check Google Search Console for crawl errors

## Resources

- [Google Image Sitemaps Documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
- [IndexNow Protocol](https://www.indexnow.org/)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Google Search Console](https://search.google.com/search-console)
