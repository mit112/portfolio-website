"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AmbientParticles() {
  const reducedMotion = useReducedMotion();

  const particleColors = ["#F0AD4E", "#FFCD8D", "#D5C4B1", "#A97A3E"];

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.4 + 0.2,
      color: particleColors[i % particleColors.length],
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="ambient-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: 0,
            animation: `${p.id % 2 === 0 ? "float-up" : "float-up-slow"} ${p.duration}s ${p.delay}s infinite linear`,
          }}
        />
      ))}
    </div>
  );
}
