import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a[href], button, [role="button"], input[type="submit"], input[type="button"], label, .cursor-grab, [data-cursor-interactive]';

function isInteractiveTarget(el: Element | null): boolean {
  if (!el || el === document.documentElement) return false;
  return !!el.closest(INTERACTIVE);
}

function clickScaleAt(tMs: number): number {
  if (tMs < 0) return 1;
  if (tMs < 70) return 1 + (0.78 - 1) * (tMs / 70);
  if (tMs < 220) return 0.78 + (1 - 0.78) * ((tMs - 70) / 150);
  return 1;
}

/**
 * Hollow circle that lerps toward the pointer; expands on links/buttons; click pulse.
 * Only for fine pointers (mouse). Stroke uses `--color-muted-dark` (slightly darker than `muted`).
 */
export const CursorBubble = () => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const clickStartRef = useRef<number | null>(null);
  const rafRef = useRef(0);
  const hasMovedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mqReduce.matches;

    if (!mqFine.matches) return;

    const bubble = bubbleRef.current;
    if (!bubble) return;

    const root = document.documentElement;
    root.classList.add("cursor-bubble-active");

    const smooth = mqReduce.matches ? 1 : 0.16;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * smooth;
      cur.y += (tgt.y - cur.y) * smooth;

      const hoverScale = hoverRef.current ? 1.14 : 1;
      let clickMul = 1;
      if (clickStartRef.current !== null) {
        const dt = performance.now() - clickStartRef.current;
        if (dt > 240) clickStartRef.current = null;
        else clickMul = clickScaleAt(dt);
      }

      const s = hoverScale * clickMul;
      bubble.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%) scale(${s})`;
      bubble.style.opacity = hasMovedRef.current ? "1" : "0";

      rafRef.current = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      targetRef.current = { x: e.clientX, y: e.clientY };
      hasMovedRef.current = true;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      hoverRef.current = isInteractiveTarget(el);
    };

    const onPointerDown = () => {
      if (reduceMotionRef.current) return;
      clickStartRef.current = performance.now();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      root.classList.remove("cursor-bubble-active");
    };
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="pointer-events-none fixed left-0 top-0 z-9999 h-8 w-8 rounded-full border-2 border-muted-dark bg-transparent opacity-0 will-change-transform"
      aria-hidden
    />
  );
};
