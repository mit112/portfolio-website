"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "v1-draft-hero-visited";

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem(STORAGE_KEY);
    if (visited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  return isFirstVisit;
}
