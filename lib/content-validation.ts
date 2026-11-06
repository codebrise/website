import type { Project, ProjectStatus } from "@/types/project";

export function isPublicProject(project: Project): boolean {
  return project.visibility === "public";
}

export function isFeaturedProject(project: Project): boolean {
  return isPublicProject(project) && project.featured === true;
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
