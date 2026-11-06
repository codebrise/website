import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

export function generateStudioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/codebrise-lockup-light.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.githubUrl],
  };
}

export function generateProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
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
      url: siteConfig.url,
    },
  };
}

