import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerNavigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-shell pt-10 pb-8 mt-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 py-6 md:py-11 border-b border-cb-border">
        <div className="max-w-[280px]">
          <Link href="/" aria-label="CodeBrise">
            <Image
              src="/brand/codebrise-lockup-light.png"
              alt="CodeBrise"
              width={205}
              height={32}
              className="w-[180px] md:w-[205px] h-auto object-contain"
            />
          </Link>
          <p className="mt-3.5 text-xs text-cb-text-muted leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-[clamp(28px,6vw,85px)]">
          {footerNavigation.map((group) => (
            <div key={group.title} className="flex flex-col gap-2.5 min-w-[110px]">
              <strong className="mb-1 font-mono text-[9px] font-medium tracking-[0.12em] uppercase text-[#9A9FA6]">
                {group.title}
              </strong>
              {group.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  className="text-[11px] text-[#555D67] hover:text-cb-violet transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 font-mono text-[9px] tracking-[0.05em] text-[#9298A0]">
        <span>
          © {currentYear} CODEBRISE. BUILD. EXPERIMENT. RELEASE.
        </span>
        <span className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-[linear-gradient(112deg,#8057f5_0%,#536dfe_56%,#32c7d0_100%)]"
            aria-hidden="true"
          />
          Made with intention.
        </span>
      </div>
    </footer>
  );
}
