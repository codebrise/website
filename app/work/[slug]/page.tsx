import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublicProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/content-registry";
import { isIndexableProject } from "@/lib/content-validation";
import { getCanonicalUrl } from "@/content/site";
import { generateBreadcrumbJsonLd, generateProjectJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectDetailHeader } from "@/components/projects/ProjectDetailHeader";
import { ProjectMetaSidebar } from "@/components/projects/ProjectMetaSidebar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JobwhistleVisual } from "@/components/projects/JobwhistleVisual";
import { SliprowVisual } from "@/components/projects/SliprowVisual";
import { FormspindleVisual } from "@/components/projects/FormspindleVisual";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getPublicProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  const projectUrl = getCanonicalUrl(`/work/${project.slug}`);
  const ogImage = project.seo?.ogImage || project.assets.cover || "/og-image.png";

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.name} — ${project.tagline} | CodeBrise`,
      description: project.summary,
      url: projectUrl,
      images: [ogImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline} | CodeBrise`,
      description: project.summary,
      images: [ogImage],
    },
    robots: {
      index: isIndexableProject(project),
      follow: true,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const related = getRelatedProjects(project.slug, 3);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Selected Work", path: "/work" },
    { name: project.name, path: `/work/${project.slug}` },
  ]);
  const projectJsonLd = generateProjectJsonLd(project);

  const renderVisual = () => {
    if (project.assets.visualComponent === "jobwhistle") {
      return (
        <div className="p-8 rounded-[var(--cb-radius-lg)] bg-[#151D2B] text-white">
          <JobwhistleVisual />
        </div>
      );
    }
    if (project.assets.visualComponent === "sliprow") {
      return (
        <div className="p-8 rounded-[var(--cb-radius-lg)] bg-[#E6E5EE] text-[#171B27]">
          <SliprowVisual />
        </div>
      );
    }
    if (project.assets.visualComponent === "formspindle") {
      return (
        <div className="p-8 rounded-[var(--cb-radius-lg)] bg-[#DCEEE8] text-[#152A2A]">
          <FormspindleVisual />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <article className="site-shell flex flex-col gap-12">
          <ProjectDetailHeader project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div className="flex flex-col gap-8">
              {renderVisual()}

              <div className="prose prose-neutral max-w-none">
                <h2 className="text-xl font-semibold tracking-tight text-cb-ink mb-3">
                  About {project.name}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-cb-text-muted">
                  {project.description || project.summary}
                </p>

                {project.features && project.features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cb-ink mb-4 font-mono">
                      Key Highlights & Architecture
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 list-none">
                      {project.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 p-3 rounded-lg border border-cb-border bg-white/40 text-xs text-cb-ink"
                        >
                          <span className="text-cb-violet font-bold">✳</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <ProjectMetaSidebar project={project} />
          </div>

          {related.length > 0 && (
            <div className="pt-12 border-t border-cb-border">
              <h2 className="text-lg font-semibold tracking-tight text-cb-ink mb-6">
                Related explorations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <ProjectCard key={rel.slug} project={rel} layout="standard" />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

