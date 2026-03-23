import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCES } from "@/data/experiences.ts";

export const ExperiencesSection = () => {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: reduce
        ? undefined
        : {
            staggerChildren: 0.16,
          },
    },
  };

  const itemVariants = {
    hidden: reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
          },
    },
  };

  return (
    <section className="my-20 flex w-full min-w-0 flex-col gap-8 sm:my-24 min-[1200px]:my-32 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:gap-16 xl:gap-24">
      <h2 className="w-full shrink-0 text-headline-secondary text-fg min-[1200px]:w-1/4">Experiences</h2>

      <motion.div
        className="flex min-w-0 flex-1 flex-col gap-y-6 min-[471px]:grid min-[471px]:grid-cols-2 min-[471px]:gap-x-10 min-[471px]:gap-y-8 min-[900px]:grid-cols-3 min-[1200px]:hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
      >
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.id}
            className="flex w-full min-w-0 items-start justify-between gap-6 min-[471px]:max-w-56 min-[471px]:flex-col min-[471px]:gap-1.5 min-[1200px]:min-w-[min(100%,11rem)]"
            variants={itemVariants}
          >
            <p className="shrink-0 text-muted text-[17px] leading-[1.2] min-[471px]:h-[60px] min-[471px]:text-headline-tertiary">
              {exp.yearLabel}
            </p>
            <div className="text-right min-[471px]:text-left min-h-16">
              <p className="text-fg text-[17px] leading-[1.2] min-[471px]:text-headline-tertiary">
                {exp.title}
              </p>
              <p className="text-muted text-[17px] leading-[1.2] min-[471px]:text-headline-tertiary">
                {exp.company}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="hidden min-w-0 flex-1 min-[1200px]:flex min-[1200px]:items-start min-[1200px]:justify-between min-[1200px]:gap-x-12 xl:gap-x-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
      >
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={`${exp.id}-desktop`}
            className="flex min-w-[min(100%,11rem)] max-w-56 flex-col gap-1.5"
            variants={itemVariants}
          >
            <p className="h-[60px] text-headline-tertiary text-muted">{exp.yearLabel}</p>
            <div className="text-left">
              <p className="text-headline-tertiary text-fg">{exp.title}</p>
              <p className="text-headline-tertiary text-muted">{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
