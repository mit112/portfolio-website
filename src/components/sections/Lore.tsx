import SectionHeading from "@/components/ui/SectionHeading";
import { CourierIcon } from "@/components/icons/DotaAssets";

export default function Lore() {
  return (
    <section className="section-dark relative py-20 md:py-28 overflow-hidden">
      {/* Layered atmospheric glows */}
      <div className="glow-spot glow-spot--teal absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.12]" />
      <div className="glow-spot glow-spot--teal absolute left-[20%] top-[20%] opacity-[0.06] w-[400px] h-[400px]" />

      <div className="max-w-2xl mx-auto px-6 relative">
        <SectionHeading dotaName="LORE" plainName="My Story" id="lore" />

        <div className="space-y-8 relative">
          {/* Decorative left border line — like a lore book spine */}
          <div className="absolute -left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent-teal/15 to-transparent hidden md:block" />

          {/* Decorative quote mark */}
          <div className="absolute -left-10 -top-4 text-7xl text-accent-teal/[0.07] font-display select-none hidden md:block leading-none">
            &ldquo;
          </div>

          <p className="lore-dropcap text-lg leading-[1.9] text-text-secondary">
            From the engineering halls of the University of Mumbai emerged a developer
            with an unusual obsession: making software feel inevitable. While others
            built apps, Mit Sheth was busy questioning why every interaction
            couldn&apos;t feel effortless.
          </p>

          <p className="text-lg leading-[1.9] text-text-secondary">
            The journey north to Northeastern University sharpened the blade. A
            Master&apos;s in Software Engineering Systems, a 3.8 GPA, and an iOS
            engineering co-op at the National Internet Observatory &mdash; each
            experience forged a deeper understanding of what makes mobile software
            sing.
          </p>

          <p className="text-lg leading-[1.9] text-text-secondary">
            Four shipped iOS apps tell the story better than any resume. Each one
            built with Swift and SwiftUI, each one pushing further into
            protocol-oriented design, end-to-end encryption, real-time sync, and the
            kind of polish that makes users forget they&apos;re using technology at
            all.
          </p>

          {/* Final paragraph — brighter, as the "punchline" */}
          <p className="text-lg leading-[1.9] text-text-primary relative">
            {/* Subtle highlight glow behind this paragraph */}
            <span className="absolute -inset-x-4 -inset-y-2 rounded bg-gradient-to-r from-accent-teal/[0.02] via-transparent to-transparent pointer-events-none hidden md:block" />
            <span className="relative">
              Off the clock, you&apos;ll find Mit analyzing team compositions in Dota 2,
              tracking lap times in Formula 1, or debating whether async/await is the
              greatest thing to happen to Swift. Some people separate work and play. Mit
              just found a way to make them the same thing.
            </span>
          </p>

          {/* Closing quote mark */}
          <div className="absolute -right-6 bottom-0 text-7xl text-accent-teal/[0.07] font-display select-none hidden md:block leading-none">
            &rdquo;
          </div>

          {/* Courier delivers the story */}
          <div className="flex justify-center mt-8">
            <CourierIcon size={32} className="text-accent-teal/30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="section-divider" />
      </div>
    </section>
  );
}
