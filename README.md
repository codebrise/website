# CodeBrise Public Website

> **Build. Experiment. Release.**  
> Official public website and studio catalogue for CodeBrise — an independent software studio combining editorial clarity, tactile digital craft, and deliberate software engineering.

---

## 1. Architecture Overview

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 & custom design tokens
- **Primitives**: shadcn/ui & @base-ui/react
- **Motion**: Motion for React (`motion`) & GPU-accelerated CSS keyframes
- **Typography**: DM Sans (Sans), Instrument Serif (Display), System Monospace
- **Deployment**: Static Generation (`next build`)

---

## 2. Documentation

Comprehensive documentation guides are maintained in the [`docs/`](./docs) folder:
- [Design System Specification](./docs/DESIGN-SYSTEM.md) — tokens, typography, surfaces, and branding rules.
- [Content Architecture](./docs/CONTENT-MODEL.md) — project schemas, lifecycle states, and registry workflows.
- [SEO & Technical Discoverability](./docs/SEO-GUIDE.md) — canonical URLs, JSON-LD structured data, RSS feed, and Open Graph previews.
- [SEO Launch & Domain Checklist](./docs/SEO-LAUNCH-CHECKLIST.md) — post-domain acquisition DNS, Search Console, Bing, and Cloudflare analytics instructions.
- [Motion & Interaction Guidelines](./docs/MOTION-GUIDELINES.md) — standards for spring physics, layout animations, and accessibility.

---

## 3. Directory Structure

```text
website/
├── app/                  # Next.js App Router pages and metadata
│   ├── layout.tsx        # Root layout, fonts, SEO, JSON-LD
│   ├── page.tsx          # Editorial homepage modules
│   ├── globals.css       # Design tokens & semantic variables
│   ├── work/             # Portfolio directory & [slug] routes
│   ├── products/         # Software & products page
│   ├── developer-tools/  # Developer tools & utilities page
│   ├── apps-and-games/   # Apps & games exploration page
│   ├── experiments/      # Lab experiments & CSS 3D explorations
│   ├── open-source/      # Public open-source tooling page
│   ├── updates/          # Studio dispatches & fieldnotes
│   ├── about/            # Studio background & principles
│   ├── contact/          # Direct inquiry channels
│   ├── sitemap.ts        # Dynamic sitemap generator
│   └── robots.ts         # Robots.txt configuration
├── components/           # Feature-based modular components
│   ├── layout/           # Header, footer, announcement, mobile nav
│   ├── home/             # Hero, 3D breeze artwork, workbench, manifesto
│   ├── projects/         # Project card, status pills, tactile visuals
│   ├── content/          # Eyebrow, section headings, metadata labels
│   ├── motion/           # Accessible scroll reveal & transitions
│   └── ui/               # Tailored shadcn base components
├── content/              # Typed project records & collections
│   ├── products/         # Individual TypeScript product files
│   ├── open-source/      # Open-source repository entries
│   ├── experiments/      # Lab experiment records
│   ├── categories.ts     # Studio category definitions
│   ├── manifesto.ts      # Studio principles and 3-step process
│   └── site.ts           # Site navigation and studio metadata
├── features/             # Domain feature modules
│   └── project-catalog/  # Client-side filtering & search
├── lib/                  # Reusable utilities and content registry
│   ├── content-registry.ts    # Access helpers (all, featured, slug)
│   ├── content-validation.ts  # Lifecycle rules & status formatting
│   ├── seo.ts                 # Schema.org structured data
│   └── utils.ts               # ClassName combiner
├── public/               # Static assets
│   ├── brand/            # Official unredrawn logo lockups and marks
│   ├── favicons/         # Multi-size favicons and SVG mark
│   └── og-image.png      # High-resolution social preview image
├── styles/               # Animation keyframes & motion rules
└── types/                # Strongly-typed data models
```

---

## 4. Content-Driven Workflow: Adding a New Product

Adding a new product or project requires **zero changes to UI components**:

1. Create a new TypeScript file under `content/products/<slug>.ts`:

```ts
import type { Project } from "@/types/project";

export const myNewProject: Project = {
  slug: "my-new-project",
  name: "My New Project",
  tagline: "One punchy sentence describing the core purpose.",
  summary: "A concise two-sentence overview of the project.",
  kind: "software", // "software" | "developer-tool" | "open-source" | "experiment" ...
  status: "in-development", // "concept" | "exploring" | "in-development" | "live"
  featured: true,
  visibility: "public",
  order: 4,
  tags: ["Tag 1", "Tag 2"],
  platforms: ["web", "api"],
  links: {
    website: "https://example.com",
    repository: "https://github.com/codebrise/repo",
  },
  assets: {
    visualComponent: "default",
  },
  features: ["Key benefit 1", "Key benefit 2"],
  releaseDate: "2026",
};
```

2. Export it in `content/products/index.ts`:

```ts
import { myNewProject } from "./my-new-project";
export const products = [jobwhistle, sliprow, formspindle, myNewProject];
```

3. Run `pnpm run build`. The project will automatically:
   - Appear in the workbench grid (if `featured: true`)
   - Appear in `/work` with live searching and category filtering
   - Generate a dedicated static detail page at `/work/my-new-project`
   - Be added to `/sitemap.xml` and structured JSON-LD data

---

## 5. Development & Production Build

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev

# Run TypeScript type check
pnpm exec tsc --noEmit

# Create static production build
pnpm run build
```
