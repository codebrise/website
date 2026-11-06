"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavItem } from "@/types/navigation";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  githubUrl: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  githubUrl,
}: MobileNavigationProps) {
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav"
      className="md:hidden absolute top-full left-0 right-0 z-50 bg-[#F1EFE9]/95 backdrop-blur-xl border-b border-cb-border shadow-[0_16px_30px_rgba(17,21,29,0.08)] px-[var(--cb-gutter)] py-4 transition-all duration-300"
    >
      <div className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center min-h-[44px] py-3 text-sm font-semibold text-[#505762] hover:text-cb-violet border-b border-cb-border/60 transition-colors"
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-4 pb-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2.5 w-full min-h-[44px] px-5 py-3 rounded-full bg-cb-ink text-white text-xs font-bold shadow-sm transition-transform active:scale-[0.98]"
          >
            Find us on GitHub
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
