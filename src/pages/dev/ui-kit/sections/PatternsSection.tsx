import { HeroSection } from "../../../../components/sections/HeroSection";
import { HorizontalWorkSection } from "../../../../components/sections/HorizontalWorkSection";
import { SignalDepthSection } from "../../../../components/sections/SignalDepthSection";
import { ContactSection } from "../../../../components/sections/ContactSection";
import { PatternChrome } from "../components/PatternChrome";

/**
 * Full-bleed pattern demos — kept outside the main doc column so horizontal
 * scroll and wide heroes behave like production.
 */
export const PatternsSection = () => {
  return (
    <>
      <section
        id="category-patterns"
        className="scroll-mt-28 mx-auto mt-20 max-w-6xl border-t border-line px-6 pt-16 md:px-10"
        aria-labelledby="patterns-category-title"
      >
        <p className="pattern-label">Patterns</p>
        <h2
          id="patterns-category-title"
          className="text-headline-secondary mt-3 text-[clamp(26px,4.5vw,40px)] leading-[1.15em] tracking-[-0.03em]"
        >
          Live sections
        </h2>
        <p className="text-body mt-4 max-w-2xl text-muted">
          Full-width React sections. Deep links:{" "}
          <code className="code-inline">#work</code>,{" "}
          <code className="code-inline">#signal</code>,{" "}
          <code className="code-inline">#contact</code> (header nav). This block
          starts at <code className="code-inline">#patterns</code>.
        </p>
        <p className="font-mono mt-4 text-[11px] uppercase tracking-[0.15em] text-icon">
          src/components/sections/
        </p>
      </section>

      <div
        id="patterns"
        className="mt-10 w-full divide-y divide-line border-y border-line"
      >
        <PatternChrome label="Hero — HeroSection">
          <HeroSection />
        </PatternChrome>
        <PatternChrome label="Horizontal work — HorizontalWorkSection">
          <HorizontalWorkSection />
        </PatternChrome>
        <PatternChrome label="Signal / depth — SignalDepthSection">
          <SignalDepthSection />
        </PatternChrome>
        <PatternChrome label="Contact — ContactSection">
          <ContactSection />
        </PatternChrome>
      </div>
    </>
  );
};
