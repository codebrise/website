import * as React from "react";
import type { ProjectStatus as StatusType } from "@/types/project";
import { formatStatusLabel } from "@/lib/content-validation";
import { cn } from "@/lib/utils";

interface ProjectStatusProps {
  status: StatusType;
  className?: string;
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const label = formatStatusLabel(status);

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full border border-current font-mono text-[8px] font-bold tracking-[0.08em] uppercase opacity-75",
        className
      )}
    >
      {label}
    </span>
  );
}

