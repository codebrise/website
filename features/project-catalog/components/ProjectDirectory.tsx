"use client";

import * as React from "react";
import type { Project } from "@/types/project";
import { ProjectSearchInput } from "./ProjectSearchInput";
import { ProjectFilters, type FilterOption } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";

const filterOptions: FilterOption[] = [
  { id: "all", label: "Everything" },
  { id: "software", label: "Software", kind: "software" },
  { id: "developer-tool", label: "Developer tools", kind: "developer-tool" },
  { id: "open-source", label: "Open source", kind: "open-source" },
  { id: "experiment", label: "Experiments", kind: "experiment" },
];

interface ProjectDirectoryProps {
  initialProjects: Project[];
}

export function ProjectDirectory({ initialProjects }: ProjectDirectoryProps) {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const filteredProjects = React.useMemo(() => {
    return initialProjects.filter((project) => {
      // Kind filter
      if (filter !== "all" && project.kind !== filter) {
        return false;
      }
      // Search query
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchesName = project.name.toLowerCase().includes(q);
        const matchesTagline = project.tagline.toLowerCase().includes(q);
        const matchesSummary = project.summary.toLowerCase().includes(q);
        const matchesTags = project.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesTagline && !matchesSummary && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [initialProjects, filter, search]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cb-border">
        <ProjectFilters
          currentFilter={filter}
          onSelect={setFilter}
          options={filterOptions}
        />
        <ProjectSearchInput value={search} onChange={setSearch} />
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-cb-text-muted">
        <span>Showing {filteredProjects.length} projects</span>
        <span>Studio catalogue</span>
      </div>

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
