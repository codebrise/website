export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SiteMetadata {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  twitterHandle?: string;
  githubUrl: string;
}

