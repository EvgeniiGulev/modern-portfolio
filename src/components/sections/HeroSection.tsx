import { motion, useReducedMotion } from "framer-motion";

export const HeroSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-dvh border-b border-line px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40"
      aria-label="Introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(var(--color-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-line) 1px, transparent 1px)
          `,
          backgroundSize: "min(12vw, 120px) min(12vw, 120px)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 40% 30%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[920px]"
        >
          <p className="text-headline-tertiary mb-8 max-w-md text-muted">
            Independent interface engineering — systems that feel alive at the
            edge of the viewport.
          </p>
          <h1 className="text-headline-primary text-balance">
            Motion as structure.
            <span className="block text-muted">
              Precision as atmosphere.
            </span>
          </h1>
        </motion.div>

        <div className="mt-16 flex flex-col gap-12 md:mt-24 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0 : 0.2,
              duration: reduce ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-body max-w-[420px] text-muted"
          >
            Scroll is the primary input. Each band reveals a different axis —
            vertical narrative, horizontal catalogue, then depth as a third
            dimension.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, rotate: -0.5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: reduce ? 0 : 0.35, duration: reduce ? 0 : 1 }}
            className="text-mono-accent shrink-0 text-right text-icon md:max-w-[320px]"
          >
            <span className="block">01 — ORIGIN</span>
            <span className="mt-2 block text-fg">VOID / FORM</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.6, duration: reduce ? 0 : 0.8 }}
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-14 w-px flex-col overflow-hidden bg-line">
          <motion.div
            className="h-1/2 w-full bg-fg"
            animate={reduce ? false : { y: ["0%", "200%"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
