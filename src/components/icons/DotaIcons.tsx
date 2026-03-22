import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Prop types
// ---------------------------------------------------------------------------

interface IconProps {
  size?: number;
  className?: string;
}

interface DiamondProps {
  size?: number;
  state?: "ready" | "cooldown" | "no-mana";
  className?: string;
}

interface AbilityFrameProps {
  size?: number;
  children?: ReactNode;
  active?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Strength Icon -- Raised sword / gauntlet silhouette (red STR attribute)
// ---------------------------------------------------------------------------

export function StrengthIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Blade */}
      <path
        d="M12 2v14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Crossguard */}
      <path
        d="M7 10h10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Pommel / grip base */}
      <path
        d="M9.5 18.5L12 22l2.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Blade tip accent */}
      <circle cx="12" cy="2" r="1.2" fill="currentColor" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Agility Icon -- Swooping wing / crossed blades (green AGI attribute)
// ---------------------------------------------------------------------------

export function AgilityIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Primary wing / blade sweeping from bottom-left to top-right */}
      <path
        d="M3 20C5 16 9 10 21 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Upper feather / blade edge */}
      <path
        d="M8 12C10 9 14 6 21 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Lower feather / trailing edge */}
      <path
        d="M3 20C6 18 10 15 14 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Wing tip flare */}
      <path
        d="M19 5l2-1.5L19.5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Speed lines */}
      <path
        d="M1 17h3M2 14h2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Intelligence Icon -- Glowing orb with radiating magical emanations (blue INT)
// ---------------------------------------------------------------------------

export function IntelligenceIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central orb */}
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Inner glow core */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />

      {/* Radiating lines -- N, NE, E, SE, S, SW, W, NW */}
      {/* North */}
      <line x1="12" y1="5" x2="12" y2="1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* South */}
      <line x1="12" y1="19" x2="12" y2="22.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* East */}
      <line x1="19" y1="12" x2="22.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* West */}
      <line x1="5" y1="12" x2="1.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      {/* Diagonal sparkle rays (shorter) */}
      {/* NE */}
      <line x1="15.5" y1="8.5" x2="17.5" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* SE */}
      <line x1="15.5" y1="15.5" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* SW */}
      <line x1="8.5" y1="15.5" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* NW */}
      <line x1="8.5" y1="8.5" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Aegis of the Immortal -- Shield / chevron with diamond cutout
// ---------------------------------------------------------------------------

export function AegisIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Cut-out the inner diamond from the shield body */}
        <mask id="aegis-mask">
          <rect width="24" height="24" fill="white" />
          {/* Diamond cutout */}
          <polygon points="12,7 15,12 12,17 9,12" fill="black" />
        </mask>
      </defs>

      {/* Shield body -- pointed chevron / pentagon shape */}
      <path
        d="M12 1L3 5.5V12C3 17 7 21 12 23C17 21 21 17 21 12V5.5L12 1Z"
        fill="currentColor"
        mask="url(#aegis-mask)"
      />

      {/* Diamond outline for emphasis */}
      <polygon
        points="12,7 15,12 12,17 9,12"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />

      {/* Top crest accent */}
      <path
        d="M12 1L10 3h4L12 1Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Ultimate Diamond -- The small diamond above hero portraits
// Green = ready, grey = cooldown, blue = no mana
// ---------------------------------------------------------------------------

export function UltimateDiamond({ size = 12, state = "ready", className }: DiamondProps) {
  const fills: Record<typeof state, string> = {
    ready: "#7FBF1B",
    cooldown: "#6B7280",
    "no-mana": "#00A6FF",
  };

  const glows: Record<typeof state, string> = {
    ready: "drop-shadow(0 0 3px rgba(127,191,27,0.6))",
    cooldown: "none",
    "no-mana": "drop-shadow(0 0 3px rgba(0,166,255,0.5))",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: glows[state] }}
      aria-label={`Ultimate ${state === "ready" ? "ready" : state === "cooldown" ? "on cooldown" : "not enough mana"}`}
      role="img"
    >
      {/* Diamond shape */}
      <polygon
        points="6,0.5 11.5,6 6,11.5 0.5,6"
        fill={fills[state]}
      />
      {/* Inner highlight for depth */}
      <polygon
        points="6,2.5 9.5,6 6,9.5 2.5,6"
        fill="white"
        opacity="0.15"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Gold Coin -- Simple gold circle with inner line (currency indicator)
// ---------------------------------------------------------------------------

