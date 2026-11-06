import type { Project } from "@/types/project";

export const jobwhistle: Project = {
  slug: "jobwhistle",
  name: "Jobwhistle",
  tagline: "Know when your jobs stop running.",
  summary:
    "Know when your websites and scheduled jobs stop doing their thing. Quiet monitoring, clear signals.",
  description:
    "Jobwhistle is an uptime and scheduled heartbeat monitoring utility designed for developers, creators, and small teams. It monitors web endpoints, recurring cron jobs, and API workers with minimal noise, alerting you only when something actually goes wrong.",
  kind: "software",
  status: "exploring",
  featured: true,
  visibility: "public",
  order: 1,
  badgeNumber: "01 / WEB UTILITY",
  tags: ["Uptime", "Heartbeats", "Alerts"],
  platforms: ["web", "api"],
  links: {},
  assets: {
    visualComponent: "jobwhistle",
  },
  features: [
    "Lightweight HTTP & endpoint status checks",
    "Scheduled cron heartbeat monitoring",
    "Zero-configuration alert routing",
    "Real-time status overview and latency metrics",
  ],
  releaseDate: "2026",
  updatedAt: "2026-11-01",
};

