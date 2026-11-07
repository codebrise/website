import { siteConfig, getSiteUrl, getCanonicalUrl } from "@/content/site";
import type { Project } from "@/types/project";

export function generateStudioJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: `${siteUrl}/brand/codebrise-lockup-light.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.socialProfiles,
  };
}

export function generateWebSiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: getCanonicalUrl(crumb.path),
    })),
  };
}

export function generateProjectJsonLd(project: Project) {
  const projectUrl = getCanonicalUrl(`/work/${project.slug}`);

  // For live launched products, use genuine SoftwareApplication schema
  if (project.status === "live") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      headline: project.tagline,
      description: project.summary,
      url: projectUrl,
      applicationCategory: project.kind,
      operatingSystem: "Web, Cross-platform",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: getSiteUrl(),
      },
    };
  }

  // For explorations/concepts/experiments, use CreativeWork / SoftwareSourceCode
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url: projectUrl,
    genre: project.kind,
    creativeWorkStatus: project.status,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
  };
}
