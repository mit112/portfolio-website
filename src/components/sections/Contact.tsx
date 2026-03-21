import SectionHeading from "@/components/ui/SectionHeading";
import { AegisIcon, SwordDivider } from "@/components/icons/DotaIcons";
import { DireAncient } from "@/components/icons/DotaAssets";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      {/* Layered victory background */}
      <div className="absolute inset-0 victory-glow" />
      <div className="glow-spot glow-spot--gold absolute left-1/2 -translate-x-1/2 top-[20%] opacity-[0.06]" />
      <div className="glow-spot glow-spot--gold absolute left-1/2 -translate-x-1/2 top-[40%] opacity-[0.12] w-[800px] h-[800px]" />

      {/* Radial line burst behind GG WP — very subtle */}
      <div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[500px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(178,138,51,0.3) 2deg, transparent 4deg, transparent 20deg, rgba(178,138,51,0.3) 22deg, transparent 24deg, transparent 40deg, rgba(178,138,51,0.3) 42deg, transparent 44deg, transparent 60deg, rgba(178,138,51,0.3) 62deg, transparent 64deg, transparent 80deg, rgba(178,138,51,0.3) 82deg, transparent 84deg, transparent 100deg, rgba(178,138,51,0.3) 102deg, transparent 104deg, transparent 120deg, rgba(178,138,51,0.3) 122deg, transparent 124deg, transparent 140deg, rgba(178,138,51,0.3) 142deg, transparent 144deg, transparent 160deg, rgba(178,138,51,0.3) 162deg, transparent 164deg, transparent 180deg, rgba(178,138,51,0.3) 182deg, transparent 184deg, transparent 200deg, rgba(178,138,51,0.3) 202deg, transparent 204deg, transparent 220deg, rgba(178,138,51,0.3) 222deg, transparent 224deg, transparent 240deg, rgba(178,138,51,0.3) 242deg, transparent 244deg, transparent 260deg, rgba(178,138,51,0.3) 262deg, transparent 264deg, transparent 280deg, rgba(178,138,51,0.3) 282deg, transparent 284deg, transparent 300deg, rgba(178,138,51,0.3) 302deg, transparent 304deg, transparent 320deg, rgba(178,138,51,0.3) 322deg, transparent 324deg, transparent 340deg, rgba(178,138,51,0.3) 342deg, transparent 344deg, transparent 360deg)",
        }}
      />

      <DireAncient className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[200px] h-[400px] text-accent-gold/[0.04] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* GG WP — the hero moment */}
        <h2 className="font-display text-6xl md:text-8xl font-bold tracking-wider text-accent-gold text-glow-gold mb-3 relative">
          {/* Reflected gold underline */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
          GG WP
        </h2>
        <p className="text-xl text-text-secondary tracking-wide mb-12">
          Let&apos;s win together
        </p>

        {/* Ornamental divider */}
        <SwordDivider className="max-w-md mx-auto mb-12" />

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <a
            href="mailto:miteduc8@gmail.com"
            className="group flex items-center gap-2.5 text-accent-teal hover:text-text-primary transition-colors duration-300"
          >
            <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">
              {"\u2709"}
            </span>
            <span className="border-b border-transparent group-hover:border-accent-teal/50 transition-colors pb-px">
              miteduc8@gmail.com
            </span>
          </a>

          <span className="hidden sm:block text-border-subtle/50 text-xs">
            |
          </span>

          <a
            href="https://github.com/mit112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent-teal transition-colors duration-300 border-b border-transparent hover:border-accent-teal/30 pb-px"
          >
            github.com/mit112
          </a>

          <span className="hidden sm:block text-border-subtle/50 text-xs">
            |
          </span>

          <a
            href="https://linkedin.com/in/mit-sheth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent-teal transition-colors duration-300 border-b border-transparent hover:border-accent-teal/30 pb-px"
          >
            linkedin.com/in/mit-sheth
          </a>
        </div>

        {/* Aegis download button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 relative
            bg-gradient-to-r from-accent-gold via-[#D4A843] to-accent-gold
            text-bg-primary font-display text-base uppercase tracking-[3px] font-bold
            px-10 py-4 rounded-sm
            shadow-[0_0_30px_rgba(178,138,51,0.15),0_4px_16px_rgba(0,0,0,0.3)]
            hover:shadow-[0_0_50px_rgba(178,138,51,0.3),0_4px_24px_rgba(0,0,0,0.4)]
            hover:scale-[1.02]
            active:scale-[0.99]
            transition-all duration-300
            group"
        >
          {/* Shimmer overlay */}
          <span className="absolute inset-0 rounded-sm bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <span className="relative flex items-center gap-3">
            <AegisIcon size={24} className="text-bg-primary" />
            Download Resume
          </span>
        </a>

        {/* Party / Commend links */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://linkedin.com/in/mit-sheth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-teal hover:text-text-primary transition-colors duration-300 group flex items-center gap-1.5"
          >
            <span className="opacity-50 group-hover:opacity-100 transition-opacity text-base">
              +
            </span>
            <span className="border-b border-transparent group-hover:border-accent-teal/30 pb-px">
              Add to Party
            </span>
          </a>

          <a
            href="https://linkedin.com/in/mit-sheth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-gold hover:text-text-primary transition-colors duration-300 group flex items-center gap-1.5"
          >
            <span className="opacity-50 group-hover:opacity-100 transition-opacity text-base">
              {"\u2605"}
            </span>
            <span className="border-b border-transparent group-hover:border-accent-gold/30 pb-px">
              Commend
            </span>
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-20 text-xs text-text-muted/70 font-mono tracking-wide">
          Designed &amp; built with obsessive attention to detail — just like my apps.
        </p>
      </div>
    </section>
  );
}
