import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// DotaAssets.tsx — Large, detailed SVG components for background elements,
// decorative features, and section art. Every asset is something a Dota 2
// player recognizes immediately.
//
// All components accept className for sizing/positioning.
// All decorative elements use aria-hidden="true".
// Color palette: primary gold #F0AD4E, light gold #FFCD8D, Dire red #A91B0D, Radiant green #598307
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 1. DOTA MINIMAP — The iconic three-lane map
// Three lanes connecting Radiant (bottom-left) and Dire (top-right) bases,
// river running diagonally, jungle camps, Roshan pit.
// ---------------------------------------------------------------------------

export function DotaMinimap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* === MAP BOUNDARY === */}
      <rect
        x="4"
        y="4"
        width="192"
        height="192"
        rx="3"
        stroke="rgba(240,173,78,0.25)"
        strokeWidth="1.5"
        fill="rgba(10,12,8,0.6)"
      />

      {/* === RIVER — diagonal from top-left to bottom-right === */}
      <path
        d="M10 190 C40 165, 55 150, 70 135 C85 120, 95 110, 100 100
           C105 90, 115 80, 130 65 C145 50, 160 35, 190 10"
        stroke="rgba(0,166,255,0.2)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      {/* River highlight center line */}
      <path
        d="M12 188 C42 163, 57 148, 72 133 C87 118, 97 108, 102 98
           C107 88, 117 78, 132 63 C147 48, 162 33, 188 12"
        stroke="rgba(0,166,255,0.12)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* === RADIANT BASE — bottom-left corner === */}
      <rect
        x="8"
        y="168"
        width="28"
        height="28"
        rx="2"
        fill="rgba(89,131,7,0.25)"
        stroke="rgba(89,131,7,0.5)"
        strokeWidth="1.5"
      />
      {/* Radiant Ancient dot */}
      <circle cx="22" cy="182" r="4" fill="rgba(89,131,7,0.7)" />
      <circle cx="22" cy="182" r="2" fill="rgba(127,191,27,0.8)" />

      {/* === DIRE BASE — top-right corner === */}
      <rect
        x="164"
        y="8"
        width="28"
        height="28"
        rx="2"
        fill="rgba(191,46,26,0.25)"
        stroke="rgba(191,46,26,0.5)"
        strokeWidth="1.5"
      />
      {/* Dire Ancient dot */}
      <circle cx="178" cy="22" r="4" fill="rgba(191,46,26,0.7)" />
      <circle cx="178" cy="22" r="2" fill="rgba(220,60,30,0.8)" />

      {/* === THREE LANES === */}

      {/* TOP LANE — from Radiant base, goes UP along left side, then RIGHT along top to Dire */}
      <path
        d="M22 168 L22 22 L164 22"
        stroke="rgba(200,200,200,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* MID LANE — diagonal straight through center */}
      <path
        d="M32 172 L100 100 L168 32"
        stroke="rgba(200,200,200,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* BOTTOM LANE — from Radiant base, goes RIGHT along bottom, then UP along right side to Dire */}
      <path
        d="M36 182 L178 182 L178 36"
        stroke="rgba(200,200,200,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* === TOWER DOTS along lanes === */}
      {/* Radiant towers — top lane */}
      <circle cx="22" cy="145" r="2" fill="rgba(89,131,7,0.6)" />
      <circle cx="22" cy="110" r="2" fill="rgba(89,131,7,0.6)" />
      <circle cx="22" cy="60" r="2" fill="rgba(89,131,7,0.5)" />
      <circle cx="60" cy="22" r="2" fill="rgba(89,131,7,0.5)" />
      {/* Radiant towers — mid lane */}
      <circle cx="50" cy="150" r="2" fill="rgba(89,131,7,0.6)" />
      <circle cx="72" cy="128" r="2" fill="rgba(89,131,7,0.5)" />
      {/* Radiant towers — bot lane */}
      <circle cx="60" cy="182" r="2" fill="rgba(89,131,7,0.6)" />
      <circle cx="110" cy="182" r="2" fill="rgba(89,131,7,0.5)" />

      {/* Dire towers — top lane */}
      <circle cx="110" cy="22" r="2" fill="rgba(191,46,26,0.5)" />
      <circle cx="145" cy="22" r="2" fill="rgba(191,46,26,0.6)" />
      {/* Dire towers — mid lane */}
      <circle cx="128" cy="72" r="2" fill="rgba(191,46,26,0.5)" />
      <circle cx="150" cy="50" r="2" fill="rgba(191,46,26,0.6)" />
      {/* Dire towers — bot lane */}
      <circle cx="178" cy="60" r="2" fill="rgba(191,46,26,0.5)" />
      <circle cx="178" cy="110" r="2" fill="rgba(191,46,26,0.6)" />
      <circle cx="178" cy="145" r="2" fill="rgba(191,46,26,0.6)" />
      <circle cx="145" cy="182" r="2" fill="rgba(191,46,26,0.5)" />

      {/* === JUNGLE CAMPS — small dots in quadrants between lanes === */}
      {/* Radiant jungle (bottom-left quadrant) */}
      <circle cx="55" cy="140" r="1.5" fill="rgba(89,131,7,0.25)" />
      <circle cx="45" cy="155" r="1.5" fill="rgba(89,131,7,0.25)" />
      <circle cx="70" cy="158" r="1.5" fill="rgba(89,131,7,0.25)" />
      <circle cx="80" cy="168" r="1.5" fill="rgba(89,131,7,0.2)" />
      <circle cx="42" cy="128" r="1.5" fill="rgba(89,131,7,0.2)" />
      {/* Radiant ancients camp */}
      <circle cx="60" cy="120" r="2" fill="rgba(89,131,7,0.2)" stroke="rgba(89,131,7,0.3)" strokeWidth="0.5" />

      {/* Dire jungle (top-right quadrant) */}
      <circle cx="140" cy="55" r="1.5" fill="rgba(191,46,26,0.25)" />
      <circle cx="155" cy="45" r="1.5" fill="rgba(191,46,26,0.25)" />
      <circle cx="158" cy="70" r="1.5" fill="rgba(191,46,26,0.25)" />
      <circle cx="128" cy="42" r="1.5" fill="rgba(191,46,26,0.2)" />
      <circle cx="168" cy="80" r="1.5" fill="rgba(191,46,26,0.2)" />
      {/* Dire ancients camp */}
      <circle cx="140" cy="60" r="2" fill="rgba(191,46,26,0.2)" stroke="rgba(191,46,26,0.3)" strokeWidth="0.5" />

      {/* === ROSHAN PIT — diamond near the river, top side === */}
      <polygon
        points="108,72 114,78 108,84 102,78"
        fill="rgba(240,173,78,0.3)"
        stroke="rgba(240,173,78,0.5)"
        strokeWidth="1"
      />
      {/* Roshan dot */}
      <circle cx="108" cy="78" r="2" fill="rgba(240,173,78,0.6)" />

      {/* === RUNE SPOTS — on the river === */}
      {/* Top rune */}
      <polygon
        points="78,118 82,122 78,126 74,122"
        fill="rgba(0,166,255,0.35)"
        stroke="rgba(0,166,255,0.5)"
        strokeWidth="0.8"
      />
      {/* Bottom rune */}
      <polygon
        points="122,78 126,82 122,86 118,82"
        fill="rgba(0,166,255,0.35)"
        stroke="rgba(0,166,255,0.5)"
        strokeWidth="0.8"
      />

      {/* === SECRET SHOPS — small squares off in corners === */}
      <rect x="15" y="60" width="5" height="5" rx="1" fill="rgba(240,173,78,0.2)" stroke="rgba(240,173,78,0.3)" strokeWidth="0.5" />
      <rect x="140" y="148" width="5" height="5" rx="1" fill="rgba(240,173,78,0.2)" stroke="rgba(240,173,78,0.3)" strokeWidth="0.5" />

      {/* === SUBTLE TREE TEXTURE — tiny dots to suggest terrain === */}
      {[
        [35, 45], [48, 38], [30, 85], [85, 30],
        [155, 130], [130, 155], [160, 110], [110, 160],
        [90, 45], [45, 90], [155, 95], [95, 155],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="1"
          fill="rgba(100,120,80,0.15)"
        />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 2. ROSHAN SILHOUETTE — The boss monster of Dota 2
// Hulking beast with horns, broad shoulders, Aegis at feet.
// ---------------------------------------------------------------------------

export function RoshanSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Roshan — dragon-beast silhouette (Dota 2 accurate)
          Large head with two curved horns, massive jaw with lower fangs,
          hunched reptilian body, thick clawed arms, rocky armor plates,
          thick legs, and a tail. NOT a humanoid — a beast/dragon creature. */}

      {/* Left horn — thick, curving backward and outward */}
      <path
        d="M 44 30 C 38 24, 26 14, 18 8 C 14 5, 10 6, 12 12 C 14 18, 24 24, 34 28 Z"
        fill="currentColor"
      />

      {/* Right horn — thick, curving backward and outward */}
      <path
        d="M 76 30 C 82 24, 94 14, 102 8 C 106 5, 110 6, 108 12 C 106 18, 96 24, 86 28 Z"
        fill="currentColor"
      />

      {/* Main body — head, torso, arms, legs as one compound shape */}
      <path
        d={`
          M 60 24
          C 66 22, 74 24, 78 30
          C 82 36, 80 40, 78 42
          L 82 44
          C 86 42, 92 44, 96 42
          L 94 38
          C 98 40, 100 44, 96 46
          L 92 48
          C 96 52, 98 58, 96 64
          C 98 68, 100 76, 96 82
          L 98 86
          C 100 90, 98 96, 94 96
          C 90 96, 88 92, 88 88
          L 86 80
          C 84 72, 82 64, 80 56
          C 82 66, 84 78, 82 86

          C 84 94, 86 104, 84 112
          C 82 118, 76 120, 72 118
          C 68 114, 68 106, 66 96

          C 64 92, 56 92, 54 96

          C 52 106, 52 114, 48 118
          C 44 120, 38 118, 36 112
          C 34 104, 36 94, 38 86

          C 36 78, 38 66, 40 56
          C 38 64, 36 72, 34 80
          L 32 88
          C 32 92, 30 96, 26 96
          C 22 96, 20 90, 22 86
          L 24 82
          C 20 76, 22 68, 24 64
          C 22 58, 20 52, 28 48
          L 24 46
          C 20 44, 22 40, 26 38
          L 24 42
          C 28 44, 34 42, 38 44
          L 42 42
          C 40 40, 38 36, 42 30
          C 46 24, 54 22, 60 24
          Z
        `}
        fill="currentColor"
      />

      {/* Lower jaw — protruding, wide, with fang bumps */}
      <path
        d="M 42 42 C 44 48, 46 52, 50 54 C 52 56, 56 58, 60 56 C 64 54, 68 52, 72 50 C 76 48, 78 44, 78 42
           C 74 46, 66 50, 60 50 C 54 50, 46 46, 42 42 Z"
        fill="currentColor"
      />

      {/* Left fang */}
      <path d="M 46 48 L 44 54 L 48 50 Z" fill="currentColor" />
      {/* Right fang */}
      <path d="M 74 48 L 76 54 L 72 50 Z" fill="currentColor" />

      {/* Rocky spine ridges along back */}
      <path d="M 54 26 L 52 20 L 56 22 Z" fill="currentColor" />
      <path d="M 60 24 L 60 18 L 64 22 Z" fill="currentColor" />
      <path d="M 66 26 L 68 20 L 70 24 Z" fill="currentColor" />

      {/* Tail — curving out to the right from the lower body */}
      <path
        d="M 82 100 C 88 102, 96 98, 102 100 C 108 102, 114 100, 116 96
           C 118 92, 116 90, 112 92 C 108 94, 100 96, 92 96 C 86 96, 82 96, 80 94"
        fill="currentColor"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 3. RADIANT ANCIENT — Crystalline tree tower
// Central glowing crystal spire with branching formations and stepped base.
// ---------------------------------------------------------------------------

export function RadiantAncient({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* === STEPPED PLATFORM BASE === */}
      <rect x="25" y="280" width="100" height="8" rx="1" fill="currentColor" opacity="0.35" />
      <rect x="30" y="272" width="90" height="10" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="38" y="264" width="74" height="10" rx="1" fill="currentColor" opacity="0.25" />

      {/* === CENTRAL CRYSTAL SPIRE === */}
      <path
        d="M 75 16 L 62 80 L 58 160 L 54 220 L 50 264 L 100 264 L 96 220 L 92 160 L 88 80 Z"
        fill="currentColor"
        opacity="0.65"
      />
      {/* Inner facet line — left */}
      <path
        d="M 75 16 L 66 80 L 64 160 L 60 220 L 58 264"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
        fill="none"
      />
      {/* Inner facet line — right */}
      <path
        d="M 75 16 L 84 80 L 86 160 L 90 220 L 92 264"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
        fill="none"
      />
      {/* Crystal tip highlight */}
      <path
        d="M 75 16 L 70 40 L 80 40 Z"
        fill="currentColor"
        opacity="0.85"
      />

      {/* === UPPER LEFT CRYSTAL BRANCH === */}
      <path
        d="M 66 65 L 28 20 L 22 28 L 42 60 L 58 80 Z"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Facet */}
      <path d="M 28 20 L 38 50 L 58 75" stroke="currentColor" strokeWidth="0.6" opacity="0.25" fill="none" />

      {/* === UPPER RIGHT CRYSTAL BRANCH === */}
      <path
        d="M 84 65 L 122 20 L 128 28 L 108 60 L 92 80 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path d="M 122 20 L 112 50 L 92 75" stroke="currentColor" strokeWidth="0.6" opacity="0.25" fill="none" />

      {/* === SMALL LEFT SHARD — mid height === */}
      <path
        d="M 60 130 L 18 100 L 16 112 L 38 135 L 56 148 Z"
        fill="currentColor"
        opacity="0.4"
      />

      {/* === SMALL RIGHT SHARD — mid height === */}
      <path
        d="M 90 130 L 132 100 L 134 112 L 112 135 L 94 148 Z"
        fill="currentColor"
        opacity="0.4"
      />

      {/* === LOWER LEFT CRYSTAL SHARD === */}
      <path
        d="M 56 195 L 30 175 L 28 185 L 44 200 L 54 210 Z"
        fill="currentColor"
        opacity="0.3"
      />

      {/* === LOWER RIGHT CRYSTAL SHARD === */}
      <path
        d="M 94 195 L 120 175 L 122 185 L 106 200 L 96 210 Z"
        fill="currentColor"
        opacity="0.3"
      />

      {/* === GLOW LINES radiating from crystal tips === */}
      {/* From top tip */}
      <line x1="75" y1="16" x2="75" y2="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="75" y1="16" x2="68" y2="4" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      <line x1="75" y1="16" x2="82" y2="4" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />

      {/* From upper-left branch tip */}
      <line x1="28" y1="20" x2="22" y2="10" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      <line x1="28" y1="20" x2="18" y2="16" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />

      {/* From upper-right branch tip */}
      <line x1="122" y1="20" x2="128" y2="10" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      <line x1="122" y1="20" x2="132" y2="16" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />

      {/* From mid-left shard tip */}
      <line x1="18" y1="100" x2="10" y2="95" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />

      {/* From mid-right shard tip */}
      <line x1="132" y1="100" x2="140" y2="95" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />

      {/* === SPARKLE DOTS at crystal tips === */}
      <circle cx="75" cy="16" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="28" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="122" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="18" cy="100" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="132" cy="100" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 4. DIRE ANCIENT — The dark, menacing fortress
// Jagged angular shapes, bone/spike decorations, lava/fire accents.
// ---------------------------------------------------------------------------

export function DireAncient({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* === BASE GLOW === */}
      <ellipse cx="75" cy="290" rx="55" ry="6" fill="currentColor" opacity="0.15" />
      <ellipse cx="75" cy="290" rx="35" ry="3" fill="currentColor" opacity="0.1" />

      {/* === JAGGED BASE PLATFORM === */}
      <path
        d="M 20 280 L 25 270 L 35 278 L 45 268 L 55 276 L 65 265 L 75 272
           L 85 265 L 95 276 L 105 268 L 115 278 L 125 270 L 130 280 L 130 295 L 20 295 Z"
        fill="currentColor"
        opacity="0.35"
      />

      {/* === CENTRAL DARK TOWER === */}
      <path
        d="M 75 22 L 58 70 L 54 120 L 50 180 L 46 240 L 42 270
           L 108 270 L 104 240 L 100 180 L 96 120 L 92 70 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Tower jagged edges — left side */}
      <path d="M 58 70 L 48 62 L 54 85" fill="currentColor" opacity="0.45" />
      <path d="M 54 120 L 42 115 L 50 138" fill="currentColor" opacity="0.4" />
      <path d="M 50 180 L 36 178 L 46 198" fill="currentColor" opacity="0.35" />

      {/* Tower jagged edges — right side */}
      <path d="M 92 70 L 102 62 L 96 85" fill="currentColor" opacity="0.45" />
      <path d="M 96 120 L 108 115 L 100 138" fill="currentColor" opacity="0.4" />
      <path d="M 100 180 L 114 178 L 104 198" fill="currentColor" opacity="0.35" />

      {/* === CROWN / TOP SPIKES === */}
      {/* Center spike */}
      <path d="M 75 22 L 72 8 L 75 2 L 78 8 Z" fill="currentColor" opacity="0.7" />
      {/* Left crown spike */}
      <path d="M 64 40 L 52 18 L 56 14 L 62 32 Z" fill="currentColor" opacity="0.55" />
      {/* Right crown spike */}
      <path d="M 86 40 L 98 18 L 94 14 L 88 32 Z" fill="currentColor" opacity="0.55" />
      {/* Far left spike */}
      <path d="M 58 55 L 36 28 L 40 24 L 54 48 Z" fill="currentColor" opacity="0.45" />
      {/* Far right spike */}
      <path d="M 92 55 L 114 28 L 110 24 L 96 48 Z" fill="currentColor" opacity="0.45" />

      {/* === BONE/SPIKE DECORATIONS along sides === */}
      {/* Left bone spikes */}
      <path d="M 48 100 L 30 90 L 32 86 L 50 95 Z" fill="currentColor" opacity="0.35" />
      <path d="M 44 150 L 24 145 L 26 140 L 46 144 Z" fill="currentColor" opacity="0.3" />
      <path d="M 40 210 L 22 208 L 24 204 L 42 205 Z" fill="currentColor" opacity="0.25" />

      {/* Right bone spikes */}
      <path d="M 102 100 L 120 90 L 118 86 L 100 95 Z" fill="currentColor" opacity="0.35" />
      <path d="M 106 150 L 126 145 L 124 140 L 104 144 Z" fill="currentColor" opacity="0.3" />
      <path d="M 110 210 L 128 208 L 126 204 L 108 205 Z" fill="currentColor" opacity="0.25" />

      {/* === SKULL detail on tower front === */}
      {/* Eye sockets */}
      <ellipse cx="62" cy="80" rx="5" ry="6" fill="currentColor" opacity="0.4" />
      <ellipse cx="88" cy="80" rx="5" ry="6" fill="currentColor" opacity="0.4" />

      {/* Mouth / maw */}
      <path
        d="M 62 95 L 66 100 L 70 96 L 75 102 L 80 96 L 84 100 L 88 95"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* === FIRE/LAVA ACCENTS at base === */}
      <path
        d="M 52 270 C 50 260, 56 255, 54 248 C 52 255, 58 258, 56 270"
        fill="currentColor" opacity="0.2"
      />
      <path
        d="M 68 270 C 66 258, 72 252, 70 244 C 68 252, 74 256, 72 270"
        fill="currentColor" opacity="0.25"
      />
      <path
        d="M 82 270 C 80 258, 86 252, 84 244 C 82 252, 88 256, 86 270"
        fill="currentColor" opacity="0.25"
      />
      <path
        d="M 98 270 C 96 260, 102 255, 100 248 C 98 255, 104 258, 102 270"
        fill="currentColor" opacity="0.2"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 5. HERO PORTRAIT FRAME — The octagonal-ish metallic frame around hero portraits
