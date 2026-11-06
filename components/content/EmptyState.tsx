import * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  title = "Nothing on this shelf just yet.",
  description = "New ideas are still taking shape. Check back as the workbench grows.",
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "my-4 p-8 rounded-[var(--cb-radius-md)] border border-dashed border-[#c9c5bc] bg-white/30 text-center text-xs text-cb-text-muted",
        className
      )}
    >
      <strong className="block mb-1 text-sm font-semibold tracking-[-0.02em] text-cb-ink">
        {title}
      </strong>
      <p className="max-w-md mx-auto leading-relaxed">{description}</p>
    </div>
  );
}
