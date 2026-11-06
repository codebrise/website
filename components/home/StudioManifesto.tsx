import * as React from "react";
import { studioPrinciples } from "@/content/manifesto";
import { Eyebrow } from "@/components/content/Eyebrow";

export function StudioManifesto() {
  return (
    <section className="site-shell my-8 md:my-14" id="studio">
      <div className="relative isolate overflow-hidden rounded-[24px] md:rounded-[var(--cb-radius-xl)] bg-cb-ink text-white p-7 sm:p-10 md:p-[clamp(38px,5vw,64px)] grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-10 md:gap-14 items-center">
        {/* Subtle ambient blur aura */}
        <div
          className="absolute -z-10 -right-32 -top-64 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(83,109,254,0.25),transparent_67%)] pointer-events-none"
          aria-hidden="true"
        />

        <div>
          <Eyebrow variant="dark">A note from the studio</Eyebrow>
          <h2 className="text-[clamp(2.4rem,4.4vw,3.75rem)] font-medium leading-[1.04] tracking-[-0.07em] mt-3.5 max-w-[620px]">
            Small doesn’t mean{" "}
            <em className="serif text-[#B9BBFF] not-italic">ordinary.</em>
          </h2>
          <p className="mt-5 text-xs md:text-[13px] leading-[1.9] text-[#AAB3C2] max-w-[430px]">
            CodeBrise is an independent software studio. We like useful details, clear
            interfaces and projects with a point of view. We keep the team and the
            process light, so the work can stay thoughtful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
          {studioPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col justify-between min-h-[125px] p-4 rounded-2xl border border-white/15 bg-white/[0.035] backdrop-blur-md"
            >
              <span className="font-mono text-[9px] text-cb-cyan">
                {principle.number}
              </span>
              <strong className="block text-[13px] font-semibold tracking-[-0.02em] text-white mt-4">
                {principle.title}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