// Gold/metallic border, inner bevel, decorative notches at midpoints.
// ---------------------------------------------------------------------------

export function HeroFrame({
  className,
  children,
  size = 200,
}: {
  className?: string;
  children?: ReactNode;
  size?: number;
}) {
  // Corner cut amount proportional to size
  const cut = size * 0.08;
  // Build the octagonal clip path
  const clipPath = `polygon(
    ${cut}px 0,
    ${size - cut}px 0,
    ${size}px ${cut}px,
    ${size}px ${size - cut}px,
    ${size - cut}px ${size}px,
    ${cut}px ${size}px,
    0 ${size - cut}px,
    0 ${cut}px
  )`;

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
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          {/* Metallic gold gradient for the border */}
          <linearGradient id="heroFrameGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4A843" />
            <stop offset="30%" stopColor="#F0AD4E" />
            <stop offset="60%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#F0AD4E" />
          </linearGradient>
          {/* Inner shadow gradient */}
          <linearGradient id="heroFrameInner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
          </linearGradient>
        </defs>

        {/* Outer octagonal frame — gold */}
        <path
          d="M 16 0 L 184 0 L 200 16 L 200 184 L 184 200 L 16 200 L 0 184 L 0 16 Z"
          fill="none"
          stroke="url(#heroFrameGold)"
          strokeWidth="4"
        />

        {/* Inner octagonal frame — slightly darker for depth */}
        <path
          d="M 20 5 L 180 5 L 195 20 L 195 180 L 180 195 L 20 195 L 5 180 L 5 20 Z"
          fill="none"
          stroke="rgba(80,60,20,0.6)"
          strokeWidth="1.5"
        />

        {/* Inner bevel highlight — top/left edges catch light */}
        <path
          d="M 20 5 L 180 5 L 195 20"
          fill="none"
          stroke="rgba(255,220,130,0.2)"
          strokeWidth="1"
        />
        <path
          d="M 20 5 L 5 20 L 5 180"
          fill="none"
          stroke="rgba(255,220,130,0.15)"
          strokeWidth="1"
        />

        {/* Inner bevel shadow — bottom/right edges */}
        <path
          d="M 180 195 L 195 180 L 195 20"
          fill="none"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="1"
        />
        <path
          d="M 20 195 L 180 195"
          fill="none"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="1"
        />

        {/* Decorative notches at midpoints of each side */}
        {/* Top center */}
        <path d="M 94 0 L 100 5 L 106 0" stroke="url(#heroFrameGold)" strokeWidth="2" fill="none" />
        {/* Bottom center — wider base element */}
        <path d="M 88 200 L 94 195 L 100 197 L 106 195 L 112 200" stroke="url(#heroFrameGold)" strokeWidth="2" fill="none" />
        {/* Left center */}
        <path d="M 0 94 L 5 100 L 0 106" stroke="url(#heroFrameGold)" strokeWidth="2" fill="none" />
        {/* Right center */}
        <path d="M 200 94 L 195 100 L 200 106" stroke="url(#heroFrameGold)" strokeWidth="2" fill="none" />

        {/* Corner accents — small gold dots at each cut corner */}
        <circle cx="16" cy="0" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="184" cy="0" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="200" cy="16" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="200" cy="184" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="184" cy="200" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="16" cy="200" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="0" cy="184" r="2" fill="#F0AD4E" opacity="0.6" />
        <circle cx="0" cy="16" r="2" fill="#F0AD4E" opacity="0.6" />

        {/* Background fill inside the frame */}
        <path
          d="M 20 8 L 180 8 L 192 20 L 192 180 L 180 192 L 20 192 L 8 180 L 8 20 Z"
          fill="url(#heroFrameInner)"
        />
      </svg>

      {/* Children (portrait image) rendered inside the octagonal clip area */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          clipPath: clipPath,
          padding: size * 0.04,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. DOTA ITEM ICONS — Simplified but recognizable versions of iconic items
// ---------------------------------------------------------------------------

export function BKBIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Staff / bar — vertical golden rod */}
      <rect x="14.5" y="6" width="3" height="22" rx="1.5" fill="#F0AD4E" />

      {/* Staff head — wider ornamental top */}
      <path
        d="M 11 8 L 16 3 L 21 8 L 19 10 L 16 7 L 13 10 Z"
        fill="#D4A843"
      />

      {/* Dark orb on top */}
      <circle cx="16" cy="6" r="4" fill="#1E1A16" stroke="#F0AD4E" strokeWidth="1.2" />
      {/* Orb inner glow */}
      <circle cx="16" cy="5.5" r="2" fill="rgba(240,173,78,0.3)" />
      <circle cx="15" cy="5" r="0.8" fill="rgba(255,220,130,0.5)" />

      {/* Crossbar / grip near bottom */}
      <rect x="10" y="22" width="12" height="2.5" rx="1" fill="#F0AD4E" />

      {/* Base knob */}
      <circle cx="16" cy="28.5" r="2" fill="#F0AD4E" />
      <circle cx="16" cy="28.5" r="1" fill="#D4A843" opacity="0.6" />

      {/* Gold shimmer accents along shaft */}
      <line x1="15" y1="12" x2="15" y2="20" stroke="#D4A843" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

export function BlinkDaggerIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Blade — curved, pointing upper-right */}
      <path
        d="M 6 26 C 8 22, 12 16, 18 10 C 22 6, 25 4, 27 3
           L 26 5 C 24 8, 20 14, 16 18 C 12 22, 8 25, 7 27 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Blade edge highlight */}
      <path
        d="M 6 26 C 8 22, 14 14, 20 8 C 23 5, 26 3, 27 3"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />

      {/* Guard / crosspiece */}
      <path
        d="M 9 23 L 6 20 L 8 19 L 11 22 Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Handle */}
      <path
        d="M 6 26 L 3 29 L 5 30 L 8 27 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Blue gem in the handle */}
      <circle cx="5" cy="28" r="2" fill="#0066CC" stroke="#00A6FF" strokeWidth="0.6" />
      <circle cx="4.5" cy="27.5" r="0.8" fill="rgba(100,200,255,0.7)" />

      {/* Blink sparkle particles */}
      <circle cx="24" cy="5" r="1" fill="#00A6FF" opacity="0.6" />
      <circle cx="22" cy="8" r="0.6" fill="#00A6FF" opacity="0.4" />
      <circle cx="26" cy="7" r="0.5" fill="#00A6FF" opacity="0.3" />
    </svg>
  );
}

