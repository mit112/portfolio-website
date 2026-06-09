"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { inventory } from "@/data/skills";

const itemImages: Record<string, string> = {
  "Swift": "/dota/item-bkb.png",
  "SwiftUI": "/dota/item-forcestaff.png",
  "UIKit": "/dota/item-phaseboots.png",
  "Firebase": "/dota/item-blink.png",
  "MVVM": "/dota/item-ward.png",
  "async/await": "/dota/item-scepter.png",
};

export default function Inventory() {
  const mainItems = inventory.filter((i) => i.slot === "main");
  const backpackItems = inventory.filter((i) => i.slot === "backpack");
  const tpItem = inventory.find((i) => i.slot === "tp");
  const neutralItem = inventory.find((i) => i.slot === "neutral");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="section-dark relative py-20 md:py-28 overflow-hidden">
      {/* Atmospheric glow spots */}
      <div className="glow-spot glow-spot--primary absolute right-1/4 top-1/3 opacity-[0.12]" />
      <div className="glow-spot glow-spot--primary absolute left-[10%] bottom-[20%] opacity-[0.08]" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading dotaName="INVENTORY" plainName="Tech Stack" id="items" />

        <div className="space-y-8">
          {/* ---- Main Inventory Grid ---- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-[3px]">
                Main Items
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-border-subtle/60 to-transparent" />
              <span className="text-[9px] font-mono text-text-muted">
                6 / 6
              </span>
            </div>

            {/* The outer frame — mimics the Dota HUD inventory border */}
            <div className="relative rounded border border-border-subtle/60 bg-gradient-to-b from-bg-hud/80 to-bg-primary/60 p-[6px]">
              {/* Inner glow line along top edge */}
              <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-[3px]">
                {mainItems.map((item, i) => (
                  <div
                    key={item.name}
                    className="inv-slot relative aspect-square rounded-sm p-3 flex flex-col items-center justify-center text-center cursor-default group"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Slot number — top-left like Dota keybinds */}
                    <span className="absolute top-1.5 left-2 text-[8px] font-mono text-text-muted group-hover:text-accent-primary/70 transition-colors">
                      {i + 1}
                    </span>

                    {/* Subtle inner corner accents */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-primary/0 group-hover:border-accent-primary/30 transition-colors" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-primary/0 group-hover:border-accent-primary/30 transition-colors" />

                    {itemImages[item.name] && (
                      <Image src={itemImages[item.name]} alt={item.name} width={55} height={40} style={{ height: "auto" }} className="rounded-sm mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    )}
                    <span className="text-[8px] text-text-muted uppercase tracking-[2px] mb-1.5 font-mono group-hover:text-accent-primary/80 transition-colors">
                      {item.category}
                    </span>
                    <span className="text-sm font-mono text-text-primary font-semibold leading-tight group-hover:text-glow-primary transition-all">
                      {item.name}
                    </span>

                    {/* Tooltip */}
                    {hoveredItem === item.name && (
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20
                          px-4 py-3 w-[220px] text-xs text-text-secondary leading-relaxed
                          bg-gradient-to-b from-bg-elevated to-bg-secondary
                          border border-border-subtle rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                          whitespace-normal
                          animate-[draft-fade-in_0.15s_ease-out]"
                      >
                        {/* Tooltip top accent line */}
                        <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />
                        <span className="text-accent-primary font-mono font-semibold block mb-1 text-[11px]">
                          {item.name}
                        </span>
                        <span className="text-text-muted text-[9px] uppercase tracking-wider block mb-2">
                          {item.category}
                        </span>
                        {item.description}
                        {/* Tooltip arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-secondary border-b border-r border-border-subtle" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Backpack ---- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-[3px]">
                Backpack
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-border-subtle/40 to-transparent" />
              <span className="text-[9px] font-mono text-text-muted">
                {backpackItems.length} / 3
              </span>
            </div>

            <div className="relative rounded border border-border-subtle/40 bg-gradient-to-b from-bg-hud/40 to-bg-primary/30 p-[6px] max-w-xs">
              <div className="grid grid-cols-3 gap-[3px]">
                {backpackItems.map((item) => (
                  <div
                    key={item.name}
                    className="inv-slot relative aspect-square rounded-sm p-2.5 flex flex-col items-center justify-center text-center cursor-default
                      opacity-60 hover:opacity-100 transition-all duration-300 group"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Dimmed diagonal lines — signals "inactive" slot */}
                    <div className="absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(135deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_5px)] pointer-events-none rounded-sm" />

                    <span className="text-[7px] text-text-muted uppercase tracking-[2px] mb-1 font-mono group-hover:text-accent-primary/70 transition-colors">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-text-primary font-semibold leading-tight group-hover:text-glow-primary transition-all">
                      {item.name}
                    </span>

                    {/* Tooltip */}
                    {hoveredItem === item.name && (
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20
                          px-4 py-3 w-[200px] text-xs text-text-secondary leading-relaxed
                          bg-gradient-to-b from-bg-elevated to-bg-secondary
                          border border-border-subtle rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                          whitespace-normal
                          animate-[draft-fade-in_0.15s_ease-out]"
                      >
                        <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
                        <span className="text-text-primary font-mono font-medium block mb-1 text-[11px]">
                          {item.name}
                        </span>
                        {item.description}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-secondary border-b border-r border-border-subtle" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- TP Scroll + Neutral Item ---- */}
          <div className="flex gap-5 items-start border border-border-subtle/30 rounded-sm p-4 max-w-xs bg-gradient-to-b from-bg-hud/30 to-transparent">
            {tpItem && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-[3px]">
                    TP Scroll
                  </span>
                </div>
                <div
                  className="inv-slot relative w-28 aspect-square rounded-sm p-3 flex flex-col items-center justify-center text-center cursor-default group
                    border-accent-primary/20 hover:border-accent-primary/50"
                  onMouseEnter={() => setHoveredItem(tpItem.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Gold inner glow on hover */}
                  <div className="absolute inset-0 rounded-sm bg-accent-primary/0 group-hover:bg-accent-primary/[0.03] transition-colors pointer-events-none" />

                  <Image src="/dota/item-tp.png" alt="TP Scroll" width={44} height={32} style={{ height: "auto" }} className="rounded-sm mb-1" />
                  <span className="text-[8px] text-text-muted uppercase tracking-[2px] mb-1.5 font-mono group-hover:text-accent-primary/80 transition-colors">
                    {tpItem.category}
                  </span>
                  <span className="text-sm font-mono text-accent-primary leading-tight group-hover:text-glow-primary transition-all">
                    {tpItem.name}
                  </span>

                  {hoveredItem === tpItem.name && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20
                        px-4 py-3 w-[200px] text-xs text-text-secondary leading-relaxed
                        bg-gradient-to-b from-bg-elevated to-bg-secondary
                        border border-border-subtle rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                        whitespace-normal
                        animate-[draft-fade-in_0.15s_ease-out]"
                    >
                      <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />
                      <span className="text-accent-primary font-mono font-semibold block mb-1 text-[11px]">
                        {tpItem.name}
                      </span>
                      {tpItem.description}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-secondary border-b border-r border-border-subtle" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {neutralItem && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-accent-gold/50 uppercase tracking-[3px]">
                    Neutral Item
                  </span>
                </div>
                <div
                  className="inv-slot relative w-28 aspect-square rounded-sm p-3 flex flex-col items-center justify-center text-center cursor-default group
                    border-accent-gold/20 hover:border-accent-gold/50
                    hover:shadow-[0_0_20px_rgba(240,173,78,0.08),inset_0_0_20px_rgba(240,173,78,0.03)]
                    hover:bg-[linear-gradient(135deg,rgba(16,14,12,0.9)_0%,rgba(240,173,78,0.05)_100%)]"
                  onMouseEnter={() => setHoveredItem(neutralItem.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Gold corner accents */}
                  <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-accent-gold/20 group-hover:border-accent-gold/50 transition-colors rounded-tl-sm" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-accent-gold/20 group-hover:border-accent-gold/50 transition-colors rounded-br-sm" />

                  <Image src="/dota/item-tome.png" alt="Tome of Knowledge" width={44} height={32} style={{ height: "auto" }} className="rounded-sm mb-1" />
                  <span className="text-[8px] text-accent-gold/60 uppercase tracking-[2px] mb-1.5 font-mono group-hover:text-accent-gold/80 transition-colors">
                    {neutralItem.category}
                  </span>
                  <span className="text-sm font-mono text-accent-gold leading-tight group-hover:text-glow-gold transition-all">
                    {neutralItem.name}
                  </span>

                  {hoveredItem === neutralItem.name && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20
                        px-4 py-3 w-[200px] text-xs text-text-secondary leading-relaxed
                        bg-gradient-to-b from-bg-elevated to-bg-secondary
                        border border-accent-gold/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                        whitespace-normal
                        animate-[draft-fade-in_0.15s_ease-out]"
                    >
                      <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
                      <span className="text-accent-gold font-mono font-semibold block mb-1 text-[11px]">
                        {neutralItem.name}
                      </span>
                      {neutralItem.description}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-secondary border-b border-r border-accent-gold/20" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
