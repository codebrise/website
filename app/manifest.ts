import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f1efe9",
    theme_color: "#f1efe9",
    icons: [
      {
        src: "/favicons/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/favicon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/favicons/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

