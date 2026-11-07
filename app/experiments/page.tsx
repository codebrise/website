import type { Metadata } from "next";
import { getProjectsByKind } from "@/lib/content-registry";
import { getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Experiments — Studio Lab",
  description:
    "Spatial experiments, CSS 3D explorations, and creative research from the CodeBrise lab.",
  alternates: {
    canonical: getCanonicalUrl("/experiments"),
  },
  openGraph: {
    title: "Experiments — Studio Lab | CodeBrise",
    description:
      "Spatial experiments, CSS 3D explorations, and creative research from the CodeBrise lab.",
    url: getCanonicalUrl("/experiments"),
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiments — Studio Lab | CodeBrise",
    description:
      "Spatial experiments, CSS 3D explorations, and creative research from the CodeBrise lab.",
    images: ["/og-image.png"],
  },
};

export default function ExperimentsPage() {
  const experiments = getProjectsByKind("experiment");
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Experiments", path: "/experiments" },
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
            eyebrow="The Studio Lab"
            count={`01 / 0${experiments.length}`}
            title={
              <>
                Curiosity without
                <br />
                immediate <span className="serif text-[#8057F5] italic">answers.</span>
              </>
            }
            intro="Technical proofs of concept, creative digital experiments, and generative interfaces built to test boundaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {experiments.map((exp) => (
              <ProjectCard key={exp.slug} project={exp} layout="standard" />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

