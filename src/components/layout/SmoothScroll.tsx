import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Smooth, inertial page scroll (wheel momentum eases out instead of stopping dead).
 * Disabled when `prefers-reduced-motion: reduce`.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.065,
      smoothWheel: true,
      duration: 1.35,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -11 * t)),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};
