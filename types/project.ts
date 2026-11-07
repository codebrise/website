export type ProjectKind =
  | "software"
  | "developer-tool"
  | "mobile-app"
  | "game"
  | "ai-automation"
  | "shopify"
  | "open-source"
  | "experiment";

export type ProjectStatus =
  | "concept"
  | "exploring"
  | "in-development"
  | "experimental"
  | "live"
  | "paused"
  | "archived";

export type ProjectPlatform =
  | "web"
  | "android"
  | "ios"
  | "desktop"
  | "api"
  | "npm"
  | "shopify";

export interface ProjectLinks {
  website?: string;
  repository?: string;
  documentation?: string;
  demo?: string;
  store?: string;
}

export interface ProjectAssets {
  logo?: string;
  cover?: string;
  screenshots?: string[];
  visualComponent?: "jobwhistle" | "sliprow" | "formspindle" | "default";
}

export interface ProjectSeo {
  indexable?: boolean;
  follow?: boolean;
  ogImage?: string;
  canonical?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description?: string;
  order?: number;
  kind: ProjectKind;
  status: ProjectStatus;
  featured: boolean;
  visibility: "public" | "unlisted" | "hidden";
  tags: string[];
  platforms?: ProjectPlatform[];
  links: ProjectLinks;
  assets: ProjectAssets;
  seo?: ProjectSeo;
  releaseDate?: string;
  updatedAt?: string;
  features?: string[];
  categoryLabel?: string;
  badgeNumber?: string;
}
