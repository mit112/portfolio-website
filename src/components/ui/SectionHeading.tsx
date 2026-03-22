import { SwordDivider } from "@/components/icons/DotaIcons";

interface SectionHeadingProps {
  dotaName: string;
  plainName: string;
  id: string;
}

export default function SectionHeading({ dotaName, plainName, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-20">
      <SwordDivider className="mb-6" />

      {/* Dota name - decorative, with metallic underline */}
      <span
        aria-hidden="true"
        className="block font-display text-3xl md:text-[2.5rem] font-bold uppercase tracking-[3px] text-text-primary text-glow-primary select-none metallic-underline"
      >
        {dotaName}
      </span>

      {/* Plain name - semantic */}
      <h2 className="text-sm md:text-base text-text-muted mt-3 tracking-wider uppercase font-mono">
        {plainName}
      </h2>
    </div>
  );
}
