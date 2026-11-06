import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { EmptyState } from "@/components/content/EmptyState";

export const metadata: Metadata = {
  title: "Apps & Games",
  description:
    "Mobile experiments, indie games, and interactive digital craft from CodeBrise.",
};

export default function AppsAndGamesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Interactive & Mobile"
            title={
              <>
                Playful ideas,
                <br />
                taking <span className="serif text-[#32C7D0] italic">shape.</span>
              </>
            }
            intro="We build small mobile applications and experimental indie game prototypes driven by curiosity and tactile feel."
          />

          <div className="max-w-2xl mt-8">
            <EmptyState
              title="Mobile applications & games are in early exploration."
              description="We are currently prototyping two small mobile utilities and a tactile puzzle mechanic. Detailed devlogs and prototype previews will be shared here once ready."
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
