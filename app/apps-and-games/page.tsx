import type { Metadata } from "next";
import { getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { EmptyState } from "@/components/content/EmptyState";

export const metadata: Metadata = {
  title: "Apps & Games",
  description:
    "Mobile experiments, indie games, and interactive digital craft from CodeBrise.",
  alternates: {
    canonical: getCanonicalUrl("/apps-and-games"),
  },
  openGraph: {
    title: "Apps & Games | CodeBrise",
    description:
      "Mobile experiments, indie games, and interactive digital craft from CodeBrise.",
    url: getCanonicalUrl("/apps-and-games"),
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apps & Games | CodeBrise",
    description:
      "Mobile experiments, indie games, and interactive digital craft from CodeBrise.",
    images: ["/og-image.png"],
  },
};

export default function AppsAndGamesPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Apps & Games", path: "/apps-and-games" },
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
            eyebrow="Interactive & Mobile"
            title={
              <>
                Playful ideas,
                <br />
                taking <span className="serif text-[#32C7D0] italic">shape.</span>
              </>
            }
            intro="We build small mobile applications and experimental indie game prototypes driven by curiosity and tactile feel."
          />

          <div className="max-w-2xl mt-8">
            <EmptyState
              title="Mobile applications & games are in early exploration."
              description="We are currently prototyping two small mobile utilities and a tactile puzzle mechanic. Detailed devlogs and prototype previews will be shared here once ready."
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

