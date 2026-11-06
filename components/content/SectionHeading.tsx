import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  count?: string;
  className?: string;
  align?: "left" | "between";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  count,
  className,
  align = "between",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:mb-11 mb-8",
        align === "between"
          ? "md:flex-row md:items-end md:justify-between md:gap-8"
          : "items-start",
        className
      )}
    >
      <div className="max-w-[720px]">
        {eyebrow && (
          <div className="mb-3">
            <Eyebrow variant={dark ? "dark" : "muted"}>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2
          className={cn(
            "text-[clamp(2.5rem,5.1vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.07em]",
            dark ? "text-white" : "text-cb-ink"
          )}
        >
          {title}
          {count && (
            <sup className="ml-2 font-mono text-[11px] tracking-normal font-normal align-top text-cb-text-muted/80">
              {count}
            </sup>
          )}
        </h2>
      </div>

      {intro && (
        <p
          className={cn(
            "max-w-[340px] text-[13px] leading-[1.8] mb-1.5",
            dark ? "text-[#aeb6c4]" : "text-cb-text-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

