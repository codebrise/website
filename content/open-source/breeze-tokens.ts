import type { Project } from "@/types/project";

export const breezeTokens: Project = {
  slug: "breeze-tokens",
  name: "Breeze Tokens",
  tagline: "Lightweight CSS custom properties for tactile web design.",
  summary:
    "A clean micro-system of editorial surface, spacing, and typography tokens.",
  description:
    "Breeze Tokens provides the foundational paper, ink, and gradient token primitives designed for CodeBrise. It includes fluid typography clamps, consistent spacing ladders, and tactile surface elevations.",
  kind: "open-source",
  status: "live",
  featured: false,
  visibility: "public",
  order: 4,
  tags: ["CSS", "Design System", "Tokens"],
  platforms: ["npm"],
  links: {
    repository: "https://github.com/codebrise",
  },
  assets: {
    visualComponent: "default",
  },
  features: [
    "Native CSS variables with zero dependencies",
    "Tailwind v4 compatible design tokens",
    "Fluid typography and modular scale",
  ],
  releaseDate: "2026",
};