export function ForceStaffIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Staff body — wooden rod */}
      <rect x="14.5" y="8" width="3" height="21" rx="1.5" fill="#8B6914" />
      <line x1="15.2" y1="10" x2="15.2" y2="28" stroke="#A07818" strokeWidth="0.5" opacity="0.5" />

      {/* Swirling energy orb at top */}
      <circle cx="16" cy="7" r="5" fill="rgba(240,173,78,0.15)" stroke="#F0AD4E" strokeWidth="1" />
      <circle cx="16" cy="7" r="3" fill="rgba(240,173,78,0.25)" />
      <circle cx="16" cy="7" r="1.5" fill="rgba(240,173,78,0.5)" />

      {/* Swirl lines around the orb */}
      <path
        d="M 12 4 C 14 2, 18 2, 20 4"
        stroke="#F0AD4E"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 11 7 C 11 4, 13 2, 16 2"
        stroke="#F0AD4E"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 20 10 C 21 7, 19 4, 16 4"
        stroke="#F0AD4E"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />

      {/* Staff tip / base cap */}
      <circle cx="16" cy="29.5" r="1.5" fill="#8B6914" stroke="#F0AD4E" strokeWidth="0.5" />

      {/* Push direction arrows (force push indicator) */}
      <path d="M 8 16 L 5 14 L 5 18 Z" fill="#F0AD4E" opacity="0.3" />
      <path d="M 24 16 L 27 14 L 27 18 Z" fill="#F0AD4E" opacity="0.3" />
    </svg>
  );
}

