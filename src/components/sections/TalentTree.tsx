"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

interface TalentNode {
  title: string;
  subtitle: string;
  detail: string;
}

interface TalentLevel {
  level: number;
  left?: TalentNode;
  right?: TalentNode;
  center?: TalentNode;
}

const levels: TalentLevel[] = [
  {
    level: 25,
    center: {
      title: "Seeking Next Role",
      subtitle: "iOS Engineer",
      detail: "Open to relocation & remote",
    },
  },
  {
    level: 20,
    left: {
      title: "MS Software Engineering",
      subtitle: "Northeastern University",
      detail: "GPA: 3.8",
    },
    right: {
      title: "iOS Co-Op Engineer",
      subtitle: "National Internet Observatory",
      detail: "2024",
    },
  },
  {
    level: 15,
    left: {
      title: "IEEE Best Paper Award",
      subtitle: "ICACTA 2023",
      detail: "Published Research",
    },
    right: {
      title: "Software Intern",
      subtitle: "Nakshatra Eye Care",
      detail: "2022",
    },
  },
  {
    level: 10,
    left: {
      title: "BE Computer Engineering",
      subtitle: "University of Mumbai",
      detail: "CGPA: 8.81/10",
    },
    right: {
      title: "SE Intern",
      subtitle: "SAKEC Marathon",
      detail: "2021",
    },
  },
];

function NodeCard({
  node,
  level,
  isCenter,
}: {
  node: TalentNode;
  level: number;
  isCenter?: boolean;
}) {
  return (
    <Card
      className={
        isCenter ? "gold-pulse border-accent-gold/40" : undefined
      }
    >
      <div className="p-5 relative">
        {/* Subtle corner glow for center card */}
        {isCenter && (
          <div className="absolute inset-0 rounded bg-[radial-gradient(ellipse_at_top,rgba(178,138,51,0.06)_0%,transparent_60%)] pointer-events-none" />
        )}

        <div className="relative">
          <span
            className="text-[10px] font-mono tracking-widest uppercase"
            style={{
              color: isCenter ? "#B28A33" : "#27AE9E",
              textShadow: isCenter
                ? "0 0 8px rgba(178,138,51,0.4)"
                : "0 0 6px rgba(39,174,158,0.2)",
            }}
          >
            LVL {level}
          </span>
          <h3
            className={`font-semibold text-text-primary mt-1 ${
              isCenter ? "text-glow-gold" : ""
            }`}
          >
            {node.title}
          </h3>
          <p className="text-sm text-text-secondary mt-0.5">{node.subtitle}</p>
          <p className="text-xs text-text-muted mt-1">{node.detail}</p>
        </div>
      </div>
    </Card>
  );
}

export default function TalentTree() {
  return (
    <section className="section-elevated relative py-20 md:py-28 overflow-hidden">
      {/* Atmospheric glows */}
      <div className="glow-spot glow-spot--gold absolute left-1/2 -translate-x-1/2 -top-20 opacity-[0.15]" />
      <div className="glow-spot glow-spot--teal absolute -left-40 bottom-0 opacity-[0.08]" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          dotaName="TALENT TREE"
          plainName="Career &amp; Education"
          id="talent-tree"
        />

        {/* ── Desktop tree ── */}
        <div className="hidden md:block relative">
          {/* Center glowing spine */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-accent-gold/70 via-accent-teal/50 to-border-subtle" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-accent-gold/50 via-accent-teal/30 to-transparent blur-sm" />
          </div>

          <div className="space-y-10">
            {levels.map((lvl) => {
              if (lvl.center) {
                return (
                  <div key={lvl.level} className="flex justify-center relative">
                    {/* Connection orb */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
                    >
                      <div
                        className="w-5 h-5 rounded-full bg-accent-gold"
                        style={{
                          boxShadow:
                            "0 0 16px rgba(178,138,51,0.8), 0 0 40px rgba(178,138,51,0.35)",
                        }}
                      />
                    </div>

                    <div className="max-w-sm w-full">
                      <NodeCard
                        node={lvl.center}
                        level={lvl.level}
                        isCenter
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={lvl.level}
                  className="grid grid-cols-[1fr_40px_1fr] gap-4 items-center"
                >
                  {/* Left node */}
                  <div className="flex justify-end">
                    {lvl.left && (
                      <div className="max-w-sm w-full">
                        <NodeCard node={lvl.left} level={lvl.level} />
                      </div>
                    )}
                  </div>

                  {/* Center node dot with horizontal connection arms */}
                  <div className="flex items-center justify-center relative h-full">
                    {/* Horizontal arms */}
                    <div
                      className="absolute left-0 right-1/2 top-1/2 h-px"
                      style={{
                        background: "linear-gradient(90deg, rgba(39,174,158,0.3), rgba(39,174,158,0.6))",
                      }}
                    />
                    <div
                      className="absolute left-1/2 right-0 top-1/2 h-px"
                      style={{
                        background: "linear-gradient(90deg, rgba(39,174,158,0.6), rgba(39,174,158,0.3))",
                      }}
                    />
                    {/* Dot */}
                    <div
                      className="w-3.5 h-3.5 rounded-full bg-accent-teal border border-accent-teal/70 relative z-10"
                      style={{
                        boxShadow: "0 0 10px rgba(39,174,158,0.6), 0 0 25px rgba(39,174,158,0.25)",
                      }}
                    />
                  </div>

                  {/* Right node */}
                  <div className="flex justify-start">
                    {lvl.right && (
                      <div className="max-w-sm w-full">
                        <NodeCard node={lvl.right} level={lvl.level} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile timeline ── */}
        <div className="md:hidden relative pl-8">
          {/* Left glowing spine */}
          <div className="absolute left-3 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-accent-gold/70 via-accent-teal/50 to-border-subtle" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-accent-gold/50 via-accent-teal/30 to-transparent blur-sm" />
          </div>

          <div className="space-y-6">
            {levels.map((lvl) => {
              const nodes: { node: TalentNode; isCenter?: boolean }[] = [];
              if (lvl.center) nodes.push({ node: lvl.center, isCenter: true });
              if (lvl.left) nodes.push({ node: lvl.left });
              if (lvl.right) nodes.push({ node: lvl.right });

              return nodes.map((item, idx) => (
                <div key={`${lvl.level}-${idx}`} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-5 top-4 w-3.5 h-3.5 rounded-full border"
                    style={{
                      backgroundColor: item.isCenter
                        ? "#B28A33"
                        : "rgba(39,174,158,0.8)",
                      borderColor: item.isCenter
                        ? "#B28A33"
                        : "rgba(39,174,158,0.7)",
                      boxShadow: item.isCenter
                        ? "0 0 14px rgba(178,138,51,0.7), 0 0 30px rgba(178,138,51,0.25)"
                        : "0 0 10px rgba(39,174,158,0.6)",
                    }}
                  />

                  <NodeCard
                    node={item.node}
                    level={lvl.level}
                    isCenter={item.isCenter}
                  />
                </div>
              ));
            })}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider" />
      </div>
    </section>
  );
}
