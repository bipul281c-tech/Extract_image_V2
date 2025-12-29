# Microsoft Bing Webmaster Tools Setup Guide

Complete guide to setting up Bing Webmaster Tools with IndexNow for instant image indexing.

## What is IndexNow?

IndexNow is a protocol that allows you to instantly notify search engines when your content changes. Instead of waiting days or weeks for crawlers to discover new content, search engines are notified in real-time.

**Supported Search Engines:**
- ✅ Microsoft Bing
- ✅ Yandex
- ✅ Seznam.cz (Czech Republic)
- ✅ Naver (South Korea)
- ⚠️ Google (not officially supported but may benefit from faster crawling)

## Benefits

- **Instant Indexing**: URLs submitted within minutes instead of days
- **No Crawl Quota Impact**: IndexNow doesn't count against your crawl budget
- **Multi-Engine Support**: One submission reaches multiple search engines
- **Free**: No cost to use IndexNow
- **Easy Integration**: Already implemented in your ExtractPics site!

---

## Setup Steps

### Step 1: Verify IndexNow Configuration

Your IndexNow configuration is already complete! Verify it's working:

**Check Your Configuration:**
```bash
# View your API key
cat .env.local | grep INDEXNOW_API_KEY

# Test key file is accessible
curl http://localhost:3000/a96c4f160eaf78715f1387717333cddb.txt

# Test API endpoint
curl -X POST http://localhost:3000/api/notify-crawl
```

**Expected Output:**
- Key file returns: `a96c4f160eaf78715f1387717333cddb`
- API returns: `{"success": true, "indexNow": {"status": "success"}}`

✅ If both work, your IndexNow is configured correctly!

### Step 2: Register with Bing Webmaster Tools

**a) Create Account**
1. Go to: https://www.bing.com/webmasters
2. Click "Sign in" or "Get Started"
3. Use Microsoft account or create new one

**b) Add Your Website**
1. Click "Add a site"
2. Enter: `https://extractpics.com`
3. Click "Add"

**c) Verify Ownership**

Choose one of these methods:

**Option 1: XML File Verification (Recommended)**
1. Download the BingSiteAuth.xml file
2. Place it in `/public/BingSiteAuth.xml`
3. Deploy to production
4. Click "Verify" in Bing Webmaster Tools

**Option 2: Meta Tag Verification**
1. Copy the meta tag provided
2. Add to your `/app/layout.tsx` in metadata:
   ```typescript
   export const metadata = {
     // ... existing metadata
     other: {
       'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE'
     }
   }
   ```
3. Deploy to production
4. Click "Verify"

**Option 3: CNAME Verification**
1. Add CNAME record to your DNS
2. Point to verification domain provided by Bing
3. Wait for DNS propagation (up to 48 hours)
4. Click "Verify"

### Step 3: Submit Your Sitemap

Once verified:

1. Navigate to: **Sitemaps** in left sidebar
2. Click "Submit a sitemap"
3. Enter: `https://extractpics.com/sitemap.xml`
4. Click "Submit"

**Bing will now:**
- Crawl your sitemap
- Discover all 3 infographic images
- Index the images in Bing Images search
- Check for updates regularly

### Step 4: Configure IndexNow in Bing

1. Go to: **Settings** → **IndexNow**
2. You should see: "IndexNow is active"
3. View submitted URLs under: **URL Submission** → **API Submit**

**Note:** Your site automatically uses IndexNow when you call the `/api/notify-crawl` endpoint. No additional Bing configuration needed!

### Step 5: Test IndexNow Submission

**After deploying to production:**

```bash
# Trigger IndexNow notification
curl -X POST https://extractpics.com/api/notify-crawl

# Expected response
{
  "success": true,
  "message": "Sitemap update notification completed",
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

### Step 6: Verify in Bing Webmaster Tools

**Check Submission Status:**

1. Go to: **URL Inspection**
2. Enter: `https://extractpics.com/infographics`
3. Check "Index Status"