export function BootsOfTravelIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Boot shape */}
      <path
        d="M 10 10 L 10 22 L 8 24 L 8 28 L 24 28 L 24 24 L 18 20 L 18 10 Z"
        fill="#8B6914"
        stroke="#F0AD4E"
        strokeWidth="0.8"
      />

      {/* Boot top cuff */}
      <path
        d="M 9 10 L 10 8 L 18 8 L 19 10"
        stroke="#F0AD4E"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Boot sole */}
      <rect x="7" y="27" width="18" height="2" rx="1" fill="#6B5010" />

      {/* Lace details */}
      <line x1="12" y1="12" x2="16" y2="12" stroke="#D4A843" strokeWidth="0.6" opacity="0.5" />
      <line x1="12" y1="15" x2="16" y2="15" stroke="#D4A843" strokeWidth="0.6" opacity="0.5" />
      <line x1="12" y1="18" x2="16" y2="18" stroke="#D4A843" strokeWidth="0.6" opacity="0.5" />

      {/* Wing — left */}
      <path
        d="M 10 12 C 4 8, 2 6, 3 3 C 4 5, 6 6, 10 10"
        fill="#D4A843"
        opacity="0.7"
      />
      <path
        d="M 10 14 C 4 12, 1 10, 1 7 C 2 9, 5 10, 10 12"
        fill="#D4A843"
        opacity="0.5"
      />

      {/* Wing — right */}
      <path
        d="M 18 12 C 24 8, 26 6, 25 3 C 24 5, 22 6, 18 10"
        fill="#D4A843"
        opacity="0.7"
      />
      <path
        d="M 18 14 C 24 12, 27 10, 27 7 C 26 9, 23 10, 18 12"
        fill="#D4A843"
        opacity="0.5"
      />

      {/* Teleport glow at base */}
      <ellipse cx="16" cy="28" rx="8" ry="2" fill="#F0AD4E" opacity="0.15" />
    </svg>
  );
}

