import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getCanonicalUrl("/sitemap.xml"),
  };
}
