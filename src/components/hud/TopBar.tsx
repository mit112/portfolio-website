"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { UltimateDiamond } from "@/components/icons/DotaIcons";

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

function formatGameClock(progress: number): string {
  const totalSeconds = Math.round(progress * 50 * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function TopBar() {
  const progress = useScrollProgress();
  const { activeSection, sectionIds } = useActiveSection();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-bg-hud/95 backdrop-blur-lg border-b border-[rgba(240,173,78,0.2)] flex items-center justify-between px-4 md:px-6"
      role="navigation"
      aria-label="Top navigation"
    >
      {/* Left: Logo */}
      <button
        onClick={() => scrollToSection("hero")}
        className="font-display text-sm tracking-[4px] text-accent-primary text-glow-primary uppercase select-none hover:text-accent-gold transition-colors duration-200"
        aria-label="Scroll to top"
      >
        MIT
      </button>

      {/* Center: Game clock */}
      <span className="font-mono text-sm text-text-secondary tabular-nums">
        {formatGameClock(progress)}
      </span>

      {/* Right: Section dots */}
      <div className="flex items-center gap-2">
        {sectionIds.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-center"
            aria-label={`Navigate to ${id} section`}
            aria-current={activeSection === id ? "true" : undefined}
          >
            {activeSection === id ? (
              <UltimateDiamond state="ready" size={10} />
            ) : (
              <UltimateDiamond state="cooldown" size={8} />
            )}
            {/* Hover label on md+ */}
            <span className="hidden md:block absolute top-full mt-2 px-1.5 py-0.5 bg-bg-elevated text-[9px] font-mono text-text-muted rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
              {SECTION_LABELS[id]}
            </span>
          </button>
        ))}
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
    </nav>
  );
}
