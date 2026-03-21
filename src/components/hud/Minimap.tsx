"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { DotaMinimap } from "@/components/icons/DotaAssets";

const SECTION_LABELS: Record<string, string> = {
  hero: "HRO",
  attributes: "ATR",
  abilities: "ABL",
  "talent-tree": "TAL",
  items: "INV",
  stats: "SCR",
  lore: "LOR",
  contact: "GG",
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Minimap() {
  const { activeSection, sectionIds } = useActiveSection();

  return (
    <div
      className="fixed bottom-4 left-4 z-40 hidden lg:block w-32 h-44 bg-bg-hud/95 backdrop-blur-lg border border-[rgba(178,138,51,0.15)] rounded"
      role="navigation"
      aria-label="Minimap navigation"
    >
      {/* Dota minimap background */}
      <DotaMinimap className="absolute inset-2 opacity-30" />

      {/* Title */}
      <div className="relative text-[8px] font-mono text-accent-gold/60 uppercase tracking-widest px-2 pt-1.5 select-none">
        MAP
      </div>

      {/* Section dots */}
      <div className="flex flex-col justify-between h-[calc(100%-20px)] px-2 py-2">
        {sectionIds.map((id) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center gap-2 group"
              aria-label={`Navigate to ${id}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300 shrink-0",
                  isActive
                    ? "w-3 h-3 bg-accent-teal shadow-[0_0_12px_rgba(39,174,158,0.8)]"
                    : "w-2 h-2 bg-border-subtle group-hover:bg-text-muted"
                )}
              />
              <span
                className={cn(
                  "text-[9px] font-mono transition-colors duration-200",
                  isActive ? "text-accent-teal" : "text-text-secondary group-hover:text-text-primary"
                )}
              >
                {SECTION_LABELS[id]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
