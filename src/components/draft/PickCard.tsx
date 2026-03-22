"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface PickCardProps {
  delay: number;
  onComplete: () => void;
}

type AnimStage = "hidden" | "sliding" | "pulsing" | "glowing" | "done";

export default function PickCard({ delay, onComplete }: PickCardProps) {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<AnimStage>(reducedMotion ? "done" : "hidden");
  const completeCalled = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setStage("done");
      if (!completeCalled.current) {
        completeCalled.current = true;
        onComplete();
      }
      return;
    }

    // After delay, start slide-in
    const t1 = setTimeout(() => {
      setStage("sliding");
    }, delay);

    // After slide-in (800ms), pulse
    const t2 = setTimeout(() => {
      setStage("pulsing");
    }, delay + 800);

    // After pulse (300ms), glow
    const t3 = setTimeout(() => {
      setStage("glowing");
    }, delay + 1100);

    // After glow (500ms), done
    const t4 = setTimeout(() => {
      setStage("done");
      if (!completeCalled.current) {
        completeCalled.current = true;
        onComplete();
      }
    }, delay + 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [delay, onComplete, reducedMotion]);

  const cardStyle: React.CSSProperties =
    stage === "hidden"
      ? { opacity: 0, transform: "translateX(100%)" }
      : stage === "sliding"
        ? { animation: "pick-slide-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }
        : stage === "pulsing"
          ? { opacity: 1, transform: "translateX(0)", animation: "pick-pulse 0.3s ease-in-out" }
          : stage === "glowing"
            ? { opacity: 1, transform: "translateX(0)", animation: "pick-glow 0.5s ease-in-out" }
            : { opacity: 1, transform: "translateX(0)" };

  return (
    <div
      className={cn(
        "w-72 md:w-80 rounded-lg border-2 border-accent-primary p-6 text-center relative",
        stage === "done" && "shadow-[0_0_30px_rgba(240,173,78,0.3)]"
      )}
      style={{
        background: "linear-gradient(to bottom, #2A2518, #1C1B1B, #141210)",
        boxShadow:
          stage !== "done"
            ? "0 0 30px rgba(240,173,78,0.3)"
            : undefined,
        ...(reducedMotion ? {} : cardStyle),
      }}
    >
      {/* Gold accent line — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      {/* Gold accent line — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      {/* Portrait placeholder with ornate gold frame */}
      <div className="w-40 h-48 mx-auto mb-4 relative">
        {/* Outer gold border */}
        <div className="absolute inset-0 rounded border-2 border-accent-gold/40" />
        {/* Inner gold glow border */}
        <div
          className="absolute inset-[3px] rounded border border-accent-primary/30"
          style={{ boxShadow: "inset 0 0 20px rgba(240,173,78,0.15)" }}
        />
        {/* Portrait background */}
        <div className="absolute inset-[4px] rounded bg-gradient-to-br from-bg-primary to-bg-elevated flex items-center justify-center">
          <span className="font-display text-2xl tracking-widest text-accent-primary select-none">
            MIT
          </span>
        </div>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-gold/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-gold/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-gold/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-gold/60" />
      </div>

      {/* Name */}
      <h3 className="font-display text-3xl font-bold tracking-[4px] text-glow-primary">
        MIT SHETH
      </h3>

      {/* Title */}
      <p className="text-lg text-accent-primary tracking-[3px] uppercase mt-1">
        Software Engineer
      </p>

      {/* Role tags */}
      <p className="text-xs font-mono text-accent-gold/70 tracking-wider mt-2 select-none">
        CARRY &middot; NUKER &middot; PUSHER
      </p>

      {/* Attribute dots */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <span
          className="w-3 h-3 rounded-full bg-attr-str shadow-[0_0_8px_rgba(236,61,6,0.5)]"
          title="Strength"
        />
        <span
          className="w-3 h-3 rounded-full bg-attr-agi shadow-[0_0_8px_rgba(127,191,27,0.5)]"
          title="Agility"
        />
        <span
          className="w-3 h-3 rounded-full bg-attr-int shadow-[0_0_8px_rgba(0,166,255,0.5)]"
          title="Intelligence"
        />
      </div>

      {/* Radiant label */}
      <p
        className="font-mono text-xs uppercase tracking-widest mt-4 select-none"
        style={{ color: "#4ADE80", textShadow: "0 0 10px rgba(74,222,128,0.3)" }}
      >
        RADIANT
      </p>
    </div>
  );
}
