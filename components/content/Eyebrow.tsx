import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "muted";
}

export function Eyebrow({
  children,
  className,
  variant = "muted",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.16em] uppercase",
        "before:content-[''] before:w-[18px] before:h-[1px] before:bg-current before:opacity-65",
        variant === "muted" && "text-cb-text-muted",
        variant === "dark" && "text-[#aeb7c8]",
        variant === "light" && "text-white/70",
        className
      )}
    >
      {children}
    </span>
  );
}