**Monitor API Submissions:**

1. Go to: **URL Submission** → **API Submit**
2. View recent IndexNow submissions
3. Check submission date/time matches your API call

**Expected Timeline:**
- **Immediate**: Submission appears in Bing Webmaster Tools
- **Minutes - Hours**: Bing crawls the sitemap
- **1-7 Days**: Images appear in Bing Images search
- **1-4 Weeks**: Full indexing and ranking

---

## Using IndexNow

### When to Trigger IndexNow

Trigger IndexNow notification whenever you:
- ✅ Add new infographic images
- ✅ Update existing image metadata
- ✅ Change image URLs
- ✅ Update sitemap with new content

### How to Trigger

**Method 1: Manual API Call**
```bash
curl -X POST https://extractpics.com/api/notify-crawl
```

**Method 2: Automated (GitHub Actions)**

Create `.github/workflows/notify-search-engines.yml`:

```yaml
name: Notify Search Engines

on:
  push:
    branches:
      - main
    paths:
      - 'data/seo-images.json'
      - 'app/sitemap.ts'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger IndexNow
        run: |
          response=$(curl -s -X POST https://extractpics.com/api/notify-crawl)
          echo "Response: $response"

          # Check if successful
          if echo "$response" | grep -q '"success":true'; then
            echo "✓ Search engines notified successfully"
          else
            echo "✗ Notification failed"
            exit 1
          fi
```

**Method 3: From Your Application**

If you have an admin panel or CMS, call the API after content updates:

