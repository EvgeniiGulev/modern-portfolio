import { useLayoutEffect, useRef, useState } from "react";

const NAME = "EVGENII GULEV";

/**
 * Largest font-size (px) so the line fits in `maxWidth` without wrapping.
 * Only changes font-size — no transform stretch (no distortion).
 */
function fitFontSizePx(heading: HTMLElement, maxWidth: number): number {
  if (maxWidth < 1) {
    heading.style.fontSize = "16px";
    return 16;
  }

  let lo = 8;
  let hi = Math.min(2400, maxWidth * 3);

  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2;
    heading.style.fontSize = `${mid}px`;
    void heading.offsetWidth;
    if (heading.scrollWidth <= maxWidth + 0.5) lo = mid;
    else hi = mid;
  }

  const result = Math.floor(lo * 100) / 100;
  heading.style.fontSize = `${result}px`;
  return result;
}

export const NameSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [fontPx, setFontPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    if (!container || !heading) return;

    const run = () => {
      const w = container.clientWidth;
      const px = fitFontSizePx(heading, w);
      setFontPx(px);
    };

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(run);
    });
    ro.observe(container);

    void document.fonts.ready.then(() => {
      requestAnimationFrame(run);
    });

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full min-w-0 mb-4">
      <h1
        ref={headingRef}
        style={fontPx != null ? { fontSize: `${fontPx}px` } : undefined}
        className="font-primary block w-full max-w-full whitespace-nowrap font-medium leading-none tracking-[-0.03em] text-fg text-[clamp(1.75rem,7vw,4rem)]"
      >
        {NAME}
      </h1>
    </section>
  );
};
