"use client";

import * as React from "react";
import { AnimatePresence } from "motion/react";
import type { Project } from "@/types/project";
import { SectionHeading } from "@/components/content/SectionHeading";
import { EmptyState } from "@/components/content/EmptyState";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface FeaturedWorkProps {
  initialProjects: Project[];
}

export function FeaturedWork({ initialProjects }: FeaturedWorkProps) {
  const [filter, setFilter] = React.useState<string>("all");

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return initialProjects;
    if (filter === "product") return initialProjects.filter((p) => p.kind === "software");
    if (filter === "developer") return initialProjects.filter((p) => p.kind === "developer-tool");
    if (filter === "experiment") return initialProjects.filter((p) => p.kind === "experiment");
    return initialProjects;
  }, [filter, initialProjects]);

  return (
    <section className="site-shell pt-16 md:pt-24 pb-14" id="work" aria-labelledby="work-title">
      <SectionHeading
        eyebrow="The workbench"
        count="01 / 03"
        title={
          <>
            A few things
            <br />
            taking <span className="serif text-[#6F59DD] italic">shape.</span>
          </>
        }
        intro="Small, focused ideas with a job to do. Some are being explored, some are taking form. We’ll let the work—and its progress—speak for itself."
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 -mt-2 mb-6">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter workbench projects">
          {[
            { id: "all", label: "Everything" },
            { id: "product", label: "Software" },
            { id: "developer", label: "Developer tools" },
            { id: "experiment", label: "Experiments" },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFilter(btn.id)}
              aria-pressed={filter === btn.id}
              className={`px-3.5 py-2 rounded-full text-[10px] font-bold cursor-pointer transition-all duration-200 ${
                filter === btn.id
                  ? "bg-cb-ink text-white"
                  : "bg-transparent text-[#727984] hover:text-cb-ink hover:bg-white/50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-[#9299A2]">
          03 early ideas · 2026
        </span>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                layout="featured"
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <EmptyState />
      )}

      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-5 text-[10px] text-cb-text-muted">
        <span>These are early portfolio concepts, not claims of released products.</span>
        <span className="font-mono uppercase tracking-wider">
          More ideas are always in motion ↗
        </span>
      </div>
    </section>
  );
}
