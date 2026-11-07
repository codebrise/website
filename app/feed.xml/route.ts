import { studioUpdates } from "@/content/updates";
import { siteConfig, getSiteUrl, getCanonicalUrl } from "@/content/site";

export async function GET() {
  const siteUrl = getSiteUrl();
  const feedUrl = getCanonicalUrl("/feed.xml");

  const itemsXml = studioUpdates
    .map((update) => {
      const itemUrl = getCanonicalUrl(`/updates#${update.slug}`);
      return `    <item>
      <title><![CDATA[${update.title}]]></title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${itemUrl}</guid>
      <description><![CDATA[${update.summary}]]></description>
      <category>${update.category}</category>
      <author>${siteConfig.email} (${update.author})</author>
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} Studio Dispatches</title>
    <link>${siteUrl}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

