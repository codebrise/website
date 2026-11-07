import type { Metadata } from "next";
import { studioPrinciples } from "@/content/manifesto";
import { getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";

export const metadata: Metadata = {
  title: "About the Studio — Principles & Craft",
  description:
    "CodeBrise is an independent software studio combining editorial clarity, tactile digital craft, and deliberate software engineering.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About the Studio — Principles & Craft | CodeBrise",
    description:
      "CodeBrise is an independent software studio combining editorial clarity, tactile digital craft, and deliberate software engineering.",
    url: getCanonicalUrl("/about"),
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio — Principles & Craft | CodeBrise",
    description:
      "CodeBrise is an independent software studio combining editorial clarity, tactile digital craft, and deliberate software engineering.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell max-w-4xl">
          <SectionHeading
            eyebrow="Studio Manifesto"
            title={
              <>
                Curious by nature.
                <br />
                <span className="serif text-[#6F59DD] italic">Useful by design.</span>
              </>
            }
            intro="We are an independent software studio. We build useful products, developer tools and open experiments with care, patience, and craft."
          />

          <div className="prose prose-neutral max-w-none text-sm md:text-base leading-relaxed text-cb-text-muted mt-8 space-y-5">
            <p>
              The name <strong>CodeBrise</strong> pairs two ideas: <em>Code</em> for rigorous software creation,
              and <em>Brise</em> (French for breeze) for fluid, effortless, and unhurried digital craft.
              Our studio motto is simple: <strong>Build. Experiment. Release.</strong>
            </p>
            <p>
              We deliberately avoid hyper-growth bloat, venture distractions, and generic SaaS templates.
              By remaining small and focused, every interaction, typeface choice, and micro-interaction
              can receive the tactile attention it deserves.
            </p>
          </div>

          <div className="mt-14 pt-10 border-t border-cb-border">
            <h2 className="text-xl font-semibold text-cb-ink mb-6">Studio Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {studioPrinciples.map((p) => (
                <div key={p.number} className="p-5 rounded-xl border border-cb-border bg-white/50">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cb-violet font-semibold">
                    {p.number}
                  </span>
                  <strong className="block text-sm font-semibold text-cb-ink mt-2">
                    {p.title}
                  </strong>
                  <p className="text-xs text-cb-text-muted mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
