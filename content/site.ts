import type { NavGroup, NavItem, SiteMetadata } from "@/types/navigation";

export const siteConfig: SiteMetadata = {
  name: "CodeBrise",
  legalName: "CodeBrise Studio",
  tagline: "Build. Experiment. Release.",
  description:
    "An independent software studio building useful products, thoughtful developer tools and open experiments.",
  url: "https://codebrise.com",
  author: "CodeBrise",
  twitterHandle: "@codebrise",
  githubUrl: "https://github.com/codebrise",
};

export const primaryNavigation: NavItem[] = [
  { label: "Selected work", href: "/#work" },
  { label: "What we make", href: "/#practice" },
  { label: "Studio notes", href: "/#studio" },
  { label: "Open source", href: "/#open-source" },
];

export const footerNavigation: NavGroup[] = [
  {
    title: "Explore",
    items: [
      { label: "Selected work", href: "/work" },
      { label: "What we make", href: "/products" },
      { label: "The studio", href: "/about" },
    ],
  },
  {
    title: "Elsewhere",
    items: [
      { label: "GitHub ↗", href: "https://github.com/codebrise", isExternal: true },
      { label: "Open source", href: "/open-source" },
      { label: "Experiments", href: "/experiments" },
    ],
  },
  {
    title: "Say hello",
    items: [
      { label: "Find us on GitHub ↗", href: "https://github.com/codebrise", isExternal: true },
      { label: "Studio updates", href: "/updates" },
      { label: "Contact studio", href: "/contact" },
    ],
  },
];

