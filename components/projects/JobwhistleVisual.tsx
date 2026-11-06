import * as React from "react";

const uptimeBars = [
  78, 90, 59, 83, 93, 72, 88, 98, 75, 88,
  65, 95, 84, 99, 72, 92, 80, 96, 73, 90,
];

export function JobwhistleVisual() {
  return (
    <div
      className="relative flex-1 min-h-[190px] my-4 select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-2 bottom-0 p-4 rounded-[15px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] shadow-[0_25px_50px_rgba(0,0,0,0.25)] [transform:perspective(900px)_rotateY(-8deg)_rotateX(3deg)]">
        <div className="flex gap-1 mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
        </div>

        <div className="flex justify-between items-center gap-2 mb-2.5 font-mono text-[8px] text-white/65">
          <span>MONITOR OVERVIEW</span>
          <strong className="text-[#68DDC0] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68DDC0]" />
            ALL SYSTEMS NORMAL
          </strong>
        </div>

        <div className="flex items-end gap-[3px] h-[35px] my-2.5">
          {uptimeBars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${i % 3 === 2 ? Math.min(h, 55) : h}%` }}
              className={`flex-1 rounded-t-[4px] bg-gradient-to-b from-[#54DCB7] to-[#319B9C] ${
                i % 3 === 2 ? "opacity-45" : "opacity-85"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between py-1.5 border-t border-white/10 text-[8px] text-white/65">
          <span>api.example.dev</span>
          <b className="text-[#D5E9E5] font-medium">Operational · 42 ms</b>
        </div>
        <div className="flex items-center justify-between py-1.5 border-t border-white/10 text-[8px] text-white/65">
          <span>nightly-sync</span>
          <b className="text-[#D5E9E5] font-medium">Last ping · 2 min ago</b>
        </div>
      </div>
    </div>
  );
}