export function TomeOfKnowledgeIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Book — open, viewed from front/top */}
      {/* Left page */}
      <path
        d="M 16 8 L 4 6 L 4 26 L 16 28 Z"
        fill="#3D2B1F"
        stroke="#8B6914"
        strokeWidth="0.8"
      />
      {/* Right page */}
      <path
        d="M 16 8 L 28 6 L 28 26 L 16 28 Z"
        fill="#3D2B1F"
        stroke="#8B6914"
        strokeWidth="0.8"
      />

      {/* Page surfaces — lighter inner pages */}
      <path
        d="M 16 9 L 5.5 7.2 L 5.5 25.2 L 16 27 Z"
        fill="#F5E6C8"
        opacity="0.15"
      />
      <path
        d="M 16 9 L 26.5 7.2 L 26.5 25.2 L 16 27 Z"
        fill="#F5E6C8"
        opacity="0.15"
      />

      {/* Spine */}
      <line x1="16" y1="8" x2="16" y2="28" stroke="#8B6914" strokeWidth="1.2" />

      {/* Text lines — left page */}
      <line x1="7" y1="12" x2="14" y2="13" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="7" y1="15" x2="14" y2="16" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="7" y1="18" x2="14" y2="19" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="7" y1="21" x2="12" y2="22" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />

      {/* Text lines — right page */}
      <line x1="18" y1="13" x2="25" y2="12" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="18" y1="16" x2="25" y2="15" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="18" y1="19" x2="25" y2="18" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />
      <line x1="18" y1="22" x2="23" y2="21" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.3" />

      {/* Knowledge glow from pages */}
      <ellipse cx="16" cy="17" rx="10" ry="8" fill="#F0AD4E" opacity="0.06" />

      {/* Glowing symbol on right page — a small star/rune */}
      <polygon
        points="22,14 23,16.5 25.5,16.5 23.5,18 24.2,20.5 22,19 19.8,20.5 20.5,18 18.5,16.5 21,16.5"
        fill="#F0AD4E"
        opacity="0.3"
      />

      {/* Small glow rays coming off the top of the book */}
      <line x1="16" y1="8" x2="16" y2="4" stroke="#F0AD4E" strokeWidth="0.5" opacity="0.25" />
      <line x1="16" y1="8" x2="12" y2="5" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.2" />
      <line x1="16" y1="8" x2="20" y2="5" stroke="#F0AD4E" strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}

