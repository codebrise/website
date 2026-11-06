import * as React from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/content/Eyebrow";

export function OpenSourceSection() {
  return (
    <section className="site-shell pb-10" id="open-source">
      <div className="relative isolate overflow-hidden rounded-[24px] md:rounded-[var(--cb-radius-xl)] bg-[linear-gradient(112deg,#8057F5_0%,#536DFE_56%,#32C7D0_100%)] text-white p-7 sm:p-10 md:p-[clamp(34px,5vw,62px)] flex flex-col md:flex-row md:items-end justify-between gap-8 shadow-xl">
        {/* Concentric rings */}
        <div
          className="absolute -z-10 w-[380px] h-[380px] right-[14%] -top-[270px] rounded-full border border-white/30 shadow-[0_0_0_28px_rgba(255,255,255,0.05),0_0_0_58px_rgba(255,255,255,0.035),0_0_0_92px_rgba(255,255,255,0.025)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[650px]">
          <Eyebrow variant="light">
            Built to be useful. Shared when possible.
          </Eyebrow>

          <h2 className="text-[clamp(2.5rem,5.2vw,4.25rem)] font-medium leading-[1] tracking-[-0.075em] mt-3.5">
            Good ideas get
            <br />
            better when <em className="serif not-italic">shared.</em>
          </h2>
        </div>

        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-full bg-white text-cb-ink text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 self-start md:self-auto"
        >
          Explore CodeBrise on GitHub
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

