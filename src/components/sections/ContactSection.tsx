import { motion, useReducedMotion } from "framer-motion";

export const ContactSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative px-6 py-28 md:px-10 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            id="contact-heading"
            className="text-headline-tertiary text-muted"
          >
            Contact
          </p>
          <a
            href="mailto:hello@example.com"
            className="group mt-8 block max-w-full"
          >
            <span className="text-headline-secondary block transition-[letter-spacing] duration-700 group-hover:tracking-tight">
              hello@example.com
            </span>
            <span className="mt-4 block h-px max-w-0 bg-fg transition-[max-width] duration-700 ease-out group-hover:max-w-full" />
          </a>
          <p className="text-body mt-12 max-w-md text-muted">
            For collaborations, commissions, or a single sharp conversation about
            what comes next in the viewport.
          </p>
        </motion.div>

        <footer className="mt-28 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-icon">
            © {new Date().getFullYear()} — local time irrelevant
          </p>
          <div className="flex flex-wrap gap-8">
            {["GitHub", "LinkedIn", "Read.cv"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-headline-tertiary text-muted transition-colors hover:text-fg"
              >
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};
