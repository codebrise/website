import * as React from "react";
import { cn } from "@/lib/utils";

interface MetadataLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "mono" | "uppercase" | "subtle";
}

export function MetadataLabel({
  children,
  className,
  variant = "mono",
}: MetadataLabelProps) {
  return (
    <span
      className={cn(
        "text-[9px] tracking-[0.08em]",
        variant === "mono" && "font-mono uppercase text-cb-text-muted/80",
        variant === "uppercase" && "font-sans uppercase font-bold text-cb-text-muted",
        variant === "subtle" && "font-mono text-cb-text-muted/60",
        className
      )}
    >
      {children}
    </span>
  );
}

