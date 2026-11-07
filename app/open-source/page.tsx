import type { Metadata } from "next";
import { getProjectsByKind } from "@/lib/content-registry";
import { siteConfig, getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source — Shared Software",
  description:
    "Open libraries, design systems, and public tooling built by CodeBrise for the community.",
  alternates: {
    canonical: getCanonicalUrl("/open-source"),
  },
  openGraph: {
    title: "Open Source — Shared Software | CodeBrise",
    description:
      "Open libraries, design systems, and public tooling built by CodeBrise for the community.",
    url: getCanonicalUrl("/open-source"),
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source — Shared Software | CodeBrise",
    description:
      "Open libraries, design systems, and public tooling built by CodeBrise for the community.",
    images: ["/og-image.png"],
  },
};

export default function OpenSourcePage() {
  const projects = getProjectsByKind("open-source");
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Open Source", path: "/open-source" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Community & Tooling"
            count={`01 / 0${projects.length}`}
            title={
              <>
                Good ideas get
                <br />
                better when <span className="serif text-[#32C7D0] italic">shared.</span>
              </>
            }
            intro="We open-source foundational libraries, design token collections, and useful scaffolding whenever they can benefit other builders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} layout="standard" />
            ))}
          </div>

          <div className="p-8 rounded-[var(--cb-radius-lg)] border border-cb-border bg-white/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
            <div>
              <h3 className="text-lg font-semibold text-cb-ink">
                Contribute and follow along on GitHub
              </h3>
              <p className="text-xs text-cb-text-muted mt-1 max-w-md">
                All public repositories, issue discussions, and release archives live on our organization page.
              </p>
            </div>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-cb-ink text-white text-xs font-bold hover:bg-cb-ink-raised transition-all shrink-0"
            >
              Explore CodeBrise GitHub
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