export function PhaseBootsIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Boot shape — sleek, angular */}
      <path
        d="M 11 8 L 11 20 L 9 22 L 9 26 L 23 26 L 23 22 L 17 18 L 17 8 Z"
        fill="#6B5010"
        stroke="#8B6914"
        strokeWidth="0.8"
      />

      {/* Boot top band */}
      <path
        d="M 10 8 L 11 6 L 17 6 L 18 8"
        stroke="#F0AD4E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />

      {/* Sole */}
      <rect x="8" y="25" width="16" height="2" rx="1" fill="#4A3A0A" />

      {/* Phase effect lines — the key visual that makes these Phase Boots */}
      {/* Ghost/phase streaks extending behind the boot */}
      <path
        d="M 11 10 L 6 8 L 4 6"
        stroke="#F0AD4E"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 11 14 L 5 12 L 2 10"
        stroke="#F0AD4E"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M 10 18 L 4 17 L 1 16"
        stroke="#F0AD4E"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.25"
      />

      {/* Phase echo — faint ghost boot outline offset to the left */}
      <path
        d="M 7 10 L 7 20 L 5 22 L 5 25 L 15 25"
        stroke="#F0AD4E"
        strokeWidth="0.6"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.2"
      />

      {/* Speed arrow */}
      <path
        d="M 23 14 L 28 12 L 30 10"
        stroke="#F0AD4E"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      <polygon points="30,10 29,13 27,11" fill="#F0AD4E" opacity="0.3" />

      {/* Boot plate / armor accent */}
      <path
        d="M 12 10 L 16 10 L 16 17 L 12 19 Z"
        fill="#F0AD4E"
        opacity="0.15"
        stroke="#F0AD4E"
        strokeWidth="0.5"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 7. WARD — Observer ward (the all-seeing eye on a stick)
