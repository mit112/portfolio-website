"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { AbilityFrame } from "@/components/icons/DotaIcons";

const ABILITIES = [
  { key: "Q", label: "StreakSync" },
  { key: "W", label: "FlickSwiper" },
  { key: "E", label: "Fond" },
  { key: "R", label: "BirthdayQuest" },
] as const;

function scrollToAbilities() {
  const el = document.getElementById("abilities");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function AbilityBar() {
  const { activeSection } = useActiveSection();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const isAbilitiesActive = activeSection === "abilities";

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 bg-bg-hud/95 backdrop-blur-lg border border-[rgba(178,138,51,0.2)] rounded-lg px-4 py-2 transition-shadow duration-500",
        isAbilitiesActive && "shadow-[0_0_20px_rgba(39,174,158,0.25)] border-accent-teal/40"
      )}
      role="navigation"
      aria-label="Ability bar"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      {ABILITIES.map(({ key, label }) => (
        <div key={key} className="relative">
          <button
            onClick={scrollToAbilities}
            onMouseEnter={() => setHoveredKey(key)}
            onMouseLeave={() => setHoveredKey(null)}
            className="transition-all duration-200"
            aria-label={`${label} — ability ${key}`}
          >
            <AbilityFrame size={40} active={hoveredKey === key || isAbilitiesActive}>
              <span className="font-mono text-sm font-bold text-accent-teal">{key}</span>
            </AbilityFrame>
          </button>

          {/* Tooltip */}
          <span
            className={cn(
              "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-bg-elevated text-[10px] font-mono text-text-secondary rounded whitespace-nowrap transition-opacity duration-150 pointer-events-none",
              hoveredKey === key ? "opacity-100" : "opacity-0"
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
