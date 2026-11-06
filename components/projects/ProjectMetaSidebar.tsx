import * as React from "react";
import type { Project } from "@/types/project";
import { formatStatusLabel } from "@/lib/content-validation";

interface ProjectMetaSidebarProps {
  project: Project;
}

export function ProjectMetaSidebar({ project }: ProjectMetaSidebarProps) {
  return (
    <aside className="flex flex-col gap-6 p-6 rounded-[var(--cb-radius-md)] border border-cb-border bg-white/40">
      <div>
        <strong className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#9A9FA6] mb-1.5">
          Lifecycle State
        </strong>
        <span className="text-xs font-semibold text-cb-ink">
          {formatStatusLabel(project.status)}
        </span>
      </div>

      <div>
        <strong className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#9A9FA6] mb-1.5">
          Category
        </strong>
        <span className="text-xs text-cb-ink capitalize">
          {project.kind.replace("-", " ")}
        </span>
      </div>

      {project.platforms && project.platforms.length > 0 && (
        <div>
          <strong className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#9A9FA6] mb-1.5">
            Target Platforms
          </strong>
          <div className="flex flex-wrap gap-1.5">
            {project.platforms.map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 rounded-full border border-cb-border bg-white/70 font-mono text-[9px] uppercase text-cb-text-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <strong className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#9A9FA6] mb-1.5">
          Tags
        </strong>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full bg-cb-paper-muted text-[10px] text-cb-ink"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.releaseDate && (
        <div>
          <strong className="block font-mono text-[9px] uppercase tracking-[0.12em] text-[#9A9FA6] mb-1.5">
            Timeline
          </strong>
          <span className="font-mono text-xs text-cb-ink">
            {project.releaseDate}
          </span>
        </div>
      )}

      {project.status !== "live" && (
        <div className="p-3 rounded-lg border border-cb-violet/20 bg-cb-violet/[0.04] text-[10px] text-cb-text-muted leading-relaxed">
          <strong>Note from studio:</strong> This entry is an active exploratory concept.
          Details and technical directions evolve as progress continues.
        </div>
      )}
    </aside>
  );
}