```typescript
async function notifySearchEngines() {
  const response = await fetch('https://extractpics.com/api/notify-crawl', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTIFY_CRAWL_SECRET}` // Optional
    }
  });

  const data = await response.json();
  console.log('IndexNow status:', data.operations.indexNow.status);
}
```

### Workflow: Adding New Images

**Complete Workflow with IndexNow:**

1. **Upload image to R2**
   ```bash
   # Your R2 bucket: imgtourl
   # Public URL: https://pub-141831e61e69445289222976a15b6fb3.r2.dev
   ```

2. **Add entry to `/data/seo-images.json`**
   ```json
   {
     "id": "4",
     "imageUrl": "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/infographics/new-image.jpg",
     "title": "Your New Infographic Title",
     "description": "Detailed description with keywords...",
     "mainKeyword": "primary keyword",
     "altText": "Descriptive alt text",
     "category": "tutorial",
     "datePublished": "2024-12-25",
     "dateModified": "2024-12-25"
   }
   ```

3. **Commit and deploy**
   ```bash
   git add data/seo-images.json
   git commit -m "Add new infographic: [title]"
   git push
   ```

4. **Trigger IndexNow** (automatic if using GitHub Actions, or manual):
   ```bash
   curl -X POST https://extractpics.com/api/notify-crawl
   ```

5. **Verify in Bing Webmaster Tools**
   - Check URL Submission → API Submit
   - URL should appear within minutes

6. **Monitor Indexing**
   - Check URL Inspection after 24-48 hours
   - Image should appear in Bing Images within 1 week

---

## Monitoring & Analytics

### Bing Webmaster Tools Dashboard

**Key Metrics to Monitor:**

1. **Search Performance**
   - Go to: **Reports & Data** → **Search Performance**
   - Filter by: Image Search
   - Track: Impressions, Clicks, CTR

2. **URL Submission**
   - Go to: **URL Submission** → **API Submit**
   - View all IndexNow submissions
   - Check submission status (Success/Pending/Failed)

3. **Crawl Stats**
   - Go to: **Reports & Data** → **Crawl Stats**
   - Monitor crawl frequency
   - Check for crawl errors

4. **Index Explorer**
   - Go to: **URL Inspection**
   - Enter specific image URLs
   - Check index status and metadata

5. **Sitemaps**
   - Go to: **Sitemaps**
   - View sitemap crawl date
   - Check discovered URLs count

### Setting Up Alerts

1. Go to: **Settings** → **Email Notifications**
2. Enable notifications for:
   - Crawl errors
   - Manual actions
   - Security issues
3. Add your email address

### Performance Tracking

**Week 1:**
- ✅ Verify site ownership
- ✅ Submit sitemap
- ✅ Test IndexNow submission
- ✅ Check first URLs appear in URL Submission

**Week 2-4:**
- ✅ Monitor crawl frequency
- ✅ Check images appearing in Bing Images
- ✅ Review search impressions

**Monthly:**
- ✅ Analyze top-performing images
- ✅ Identify indexing issues
- ✅ Optimize underperforming content

---

## Troubleshooting

### IndexNow Not Working

**Issue:** API returns `"indexNow": {"status": "failed"}`

**Solutions:**
1. **Check API Key**
   ```bash
   cat .env.local | grep INDEXNOW_API_KEY
   ```
   Ensure key matches file name in `/public/`

2. **Verify Key File**
   ```bash
   curl https://extractpics.com/a96c4f160eaf78715f1387717333cddb.txt
   ```
   Should return: `a96c4f160eaf78715f1387717333cddb`

3. **Check Key File Content**
   ```bash
   cat public/a96c4f160eaf78715f1387717333cddb.txt
   ```
   File should contain ONLY the key (no whitespace, newlines)

4. **Test IndexNow API Directly**
   ```bash
   curl -X POST "https://api.indexnow.org/indexnow" \
     -H "Content-Type: application/json" \
     -d '{
       "host": "extractpics.com",
       "key": "a96c4f160eaf78715f1387717333cddb",
       "keyLocation": "https://extractpics.com/a96c4f160eaf78715f1387717333cddb.txt",
       "urlList": ["https://extractpics.com/sitemap.xml"]
     }'
   ```

### Images Not Indexing in Bing

**Issue:** Images not appearing in Bing Images search after 2+ weeks

**Solutions:**

1. **Check Robots.txt**
   - Visit: https://extractpics.com/robots.txt
   - Ensure: `User-agent: bingbot` is `Allow: /`
   - Verify: Sitemap is referenced

2. **Verify Image Accessibility**
   ```bash
   # Test R2 image URL
   curl -I https://pub-141831e61e69445289222976a15b6fb3.r2.dev/infographics/image.jpg
   ```
   Should return: `200 OK`

3. **Check Sitemap**
   - Visit: https://extractpics.com/sitemap.xml
   - Verify images are in `<image:image>` tags
   - Check image URLs are correct

4. **URL Inspection**
   - Go to Bing Webmaster → URL Inspection
   - Enter infographics page URL
   - Check for crawl errors or blockers

5. **Manual Request**
   - In URL Inspection, click "Request Indexing"
   - Bing will prioritize crawling this URL

### Verification Failing

**Issue:** Can't verify site ownership in Bing Webmaster Tools

**Solutions:**

1. **XML File Method:**
   - Ensure file is in `/public/BingSiteAuth.xml`
   - Accessible at: `https://extractpics.com/BingSiteAuth.xml`
   - Deploy to production before verifying

2. **Meta Tag Method:**
   - Add to `app/layout.tsx` metadata
   - Rebuild and deploy
   - Wait 5-10 minutes before clicking "Verify"

3. **DNS Method:**
   - Check DNS propagation: https://dnschecker.org
   - Wait 24-48 hours for full propagation
   - Try verification again

### Rate Limiting

**Issue:** IndexNow returns `429 Too Many Requests`

**Solutions:**
- IndexNow allows up to 10,000 URLs per request
- Maximum 1 request per 10 seconds per domain
- Wait 10 seconds between calls
- Don't call on every deployment - only when content changes

---

## Advanced Configuration

### Securing the Notify-Crawl Endpoint

Add authentication to prevent abuse:

**1. Generate Secret Token**
```bash
openssl rand -hex 32
```

