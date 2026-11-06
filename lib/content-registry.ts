import type { Project, ProjectKind, ProjectStatus } from "@/types/project";
import { products } from "@/content/products";
import { openSourceProjects } from "@/content/open-source";
import { experiments } from "@/content/experiments";
import { isPublicProject, isFeaturedProject } from "./content-validation";

export const allProjects: Project[] = [
  ...products,
  ...openSourceProjects,
  ...experiments,
];

export function getAllProjects(): Project[] {
  return allProjects;
}

export function getPublicProjects(): Project[] {
  return allProjects
    .filter(isPublicProject)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedProjects(): Project[] {
  return allProjects
    .filter(isFeaturedProject)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = allProjects.find((p) => p.slug === slug);
  if (!project || project.visibility === "hidden") return undefined;
  return project;
}

export function getProjectsByKind(kind: ProjectKind): Project[] {
  return getPublicProjects().filter((p) => p.kind === kind);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return getPublicProjects().filter((p) => p.status === status);
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return getPublicProjects()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatches = a.tags.filter((t) => current.tags.includes(t)).length;
      const bMatches = b.tags.filter((t) => current.tags.includes(t)).length;
      return bMatches - aMatches;
    })
    .slice(0, limit);
}

export function searchProjects(query: string): Project[] {
  const q = query.toLowerCase().trim();
  if (!q) return getPublicProjects();

  return getPublicProjects().filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}
