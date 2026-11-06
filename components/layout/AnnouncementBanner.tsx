import * as React from "react";

export function AnnouncementBanner() {
  return (
    <div className="bg-cb-ink text-white/80 text-[11px] tracking-[0.04em]">
      <div className="site-shell min-h-[34px] flex items-center justify-center gap-2.5 text-center py-1">
        <span
          className="w-1.5 h-1.5 rounded-full bg-cb-cyan shadow-[0_0_0_4px_rgba(50,199,208,0.12)] shrink-0"
          aria-hidden="true"
        />
        <span>
          <strong className="text-white font-semibold">
            Independent software studio
          </strong>{" "}
          — building useful things, one idea at a time.
        </span>
      </div>
    </div>
  );
}

