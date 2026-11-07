"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ProjectKind } from "@/types/project";

export interface FilterOption {
  id: string;
  label: string;
  kind?: ProjectKind;
}

interface ProjectFiltersProps {
  currentFilter: string;
  onSelect: (id: string) => void;
  options: FilterOption[];
}

export function ProjectFilters({
  currentFilter,
  onSelect,
  options,
}: ProjectFiltersProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="group"
      aria-label="Filter directory projects"
    >
      {options.map((option) => {
        const isActive = currentFilter === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            aria-pressed={isActive}
            className={`relative px-3.5 py-2 rounded-full text-[10px] font-bold cursor-pointer transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cb-violet ${
              isActive ? "text-white" : "text-[#727984] hover:text-cb-ink"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={shouldReduceMotion ? undefined : "activeFilterPill"}
                className="absolute inset-0 rounded-full bg-cb-ink shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
