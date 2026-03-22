"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface BanCardProps {
  label: string;
  delay: number;
  onComplete: () => void;
}

export default function BanCard({ label, delay, onComplete }: BanCardProps) {
  const reducedMotion = useReducedMotion();
  const [banned, setBanned] = useState(false);
  const [animating, setAnimating] = useState(false);
  const completeCalled = useRef(false);

  useEffect(() => {
    // Reduced motion: show banned immediately
    if (reducedMotion) {
      setBanned(true);
      if (!completeCalled.current) {
        completeCalled.current = true;
        onComplete();
      }
      return;
    }

    const delayTimer = setTimeout(() => {
      setAnimating(true);

      // After the X animation (600ms), mark as banned and call onComplete
      const animTimer = setTimeout(() => {
        setBanned(true);
        setAnimating(false);
        if (!completeCalled.current) {
          completeCalled.current = true;
          onComplete();
        }
      }, 600);

      return () => clearTimeout(animTimer);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay, onComplete, reducedMotion]);

  return (
    <div
      className={cn(
        "w-56 md:w-64 rounded border border-accent-red/30 p-5 text-center relative overflow-hidden transition-all duration-300",
        banned && "opacity-70 scale-95"
      )}
      style={{
        background: "linear-gradient(to bottom, #221E1A, #1A1715)",
      }}
    >
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-red/50 to-transparent" />

      {/* Dark overlay after banned */}
      {banned && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[5]" style={{ filter: "saturate(0.7)" }} />
      )}

      {/* Label with red diamond */}
      <p className="text-base font-semibold text-text-primary relative z-10 flex items-center justify-center gap-2">
        <span className="text-accent-red text-[10px] leading-none select-none" aria-hidden="true">&#9670;</span>
        {label}
      </p>

      {/* Red X overlay */}
      {(animating || banned) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              stroke="var(--color-accent-red)"
              strokeWidth="3"
              strokeLinecap="round"
              style={
                reducedMotion
                  ? undefined
                  : {
                      strokeDasharray: 200,
                      strokeDashoffset: banned ? 0 : undefined,
                      animation: animating
                        ? "ban-slash 0.3s ease-out forwards"
                        : undefined,
                    }
              }
            />
            <line
              x1="90"
              y1="10"
              x2="10"
              y2="90"
              stroke="var(--color-accent-red)"
              strokeWidth="3"
              strokeLinecap="round"
              style={
                reducedMotion
                  ? undefined
                  : {
                      strokeDasharray: 200,
                      strokeDashoffset: banned ? 0 : undefined,
                      animation: animating
                        ? "ban-slash 0.3s ease-out 0.15s forwards"
                        : undefined,
                    }
              }
            />
          </svg>

          {/* BANNED text */}
          <span
            className={cn(
              "relative z-10 font-display uppercase tracking-wider text-xl transition-opacity duration-300",
              banned ? "opacity-100" : animating ? "opacity-0" : "opacity-0"
            )}
            style={{
              color: "var(--color-accent-red)",
              textShadow: "0 0 20px rgba(191,46,26,0.5)",
              ...(animating && !banned
                ? { animation: "draft-fade-in 0.3s ease-out 0.4s forwards" }
                : {}),
            }}
          >
            BANNED
          </span>
        </div>
      )}
    </div>
  );
}
