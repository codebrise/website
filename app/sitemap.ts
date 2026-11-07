import type { MetadataRoute } from "next";
import { getIndexableProjects } from "@/lib/content-registry";
import { getCanonicalUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date("2026-11-06T00:00:00.000Z");
  const indexableProjects = getIndexableProjects();

  const projectRoutes: MetadataRoute.Sitemap = indexableProjects.map((p) => ({
    url: getCanonicalUrl(`/work/${p.slug}`),
    lastModified: p.updatedAt ? new Date(p.updatedAt) : buildDate,
    changeFrequency: "weekly",
    priority: p.featured ? 0.9 : 0.7,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/work", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/products", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/developer-tools", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/open-source", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/experiments", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/updates", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
  ].map((route) => ({
    url: getCanonicalUrl(route.path),
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticRoutes, ...projectRoutes];
}
