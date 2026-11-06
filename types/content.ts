import type { ProjectKind } from "./project";

export interface CategoryDefinition {
  id: ProjectKind | "all";
  number: string;
  actionWord: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  description?: string;
}

export interface StudioProcessStep {
  number: string;
  glyph: string;
  title: string;
  description: string;
}

export interface StudioUpdate {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content?: string;
  author?: string;
}

