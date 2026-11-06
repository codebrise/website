import { getFeaturedProjects } from "@/lib/content-registry";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { SignalStrip } from "@/components/home/SignalStrip";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ExploreCategories } from "@/components/home/ExploreCategories";
import { StudioManifesto } from "@/components/home/StudioManifesto";
import { StudioProcess } from "@/components/home/StudioProcess";
import { OpenSourceSection } from "@/components/home/OpenSourceSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <main id="top" className="flex-1">
        <HomeHero />
        <SignalStrip />
        <ScrollReveal>
          <FeaturedWork initialProjects={featuredProjects} />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <ExploreCategories />
        </ScrollReveal>
        <ScrollReveal>
          <StudioManifesto />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <StudioProcess />
        </ScrollReveal>
        <ScrollReveal>
          <OpenSourceSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
