import * as React from "react";

export function SliprowVisual() {
  return (
    <div
      className="relative flex-1 min-h-[190px] my-4 select-none"
      aria-hidden="true"
    >
      <div className="absolute w-[84%] h-[172px] left-[8%] top-2 p-3.5 rounded-[11px] bg-white/80 border border-[#252737]/10 shadow-[0_22px_35px_rgba(40,36,68,0.12)] -rotate-[5deg]">
        <div className="absolute -z-10 inset-x-3 -bottom-2 top-3 rounded-[11px] bg-cb-violet/15 rotate-[8deg]" />
        
        <div className="font-mono text-[7px] tracking-[0.13em] text-[#7251E7] font-semibold">
          INVOICE / 0048
        </div>
        <div className="my-2 text-xs font-bold text-[#202438]">
          Northline Studio
        </div>
        
        <div className="h-1 my-1.5 rounded-full bg-[#E2E2EA] w-full" />
        <div className="h-1 my-1.5 rounded-full bg-[#E2E2EA] w-[46%]" />

        <div className="grid grid-cols-[1.2fr_0.8fr_0.7fr] gap-1 mt-3">
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
          <span className="h-3 rounded-[3px] bg-[#E8E8F0]" />
        </div>

        <div className="w-[38%] h-2 mt-2.5 ml-auto rounded-[3px] bg-[#7B61E9]" />
      </div>
    </div>
  );
}

