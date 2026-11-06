import type { Project } from "@/types/project";

export const spatialWind: Project = {
  slug: "spatial-wind",
  name: "Spatial Wind",
  tagline: "Interactive 3D particle simulations in CSS.",
  summary:
    "Experimental exploration of lightweight 3D airflow geometry rendered entirely without WebGL dependencies.",
  description:
    "Spatial Wind tests the limits of CSS 3D transforms, nested preserve-3d contexts, and fluid perspective for interactive web graphics. By skipping heavy WebGL engines, it maintains lightning-fast page loads and full accessibility fallbacks.",
  kind: "experiment",
  status: "experimental",
  featured: false,
  visibility: "public",
  order: 5,
  tags: ["CSS 3D", "Transforms", "Generative"],
  platforms: ["web"],
  links: {},
  assets: {
    visualComponent: "default",
  },
  features: [
    "Zero WebGL/Three.js dependency",
    "Pointer parallax and fluid perspective",
    "Full prefers-reduced-motion fallback",
  ],
  releaseDate: "2026",
};
