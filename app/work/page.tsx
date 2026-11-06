import type { Metadata } from "next";
import { getPublicProjects } from "@/lib/content-registry";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectDirectory } from "@/features/project-catalog/components/ProjectDirectory";

export const metadata: Metadata = {
  title: "Selected Work — Studio Catalogue",
  description:
    "Explore products, developer tools, libraries, and experiments taking shape at CodeBrise.",
};

export default function WorkDirectoryPage() {
  const projects = getPublicProjects();

  return (
    <>
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
