import * as React from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EmptyState } from "@/components/content/EmptyState";

interface ProjectGridProps {
  projects: Project[];
  emptyTitle?: string;
  emptyDescription?: string;
}

export function ProjectGrid({
  projects,
  emptyTitle,
  emptyDescription,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title={emptyTitle || "No matching projects found."}
        description={
          emptyDescription ||
          "Try adjusting your search terms or clearing active filters."
        }
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          layout="standard"
          className="col-span-1"
        />
      ))}
    </div>
  );
}

