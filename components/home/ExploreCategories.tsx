import * as React from "react";
import Link from "next/link";
import { AppWindow, Code2, Sparkles, Share2 } from "lucide-react";
import { categories } from "@/content/categories";
import { Eyebrow } from "@/components/content/Eyebrow";

export function ExploreCategories() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cb-ink text-white shadow-[0_8px_18px_rgba(17,21,29,0.12)]">
            <AppWindow className="size-4.5" aria-hidden="true" />
          </div>
        );
      case 1:
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#7652E8,#4F80EE)] text-white shadow-[0_8px_18px_rgba(17,21,29,0.12)]">
            <Code2 className="size-4.5" aria-hidden="true" />
          </div>
        );
      case 2:
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#5969E9,#32B7C1)] text-white shadow-[0_8px_18px_rgba(17,21,29,0.12)]">
            <Sparkles className="size-4.5" aria-hidden="true" />
          </div>
        );
      case 3:
      default:
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A7E4D0] text-[#17362E] shadow-[0_8px_18px_rgba(17,21,29,0.12)]">
            <Share2 className="size-4.5" aria-hidden="true" />
          </div>
        );
    }
  };

  return (
    <section className="site-shell py-14 md:py-20" id="practice" aria-labelledby="practice-title">
      <div className="grid grid-cols-1 md:grid-cols-[0.78fr_1.22fr] gap-8 md:gap-16 items-start mb-10">
        <div>
          <Eyebrow>What we make</Eyebrow>
          <h2
            id="practice-title"
            className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.03] tracking-[-0.07em] mt-3"
          >
            Different shapes.
            <br />
            <em className="serif text-[#7559DF] not-italic">One curiosity.</em>
          </h2>
        </div>
        <p className="text-[13px] leading-[1.9] text-cb-text-muted md:mt-7 max-w-[450px]">
          We don’t work inside a single category. We follow useful problems, interesting ideas
          and the occasional rabbit hole—then build something real enough to share.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((cat, idx) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group flex flex-col justify-between min-h-[205px] p-5 rounded-[var(--cb-radius-md)] border border-cb-border bg-white/40 hover:bg-[#FBFAF7] hover:border-cb-violet/35 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#A3A7AC]">
                {cat.number}
              </span>
              {getIcon(idx)}
            </div>

            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.035em] mb-1 group-hover:text-cb-violet transition-colors">
                {cat.title}
              </h3>
              <p className="text-[10px] leading-[1.65] text-cb-text-muted">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
