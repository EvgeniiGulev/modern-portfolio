import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const strips = [
  {
    code: "A",
    title: "Lattice",
    note: "Real-time spatial audio UI",
    meta: "WebGL · AudioWorklet",
  },
  {
    code: "B",
    title: "Meridian",
    note: "Scroll-synced editorial for a research lab",
    meta: "React · GSAP",
  },
  {
    code: "C",
    title: "Fold",
    note: "Product shell with gesture-first navigation",
    meta: "Motion · Vite",
  },
  {
    code: "D",
    title: "Drift",
    note: "Generative identity system",
    meta: "Canvas · WASM",
  },
];

export const HorizontalWorkSection = () => {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.08, 0.92],
    reduce ? ["0%", "0%"] : ["4%", "-62%"],
  );

  const rotateZ = useTransform(
    scrollYProgress,
    [0.1, 0.55, 0.9],
    reduce ? [0, 0, 0] : [-1.2, 0, 1.4],
  );

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative h-[280vh] border-b border-line bg-subtle"
      aria-labelledby="work-heading"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-8">
        <div className="mb-10 px-6 md:mb-14 md:px-10">
          <p
            id="work-heading"
            className="text-headline-tertiary text-muted"
          >
            Selected output
          </p>
          <h2 className="text-headline-secondary mt-2 max-w-xl">
            Horizontal axis — catalogue without a grid.
          </h2>
        </div>

        <motion.div
          style={{ x, rotateZ }}
          className="flex w-max gap-6 px-6 will-change-transform md:gap-10 md:px-10"
        >
          {strips.map((item, i) => (
            <article
              key={item.code}
              className="group relative flex h-[min(52vh,420px)] w-[min(78vw,520px)] shrink-0 flex-col justify-between border border-line bg-canvas p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[20px_20px_0_0_rgba(0,0,0,0.45)] md:p-8"
              style={{
                transform: "translateZ(0)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[12px] text-icon">
                  {item.code}
                </span>
                <span className="text-headline-tertiary text-muted">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-primary mb-3 text-[clamp(28px,4vw,42px)] font-medium leading-[1.2em] tracking-[-0.03em] text-fg">
                  {item.title}
                </h3>
                <p className="text-body text-muted">
                  {item.note}
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-line pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-icon">
                  {item.meta}
                </p>
                <span
                  className="font-mono text-[11px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
