"use client";

import { useState, useCallback } from "react";

export type DraftPhase =
  | "idle"
  | "ban1"
  | "ban2"
  | "ban3"
  | "picking"
  | "picked"
  | "versus"
  | "complete";

export function useDraftState() {
  const [phase, setPhase] = useState<DraftPhase>("idle");
  const [isSkipped, setIsSkipped] = useState(false);

  const advance = useCallback((nextPhase: DraftPhase) => {
    setPhase(nextPhase);
  }, []);

  const skip = useCallback(() => {
    setIsSkipped(true);
    setPhase("complete");
  }, []);

  const replay = useCallback(() => {
    setIsSkipped(false);
    setPhase("idle");
  }, []);

  return { phase, advance, skip, replay, isSkipped };
}
