import Image from "next/image";
import { SwordDivider } from "@/components/icons/DotaIcons";

export default function HeroPortrait() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-[85vh] flex items-center py-20 md:py-32 overflow-hidden"
    >
      {/* ── Atmospheric background layers — VISIBLE this time ── */}

      {/* Large gold glow behind portrait area */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(240,173,78,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />

      {/* Crimson accent glow bottom-right */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(169,27,13,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Horizontal scan lines — like a monitor/HUD feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(240,173,78,0.15) 2px, rgba(240,173,78,0.15) 3px)",
          backgroundSize: "100% 4px",
        }} />

      {/* Radial ring decorations — like a targeting reticle */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent-primary/[0.06] pointer-events-none" />
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-accent-primary/[0.03] pointer-events-none ml-[-100px] mt-[-100px]" />


      {/* Dota 2 logo watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dota/dota2-logo.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[5%] top-[10%] w-[280px] h-auto opacity-[0.07] pointer-events-none select-none mix-blend-soft-light"
      />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* ── Portrait Frame ── */}
          <div className="relative flex-shrink-0 group">
            {/* Outer ornamental double-frame */}
            <div className="absolute -inset-4 border border-accent-primary/20 rounded-sm" />
            <div className="absolute -inset-2 border border-accent-primary/15 rounded-sm" />

            {/* Corner accents on outer frame */}
            <div className="absolute -top-4 -left-4 w-5 h-5 border-t-2 border-l-2 border-accent-primary/50" />
            <div className="absolute -top-4 -right-4 w-5 h-5 border-t-2 border-r-2 border-accent-primary/50" />
            <div className="absolute -bottom-4 -left-4 w-5 h-5 border-b-2 border-l-2 border-accent-primary/50" />
            <div className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-accent-primary/50" />

            {/* Portrait container */}
            <div
              className="w-56 h-72 md:w-64 md:h-80 rounded-sm bg-gradient-to-br from-[#2A2520] via-[#1C1B1B] to-[#141210] border border-border-subtle overflow-hidden relative"
              style={{ boxShadow: "inset 0 0 0 1px rgba(240,173,78,0.15), inset 0 0 40px rgba(240,173,78,0.06), 0 0 40px rgba(0,0,0,0.4)" }}
            >
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,173,78,0.06)_0%,transparent_70%)]" />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-6xl md:text-7xl font-bold text-accent-primary/30 tracking-wider select-none"
                  style={{ textShadow: "0 0 40px rgba(240,173,78,0.15)" }}>
                  MS
                </span>
                <span className="text-[9px] font-mono text-text-muted/50 uppercase tracking-[4px] mt-2">
                  Software Engineer
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
              {/* Top accent line, subtle */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
            </div>

            {/* Floating rune decoration */}

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
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider text-text-primary text-glow-primary leading-none">
              MIT SHETH
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-accent-primary mt-3 tracking-wide font-light">
              Software Engineer &mdash;{" "}
              <span className="text-text-secondary">iOS &amp; Swift</span>
            </p>

            {/* Ornamental divider */}
            <div className="relative max-w-sm mt-6 mb-6 mx-auto md:mx-0">
              <div className="h-px bg-gradient-to-r from-accent-primary/50 via-border-subtle to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-accent-primary/40" />
            </div>

            {/* Role tags — styled as earned badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              {["Builder", "Shipper", "Problem Solver"].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-sm font-mono uppercase tracking-wider
                    bg-accent-primary/[0.08] text-accent-primary
                    border border-accent-primary/20
                    shadow-[inset_0_0_0_1px_rgba(240,173,78,0.05)]
                    hover:bg-accent-primary/[0.15] hover:border-accent-primary/40
                    transition-all duration-300"
                >
                  <span className="text-[8px]">&#9670;</span>
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
                      "0 0 6px rgba(240,173,78,0.6), 0 0 18px rgba(240,173,78,0.2)",
                  }}
                >
                  ◆
                </span>
              ))}
            </div>

            {/* Primary attribute */}
            <div className="flex items-center gap-2 justify-center md:justify-start mb-8">
              <Image src="/dota/attr-int.png" alt="Intelligence" width={14} height={14} />
              <span className="font-mono text-xs uppercase tracking-[3px] text-attr-int">
                Intelligence
              </span>
              <span className="text-text-muted text-xs">&mdash; Primary Attribute</span>
            </div>

            {/* One-liner — the hook */}
            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
              <span className="text-text-primary font-medium">4 shipped apps. 1 live on the App Store.</span>
              <br />
              Built with Swift, SwiftUI, and an obsession for clean architecture.
            </p>

            {/* CTAs — above the fold */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#abilities"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm
                  bg-gradient-to-r from-[#F0AD4E] via-[#FFCD8D] to-[#F0AD4E]
                  text-bg-primary font-display text-sm uppercase tracking-[2px] font-bold
                  hover:shadow-[0_0_30px_rgba(240,173,78,0.25)] hover:scale-[1.02]
                  active:scale-[0.99] transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm
                  border border-accent-primary/30 text-accent-primary
                  font-display text-sm uppercase tracking-[2px] font-bold
                  hover:bg-accent-primary/10 hover:border-accent-primary/50
                  transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
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
