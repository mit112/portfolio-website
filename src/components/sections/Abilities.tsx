import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { AbilityFrame, UltimateDiamond } from "@/components/icons/DotaIcons";

const keyColors: Record<string, string> = {
  Q: "rgba(39,174,158,0.9)",
  W: "rgba(39,174,158,0.75)",
  E: "rgba(39,174,158,0.6)",
  R: "rgba(178,138,51,0.9)",
};

const keyGlows: Record<string, string> = {
  Q: "0 0 12px rgba(39,174,158,0.7), 0 0 24px rgba(39,174,158,0.3)",
  W: "0 0 10px rgba(39,174,158,0.6), 0 0 20px rgba(39,174,158,0.25)",
  E: "0 0 10px rgba(39,174,158,0.5), 0 0 18px rgba(39,174,158,0.2)",
  R: "0 0 14px rgba(178,138,51,0.7), 0 0 28px rgba(178,138,51,0.3)",
};

export default function Abilities() {
  return (
    <section className="section-dark relative py-20 md:py-28 overflow-hidden">
      {/* Background atmosphere */}
      <div className="glow-spot glow-spot--teal absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.12]" />
      <div className="glow-spot glow-spot--gold absolute -right-20 bottom-20 opacity-[0.08]" />

      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(39,174,158,0.4) 0px, transparent 1px, transparent 4px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading dotaName="ABILITIES" plainName="Projects" id="abilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isUltimate = project.key === "R";

            return (
              <Card
                key={project.slug}
                rarity={project.rarity}
                className={isUltimate ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}
              >
                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Key badge with AbilityFrame */}
                    <AbilityFrame size={48} active>
                      <span
                        className="font-mono text-xl font-black"
                        style={{
                          color: keyColors[project.key],
                          textShadow: keyGlows[project.key],
                        }}
                      >
                        {project.key}
                      </span>
                    </AbilityFrame>

                    <div className="flex-1 min-w-0">
                      {/* Ability name */}
                      <h3 className="font-display text-lg tracking-wide text-text-primary text-glow-teal flex items-center gap-2">
                        {project.abilityName}
                        {isUltimate && <UltimateDiamond state="ready" size={8} />}
                      </h3>
                      {/* Real project name */}
                      <p className="text-sm text-text-muted font-mono mt-0.5">
                        {project.name}
                      </p>
                    </div>

                    {/* Live badge */}
                    {project.isLive && (
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-attr-agi opacity-75" />
                          <span
                            className="relative inline-flex rounded-full h-2.5 w-2.5 bg-attr-agi"
                            style={{ boxShadow: "0 0 8px rgba(127,191,27,0.6)" }}
                          />
                        </span>
                        <span className="text-[10px] text-attr-agi uppercase tracking-wider font-mono font-bold">
                          Live
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Divider with ornament */}
                  <div className="relative mb-5">
                    <div className="h-px bg-gradient-to-r from-border-subtle via-border-subtle/50 to-transparent" />
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rotate-45"
                      style={{ backgroundColor: keyColors[project.key] }}
                    />
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded font-mono
                          bg-bg-primary/60 text-text-secondary border border-border-subtle/60
                          hover:border-accent-teal/20 hover:text-text-primary
                          transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 text-[11px] text-text-muted font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="text-accent-teal/40">&#9202;</span>
                      <span>{project.cooldown}</span>
                    </span>
                    <span className="text-border-subtle">|</span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className="text-attr-int/60"
                        style={{ textShadow: "0 0 4px rgba(0,166,255,0.3)" }}
                      >
                        &#9670;
                      </span>
                      <span>Mana: {project.manaCost}</span>
                    </span>
                    <span className="text-border-subtle">|</span>
                    <span className="uppercase tracking-wider" style={{ color: project.rarity === "legendary" ? "#D32CE6" : "#8847FF" }}>
                      {project.rarity}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider" />
      </div>
    </section>
  );
}
