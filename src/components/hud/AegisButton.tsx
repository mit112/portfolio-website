"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AegisButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden lg:block">
      <a
        href="/resume.pdf"
        download
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative block w-14 h-14 rounded-full bg-gradient-to-br from-[#C9982D] to-[#E5B84D] flex items-center justify-center shadow-[0_0_20px_rgba(178,138,51,0.3)] transition-all duration-300",
          hovered && "shadow-[0_0_30px_rgba(178,138,51,0.6)] scale-110"
        )}
        aria-label="Download Resume (Aegis)"
      >
        {/* Download arrow */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-bg-primary"
        >
          <path
            d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Subtle pulsing glow ring */}
        <span className="absolute inset-0 rounded-full animate-[aegis-pulse_3s_ease-in-out_infinite]" />

        {/* Tooltip */}
        <span
          className={cn(
            "absolute bottom-full right-0 mb-2 px-2 py-1 bg-bg-elevated text-[10px] font-mono text-text-secondary rounded whitespace-nowrap transition-opacity duration-150 pointer-events-none",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          Download Resume (Aegis)
        </span>
      </a>
    </div>
  );
}
