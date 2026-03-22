"use client";

import { useState, useCallback } from "react";
import TopBar from "./TopBar";

import AbilityBar from "./AbilityBar";
import AegisButton from "./AegisButton";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", dota: "Hero", plain: "Home" },
  { id: "attributes", dota: "Attributes", plain: "About" },
  { id: "abilities", dota: "Abilities", plain: "Projects" },
  { id: "talent-tree", dota: "Talent Tree", plain: "Skills" },
  { id: "items", dota: "Items", plain: "Experience" },
  { id: "stats", dota: "Stats", plain: "Education" },
  { id: "lore", dota: "Lore", plain: "Story" },
  { id: "contact", dota: "GG", plain: "Contact" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HUDFrame() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback((id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  }, []);

  return (
    <>
      <TopBar />
      <AbilityBar />
      <AegisButton />

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-3 right-4 z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="block w-5 h-[2px] bg-text-primary rounded-full transition-colors group-hover:bg-accent-primary" />
        <span className="block w-5 h-[2px] bg-text-primary rounded-full transition-colors group-hover:bg-accent-primary" />
        <span className="block w-5 h-[2px] bg-text-primary rounded-full transition-colors group-hover:bg-accent-primary" />
      </button>

      {/* Mobile "Shop" overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-xl flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation shop"
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-primary text-2xl"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Title */}
          <h2 className="font-display text-2xl tracking-wider text-accent-gold text-center pt-16 select-none">
            SHOP
          </h2>

          {/* Section grid */}
          <div className="grid grid-cols-2 gap-4 p-6 mt-8 flex-1 content-start">
            {SECTIONS.map(({ id, dota, plain }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="bg-bg-secondary rounded-sm p-4 text-center transition-all duration-300 border border-border-subtle hover:bg-bg-elevated hover:border-accent-primary/30 hover:shadow-[inset_0_0_0_1px_rgba(240,173,78,0.1)] active:bg-bg-elevated"
              >
                <span className="block font-display text-sm uppercase text-text-primary">
                  {dota}
                </span>
                <span className="block text-xs text-text-secondary mt-1">
                  {plain}
                </span>
              </button>
            ))}
          </div>

          {/* Resume download */}
          <div className="p-6 pb-10">
            <a
              href="/resume.pdf"
              download
              className="block w-full py-3 rounded-sm bg-gradient-to-r from-[#F0AD4E] via-[#FFCD8D] to-[#F0AD4E] text-bg-primary text-center font-display text-sm uppercase tracking-wider font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
