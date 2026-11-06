"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { primaryNavigation, siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#F1EFE9]/85 backdrop-blur-[18px] border-b border-cb-ink/10 transition-colors">
      <header className="site-shell min-h-[70px] md:min-h-[82px] flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="CodeBrise home"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cb-violet rounded-sm"
        >
          <Image
            src="/brand/codebrise-lockup-light.png"
            alt="CodeBrise — Build. Experiment. Release."
            width={214}
            height={34}
            priority
            className="w-[158px] sm:w-[174px] md:w-[214px] h-auto object-contain"
          />
        </Link>

        <nav
          className="hidden md:flex items-center gap-[clamp(20px,2.8vw,42px)] ml-auto"
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#505762] hover:text-cb-violet text-xs font-semibold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-4">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-cb-ink text-white text-[11px] font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-cb-ink-raised"
          >
            Find us on GitHub
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-cb-border bg-transparent text-cb-ink transition-colors hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cb-violet"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <Menu className="size-4" aria-hidden="true" />
          )}
        </button>
      </header>

      <MobileNavigation
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={primaryNavigation}
        githubUrl={siteConfig.githubUrl}
      />
    </div>
  );
}

