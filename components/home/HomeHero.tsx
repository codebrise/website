import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreezeVisual } from "./BreezeVisual";

export function HomeHero() {
  return (
    <section className="site-shell pt-3 md:pt-5" aria-labelledby="hero-title">
      <div className="relative isolate overflow-hidden min-h-[580px] md:min-h-[630px] rounded-[24px] md:rounded-[var(--cb-radius-xl)] bg-[#0B1020] text-white p-6 sm:p-10 md:p-[clamp(44px,6vw,82px)] pb-14 shadow-[0_28px_80px_rgba(5,11,27,0.34)] grid grid-cols-1 lg:grid-cols-[minmax(0,0.93fr)_minmax(400px,1.07fr)] items-center gap-8">
        {/* Background glow and subtle grid */}
        <div
          className="absolute -z-20 inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_78%_22%,rgba(83,109,254,0.20),transparent_34%),radial-gradient(ellipse_at_66%_92%,rgba(128,87,245,0.17),transparent_32%),linear-gradient(130deg,#0B1020_0%,#111827_54%,#0B1020_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute -z-10 inset-0 opacity-[0.16] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:62px_62px] [mask-image:linear-gradient(90deg,transparent_0%,#000_60%,#000_100%)]"
          aria-hidden="true"
        />

        {/* Copy */}
        <div className="relative z-10 max-w-[560px]">
          <div className="inline-flex items-center gap-2.5 mb-6 md:mb-7 text-[#C4CBD9] text-[9px] md:text-[10px] font-bold tracking-[0.17em] uppercase">
            <span
              className="w-2 h-2 rounded-full bg-cb-mint shadow-[0_0_0_5px_rgba(66,214,176,0.12)] shrink-0"
              aria-hidden="true"
            />
            Curious by nature. Useful by design.
          </div>

          <h1
            id="hero-title"
            className="text-[clamp(3.3rem,6.25vw,5.5rem)] font-medium leading-[0.99] tracking-[-0.075em]"
          >
            We make
            <br />
            <span className="serif text-[#B6B8FF] italic font-normal text-[1.08em] tracking-[-0.045em]">
              useful things
            </span>
            <br />
            move forward.
          </h1>

          <p className="mt-6 text-sm md:text-[15px] leading-[1.8] text-[#AEB6C4] max-w-[430px]">
            A small independent studio building thoughtful software, developer tools
            and experiments for people who like making things better.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-full bg-[#F7F6F2] text-cb-ink text-xs font-bold shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.22)] hover:bg-white"
            >
              Explore the work
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <Link
              href="#studio"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#DCE2ED] hover:text-white transition-colors duration-200"
            >
              A little about us
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* 3D Decorative visual */}
        <BreezeVisual />

        {/* Micro-notes on frame */}
        <div className="absolute left-6 md:left-[clamp(34px,6vw,82px)] bottom-4 md:bottom-7 font-mono text-[8px] md:text-[9px] tracking-[0.07em] text-white/40">
          CODEBRISE / INDEPENDENT SOFTWARE STUDIO
        </div>
        <div className="absolute right-6 md:right-[clamp(34px,6vw,82px)] bottom-4 md:bottom-7 font-mono text-[8px] md:text-[9px] text-white/40">
          01 — 04
        </div>
      </div>
    </section>
  );
}
