import { Link } from "react-router-dom";
import { KitMobileNav } from "./components/KitMobileNav";
import { KitSidebar } from "./components/KitSidebar";
import { FoundationsSection } from "./sections/FoundationsSection";
import { TextSection } from "./sections/TextSection";
import { UtilitiesSection } from "./sections/UtilitiesSection";
import { LayoutSection } from "./sections/LayoutSection";
import { InteractionSection } from "./sections/InteractionSection";
import { PatternsSection } from "./sections/PatternsSection";

/**
 * Dev UI kit — `/ui`
 *
 * Organized by category (see navigation.ts). Each category is an independent
 * group you can skim or copy patterns from; sub-anchors use the `kit-*` prefix.
 *
 * Style stack: tokens.css → base.css → typography.css → mixins.css (via index.css)
 */
export const UIKitPage = () => {
  return (
    <main>
      <div className="bg-canvas pb-32 pt-6 md:pt-8">
      <header className="mx-auto max-w-3xl px-6 md:px-10">
        <nav aria-label="Back">
          <Link
            to="/"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted transition-colors hover:text-fg"
          >
            ← Back to site
          </Link>
        </nav>
        <h1 className="text-headline-secondary mt-8">UI kit</h1>
        <p className="text-body mt-4 text-muted">
          Reference organized by category. Use the sidebar (desktop) or jump
          links (mobile) to move between independent groups — e.g.{" "}
          <strong className="font-medium text-fg">Text</strong> for type scale +
          fonts, <strong className="font-medium text-fg">Foundations</strong> for
          color and surfaces.
        </p>
        <p className="text-body mt-3 text-muted">
          Prefer Tailwind tokens (<code className="code-inline">text-fg</code>,{" "}
          <code className="code-inline">bg-canvas</code>) and typography classes (
          <code className="code-inline">.text-body</code>) before inventing new
          styles.
        </p>
        {import.meta.env.DEV ? (
          <p className="mt-4 font-mono text-[12px] text-icon">
            <code className="code-inline">/ui</code> · dev build
          </p>
        ) : null}
        <KitMobileNav />
      </header>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:grid lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:gap-20">
        <KitSidebar />
        <div className="min-w-0">
          <FoundationsSection />
          <TextSection />
          <UtilitiesSection />
          <LayoutSection />
          <InteractionSection />
        </div>
      </div>

      <PatternsSection />

      <footer className="mx-auto mt-20 max-w-6xl border-t border-line px-6 pt-10 md:px-10">
        <p className="pattern-label">
          UI kit · categories in src/pages/dev/ui-kit/
        </p>
      </footer>
      </div>
    </main>
  );
};
