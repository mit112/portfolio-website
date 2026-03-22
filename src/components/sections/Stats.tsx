import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { UltimateDiamond } from "@/components/icons/DotaIcons";

const stats = [
  { label: "APPS SHIPPED", value: "4", color: "text-accent-gold" },
  { label: "APP STORE LIVE", value: "1", color: "text-rarity-legendary" },
  { label: "INTERNSHIPS", value: "3", color: "text-accent-gold" },
  { label: "IEEE PAPERS", value: "1", color: "text-attr-int" },
  { label: "BEST PAPER", value: "\u2605", color: "text-accent-gold" },
];

export default function Stats() {
  return (
    <section className="section-elevated relative py-20 md:py-28 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="glow-spot glow-spot--primary absolute left-0 bottom-0 opacity-[0.12]" />
      <div className="glow-spot glow-spot--gold absolute right-[15%] top-[10%] opacity-[0.08]" />

      {/* Roshan background — drop roshan.png into public/dota/ */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dota/roshan.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[2%] bottom-[5%] w-[320px] h-auto opacity-[0.08] pointer-events-none select-none mix-blend-soft-light"
      />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading dotaName="SCOREBOARD" plainName="Experience &amp; Metrics" id="stats" />

        {/* ---- Stats Row ---- */}
        <div className="relative mb-16">
          {/* Top border with glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
          <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />

          <div className="scoreboard-grid flex flex-wrap justify-center gap-8 md:gap-14 py-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group relative">
                {/* Glow halo behind number */}
                <div className="absolute inset-0 -top-2 bg-gradient-to-b from-accent-gold/[0.04] to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div
                  className={`font-display text-4xl md:text-5xl font-bold ${stat.color} text-glow-gold relative`}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] text-text-secondary uppercase tracking-[2px] font-mono mt-2 group-hover:text-text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom border with glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
          <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
        </div>

        {/* ---- Match History ---- */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-[3px]">
              Match History
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border-subtle/60 to-transparent" />
            <span className="text-[9px] font-mono text-text-muted/60">
              {experiences.length} matches
            </span>
          </div>

          <div className="space-y-3">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative group rounded-sm overflow-hidden
                  bg-gradient-to-r ${idx % 2 === 0 ? "from-[#1C1B1B] to-[#181614]" : "from-[#201E1A] to-[#1A1816]"}
                  border border-border-subtle/60
                  hover:border-border-active/30 hover:from-[#2A2520] hover:to-[#1C1B1B]
                  transition-all duration-300`}
              >
                {/* Left edge accent — green for victory, gold for in-progress */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] ${
                    exp.result === "victory"
                      ? "bg-attr-agi/60 group-hover:bg-attr-agi"
                      : "bg-accent-primary/60 group-hover:bg-accent-primary"
                  } transition-colors`}
                />

                <div className="p-5 pl-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {/* Result badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        exp.result === "victory"
                          ? "bg-attr-agi/20 text-attr-agi border border-attr-agi/30"
                          : "bg-accent-primary/20 text-accent-primary border border-accent-primary/30"
                      }`}
                    >
                      {exp.result === "victory" ? (
                        <UltimateDiamond state="ready" size={8} />
                      ) : (
                        <span className="text-[6px]">{"\u25C6"}</span>
                      )}
                      {exp.result === "victory" ? "Victory" : "In Progress"}
                    </span>

                    <span className="font-semibold text-text-primary">
                      {exp.company}
                    </span>

                    <span className="text-sm text-text-secondary">
                      {exp.role}
                    </span>

                    <span className="text-text-muted text-xs font-mono ml-auto hidden sm:flex items-center gap-2">
                      <span className="text-accent-primary/30 text-[6px]">
                        {"\u25C6"}
                      </span>
                      {exp.duration} · {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 ml-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-accent-primary/60 mt-[7px] text-[5px] shrink-0">
                          {"\u25C6"}
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Education ---- */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-[3px]">
              Education
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border-subtle/40 to-transparent" />
          </div>

          <div className="space-y-3">
            {education.map((edu) => (
              <div
                key={`${edu.school}-${edu.degree}`}
                className="relative group rounded overflow-hidden
                  bg-gradient-to-r from-bg-secondary/60 to-transparent
                  border border-border-subtle/40
                  hover:border-border-active/20
                  transition-all duration-300"
              >
                {/* Left edge accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-primary/40 group-hover:bg-accent-primary/80 transition-colors" />

                <div className="p-4 pl-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                      <span className="text-[6px]">{"\u2713"}</span>
                      Graduated
                    </span>

                    <span className="font-semibold text-text-primary">
                      {edu.school}
                    </span>

                    <span className="text-sm text-text-secondary">
                      {edu.degree}
                    </span>

                    <span className="text-text-muted text-xs font-mono ml-auto hidden sm:flex items-center gap-2">
                      <span className="text-accent-primary/30 text-[6px]">
                        {"\u25C6"}
                      </span>
                      {edu.duration} · {edu.location} · GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
