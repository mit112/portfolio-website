"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projects, type Project } from "@/data/projects";
import { AbilityFrame, UltimateDiamond } from "@/components/icons/DotaIcons";

const keyColors: Record<string, string> = {
  Q: "rgba(240,173,78,0.9)",
  W: "rgba(240,173,78,0.75)",
  E: "rgba(240,173,78,0.6)",
  D: "rgba(240,173,78,0.5)",
  R: "rgba(255,205,141,0.95)",
};

const keyGlows: Record<string, string> = {
  Q: "0 0 12px rgba(240,173,78,0.7), 0 0 24px rgba(240,173,78,0.3)",
  W: "0 0 10px rgba(240,173,78,0.6), 0 0 20px rgba(240,173,78,0.25)",
  E: "0 0 10px rgba(240,173,78,0.5), 0 0 18px rgba(240,173,78,0.2)",
  D: "0 0 10px rgba(240,173,78,0.4), 0 0 16px rgba(240,173,78,0.18)",
  R: "0 0 14px rgba(255,205,141,0.7), 0 0 28px rgba(255,205,141,0.3)",
};

const rarityTextColors: Record<Project["rarity"], string> = {
  mythical: "#8847FF",
  legendary: "#D32CE6",
  immortal: "#F0AD4E",
};

function getProjectLink(project: Project): string {
  return (
    project.links.appStore ??
    project.links.paper ??
    project.links.github ??
    "#"
  );
}

function LiveBadge() {
  return (
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
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const linkClass = `flex items-center justify-center w-8 h-8 rounded-sm
    border border-border-subtle/60 text-text-muted
    hover:border-accent-primary/40 hover:text-accent-primary hover:bg-accent-primary/[0.06]
    transition-all duration-200`;

  return (
    <div className="flex items-center gap-2">
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} on GitHub`}
          title="GitHub"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
          </svg>
        </a>
      )}
      {project.links.appStore && (
        <a
          href={project.links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} on App Store`}
          title="App Store"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </a>
      )}
      {project.links.paper && (
        <a
          href={project.links.paper}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} IEEE publication`}
          title="IEEE Publication"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </a>
      )}
      {project.links.linkedin && (
        <a
          href={project.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} LinkedIn post`}
          title="LinkedIn Post"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
          </svg>
        </a>
      )}
    </div>
  );
}

