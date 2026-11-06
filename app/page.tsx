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

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />
      <main id="top" className="flex-1">
        <HomeHero />
        <SignalStrip />
        <FeaturedWork initialProjects={featuredProjects} />
        <ExploreCategories />
        <StudioManifesto />
        <StudioProcess />
        <OpenSourceSection />
      </main>
      <SiteFooter />
    </>
  );
}
