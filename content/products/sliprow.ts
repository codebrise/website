import type { Project } from "@/types/project";

export const sliprow: Project = {
  slug: "sliprow",
  name: "Sliprow",
  tagline: "Turn invoice PDFs into clean, useful rows.",
  summary:
    "Turn invoice PDFs into clean, useful rows. Less copying. More clarity.",
  description:
    "Sliprow turns chaotic invoice documents and receipts into structured spreadsheet data in seconds. Built with a local-first architecture, your sensitive financial documents are processed securely in your browser without ever being uploaded to external servers.",
  kind: "software",
  status: "concept",
  featured: true,
  visibility: "public",
  order: 2,
  badgeNumber: "02 / BROWSER TOOL",
  tags: ["PDF", "CSV", "Local-first"],
  platforms: ["web", "desktop"],
  links: {},
  assets: {
    visualComponent: "sliprow",
  },
  features: [
    "Local-first document parsing in browser",
    "Instant CSV and Excel sheet generation",
    "Line-item and total breakdown extraction",
    "Complete privacy with zero cloud upload",
  ],
  releaseDate: "2026",
  updatedAt: "2026-11-01",
};

