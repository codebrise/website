import * as React from "react";

export function FormspindleVisual() {
  return (
    <div
      className="relative flex-1 min-h-[190px] my-4 grid place-items-center select-none"
      aria-hidden="true"
    >
      <div className="w-[94%] p-3.5 rounded-[14px] border border-[#1B4D42]/20 bg-[#F8FFFB]/80 shadow-[0_20px_40px_rgba(36,93,80,0.11)] [transform:perspective(800px)_rotateY(7deg)_rotateX(2deg)]">
        <div className="flex gap-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#93B9AD]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#93B9AD]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#93B9AD]" />
        </div>

        <div className="font-mono text-[8px] text-[#5C8077] my-1">
          <b className="text-[#4A6BDB] font-semibold">POST</b> /v1/forms/contact
        </div>
        <div className="font-mono text-[8px] text-[#5C8077]">{"{"}</div>
        <div className="font-mono text-[8px] text-[#5C8077] pl-3">
          &quot;name&quot;: <span className="text-[#A66B32]">&quot;Maya&quot;</span>,
        </div>
        <div className="font-mono text-[8px] text-[#5C8077] pl-3">
          &quot;email&quot;: <span className="text-[#A66B32]">&quot;hello@…&quot;</span>,
        </div>
        <div className="font-mono text-[8px] text-[#5C8077] pl-3">
          &quot;message&quot;: <span className="text-[#A66B32]">&quot;Let&apos;s talk.&quot;</span>
        </div>
        <div className="font-mono text-[8px] text-[#5C8077]">
          {"}"}
          <span className="inline-block w-1 h-2.5 ml-1 bg-[#44C6A1] align-middle animate-pulse" />
        </div>
      </div>
    </div>
  );
}
