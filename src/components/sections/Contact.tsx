import { SwordDivider } from "@/components/icons/DotaIcons";

const contactLinks = [
  {
    label: "Email",
    value: "miteduc8@gmail.com",
    href: "mailto:miteduc8@gmail.com",
    icon: "\u2709",
    sublabel: "Direct Message",
  },
  {
    label: "GitHub",
    value: "mit112",
    href: "https://github.com/mit112",
    icon: "\u2302",
    sublabel: "Source Code",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "mit-sheth",
    href: "https://linkedin.com/in/mit-sheth",
    icon: "\u261E",
    sublabel: "Professional",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div id="contact" className="scroll-mt-20" />

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 victory-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary/80" />

      {/* Radial gold burst */}
      <div
        className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(240,173,78,0.4) 0%, transparent 60%)",
        }}
      />

      {/* Roshan watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dota/roshan.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-[2%] w-[360px] h-auto opacity-[0.06] pointer-events-none select-none mix-blend-soft-light"
      />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* ── Victory Banner ── */}
        <div className="text-center mb-16">
          {/* Match result tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-attr-agi/10 border border-attr-agi/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-attr-agi shadow-[0_0_8px_rgba(127,191,27,0.6)]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[3px] text-attr-agi">
              Victory
            </span>
          </div>

          <h2 className="font-display text-7xl md:text-9xl font-bold tracking-wider text-accent-gold text-glow-gold leading-none">
            GGWP
          </h2>
          <p className="text-lg text-text-secondary tracking-wide mt-4 font-light">
            Let&apos;s win together
          </p>
        </div>

        {/* ── Contact Cards — styled like post-game player cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group relative rounded-sm p-5 text-center
                bg-gradient-to-b from-[#201E1A] to-[#181614]
                border border-border-subtle/40
                hover:border-accent-primary/30
                hover:shadow-[inset_0_0_0_1px_rgba(240,173,78,0.1),0_0_30px_rgba(240,173,78,0.06)]
                transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-accent-primary/0 group-hover:via-accent-primary/30 to-transparent transition-all duration-300" />

              <span className="block text-2xl mb-2 opacity-40 group-hover:opacity-70 transition-opacity">
                {link.icon}
              </span>
              <span className="block text-[9px] font-mono text-text-muted uppercase tracking-[2px] mb-1.5">
                {link.sublabel}
              </span>
              <span className="block text-sm text-text-primary font-medium group-hover:text-accent-primary transition-colors">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        {/* ── Divider ── */}
        <SwordDivider className="max-w-sm mx-auto mb-12" />

        {/* ── Aegis Drop — Resume Download ── */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-[3px] mb-4">
            Aegis Dropped — Claim It
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 relative
              bg-gradient-to-r from-[#F0AD4E] via-[#FFCD8D] to-[#F0AD4E]
              text-bg-primary font-display text-base uppercase tracking-[3px] font-bold
              px-12 py-4 rounded-sm
              shadow-[0_0_40px_rgba(240,173,78,0.2),0_4px_16px_rgba(0,0,0,0.3)]
              hover:shadow-[0_0_60px_rgba(240,173,78,0.35),0_4px_24px_rgba(0,0,0,0.4)]
              hover:scale-[1.02]
              active:scale-[0.99]
              transition-all duration-300
              group"
          >
            <span className="relative">
              Download Resume
            </span>
          </a>
        </div>

        {/* ── Post-Game Actions — Add to Party / Commend ── */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="https://linkedin.com/in/mit-sheth"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-sm
              border border-accent-primary/20 text-accent-primary
              hover:bg-accent-primary/10 hover:border-accent-primary/40
              transition-all duration-300"
          >
            <span className="text-lg leading-none opacity-60 group-hover:opacity-100 transition-opacity">+</span>
            <span className="text-sm font-mono uppercase tracking-wider">Add to Party</span>
          </a>

          <a
            href="mailto:miteduc8@gmail.com?subject=Commend%20—%20Let's%20Connect"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-sm
              border border-accent-gold/20 text-accent-gold
              hover:bg-accent-gold/10 hover:border-accent-gold/40
              transition-all duration-300"
          >
            <span className="text-lg leading-none opacity-60 group-hover:opacity-100 transition-opacity">{"\u2605"}</span>
            <span className="text-sm font-mono uppercase tracking-wider">Commend</span>
          </a>
        </div>

        {/* ── Footer ── */}
        <div className="text-center">
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-border-subtle to-transparent mb-6" />
          <p className="text-[10px] text-text-muted/50 font-mono tracking-wider">
            Designed &amp; built with obsessive attention to detail — just like my apps.
          </p>
        </div>
      </div>
    </section>
  );
}
