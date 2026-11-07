# CodeBrise Content Architecture & Registry Guide

## 1. Overview

CodeBrise uses a strictly typed, file-based content registry. There are no external databases, CMS dependencies, or runtime APIs required. Adding, editing, or archiving projects is done directly in version-controlled TypeScript definition files.

All product definitions reside in `content/` and are validated by `lib/content-validation.ts` and aggregated by `lib/content-registry.ts`.

---

## 2. Directory Structure

```
content/
├── products/          # Standalone commercial software and SaaS utilities
│   ├── jobwhistle.ts
│   ├── sliprow.ts
│   └── formspindle.ts
├── open-source/       # Public developer libraries, design tokens, templates
│   └── codebrise-tokens.ts
├── experiments/       # Creative labs, 3D graphics, generative interfaces
│   └── generative-breeze.ts
├── manifesto.ts       # Studio principles and philosophy statements
├── site.ts            # Global studio configuration, navigation, URLs
└── updates.ts         # Chronological studio dispatches and release logs
```

---

## 3. Project Record Schema (`types/project.ts`)

```typescript
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

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description?: string;
  kind: ProjectKind;
  status: ProjectStatus;
  featured: boolean;
  visibility: "public" | "unlisted" | "hidden";
  tags: string[];
  platforms?: Array<"web" | "android" | "ios" | "desktop" | "api" | "npm" | "shopify">;
  links: {
    website?: string;
    repository?: string;
    documentation?: string;
    demo?: string;
    store?: string;
  };
  assets: {
    logo?: string;
    cover?: string;
    screenshots?: string[];
    visualComponent?: "jobwhistle" | "sliprow" | "formspindle" | "default";
  };
  seo?: {
    indexable?: boolean;
    follow?: boolean;
    ogImage?: string;
    canonical?: string;
  };
  features?: string[];
  releaseDate?: string;
  updatedAt?: string;
}
```

---

## 4. How to Add a New Project

1. Create a new definition file in `content/products/<slug>.ts` (or `open-source/`, `experiments/`).
2. Export a typed constant conforming to `Project`:
```typescript
import type { Project } from "@/types/project";

export const myProject: Project = {
  slug: "my-project",
  name: "My Project",
  tagline: "Short editorial tagline",
  summary: "One to two sentences summarizing the utility.",
  kind: "developer-tool",
  status: "in-development",
  featured: true,
  visibility: "public",
  tags: ["TypeScript", "CLI", "Developer Tools"],
  platforms: ["npm", "web"],
  links: {
    repository: "https://github.com/codebrise/my-project",
  },
  assets: {
    visualComponent: "default",
  },
  seo: {
    indexable: true,
  },
};
```
3. Register the project in `lib/content-registry.ts` inside the `allProjects` array.
4. Run `pnpm exec tsc --noEmit` and `pnpm run build` to verify validation and static route generation.

---

## 5. Status & Indexing Rules

- `visibility: "hidden"`: Completely excluded from public listings, category pages, dynamic routes, and sitemaps.
- `visibility: "unlisted"`: Accessible via direct `/work/[slug]` URL, but hidden from the index and excluded from sitemap.
- `status: "live"`: Represents a launched product; emits `SoftwareApplication` JSON-LD schema with live call-to-actions.
- `status: "concept"` or `"exploring"`: Emits `CreativeWork` JSON-LD schema; displays honest exploration badges to maintain studio credibility.
