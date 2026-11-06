import type { Metadata } from "next";
import { getProjectsByKind } from "@/lib/content-registry";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Components, libraries, endpoints, and utilities that make software engineering nicer.",
};

export default function DeveloperToolsPage() {
  const tools = getProjectsByKind("developer-tool");

  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Developer Infrastructure"
            count={`01 / 0${tools.length}`}
            title={
              <>
                Utilities for
                <br />
                thoughtful <span className="serif text-[#536DFE] italic">builders.</span>
              </>
            }
            intro="Minimal, reliable tooling built to remove backend detour and accelerate modern web engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {tools.map((t) => (
              <ProjectCard key={t.slug} project={t} layout="standard" />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
