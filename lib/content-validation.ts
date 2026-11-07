import type { Project, ProjectStatus } from "@/types/project";

export function isPublicProject(project: Project): boolean {
  return project.visibility === "public";
}

export function isFeaturedProject(project: Project): boolean {
  return isPublicProject(project) && project.featured === true;
}

export function isIndexableProject(project: Project): boolean {
  if (!isPublicProject(project)) return false;
  if (project.seo?.indexable !== undefined) return project.seo.indexable;
  // Concept-only sketches should not become thin indexed pages unless explicitly flagged
  if (project.status === "concept") return false;
  return true;
}

export function canVisitLive(status: ProjectStatus): boolean {
  return status === "live";
}

export function formatStatusLabel(status: ProjectStatus): string {
  switch (status) {
    case "exploring":
      return "In exploration";
    case "concept":
      return "Concept";
    case "in-development":
      return "In development";
    case "experimental":
      return "Experimental";
    case "live":
      return "Live";
    case "paused":
      return "Paused";
    case "archived":
      return "Archived";
    default:
      return status;
  }
}
