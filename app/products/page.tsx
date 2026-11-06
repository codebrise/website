import type { Metadata } from "next";
import { getProjectsByKind } from "@/lib/content-registry";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Software & Products",
  description:
    "Small applications designed to solve specific, everyday problems with clarity and craft.",
};

export default function ProductsPage() {
  const products = getProjectsByKind("software");

  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Products & Applications"
            count={`01 / 0${products.length}`}
            title={
              <>
                Focused software,
                <br />
                built to <span className="serif text-[#7559DF] italic">solve.</span>
              </>
            }
            intro="Small, single-purpose software applications designed with clear interfaces and tactile attention to detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {products.map((p) => (
              <ProjectCard key={p.slug} project={p} layout="standard" />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