export function GoldCoin({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer coin */}
      <circle cx="8" cy="8" r="7" stroke="#F0AD4E" strokeWidth="1.5" fill="#F0AD4E" fillOpacity="0.15" />
      {/* Inner ring for embossed look */}
      <circle cx="8" cy="8" r="4.5" stroke="#F0AD4E" strokeWidth="0.8" opacity="0.6" />
      {/* Vertical line through center -- coin denomination mark */}
      <line x1="8" y1="4.5" x2="8" y2="11.5" stroke="#F0AD4E" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      {/* Horizontal dash */}
      <line x1="5.5" y1="8" x2="10.5" y2="8" stroke="#F0AD4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Ancient Silhouette -- Radiant Ancient tower for background decoration
// Designed for large sizes (200-400px), renders at very low opacity
// ---------------------------------------------------------------------------

export function AncientSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.04 }}
      aria-hidden="true"
    >
      {/* Main tower trunk -- tall and angular like the Radiant Ancient */}
      <path
        d="
          M100 10
          L120 60
          L115 100
          L125 140
          L118 180
          L130 220
          L122 260
          L135 300
          L140 360
          L145 390
          H55
          L60 360
          L65 300
          L78 260
          L70 220
          L82 180
          L75 140
          L85 100
          L80 60
          Z
        "
        fill="currentColor"
      />

      {/* Crystal branch -- upper left */}
      <path
        d="M80 60L50 30L55 70L75 80"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Crystal branch -- upper right */}
      <path
        d="M120 60L150 30L145 70L125 80"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Mid-left crystal shard */}
      <path
        d="M75 140L40 120L50 155L78 160"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Mid-right crystal shard */}
      <path
        d="M125 140L160 120L150 155L122 160"
        fill="currentColor"
        opacity="0.5"
      />

      {/* Small left shard */}
      <path
        d="M70 220L45 210L55 235L75 230"
        fill="currentColor"
        opacity="0.35"
      />
      {/* Small right shard */}
      <path
        d="M130 220L155 210L145 235L125 230"
        fill="currentColor"
        opacity="0.35"
      />

      {/* Base platform -- stepped stone */}
      <path
        d="M55 390H145V400H50L45 395H155L150 390"
        fill="currentColor"
        opacity="0.6"
      />
      <rect x="40" y="396" width="120" height="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Ability Frame -- The beveled square frame around every ability icon in Dota
// ---------------------------------------------------------------------------

