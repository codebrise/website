import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { Eyebrow } from "@/components/content/Eyebrow";
import { ProjectStatus } from "./ProjectStatus";
import { canVisitLive } from "@/lib/content-validation";

interface ProjectDetailHeaderProps {
  project: Project;
}

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  const isLive = canVisitLive(project.status);

  return (
    <div className="flex flex-col gap-6 pb-8 border-b border-cb-border">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-semibold text-cb-text-muted hover:text-cb-ink transition-colors w-fit"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" />
        Back to selected work
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3 mb-3">
            <Eyebrow>{project.kind.replace("-", " ")}</Eyebrow>
            <ProjectStatus status={project.status} />
          </div>

          <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.07em] text-cb-ink">
            {project.name}
          </h1>

          <p className="mt-4 text-base md:text-lg text-cb-text-muted leading-relaxed max-w-[620px]">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.links.website && isLive && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cb-ink text-white text-xs font-bold shadow-sm hover:bg-cb-ink-raised transition-all"
            >
              Visit product
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          )}

          {project.links.repository && (
            <a
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-cb-border bg-white/60 text-cb-ink text-xs font-semibold hover:bg-white transition-all"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Source code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
