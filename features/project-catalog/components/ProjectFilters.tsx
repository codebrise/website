import * as React from "react";
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
  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="group"
      aria-label="Filter directory projects"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          aria-pressed={currentFilter === option.id}
          className={`px-3.5 py-2 rounded-full text-[10px] font-bold cursor-pointer transition-all duration-200 ${
            currentFilter === option.id
              ? "bg-cb-ink text-white shadow-sm"
              : "bg-transparent text-[#727984] hover:text-cb-ink hover:bg-white/60"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

