import SectionHeading from "@/components/ui/SectionHeading";

export default function Lore() {
  return (
    <section className="section-dark relative py-20 md:py-28 overflow-hidden">
      {/* Layered atmospheric glows */}
      <div className="glow-spot glow-spot--primary absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.12]" />
      <div className="glow-spot glow-spot--primary absolute left-[20%] top-[20%] opacity-[0.06] w-[400px] h-[400px]" />

      <div className="max-w-2xl mx-auto px-6 relative">
        <SectionHeading dotaName="LORE" plainName="My Story" id="lore" />

        <div className="space-y-8 relative">
          {/* Decorative left border line — like a lore book spine */}
          <div className="absolute -left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent-primary/25 to-transparent hidden md:block" />

          {/* Decorative quote mark */}
          <div className="absolute -left-10 -top-4 text-7xl text-accent-primary/[0.12] font-display select-none hidden md:block leading-none">
            &ldquo;
          </div>

          <p className="lore-dropcap text-lg leading-[1.9] text-text-secondary">
            I&apos;ve been obsessed with one thing since my first line of Swift:
            making software feel inevitable. From Mumbai to Boston, through a
            Master&apos;s at Northeastern and an iOS co-op at the National
            Internet Observatory, I&apos;ve shipped four apps &mdash; each one
            pushing deeper into protocol-oriented design, encryption, and
            real-time sync.
          </p>

          {/* Punchline — brighter */}
          <p className="text-lg leading-[1.9] text-text-primary relative">
            <span className="absolute -inset-x-4 -inset-y-2 rounded bg-gradient-to-r from-accent-primary/[0.02] via-transparent to-transparent pointer-events-none hidden md:block" />
            <span className="relative">
              Off the clock, I&apos;m analyzing drafts in Dota 2, tracking lap
              times in F1, or debating whether async/await is the greatest thing
              to happen to Swift. Some people separate work and play. I just
              found a way to make them the same thing.
            </span>
          </p>

          {/* Closing quote mark */}
          <div className="absolute -right-6 bottom-0 text-7xl text-accent-primary/[0.12] font-display select-none hidden md:block leading-none">
            &rdquo;
          </div>

        </div>
      </div>

    </section>
  );
}
