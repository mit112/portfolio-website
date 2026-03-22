"use client";

import { useState, useEffect, useRef } from "react";

interface AttributeBarProps {
  percentage: number;
  color: string;
  label: string;
  animated?: boolean;
}

export default function AttributeBar({
  percentage,
  color,
  label,
  animated = false,
}: AttributeBarProps) {
  const [visible, setVisible] = useState(!animated);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="relative h-3 w-full rounded-sm overflow-hidden"
      style={{ background: "linear-gradient(90deg, rgba(16,14,12,0.8) 0%, rgba(28,24,20,0.6) 100%)" }}
    >
      {/* Tick marks */}
      <div className="absolute inset-0 flex">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r border-white/[0.04] last:border-0"
          />
        ))}
      </div>

      {/* Fill bar with gradient and glow */}
      <div
        className="absolute inset-y-0 left-0 rounded-sm transition-all ease-out"
        style={{
          width: visible ? `${percentage}%` : "0%",
          transitionDuration: animated ? "1.4s" : "0s",
          background: `linear-gradient(90deg, ${color}cc 0%, ${color} 60%, ${color}dd 100%)`,
          boxShadow: visible ? `0 0 12px ${color}40, 0 0 4px ${color}60, inset 0 1px 0 rgba(255,255,255,0.15)` : "none",
        }}
      />

      {/* Shine highlight on top */}
      <div
        className="absolute inset-y-0 left-0 rounded-sm transition-all ease-out"
        style={{
          width: visible ? `${percentage}%` : "0%",
          transitionDuration: animated ? "1.4s" : "0s",
          background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
