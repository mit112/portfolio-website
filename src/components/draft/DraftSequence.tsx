"use client";

import { useEffect, useCallback, useState } from "react";
import { useDraftState, type DraftPhase } from "@/hooks/useDraftState";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import BanCard from "./BanCard";
import PickCard from "./PickCard";
import SkipButton from "./SkipButton";
import { cn } from "@/lib/utils";

const BAN_LABELS = [
  "Copy-Paste Developer",
  "Works Only With Tutorials",
  "Ships But Never Polishes",
] as const;

interface DraftOverlayProps {
  phase: DraftPhase;
  advance: (next: DraftPhase) => void;
  skip: () => void;
  reducedMotion: boolean;
  onFadeOutComplete: () => void;
}

function DraftOverlay({
  phase,
  advance,
  skip,
  reducedMotion,
  onFadeOutComplete,
}: DraftOverlayProps) {
  const [fadingOut, setFadingOut] = useState(false);
  const [whiteFlash, setWhiteFlash] = useState(false);

  // Phase: idle -> auto-advance to ban1 after 1s
  useEffect(() => {
    if (phase !== "idle") return;
    const t = setTimeout(() => advance("ban1"), reducedMotion ? 0 : 1000);
    return () => clearTimeout(t);
  }, [phase, advance, reducedMotion]);

  // Phase: picking -> flash text then advance to picked
  useEffect(() => {
    if (phase !== "picking") return;
    const t = setTimeout(() => advance("picked"), reducedMotion ? 0 : 500);
    return () => clearTimeout(t);
  }, [phase, advance, reducedMotion]);

  // Phase: versus -> hold then advance to complete
  useEffect(() => {
    if (phase !== "versus") return;
    const t = setTimeout(() => advance("complete"), reducedMotion ? 0 : 1500);
    return () => clearTimeout(t);
  }, [phase, advance, reducedMotion]);

  // Phase: complete -> white flash then fade out then signal parent to unmount
  useEffect(() => {
    if (phase !== "complete") return;
    if (reducedMotion) {
      onFadeOutComplete();
      return;
    }
    // Brief white flash before dissolve
    setWhiteFlash(true);
    const flashTimer = setTimeout(() => {
      setWhiteFlash(false);
      setFadingOut(true);
    }, 150);
    return () => clearTimeout(flashTimer);
  }, [phase, reducedMotion, onFadeOutComplete]);

  // After fade-out animation finishes, tell parent
  useEffect(() => {
    if (!fadingOut) return;
    const t = setTimeout(() => onFadeOutComplete(), 650);
    return () => clearTimeout(t);
  }, [fadingOut, onFadeOutComplete]);

  // Ban completion callbacks
  const handleBan1Complete = useCallback(() => advance("ban2"), [advance]);
  const handleBan2Complete = useCallback(() => advance("ban3"), [advance]);
  const handleBan3Complete = useCallback(() => advance("picking"), [advance]);

  // Pick completion callback
  const handlePickComplete = useCallback(() => advance("versus"), [advance]);

  // Phase visibility helpers
  const isBanPhase = phase === "ban1" || phase === "ban2" || phase === "ban3";
  const showBan1 = phase !== "idle";
  const showBan2 = phase !== "idle" && phase !== "ban1";
  const showBan3 = phase !== "idle" && phase !== "ban1" && phase !== "ban2";
  const showPick = phase === "picked" || phase === "versus" || phase === "complete";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] flex flex-col items-center justify-center overflow-hidden",
        "border-l border-r border-accent-gold/10",
        fadingOut && "pointer-events-none"
      )}
      style={{
        background:
          "radial-gradient(ellipse at center, #141620 0%, #0a0b0f 70%, #050507 100%)",
        ...(whiteFlash
          ? { opacity: 1, filter: "brightness(2)" }
          : fadingOut
            ? { animation: "draft-fade-out 0.6s ease-out forwards" }
            : phase === "idle" && !reducedMotion
              ? { animation: "draft-fade-in 0.5s ease-out forwards" }
              : undefined),
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Draft intro sequence"
    >
      {/* Scan-line texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(39,174,158,0.15) 2px, rgba(39,174,158,0.15) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Teal glow — left side */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left center, rgba(39,174,158,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Teal glow — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(39,174,158,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top gold border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />

      {/* Bottom gold border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />

      {/* Corner decorations — top left */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-accent-gold/30" />
        <div className="absolute top-0 left-0 h-full w-px bg-accent-gold/30" />
      </div>

      {/* Corner decorations — top right */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-accent-gold/30" />
        <div className="absolute top-0 right-0 h-full w-px bg-accent-gold/30" />
      </div>

      {/* Corner decorations — bottom left */}
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-accent-gold/30" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-accent-gold/30" />
      </div>

      {/* Corner decorations — bottom right */}
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-px bg-accent-gold/30" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-accent-gold/30" />
      </div>

      {/* Captain's Mode title */}
      {phase === "idle" && (
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display text-5xl tracking-[6px] text-accent-gold text-glow-gold select-none">
            CAPTAIN&apos;S MODE
          </h1>
          <p className="font-mono text-xs tracking-widest text-accent-gold/40 uppercase select-none">
            DRAFTING IN PROGRESS
          </p>
        </div>
      )}

      {/* Ban phase — cards accumulate */}
      {isBanPhase && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 mb-4">
            <h2 className="font-display text-lg tracking-widest text-accent-red uppercase select-none">
              BAN PHASE
            </h2>
            {/* Red accent line under BAN PHASE header */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-red/60 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {showBan1 && (
              <BanCard
                label={BAN_LABELS[0]}
                delay={phase === "ban1" ? (reducedMotion ? 0 : 300) : 0}
                onComplete={phase === "ban1" ? handleBan1Complete : () => {}}
              />
            )}
            {showBan2 && (
              <BanCard
                label={BAN_LABELS[1]}
                delay={phase === "ban2" ? (reducedMotion ? 0 : 300) : 0}
                onComplete={phase === "ban2" ? handleBan2Complete : () => {}}
              />
            )}
            {showBan3 && (
              <BanCard
                label={BAN_LABELS[2]}
                delay={phase === "ban3" ? (reducedMotion ? 0 : 300) : 0}
                onComplete={phase === "ban3" ? handleBan3Complete : () => {}}
              />
            )}
          </div>
        </div>
      )}

      {/* Picking flash — bans fade behind, "RADIANT PICKS" text appears */}
      {phase === "picking" && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap gap-8 justify-center mb-8 opacity-40">
            <BanCard label={BAN_LABELS[0]} delay={0} onComplete={() => {}} />
            <BanCard label={BAN_LABELS[1]} delay={0} onComplete={() => {}} />
            <BanCard label={BAN_LABELS[2]} delay={0} onComplete={() => {}} />
          </div>
          <div className="flex flex-col items-center gap-3">
            {/* Green decorative accent lines */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
            <h2
              className="font-display text-3xl tracking-widest select-none"
              style={{
                color: "#4ADE80",
                textShadow: "0 0 20px rgba(74,222,128,0.4), 0 0 40px rgba(74,222,128,0.15)",
                ...(reducedMotion
                  ? {}
                  : { animation: "draft-fade-in 0.3s ease-out forwards" }),
              }}
            >
              RADIANT PICKS
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
          </div>
        </div>
      )}

      {/* Picked / versus / complete — show the pick card with faded bans */}
      {showPick && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap gap-8 justify-center mb-6 opacity-30 scale-90">
            <BanCard label={BAN_LABELS[0]} delay={0} onComplete={() => {}} />
            <BanCard label={BAN_LABELS[1]} delay={0} onComplete={() => {}} />
            <BanCard label={BAN_LABELS[2]} delay={0} onComplete={() => {}} />
          </div>
          <PickCard
            delay={reducedMotion ? 0 : 200}
            onComplete={handlePickComplete}
          />
        </div>
      )}

      {/* Skip button visible throughout (except during complete/fade-out) */}
      {phase !== "complete" && <SkipButton mode="skip" onClick={skip} />}
    </div>
  );
}

export default function DraftSequence() {
  const isFirstVisit = useFirstVisit();
  const reducedMotion = useReducedMotion();
  const { phase, advance, skip } = useDraftState();
  const [mounted, setMounted] = useState(true);

  const handleFadeOutComplete = useCallback(() => {
    setMounted(false);
  }, []);

  // Auto-skip: not first visit, or reduced motion preference
  useEffect(() => {
    if (!isFirstVisit || reducedMotion) {
      setMounted(false);
    }
  }, [isFirstVisit, reducedMotion]);

  if (!mounted) return null;

  return (
    <DraftOverlay
      phase={phase}
      advance={advance}
      skip={skip}
      reducedMotion={reducedMotion}
      onFadeOutComplete={handleFadeOutComplete}
    />
  );
}
