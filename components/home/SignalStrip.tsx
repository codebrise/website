import * as React from "react";

const signals = [
  "Software",
  "Developer tools",
  "AI & automation",
  "Apps & games",
  "Open source",
];

export function SignalStrip() {
  return (
    <div
      className="site-shell flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-5 md:py-6 px-1 border-b border-cb-border"
      aria-label="Areas of studio work"
    >
      <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#9299A2]">
        A few directions we explore
      </span>

      <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2">
        {signals.map((item) => (
          <span
            key={item}
            className="flex items-center text-[10px] font-bold tracking-[0.08em] uppercase text-[#555D68]"
          >
            <span
              className="mr-2 text-cb-violet text-xs leading-none"
              aria-hidden="true"
            >
              ✳
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

