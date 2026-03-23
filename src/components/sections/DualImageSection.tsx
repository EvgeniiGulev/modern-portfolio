import { motion, useReducedMotion } from "framer-motion";
import IPrimary from "@/assets/primary-image.png";
import ISecondary from "@/assets/secondary-image.png";

/** Same timing for both; strong ease-out so motion eases off noticeably at the end */
const unveilTransition = {
  duration: 1.05,
  ease: [0.04, 0.75, 0.12, 1] as const,
};

function UnveilImage({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden">
      <img src={src} alt={alt} className="block h-auto w-full" />
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10 bg-canvas"
        initial={reduce ? { y: "-100%" } : { y: "0%" }}
        animate={{ y: "-100%" }}
        transition={reduce ? { duration: 0 } : unveilTransition}
      />
    </div>
  );
}

export const DualImageSection = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <UnveilImage src={IPrimary} alt="Portfolio image one" />
      </div>
      <div className="w-full md:w-1/2">
        <UnveilImage src={ISecondary} alt="Portfolio image two" />
      </div>
    </div>
  );
};
