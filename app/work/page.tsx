import type { Metadata } from "next";
import { getPublicProjects } from "@/lib/content-registry";
import { getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectDirectory } from "@/features/project-catalog/components/ProjectDirectory";

export const metadata: Metadata = {
  title: "Selected Work — Studio Catalogue",
  description:
    "Explore products, developer tools, libraries, and experiments taking shape at CodeBrise.",
  alternates: {
    canonical: getCanonicalUrl("/work"),
  },
  openGraph: {
    title: "Selected Work — Studio Catalogue | CodeBrise",
    description:
      "Explore products, developer tools, libraries, and experiments taking shape at CodeBrise.",
    url: getCanonicalUrl("/work"),
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Studio Catalogue | CodeBrise",
    description:
      "Explore products, developer tools, libraries, and experiments taking shape at CodeBrise.",
    images: ["/og-image.png"],
  },
};

export default function WorkDirectoryPage() {
  const projects = getPublicProjects();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Selected Work", path: "/work" },
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
            eyebrow="Portfolio directory"
            count={`01 / 0${projects.length}`}
            title={
              <>
                Everything on
                <br />
                the <span className="serif text-[#6F59DD] italic">workbench.</span>
              </>
            }
            intro="Browse active developments, published utilities, open-source libraries, and early studio concepts."
          />

          <ProjectDirectory initialProjects={projects} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
