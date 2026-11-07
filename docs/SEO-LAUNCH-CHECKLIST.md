# CodeBrise Post-Domain Acquisition & Launch Checklist

This operational checklist documents the exact manual actions required once the domain `codebrise.com` is acquired and live.

---

## Phase 1: DNS & SSL Configuration

1. **DNS Provider**: Point the apex domain (`codebrise.com`) and `www.codebrise.com` to the hosting platform (e.g. Cloudflare Pages or Vercel).
2. **Canonical Apex Redirect**:
   - Ensure an HTTP 301 redirect is configured from `www.codebrise.com` to `https://codebrise.com` (or vice-versa, depending on preferred apex convention).
3. **Strict Transport Security (HSTS)**:
   - Enable HSTS with `max-age=31536000; includeSubDomains; preload`.
4. **Environment Variable Configuration**:
   - In your deployment settings, add:
     ```bash
     NEXT_PUBLIC_SITE_URL=https://codebrise.com
     ```

---

## Phase 2: Webmaster Tools Verification

### 1. Google Search Console (GSC)
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Add a **Domain Property** (`codebrise.com`) via DNS TXT record, or choose **URL Prefix** (`https://codebrise.com`).
3. For HTML tag verification:
   - Copy the verification code from `<meta name="google-site-verification" content="XYZ" />`.
   - Set the environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XYZ` in your hosting dashboard.
   - Trigger a redeploy.
4. Click **Verify** in Search Console.
5. Under **Sitemaps**, submit: `https://codebrise.com/sitemap.xml`.
6. Use the **URL Inspection** tool to request immediate indexing of the homepage.

### 2. Bing Webmaster Tools
1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import from Google Search Console (fastest method), or add manually via meta tag:
   - Copy the code from `<meta name="msvalidate.01" content="ABC" />`.
   - Set `NEXT_PUBLIC_BING_SITE_VERIFICATION=ABC`.
3. Under **Sitemaps**, submit `https://codebrise.com/sitemap.xml`.

---

## Phase 3: Zero-Cookie Web Analytics

CodeBrise uses privacy-respecting, zero-cookie analytics that comply with GDPR, CCPA, and PECR without requiring annoying cookie consent banners.

1. Create a free account at [Cloudflare](https://dash.cloudflare.com/) and go to **Web Analytics**.
2. Add the site `codebrise.com`.
3. Copy the token provided in the snippet:
   ```json
   {"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
   ```
4. In your hosting environment variables, set:
   ```bash
   NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
5. Cloudflare will automatically track page views and Web Vitals with zero client tracking cookies or fingerprinting.

---

## Phase 4: Social Preview Validation

Validate the Open Graph and Twitter Card rendering across platforms:
- **Facebook / Threads**: Test URL in the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
- **LinkedIn**: Test URL in the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- **Twitter / X**: Verify cards via [Tweetbot / Twitter Card Validator](https://cards-dev.twitter.com/validator).

---

## Phase 5: Ethical Launch & Discoverability Strategy

Build genuine domain authority and developer interest through transparent, craft-focused distribution:

1. **GitHub Organization**:
   - Update `https://github.com/codebrise` profile with the custom social preview (`/public/social/github-social-preview-1280x640.png`).
   - Pin open-source token packages and developer tools.
2. **Show HN (Hacker News)**:
   - Post an honest, non-hyped developer dispatch:  
     *Show HN: CodeBrise — An independent software studio building small developer tools and tactile web craft*
   - Highlight the architecture: Next.js App Router, typed content model, paper-and-ink design tokens, and open design system.
3. **Design & Engineering Directories**:
   - Submit to curated directories: *Siteinspire*, *Awwwards (Independent)*, *Godly*, *Land-book*, *Httpster*.
   - Feature the tactile paper-and-ink interface and custom motion architecture.
4. **Dev.to / Hashnode / RSS**:
   - Syndicate studio dispatches (`/feed.xml`) to developer feeds and personal publications.
