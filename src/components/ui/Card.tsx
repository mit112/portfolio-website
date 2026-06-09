import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  rarity?: "mythical" | "legendary" | "immortal";
  hoverable?: boolean;
}

const rarityColors = {
  mythical: { border: "#8847FF", glow: "rgba(136, 71, 255, 0.2)" },
  legendary: { border: "#D32CE6", glow: "rgba(211, 44, 230, 0.2)" },
  immortal: { border: "#F0AD4E", glow: "rgba(178, 138, 51, 0.2)" },
};

export default function Card({
  children,
  className,
  rarity,
  hoverable = true,
}: CardProps) {
  const rarityStyle = rarity ? rarityColors[rarity] : null;

  return (
    <div
      className={cn(
        "relative rounded-sm",
        "dota-bevel",
        !rarity && "gold-accent-top",
        hoverable && [
          "transition-all duration-300",
          "hover:border-border-active",
          "hover:shadow-[0_0_30px_rgba(240,173,78,0.1),inset_0_0_30px_rgba(240,173,78,0.03)]",
          "hover:translate-y-[-2px]",
        ],
        className
      )}
      style={
        rarityStyle
          ? {
              borderTopColor: rarityStyle.border,
              borderTopWidth: "3px",
              boxShadow: `0 -6px 25px ${rarityStyle.glow}, inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)`,
            }
          : undefined
      }
    >
      {/* Inner gradient overlay for depth */}
      <div className="absolute inset-0 rounded bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Corner marks — more visible */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-primary/60" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent-primary/60" />

      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
