"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface SkipButtonProps {
  mode: "skip" | "replay";
  onClick: () => void;
}

export default function SkipButton({ mode, onClick }: SkipButtonProps) {
  // Escape key triggers skip
  useEffect(() => {
    if (mode !== "skip") return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClick();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode, onClick]);

  if (mode === "skip") {
    return (
      <button
        onClick={onClick}
        className="absolute bottom-6 right-6 text-sm text-text-secondary border border-border-subtle/50 rounded px-3 py-1 hover:border-accent-teal/30 hover:text-text-primary transition-colors z-10"
        aria-label="Skip intro"
      >
        Skip Intro &rarr;
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm text-text-muted hover:text-text-primary transition-colors"
      )}
      aria-label="Replay draft sequence"
    >
      &#9654; Replay Draft
    </button>
  );
}
