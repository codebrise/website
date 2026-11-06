import type { Metadata } from "next";
import { studioUpdates } from "@/content/updates";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";

export const metadata: Metadata = {
  title: "Studio Updates — Fieldnotes & Releases",
  description:
    "Chronological dispatches, release notes, and architecture notes from CodeBrise.",
};

export default function UpdatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Studio Dispatches"
            count={`01 / 0${studioUpdates.length}`}
            title={
              <>
                Fieldnotes &
                <br />
                studio <span className="serif text-[#8057F5] italic">updates.</span>
              </>
            }
            intro="Brief observations, changelogs, and behind-the-scenes progress notes as work moves forward."
          />

          <div className="flex flex-col gap-6 max-w-3xl mt-8">
            {studioUpdates.map((update) => (
              <article
                key={update.slug}
                className="p-6 md:p-8 rounded-[var(--cb-radius-md)] border border-cb-border bg-white/40 hover:bg-white/70 transition-colors"
              >
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-[#9A9FA6] mb-3">
                  <span>{update.date}</span>
                  <span>·</span>
                  <span className="text-cb-violet font-semibold">{update.category}</span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-cb-ink mb-2">
                  {update.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-cb-text-muted">
                  {update.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