function HighlightList({ project }: { project: Project }) {
  return (
    <ul className="space-y-1.5 mb-5">
      {project.highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-start gap-2 text-[13px] text-text-secondary leading-relaxed"
        >
          <span
            className="mt-[7px] w-1 h-1 rotate-45 flex-shrink-0"
            style={{ backgroundColor: keyColors[project.key] }}
          />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

function TechStack({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="text-[11px] px-2.5 py-1 rounded-sm font-mono
            bg-bg-primary/60 text-text-secondary border border-border-subtle/60
            transition-colors duration-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function CardFooter({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 text-[11px] text-text-muted font-mono">
        <span className="flex items-center gap-1.5">
          <span className="text-accent-primary/40">&#9202;</span>
          <span>{project.cooldown}</span>
        </span>
        <span className="text-border-subtle">|</span>
        <span
          className="uppercase tracking-wider"
          style={{ color: rarityTextColors[project.rarity] }}
        >
          {project.rarity}
        </span>
      </div>
      <ProjectLinks project={project} />
    </div>
  );
}

function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-start gap-4 mb-4">
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
        {/* Real project name leads — the ability name is flavor */}
        <h3 className="font-display text-xl tracking-wide text-text-primary text-glow-primary flex items-center gap-2">
          {project.name}
          {project.isUltimate && <UltimateDiamond state="ready" size={8} />}
        </h3>
        <p className="text-xs text-text-muted font-mono mt-0.5 italic">
          “{project.abilityName}” — {project.tagline}
        </p>
      </div>

      {project.isLive && <LiveBadge />}
    </div>
  );
}

function Screenshot({ project }: { project: Project }) {
  if (!project.screenshot) return null;
  return (
    <div
      className="relative flex-shrink-0 w-40 mx-auto sm:mx-0 sm:w-28 md:w-32 self-start rounded-sm overflow-hidden
        border border-accent-primary/25
        shadow-[0_0_20px_rgba(240,173,78,0.08),0_4px_12px_rgba(0,0,0,0.4)]"
    >
      <Image
        src={project.screenshot}
        alt={`${project.name} app screenshot`}
        width={640}
        height={1386}
        className="w-full h-auto"
        sizes="128px"
      />
      {/* Subtle vignette to blend with the card */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/10" />
    </div>
  );
}

function Divider({ project }: { project: Project }) {
  return (
    <div className="relative mb-5">
      <div className="h-px bg-gradient-to-r from-border-subtle via-border-subtle/50 to-transparent" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rotate-45"
        style={{ backgroundColor: keyColors[project.key] }}
      />
    </div>
  );
}

export default function Abilities() {
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Don't trigger if user is typing in an input or holding a modifier
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const key = e.key.toUpperCase();
    const project = projects.find((p) => p.key === key);
    if (project) {
      const link = getProjectLink(project);
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const basics = projects.filter((p) => !p.isUltimate);
  const ultimate = projects.find((p) => p.isUltimate);

  return (
    <section className="section-dark relative py-20 md:py-28 overflow-hidden">
      {/* Background atmosphere */}
      <div className="glow-spot glow-spot--primary absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.12]" />
      <div className="glow-spot glow-spot--gold absolute -right-20 bottom-20 opacity-[0.08]" />

      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(240,173,78,0.4) 0px, transparent 1px, transparent 4px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading dotaName="ABILITIES" plainName="Projects" id="abilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {basics.map((project) => (
            <Card key={project.slug} rarity={project.rarity} className="h-full">
              <div className="p-6 md:p-8 h-full flex flex-col">
                <CardHeader project={project} />

                <div className="flex flex-col-reverse sm:flex-row gap-5 flex-1">
                  <div className="flex-1 min-w-0 flex flex-col">
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <Divider project={project} />
                    <HighlightList project={project} />
                    <div className="mt-auto">
                      <TechStack project={project} />
                      <CardFooter project={project} />
                    </div>
                  </div>
                  <Screenshot project={project} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ultimate — full-width immortal card */}
        {ultimate && (
          <div className="mt-6">
            <Card rarity={ultimate.rarity}>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="flex items-start gap-4 flex-1 min-w-[260px]">
                    <AbilityFrame size={48} active>
                      <span
                        className="font-mono text-xl font-black"
                        style={{
                          color: keyColors[ultimate.key],
                          textShadow: keyGlows[ultimate.key],
                        }}
                      >
                        {ultimate.key}
                      </span>
                    </AbilityFrame>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl tracking-wide text-text-primary text-glow-gold flex items-center gap-2">
                        {ultimate.name}
                        <UltimateDiamond state="ready" size={8} />
                      </h3>
                      <p className="text-xs text-text-muted font-mono mt-0.5 italic">
                        “{ultimate.abilityName}” — {ultimate.tagline}
                      </p>
                    </div>
                  </div>

                  {ultimate.award && (
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-sm flex-shrink-0
                        bg-accent-gold/10 border border-accent-gold/30"
                    >
                      <span className="text-accent-gold text-sm leading-none">&#9733;</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-gold">
                        {ultimate.award}
                      </span>
                    </div>
                  )}
                </div>

                <div className="md:flex md:gap-10">
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 md:mb-0 md:flex-1">
                    {ultimate.description}
                  </p>
                  <div className="md:flex-1">
                    <HighlightList project={ultimate} />
                  </div>
                </div>

                <Divider project={ultimate} />
                <TechStack project={ultimate} />
                <CardFooter project={ultimate} />
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
