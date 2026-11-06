import * as React from "react";
import { studioProcessSteps } from "@/content/manifesto";
import { SectionHeading } from "@/components/content/SectionHeading";

export function StudioProcess() {
  return (
    <section className="site-shell py-14 md:py-24" aria-labelledby="process-title">
      <SectionHeading
        eyebrow="How we move"
        title={
          <>
            A simple rhythm.
            <br />
            <span className="serif">Room to wander.</span>
          </>
        }
        intro="Not a factory line. Just a practical way to turn a good question into something people can use."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-cb-border mt-8">
        {studioProcessSteps.map((step, idx) => (
          <article
            key={step.number}
            className={`relative p-6 pt-7 md:pr-7 ${
              idx > 0
                ? "md:pl-7 md:border-l md:border-t-0 border-t border-cb-border"
                : "pl-0"
            }`}
          >
            <span className="font-mono text-[10px] text-[#8C929A]">
              {step.number}
            </span>
            <span
              className="absolute top-6 right-6 text-xl text-cb-violet/70 font-mono"
              aria-hidden="true"
            >
              {step.glyph}
            </span>

            <h3 className="text-[22px] font-semibold tracking-[-0.05em] mt-7 mb-2 text-cb-ink">
              {step.title}
            </h3>
            <p className="text-[11px] leading-[1.85] text-cb-text-muted max-w-[280px]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
