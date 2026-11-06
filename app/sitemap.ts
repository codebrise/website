import type { MetadataRoute } from "next";
import { getPublicProjects } from "@/lib/content-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codebrise.com";
  const buildDate = new Date("2026-11-06T00:00:00.000Z");
  const publicProjects = getPublicProjects();

  const projectRoutes: MetadataRoute.Sitemap = publicProjects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/work",
    "/products",
    "/developer-tools",
    "/apps-and-games",
    "/experiments",
    "/open-source",
    "/updates",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}

