# CodeBrise SEO & Technical Architecture Guide

## 1. Architectural Strategy

CodeBrise is engineered for search engine crawlability, indexing precision, and rich social media visibility:
- **Prerendered Static Architecture**: Every page, route, and asset is compiled into static HTML at build time with Next.js App Router and Turbopack.
- **Centralized URL Generation**: Absolute canonical URLs are derived via `getCanonicalUrl(path)` and `getSiteUrl()`, honoring `NEXT_PUBLIC_SITE_URL` with a fallback to `https://codebrise.com`.
- **Dynamic XML Sitemap**: Generated via `app/sitemap.ts` using indexable projects filtered by `isIndexableProject()`.
- **Crawler Directives**: Standardized robots directives in `app/robots.ts` disallowing private assets while permitting search engine spiders.
- **Syndication**: RSS 2.0 endpoint at `/feed.xml` supporting feed aggregators and readers.
- **RFC 9116 Compliance**: Security disclosures located at `/.well-known/security.txt`.

---

## 2. Structured Data (JSON-LD)

Structured data is rendered as valid schema.org objects injected via `<script type="application/ld+json">`:

### 1. `Organization` Schema (Global in `app/layout.tsx`)
- Defines studio identity, legal name, URL, official light logo lockup, studio email, and official GitHub profiles.

### 2. `WebSite` Schema (Global in `app/layout.tsx`)
- Declares the official website identity, language (`en`), and primary domain.

### 3. `BreadcrumbList` Schema (On directory & category pages)
- Injected on `/work`, `/products`, `/developer-tools`, `/apps-and-games`, `/experiments`, `/open-source`, `/updates`, `/about`, `/contact`, and `/work/[slug]`.
- Establishes crawl depth and structured site hierarchy for search engines.

### 4. `SoftwareApplication` vs `CreativeWork` Schema (Detail pages)
- Applied conditionally based on project maturity:
  - **Live Products (`status: "live"`)**: Rendered as `SoftwareApplication` with free offers, platform capabilities, and operating system attributes.
  - **Explorations & Concepts**: Rendered as `CreativeWork` to accurately reflect research status without triggering misleading rich snippets.

---

## 3. Open Graph & Social Card Standards

- **Dimensions**: Standard 1200×630px high-resolution PNGs.
- **Master Files**:
  - Dark theme master: `/public/social/og-dark-1200x630.png` (symlinked/copied to `/public/og-image.png`).
  - Light theme master: `/public/social/og-light-1200x630.png`.
  - GitHub Organization Social Preview: `/public/social/github-social-preview-1280x640.png`.
- **Twitter Cards**: `summary_large_image` across all routes.
- **Page Overrides**: Individual projects can define bespoke OG cards in their `seo.ogImage` property.

---

## 4. Canonical URL Rules

- Never use relative paths for `canonical` or `og:url` tags.
- Always use `getCanonicalUrl("/subpath")`.
- Root trailing slashes are normalized to prevent duplicate content flags between `codebrise.com` and `codebrise.com/`.

