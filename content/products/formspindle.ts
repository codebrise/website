import type { Project } from "@/types/project";

export const formspindle: Project = {
  slug: "formspindle",
  name: "Formspindle",
  tagline: "A simple endpoint for HTML forms.",
  summary:
    "A simple endpoint for HTML forms. Submissions go where they need to, without the backend detour.",
  description:
    "Formspindle gives static sites, documentation pages, and client projects reliable backend endpoints without setting up servers. Simply point standard HTML forms to your unique Formspindle endpoint, and leads, feedback, and messages flow seamlessly to email, webhooks, or communication apps.",
  kind: "developer-tool",
  status: "concept",
  featured: true,
  visibility: "public",
  order: 3,
  badgeNumber: "03 / DEVELOPER TOOL",
  tags: ["HTML forms", "Webhooks"],
  platforms: ["web", "api"],
  links: {},
  assets: {
    visualComponent: "formspindle",
  },
  features: [
    "Drop-in form endpoint with zero backend code",
    "Automated honeypot spam protection",
    "Direct webhook forwarding to modern tools",
    "Instant email notifications with clean formatting",
  ],
  releaseDate: "2026",
  updatedAt: "2026-11-01",
};

