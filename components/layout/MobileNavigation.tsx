"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 0.8, 0.24, 1] }}
          className="md:hidden overflow-hidden absolute top-full left-0 right-0 z-50 bg-[#F1EFE9]/95 backdrop-blur-xl border-b border-cb-border shadow-[0_16px_30px_rgba(17,21,29,0.08)] px-[var(--cb-gutter)]"
        >
          <div className="flex flex-col py-4">
            {items.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 + 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center min-h-[44px] py-3 text-sm font-semibold text-[#505762] hover:text-cb-violet border-b border-cb-border/60 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