**2. Add to `.env.local`**
```bash
NOTIFY_CRAWL_SECRET=your_generated_secret_here
```

**3. Add to Vercel Environment Variables**
- Vercel Dashboard → Settings → Environment Variables
- Add: `NOTIFY_CRAWL_SECRET`

**4. Use in API Calls**
```bash
curl -X POST https://extractpics.com/api/notify-crawl \
  -H "Authorization: Bearer your_secret_here"
```

### Batch URL Submission

Submit multiple URLs at once:

```typescript
// Custom script to submit multiple URLs
const urls = [
  'https://extractpics.com/infographics',
  'https://extractpics.com/about',
  'https://extractpics.com/'
];

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'extractpics.com',
    key: 'a96c4f160eaf78715f1387717333cddb',
    keyLocation: 'https://extractpics.com/a96c4f160eaf78715f1387717333cddb.txt',
    urlList: urls
  })
});
```

### Monitoring IndexNow Logs

Check server logs for IndexNow activity:

```bash
# Vercel logs
vercel logs

# Search for IndexNow entries
grep -i "indexnow" logs.txt
```

---

## Best Practices

### When to Use IndexNow

**✅ Do Use For:**
- New content published
- Significant content updates
- URL structure changes
- Sitemap updates
- Important metadata changes

**❌ Don't Use For:**
- Minor typo fixes
- CSS/styling changes
- Every single deployment
- Unchanged content

### Submission Frequency

- **New Sites**: Daily for first month
- **Established Sites**: Weekly or when content changes
- **High-Volume Sites**: After each significant batch of changes
- **Low-Volume Sites**: Only when new content added

### URL Selection

**Submit:**
- New or updated pages
- Sitemap URLs
- High-priority content
- Time-sensitive content

**Don't Submit:**
- Every page on every update
- 404 pages
- Redirected URLs
- Duplicate content

---

## Resources

### Official Documentation
- **IndexNow Protocol**: https://www.indexnow.org/documentation
- **Bing Webmaster Tools**: https://www.bing.com/webmasters/help
- **IndexNow GitHub**: https://github.com/microsoft/IndexNow

### Verification Tools
- **IndexNow Validator**: https://www.indexnow.org/validator
- **Bing URL Inspection**: https://www.bing.com/webmasters/url-inspection
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Support
- **Bing Webmaster Help**: https://www.bing.com/webmasters/help/help-center-661b2d18
- **IndexNow FAQ**: https://www.indexnow.org/faq
- **Bing Webmaster Blog**: https://blogs.bing.com/webmaster/

---

## Quick Reference Card

### Your Configuration
```
API Key:      a96c4f160eaf78715f1387717333cddb
Key File:     /public/a96c4f160eaf78715f1387717333cddb.txt
Key URL:      https://extractpics.com/a96c4f160eaf78715f1387717333cddb.txt
Sitemap:      https://extractpics.com/sitemap.xml
API Endpoint: https://extractpics.com/api/notify-crawl
```

### Common Commands
```bash
# Test locally
npm run dev
curl http://localhost:3000/a96c4f160eaf78715f1387717333cddb.txt
curl -X POST http://localhost:3000/api/notify-crawl

# Production
curl https://extractpics.com/a96c4f160eaf78715f1387717333cddb.txt
curl -X POST https://extractpics.com/api/notify-crawl

# With authentication
curl -X POST https://extractpics.com/api/notify-crawl \
  -H "Authorization: Bearer YOUR_SECRET"
```

### Checklist
- [ ] IndexNow API key configured in .env.local
- [ ] Key file created in /public/
- [ ] Deployed to production
- [ ] Site verified in Bing Webmaster Tools
- [ ] Sitemap submitted to Bing
- [ ] IndexNow notification tested
- [ ] URLs appearing in Bing submission logs
- [ ] Images indexed in Bing Images (1-2 weeks)

---

**Setup Complete!** Your ExtractPics site is now configured for instant indexing with Microsoft Bing and other search engines via IndexNow.
