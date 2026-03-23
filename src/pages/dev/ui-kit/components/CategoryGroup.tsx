import type { ReactNode } from "react";

type CategoryGroupProps = {
  /** Stable id for scroll + sidebar (e.g. `foundations`) */
  id: string;
  /** Short mono tag shown above title */
  tag: string;
  title: string;
  description: string;
  children: ReactNode;
};

/**
 * Top-level UI kit category — one independent bucket (Text, Foundations, …).
 */
export const CategoryGroup = ({
  id,
  tag,
  title,
  description,
  children,
}: CategoryGroupProps) => {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-line pt-20 first:border-t-0 first:pt-12"
      aria-labelledby={`${id}-heading`}
    >
      <header className="mb-12 max-w-2xl">
        <p className="pattern-label">{tag}</p>
        <h2
          id={`${id}-heading`}
          className="text-headline-secondary mt-3 text-[clamp(26px,4.5vw,40px)] leading-[1.15em] tracking-[-0.03em]"
        >
          {title}
        </h2>
        <p className="text-body mt-4 text-muted">{description}</p>
      </header>
      <div className="flex flex-col gap-16">{children}</div>
    </section>
  );
};

type SubCategoryProps = {
  id: string;
  title: string;
  description?: string;
  sourceFile?: string;
  children: ReactNode;
};

/**
 * Sub-topic inside a category (e.g. “Type scale” under Text).
 */
export const SubCategory = ({
  id,
  title,
  description,
  sourceFile,
  children,
}: SubCategoryProps) => {
  return (
    <div id={id} className="scroll-mt-28 space-y-6">
      <div className="border-b border-line pb-6">
        <h3 className="text-headline-tertiary text-fg">{title}</h3>
        {description ? (
          <p className="text-body mt-2 max-w-2xl text-muted">{description}</p>
        ) : null}
        {sourceFile ? (
          <p className="font-mono mt-3 text-[11px] uppercase tracking-[0.15em] text-icon">
            {sourceFile}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
};
