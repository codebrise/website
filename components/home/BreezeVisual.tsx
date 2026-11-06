"use client";

import * as React from "react";

export function BreezeVisual() {
  const stageRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (!stageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    stageRef.current.style.transform = `rotateY(${-12 + x * 7}deg) rotateX(${5 - y * 5}deg) translate3d(${x * 7}px, ${y * 5}px, 0)`;
  };

  const handlePointerLeave = () => {
    if (stageRef.current) {
      stageRef.current.style.transform = "";
    }
  };

  return (
    <div
      className="relative min-h-[340px] md:min-h-[470px] grid place-items-center [perspective:1100px] [transform-style:preserve-3d] select-none"
      aria-label="Abstract three-dimensional breeze field artwork"
      role="img"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={stageRef}
        className="relative w-full max-w-[600px] h-[340px] md:h-[480px] [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(5deg)] transition-transform duration-700 ease-out"
      >
        {/* Soft background halo */}
        <div className="absolute w-[430px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] rounded-full bg-[radial-gradient(ellipse,rgba(83,109,254,0.22),rgba(128,87,245,0.10)_38%,transparent_70%)] blur-[20px]" />

        {/* Orbiting concentric rings */}
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          <div className="absolute left-1/2 top-1/2 w-[350px] md:w-[450px] h-[135px] md:h-[176px] -ml-[175px] md:-ml-[225px] -mt-[67px] md:-mt-[88px] rounded-full border border-[rgba(50,199,208,0.7)] [transform:translateZ(82px)_rotateX(66deg)_rotateZ(-22deg)] shadow-[0_0_24px_rgba(83,109,254,0.10)]" />
          <div className="absolute left-1/2 top-1/2 w-[390px] md:w-[510px] h-[170px] md:h-[225px] -ml-[195px] md:-ml-[255px] -mt-[85px] md:-mt-[112px] rounded-full border border-[rgba(128,87,245,0.72)] [transform:translateZ(20px)_rotateX(67deg)_rotateZ(21deg)]" />
          <div className="absolute left-1/2 top-1/2 w-[300px] md:w-[385px] h-[220px] md:h-[290px] -ml-[150px] md:-ml-[192px] -mt-[110px] md:-mt-[145px] rounded-full border border-[rgba(120,151,255,0.39)] [transform:translateZ(-45px)_rotateX(72deg)_rotateZ(83deg)]" />
          <div className="absolute left-1/2 top-1/2 w-[420px] md:w-[560px] h-[230px] md:h-[310px] -ml-[210px] md:-ml-[280px] -mt-[115px] md:-mt-[155px] rounded-full border border-white/20 [transform:translateZ(-90px)_rotateX(72deg)_rotateZ(-43deg)]" />
        </div>

        {/* Central glowing translucent orb */}
        <div className="absolute w-[155px] md:w-[195px] h-[155px] md:h-[195px] left-1/2 top-[49%] -translate-x-1/2 -translate-y-1/2 [transform:translate(-50%,-50%)_translateZ(55px)] rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.26),rgba(166,183,255,0.11)_27%,rgba(55,82,160,0.08)_54%,rgba(5,10,28,0.06)_70%)] shadow-[inset_-22px_-22px_55px_rgba(4,8,26,0.55),inset_12px_12px_30px_rgba(255,255,255,0.13),0_0_80px_rgba(83,109,254,0.20)] backdrop-blur-[3px] animate-pulse">
          <div className="absolute inset-4 rounded-full border border-white/15" />
          <div className="absolute left-6 top-5 w-14 h-8 rounded-full bg-white/25 blur-[14px] -rotate-[32deg]" />
        </div>

        {/* Breeze dynamic curves */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible [transform:translateZ(100px)] drop-shadow-[0_0_9px_rgba(83,109,254,0.42)]"
          viewBox="0 0 600 480"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="breezeGradient" x1="0" y1="0" x2="1" y2="0.2">
              <stop offset="0%" stopColor="#8057F5" />
              <stop offset="52%" stopColor="#536DFE" />
              <stop offset="100%" stopColor="#32C7D0" />
            </linearGradient>
          </defs>
          <path
            d="M37 260 C120 93 218 87 287 177 S433 324 563 170"
            fill="none"
            stroke="url(#breezeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="opacity-90"
          />
          <path
            d="M57 315 C148 145 238 153 306 223 S437 337 548 234"
            fill="none"
            stroke="url(#breezeGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-60"
          />
          <path
            d="M66 199 C162 44 252 58 323 133 S460 245 554 105"
            fill="none"
            stroke="url(#breezeGradient)"
            strokeWidth="1"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>

        {/* Tactile floating micro-chips */}
        <div className="absolute top-12 md:top-20 left-1 md:left-2 z-10 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 bg-[#131B2F]/80 text-[#E9EDF7] text-[8px] md:text-[9px] shadow-lg backdrop-blur-md [transform:translateZ(150px)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cb-cyan shadow-[0_0_10px_#32C7D0]" />
          Ideas in motion
        </div>
        <div className="absolute bottom-12 md:bottom-20 right-0 z-10 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 bg-[#131B2F]/80 text-[#E9EDF7] text-[8px] md:text-[9px] shadow-lg backdrop-blur-md [transform:translateZ(125px)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cb-cyan shadow-[0_0_10px_#32C7D0]" />
          Made with intention
        </div>
        <div className="absolute top-6 md:top-10 right-6 md:right-11 z-10 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/15 bg-[#131B2F]/80 text-[#E9EDF7] text-[8px] md:text-[9px] shadow-lg backdrop-blur-md [transform:translateZ(190px)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cb-cyan shadow-[0_0_10px_#32C7D0]" />
          Small by design
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/45">
          A little code. A little breeze. A lot of possibility.
        </div>
      </div>
    </div>
  );
}
