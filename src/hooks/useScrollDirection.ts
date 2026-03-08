import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

const SCROLL_THRESHOLD = 5;
export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) < SCROLL_THRESHOLD) return; // ignore tiny scrolls
      if (currentY > lastY) setDirection("down");
      else if (currentY < lastY) setDirection("up");
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}
