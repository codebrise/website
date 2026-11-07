import type { NavGroup, NavItem } from "@/types/navigation";

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.replace(/\/+$/, "");
  }
  return "https://codebrise.com";
}

export function getCanonicalUrl(pathname: string = ""): string {
  const base = getSiteUrl();
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (cleanPath === "/" || cleanPath === "") {
    return base;
  }
  return `${base}${cleanPath.replace(/\/+$/, "")}`;
}

export const siteConfig = {
  name: "CodeBrise",
  legalName: "CodeBrise Studio",
  tagline: "Build. Experiment. Release.",
  titleTemplate: "%s — CodeBrise",
  defaultTitle: "CodeBrise — Independent Software & Product Studio",
  description:
    "An independent software studio building useful products, thoughtful developer tools and open experiments.",
  url: getSiteUrl(),
  language: "en",
  locale: "en_US",
  author: "CodeBrise",
  email: "hello@codebrise.com",
  twitterHandle: "@codebrise",
  githubUrl: "https://github.com/codebrise",
  socialProfiles: [
    "https://github.com/codebrise",
  ],
  ogImages: {
    default: "/og-image.png",
    home: "/og-image.png",
    work: "/og-image.png",
    products: "/og-image.png",
    developerTools: "/og-image.png",
    experiments: "/og-image.png",
    openSource: "/og-image.png",
    about: "/og-image.png",
    contact: "/og-image.png",
  },
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
