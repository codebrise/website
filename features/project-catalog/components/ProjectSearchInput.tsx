import * as React from "react";
import { Search, X } from "lucide-react";

interface ProjectSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ProjectSearchInput({
  value,
  onChange,
  placeholder = "Search projects, tags, tools...",
}: ProjectSearchInputProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#727984] pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[42px] pl-10 pr-9 rounded-full border border-cb-border bg-white/60 text-xs text-cb-ink placeholder:text-[#9299A2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-cb-violet/40 focus:border-cb-violet transition-all"
        aria-label="Search projects"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-cb-text-muted hover:text-cb-ink p-0.5 rounded-full"
          aria-label="Clear search"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

