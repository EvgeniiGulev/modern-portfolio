import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const layers = [
  {
    label: "Field",
    body: "Interfaces behave like instruments — tension, release, and silence matter as much as pixels.",
  },
  {
    label: "Signal",
    body: "Motion is not decoration; it encodes hierarchy and tells you where to look before you read.",
  },
];

export const SignalDepthSection = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -40]),
    { stiffness: 90, damping: 28 },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [120, -90]),
    { stiffness: 70, damping: 26 },
  );

  return (
    <section
      id="signal"
      ref={ref}
      className="relative border-b border-line px-6 py-28 md:px-10 md:py-40"
      aria-labelledby="signal-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <p
          id="signal-heading"
          className="text-headline-tertiary text-muted"
        >
          Depth as narrative
        </p>
        <h2 className="text-headline-primary mt-4 max-w-[880px]">
          Two planes, offset in space — not cards in a row.
        </h2>

        <div
          className="relative mt-20 perspective:[1400px]"
          style={{ perspectiveOrigin: "50% 20%" }}
        >
          <motion.article
            style={{ y: y1 }}
            className="relative z-10 max-w-2xl border border-line bg-canvas p-8 md:p-10"
          >
            <p className="text-mono-accent mb-6 text-icon">
              {layers[0].label}
            </p>
            <p className="text-body text-muted">
              {layers[0].body}
            </p>
          </motion.article>

          <motion.article
            style={{ y: y2 }}
            className="relative z-20 -mt-16 ml-auto max-w-2xl border border-line bg-subtle p-8 shadow-[28px_28px_0_0_rgba(0,0,0,0.5)] md:-mt-24 md:p-10"
          >
            <p className="text-mono-accent mb-6 text-fg">
              {layers[1].label}
            </p>
            <p className="text-body text-muted">
              {layers[1].body}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
