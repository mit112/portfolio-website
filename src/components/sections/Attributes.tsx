"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AttributeBar from "@/components/ui/AttributeBar";
import { attributes } from "@/data/skills";
import { StrengthIcon, AgilityIcon, IntelligenceIcon } from "@/components/icons/DotaIcons";

const attrIcons: Record<string, typeof StrengthIcon> = {
  str: StrengthIcon,
  agi: AgilityIcon,
  int: IntelligenceIcon,
};

const attrColors: Record<string, { primary: string; glow: string; bgGlow: string }> = {
  str: { primary: "#EC3D06", glow: "rgba(236,61,6,0.4)", bgGlow: "rgba(236,61,6,0.03)" },
  agi: { primary: "#7FBF1B", glow: "rgba(127,191,27,0.4)", bgGlow: "rgba(127,191,27,0.03)" },
  int: { primary: "#00A6FF", glow: "rgba(0,166,255,0.5)", bgGlow: "rgba(0,166,255,0.03)" },
};

export default function Attributes() {
  return (
    <section className="section-elevated relative py-20 md:py-28 overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="glow-spot glow-spot--teal absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.15]" />
      <div className="glow-spot glow-spot--gold absolute -left-20 bottom-0 opacity-[0.08]" />

      {/* Faint horizontal ruling for HUD feel */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(39,174,158,0.3) 0px, transparent 1px, transparent 60px)",
          backgroundSize: "100% 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeading dotaName="ATTRIBUTES" plainName="Core Strengths" id="attributes" />

        <div className="space-y-12">
          {attributes.map((attr) => {
            const colors = attrColors[attr.attribute];
            const Icon = attrIcons[attr.attribute];
            return (
              <div
                key={attr.attribute}
                className="group relative rounded-lg p-6 md:p-8 transition-all duration-500"
                style={{
                  background: `
                    linear-gradient(135deg, ${colors.bgGlow} 0%, transparent 50%),
                    linear-gradient(180deg, rgba(26,28,35,0.4) 0%, rgba(14,15,19,0.2) 100%)
                  `,
                  border: "1px solid rgba(255,255,255,0.03)",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${colors.primary}60, ${colors.primary}15)`,
                    boxShadow: `0 0 8px ${colors.glow}`,
                  }}
                />

                {/* Attribute header */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={20} className={`text-attr-${attr.attribute} flex-shrink-0`} />
                  <span
                    className="font-display text-sm uppercase tracking-wider font-bold"
                    style={{ color: colors.primary }}
                  >
                    {attr.name}
                  </span>
                  <span className="text-text-muted text-sm hidden sm:inline">
                    {attr.plainName}
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <span
                      className="font-mono text-lg font-bold"
                      style={{
                        color: colors.primary,
                        textShadow: `0 0 12px ${colors.glow}`,
                      }}
                    >
                      {attr.percentage}
                    </span>
                    <span className="text-text-muted text-xs font-mono">/100</span>
                  </div>
                </div>

                {/* Bar */}
                <AttributeBar
                  percentage={attr.percentage}
                  color={colors.primary}
                  label={`${attr.plainName}: ${attr.percentage}%`}
                  animated
                />

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {attr.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full font-mono
                        bg-bg-primary/80 text-text-secondary border border-border-subtle
                        hover:border-border-active hover:text-text-primary
                        hover:shadow-[0_0_12px_rgba(39,174,158,0.06)]
                        transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider" />
      </div>
    </section>
  );
}
