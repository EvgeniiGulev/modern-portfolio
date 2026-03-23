import { DocBlock } from "../components/DocBlock";
import { CategoryGroup, SubCategory } from "../components/CategoryGroup";

export const InteractionSection = () => {
  return (
    <CategoryGroup
      id="category-interaction"
      tag="Interaction"
      title="Controls & focus"
      description="Global reset removes default button and link styles. Rebuild states explicitly; document patterns here for reuse."
    >
      <SubCategory
        id="kit-controls"
        title="Controls"
        description="Buttons and links need explicit borders, padding, and hover. See base.css for the reset."
        sourceFile="src/styles/base.css"
      >
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="inline-block border border-line bg-subtle px-5 py-2.5 text-headline-tertiary text-fg transition-colors hover:border-muted"
          >
            Button (styled)
          </button>
          <a
            href="#kit-controls"
            className="inline-block border-b border-fg text-headline-tertiary text-fg"
          >
            Text link pattern
          </a>
        </div>
        <DocBlock title="Recipe">
          Add <code className="code-inline">inline-block</code> when you need
          vertical padding on links. Use <code className="code-inline">border-line</code>{" "}
          / <code className="code-inline">hover:border-muted</code> for affordance.
        </DocBlock>
      </SubCategory>

      <SubCategory
        id="kit-focus"
        title="Focus"
        description="Keyboard outline for accessibility."
        sourceFile="src/styles/base.css"
      >
        <p className="text-body text-muted">
          <code className="code-inline">:focus-visible</code> — 1px outline via{" "}
          <code className="code-inline">var(--color-line)</code>, 4px offset.
        </p>
        <button
          type="button"
          className="mt-6 inline-block border border-line px-5 py-2.5 text-headline-tertiary text-fg"
        >
          Tab to focus
        </button>
      </SubCategory>
    </CategoryGroup>
  );
};
