"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    clarity?: (method: string, ...args: unknown[]) => void;
  }
}

export default function ClarityTracking() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "pricing_page_view", "true");
    }
  }, []);

  return null;
}