export function AbilityFrame({ size = 48, children, active, className }: AbilityFrameProps) {
  const borderColor = active ? "rgba(240,173,78,0.8)" : "rgba(42,45,53,0.9)";
  const glowColor = active ? "rgba(240,173,78,0.25)" : "transparent";

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* SVG frame */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          {/* Inner area gradient -- lighter top fading to darker bottom */}
          <linearGradient id="abilityBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,28,22,0.9)" />
            <stop offset="100%" stopColor="rgba(18,15,12,0.95)" />
          </linearGradient>

          {/* Active glow filter */}
          {active && (
            <filter id="abilityGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          )}
        </defs>

        {/* Outer glow when active */}
        {active && (
          <rect
            x="0" y="0"
            width="48" height="48"
            rx="2"
            fill="none"
            stroke={glowColor}
            strokeWidth="6"
            filter="url(#abilityGlow)"
          />
        )}

        {/* Outer border */}
        <rect
          x="1" y="1"
          width="46" height="46"
          rx="2"
          fill="none"
          stroke={borderColor}
          strokeWidth="2"
        />

        {/* Inner gap / channel */}
        <rect
          x="3.5" y="3.5"
          width="41" height="41"
          rx="1"
          fill="none"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="1"
        />

        {/* Inner background fill */}
        <rect
          x="4.5" y="4.5"
          width="39" height="39"
          rx="1"
          fill="url(#abilityBg)"
        />

        {/* Top-left bevel highlight */}
        <path
          d="M5 5H43"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <path
          d="M5 5V43"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />

        {/* Bottom-right shadow edge */}
        <path
          d="M43 5V43H5"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="1"
        />
      </svg>

      {/* Children (icon content) rendered inside the frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: size * 0.1,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sword Divider -- Horizontal ornamental rule with two crossed swords
// ---------------------------------------------------------------------------

export function SwordDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: 24 }}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Left horizontal line */}
      <line
        x1="0" y1="12"
        x2="170" y2="12"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
      {/* Right horizontal line */}
      <line
        x1="230" y1="12"
        x2="400" y2="12"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />

      {/* Gradient fade on line ends */}
      <defs>
        <linearGradient id="swordLineL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="swordLineR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="12" x2="170" y2="12" stroke="url(#swordLineL)" strokeWidth="0.8" />
      <line x1="230" y1="12" x2="400" y2="12" stroke="url(#swordLineR)" strokeWidth="0.8" />

      {/* Crossed swords in the center */}
      <g transform="translate(200, 12)">
        {/* Sword 1 -- top-left to bottom-right */}
        <g transform="rotate(-45)">
          {/* Blade */}
          <rect x="-1" y="-12" width="2" height="16" rx="0.5" fill="currentColor" opacity="0.6" />
          {/* Crossguard */}
          <rect x="-5" y="2" width="10" height="2" rx="0.5" fill="currentColor" opacity="0.6" />
          {/* Pommel */}
          <circle cx="0" cy="7" r="1.5" fill="currentColor" opacity="0.4" />
          {/* Blade tip */}
          <polygon points="0,-13.5 -1,-12 1,-12" fill="currentColor" opacity="0.7" />
        </g>

        {/* Sword 2 -- top-right to bottom-left (mirrored) */}
        <g transform="rotate(45)">
          {/* Blade */}
          <rect x="-1" y="-12" width="2" height="16" rx="0.5" fill="currentColor" opacity="0.6" />
          {/* Crossguard */}
          <rect x="-5" y="2" width="10" height="2" rx="0.5" fill="currentColor" opacity="0.6" />
          {/* Pommel */}
          <circle cx="0" cy="7" r="1.5" fill="currentColor" opacity="0.4" />
          {/* Blade tip */}
          <polygon points="0,-13.5 -1,-12 1,-12" fill="currentColor" opacity="0.7" />
        </g>

        {/* Center diamond ornament where swords cross */}
        <polygon
          points="0,-4 4,0 0,4 -4,0"
          fill="currentColor"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Rank Medal Frame -- Circular ornate frame with cardinal points and wings
// Designed for hero portrait / profile photo
// ---------------------------------------------------------------------------

export function RankMedalFrame({
  size = 80,
  className,
  children,
}: {
  size?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          {/* Clip circle for children content */}
          <clipPath id="medalClip">
            <circle cx="40" cy="40" r="28" />
          </clipPath>
        </defs>

        {/* Outer decorative ring */}
        <circle
          cx="40" cy="40" r="36"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
        />

        {/* Main medal ring */}
        <circle
          cx="40" cy="40" r="30"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Inner ring */}
        <circle
          cx="40" cy="40" r="28"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Cardinal point -- North (triangle) */}
        <polygon
          points="40,2 36,10 44,10"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Cardinal point -- South */}
        <polygon
          points="40,78 36,70 44,70"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Cardinal point -- East */}
        <polygon
          points="78,40 70,36 70,44"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Cardinal point -- West */}
        <polygon
          points="2,40 10,36 10,44"
          fill="currentColor"
          opacity="0.5"
        />

        {/* Wing decoration -- Left */}
        <path
          d="M10 40C6 34 3 28 2 22C4 26 8 30 10 33"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M10 40C6 46 3 52 2 58C4 54 8 50 10 47"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Left wing fill shape */}
        <path
          d="M10 33C6 28 4 24 2 22L2 58C4 56 6 52 10 47V40V33Z"
          fill="currentColor"
          opacity="0.06"
        />

        {/* Wing decoration -- Right */}
        <path
          d="M70 40C74 34 77 28 78 22C76 26 72 30 70 33"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M70 40C74 46 77 52 78 58C76 54 72 50 70 47"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Right wing fill shape */}
        <path
          d="M70 33C74 28 76 24 78 22L78 58C76 56 74 52 70 47V40V33Z"
          fill="currentColor"
          opacity="0.06"
        />

        {/* Small ornamental dots between cardinal points */}
        {/* NE */}
        <circle cx="63" cy="17" r="1.5" fill="currentColor" opacity="0.25" />
        {/* SE */}
        <circle cx="63" cy="63" r="1.5" fill="currentColor" opacity="0.25" />
        {/* SW */}
        <circle cx="17" cy="63" r="1.5" fill="currentColor" opacity="0.25" />
        {/* NW */}
        <circle cx="17" cy="17" r="1.5" fill="currentColor" opacity="0.25" />
      </svg>

      {/* Children rendered inside the circular clip area */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "circle(35% at center)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