// ---------------------------------------------------------------------------

export function WardIcon({ size = 24, className }: { size?: number; className?: string }) {
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
      {/* Staff / stick */}
      <line
        x1="12"
        y1="13"
        x2="12"
        y2="23"
        stroke="#598307"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Staff base — small ground indicator */}
      <ellipse cx="12" cy="23" rx="3" ry="1" fill="#598307" opacity="0.3" />

      {/* Eye housing — the oval/leaf shape that holds the eye */}
      <path
        d="M 12 3 C 6 3, 2 8, 2 10 C 2 12, 6 17, 12 17
           C 18 17, 22 12, 22 10 C 22 8, 18 3, 12 3 Z"
        fill="rgba(89,131,7,0.2)"
        stroke="#598307"
        strokeWidth="1.2"
      />

      {/* Inner eye shape — almond/marquise */}
      <path
        d="M 12 6 C 8 6, 5 9, 5 10 C 5 11, 8 14, 12 14
           C 16 14, 19 11, 19 10 C 19 9, 16 6, 12 6 Z"
        fill="rgba(89,131,7,0.15)"
        stroke="#598307"
        strokeWidth="0.6"
        opacity="0.7"
      />

      {/* Iris */}
      <circle cx="12" cy="10" r="3" fill="#598307" opacity="0.5" />

      {/* Pupil */}
      <circle cx="12" cy="10" r="1.5" fill="#598307" />

      {/* Eye highlight / glint */}
      <circle cx="11" cy="9" r="0.8" fill="rgba(127,191,27,0.8)" />

      {/* Vision rays emanating from the eye */}
      <line x1="3" y1="6" x2="1" y2="4" stroke="#598307" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
      <line x1="6" y1="4" x2="5" y2="1" stroke="#598307" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
      <line x1="12" y1="3" x2="12" y2="0.5" stroke="#598307" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
      <line x1="18" y1="4" x2="19" y2="1" stroke="#598307" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
      <line x1="21" y1="6" x2="23" y2="4" stroke="#598307" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 8. COURIER — The donkey/animal courier silhouette
// ---------------------------------------------------------------------------

export function CourierIcon({ size = 24, className }: { size?: number; className?: string }) {
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
      {/* Body — the quadruped (donkey) shape */}
      <path
        d="M 6 10 C 4 10, 3 11, 3 13 L 3 16 C 3 17, 4 18, 5 18
           L 6 18 L 6 21 L 8 21 L 8 18
           L 15 18 L 15 21 L 17 21 L 17 18
           L 18 18 C 19 18, 20 17, 20 16 L 20 13 C 20 11, 19 10, 17 10 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Head — tilted forward */}
      <path
        d="M 17 10 C 18 9, 20 7, 21 6 L 22 5 C 22.5 4.5, 22 4, 21.5 4
           L 20 5 C 19 6, 18 7, 17 8 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Ear — left */}
      <path
        d="M 20 5 L 19 2 L 18 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Ear — right */}
      <path
        d="M 21 5 L 22 2 L 21.5 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eye */}
      <circle cx="21" cy="5" r="0.7" fill="currentColor" />

      {/* Tail */}
      <path
        d="M 3 11 C 1 9, 0 8, 1 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Saddle / carrying pack — the item bag */}
      <rect x="8" y="8" width="8" height="4" rx="1" fill="currentColor" opacity="0.5" />
      {/* Pack strap */}
      <line x1="10" y1="8" x2="10" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="14" y1="8" x2="14" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />

      {/* Small hoof details */}
      <rect x="5.5" y="20.5" width="3" height="1" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="14.5" y="20.5" width="3" height="1" rx="0.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 9. RUNE — The bounty/power rune double-diamond shape
// ---------------------------------------------------------------------------

export function RuneIcon({ size = 24, className }: { size?: number; className?: string }) {
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
      {/* Outer diamond */}
      <polygon
        points="12,1 23,12 12,23 1,12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Inner diamond — rotated slightly to create double-diamond effect */}
      <polygon
        points="12,4 20,12 12,20 4,12"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* Innermost diamond — bright core */}
      <polygon
        points="12,7 17,12 12,17 7,12"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Center glow dot */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.7" />

      {/* Cardinal point accents — the tips of the outer diamond have small flares */}
      {/* Top */}
      <line x1="12" y1="1" x2="12" y2="-1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Right */}
      <line x1="23" y1="12" x2="25" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Bottom */}
      <line x1="12" y1="23" x2="12" y2="25" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      {/* Left */}
      <line x1="1" y1="12" x2="-1" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />

      {/* Inner sparkle lines — crossing through center */}
      <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="14" y1="10" x2="10" y2="14" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 10. DRAFT PANEL FRAME — Ornate frame from the Captain's Mode draft screen
// Angular gold corners, top center crest, side borders with pattern.
// ---------------------------------------------------------------------------

