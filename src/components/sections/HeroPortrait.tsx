import { IntelligenceIcon, SwordDivider } from "@/components/icons/DotaIcons";
import { RadiantAncient, RuneIcon } from "@/components/icons/DotaAssets";

export default function HeroPortrait() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-[85vh] flex items-center py-20 md:py-32 overflow-hidden"
    >
      {/* ── Atmospheric background layers — VISIBLE this time ── */}

      {/* Large teal glow behind portrait area */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(39,174,158,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />

      {/* Gold accent glow bottom-right */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(178,138,51,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Horizontal scan lines — like a monitor/HUD feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(39,174,158,0.15) 2px, rgba(39,174,158,0.15) 3px)",
          backgroundSize: "100% 4px",
        }} />

      {/* Radial ring decorations — like a targeting reticle */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent-teal/[0.06] pointer-events-none" />
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-accent-teal/[0.03] pointer-events-none ml-[-100px] mt-[-100px]" />

      {/* Ancient silhouette background element */}
      <RadiantAncient className="absolute right-[5%] top-[10%] w-[300px] h-[500px] text-accent-teal opacity-[0.04] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* ── Portrait Frame ── */}
          <div className="relative flex-shrink-0 group">
            {/* Outer ornamental double-frame */}
            <div className="absolute -inset-4 border border-accent-teal/30 rounded-lg" />
            <div className="absolute -inset-2 border border-accent-teal/20 rounded" />

            {/* Corner accents on outer frame */}
            <div className="absolute -top-4 -left-4 w-5 h-5 border-t-2 border-l-2 border-accent-teal/70 rounded-tl" />
            <div className="absolute -top-4 -right-4 w-5 h-5 border-t-2 border-r-2 border-accent-teal/70 rounded-tr" />
            <div className="absolute -bottom-4 -left-4 w-5 h-5 border-b-2 border-l-2 border-accent-teal/70 rounded-bl" />
            <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-accent-teal/70 rounded-br" />

            {/* Portrait container */}
            <div
              className="w-56 h-72 md:w-64 md:h-80 rounded bg-gradient-to-br from-[#252830] via-[#1E2029] to-[#15171D] border border-border-subtle overflow-hidden relative"
              style={{ boxShadow: "inset 0 0 40px rgba(39,174,158,0.08), 0 0 30px rgba(0,0,0,0.5)" }}
            >
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,174,158,0.06)_0%,transparent_70%)]" />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-muted text-base font-mono tracking-widest uppercase opacity-50">
                  Portrait
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-teal to-transparent" />
              {/* Top accent line, subtle */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />
            </div>

            {/* Floating rune decoration */}
            <RuneIcon size={18} className="absolute -right-8 top-1/4 text-accent-teal/20 animate-pulse" />

            {/* Attribute dots below portrait */}
            <div className="flex justify-center gap-4 mt-5">
              <div
                className="w-2.5 h-2.5 rounded-full bg-attr-str"
                style={{ boxShadow: "0 0 8px rgba(236,61,6,0.5), 0 0 20px rgba(236,61,6,0.15)" }}
                title="Strength"
              />
              <div
                className="w-2.5 h-2.5 rounded-full bg-attr-agi"
                style={{ boxShadow: "0 0 8px rgba(127,191,27,0.5), 0 0 20px rgba(127,191,27,0.15)" }}
                title="Agility"
              />
              <div
                className="w-2.5 h-2.5 rounded-full bg-attr-int"
                style={{ boxShadow: "0 0 8px rgba(0,166,255,0.6), 0 0 20px rgba(0,166,255,0.2)" }}
                title="Intelligence"
              />
            </div>
          </div>

          {/* ── Hero Info ── */}
          <div className="text-center md:text-left flex-1">
            {/* Name — large, glowing, the centerpiece */}
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider text-text-primary text-glow-teal leading-none">
              MIT SHETH
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-accent-teal mt-3 tracking-wide font-light">
              iOS Engineer &mdash;{" "}
              <span className="text-text-secondary">Swift Artisan</span>
            </p>

            {/* Ornamental divider */}
            <div className="relative max-w-sm mt-6 mb-6 mx-auto md:mx-0">
              <div className="h-px bg-gradient-to-r from-accent-teal/50 via-border-subtle to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-accent-teal/40" />
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              {["Builder", "Shipper", "Problem Solver"].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm
                    bg-gradient-to-r from-bg-secondary to-bg-elevated
                    border border-border-subtle text-text-secondary
                    hover:border-accent-teal/30 hover:text-text-primary
                    hover:shadow-[0_0_16px_rgba(39,174,158,0.08)]
                    transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Complexity diamonds */}
            <div className="flex items-center gap-1.5 justify-center md:justify-start mb-4">
              <span className="text-xs text-text-muted font-mono uppercase tracking-wider mr-2">
                Complexity
              </span>
              {[1, 2, 3].map((d) => (
                <span
                  key={d}
                  className="text-accent-gold text-sm"
                  style={{
                    textShadow:
                      "0 0 6px rgba(178,138,51,0.6), 0 0 18px rgba(178,138,51,0.2)",
                  }}
                >
                  ◆
                </span>
              ))}
            </div>

            {/* Primary attribute */}
            <div className="flex items-center gap-2 justify-center md:justify-start mb-8">
              <IntelligenceIcon size={14} className="text-attr-int" />
              <span className="font-mono text-xs uppercase tracking-[3px] text-attr-int">
                Intelligence
              </span>
              <span className="text-text-muted text-xs">&mdash; Primary Attribute</span>
            </div>

            {/* One-liner — the hook */}
            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
              4 shipped iOS apps. 1 live on the App Store.
              <br />
              <span className="text-text-primary font-medium">
                0 unsolved problems left standing.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom section divider ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <SwordDivider className="max-w-lg mx-auto" />
      </div>
    </section>
  );
}