export function DraftPanelFrame({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          {/* Gold gradient for the frame */}
          <linearGradient id="draftGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4A843" />
            <stop offset="40%" stopColor="#F0AD4E" />
            <stop offset="70%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#F0AD4E" />
          </linearGradient>
          {/* Side pattern gradient */}
          <linearGradient id="draftSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0AD4E" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#F0AD4E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F0AD4E" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* === MAIN BORDER — rectangular with angular corners === */}
        <path
          d={`
            M 20 0
            L 580 0
            L 600 20
            L 600 380
            L 580 400
            L 20 400
            L 0 380
            L 0 20
            Z
          `}
          fill="none"
          stroke="url(#draftGold)"
          strokeWidth="2.5"
        />

        {/* Inner border line for depth */}
        <path
          d={`
            M 24 4
            L 576 4
            L 596 24
            L 596 376
            L 576 396
            L 24 396
            L 4 376
            L 4 24
            Z
          `}
          fill="none"
          stroke="rgba(240,173,78,0.2)"
          strokeWidth="1"
        />

        {/* === TOP CENTER CREST / DECORATIVE CROWN ELEMENT === */}
        <g>
          {/* Central shield / crest */}
          <path
            d="M 300 0 L 280 0 L 270 -8 L 265 -16 L 270 -20
               L 282 -14 L 300 -22
               L 318 -14 L 330 -20 L 335 -16 L 330 -8 L 320 0 Z"
            fill="#F0AD4E"
            opacity="0.6"
          />
          {/* Crest inner detail */}
          <path
            d="M 300 -2 L 286 -2 L 278 -8 L 282 -14 L 300 -18
               L 318 -14 L 322 -8 L 314 -2 Z"
            fill="rgba(0,0,0,0.4)"
          />
          {/* Crest top spike */}
          <path d="M 300 -22 L 298 -28 L 300 -32 L 302 -28 Z" fill="#F0AD4E" opacity="0.5" />
          {/* Side spikes */}
          <path d="M 265 -16 L 258 -18 L 262 -14 Z" fill="#F0AD4E" opacity="0.4" />
          <path d="M 335 -16 L 342 -18 L 338 -14 Z" fill="#F0AD4E" opacity="0.4" />
        </g>

        {/* === CORNER DECORATIONS === */}
        {/* Top-left corner extension */}
        <g>
          <path d="M 0 20 L -6 14 L -4 8 L 4 12 L 8 0 L 14 -4 L 20 0" stroke="#F0AD4E" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle cx="0" cy="20" r="3" fill="#F0AD4E" opacity="0.4" />
          <polygon points="10,0 14,-4 20,0 14,4" fill="#F0AD4E" opacity="0.3" />
        </g>
        {/* Top-right corner extension */}
        <g>
          <path d="M 600 20 L 606 14 L 604 8 L 596 12 L 592 0 L 586 -4 L 580 0" stroke="#F0AD4E" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle cx="600" cy="20" r="3" fill="#F0AD4E" opacity="0.4" />
          <polygon points="590,0 586,-4 580,0 586,4" fill="#F0AD4E" opacity="0.3" />
        </g>
        {/* Bottom-left corner extension */}
        <g>
          <path d="M 0 380 L -6 386 L -4 392 L 4 388 L 8 400 L 14 404 L 20 400" stroke="#F0AD4E" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle cx="0" cy="380" r="3" fill="#F0AD4E" opacity="0.4" />
          <polygon points="10,400 14,404 20,400 14,396" fill="#F0AD4E" opacity="0.3" />
        </g>
        {/* Bottom-right corner extension */}
        <g>
          <path d="M 600 380 L 606 386 L 604 392 L 596 388 L 592 400 L 586 404 L 580 400" stroke="#F0AD4E" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle cx="600" cy="380" r="3" fill="#F0AD4E" opacity="0.4" />
          <polygon points="590,400 586,404 580,400 586,396" fill="#F0AD4E" opacity="0.3" />
        </g>

        {/* === SIDE BORDER PATTERNS — subtle repeating motifs === */}
        {/* Left side — vertical diamond pattern */}
        {[60, 100, 140, 180, 220, 260, 300, 340].map((y) => (
          <polygon
            key={`l${y}`}
            points={`4,${y} 8,${y + 8} 4,${y + 16} 0,${y + 8}`}
            fill="none"
            stroke="#F0AD4E"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
        {/* Right side — vertical diamond pattern */}
        {[60, 100, 140, 180, 220, 260, 300, 340].map((y) => (
          <polygon
            key={`r${y}`}
            points={`596,${y} 600,${y + 8} 596,${y + 16} 592,${y + 8}`}
            fill="none"
            stroke="#F0AD4E"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
        {/* Top side — horizontal diamond pattern */}
        {[60, 120, 180, 240, 360, 420, 480, 540].map((x) => (
          <polygon
            key={`t${x}`}
            points={`${x},4 ${x + 8},8 ${x + 16},4 ${x + 8},0`}
            fill="none"
            stroke="#F0AD4E"
            strokeWidth="0.5"
            opacity="0.15"
          />
        ))}
        {/* Bottom side — horizontal diamond pattern */}
        {[60, 120, 180, 240, 360, 420, 480, 540].map((x) => (
          <polygon
            key={`b${x}`}
            points={`${x},396 ${x + 8},400 ${x + 16},396 ${x + 8},392`}
            fill="none"
            stroke="#F0AD4E"
            strokeWidth="0.5"
            opacity="0.15"
          />
        ))}

        {/* === INNER CORNER BEVELS — small triangular highlights === */}
        <path d="M 24 4 L 34 4 L 24 14 Z" fill="rgba(255,220,130,0.05)" />
        <path d="M 576 4 L 566 4 L 576 14 Z" fill="rgba(255,220,130,0.05)" />
        <path d="M 24 396 L 34 396 L 24 386 Z" fill="rgba(0,0,0,0.1)" />
        <path d="M 576 396 L 566 396 L 576 386 Z" fill="rgba(0,0,0,0.1)" />

        {/* Background fill inside the frame */}
        <path
          d={`
            M 26 6
            L 574 6
            L 594 26
            L 594 374
            L 574 394
            L 26 394
            L 6 374
            L 6 26
            Z
          `}
          fill="rgba(10,12,16,0.5)"
        />
      </svg>

      {/* Children render inside the frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
