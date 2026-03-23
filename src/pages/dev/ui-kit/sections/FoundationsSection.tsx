import { classNamePatterns, colorTokens } from "../data";
import { CategoryGroup, SubCategory } from "../components/CategoryGroup";

export const FoundationsSection = () => {
  return (
    <CategoryGroup
      id="category-foundations"
      tag="Foundations"
      title="Color & surface"
      description="Semantic tokens from @theme. Prefer Tailwind utilities in JSX; use var(--color-*) in raw CSS (e.g. gradients)."
    >
      <SubCategory
        id="kit-color"
        title="Color tokens"
        description="Defined in src/styles/tokens.css. Each token maps to Tailwind utilities — copy any utility into className; combine with layout/spacing as needed."
        sourceFile="src/styles/tokens.css"
      >
        <ul className="space-y-2">
          {colorTokens.map((t) => (
            <li
              key={t.cssVar}
              className="flex flex-col gap-3 border-b border-line py-6 last:border-0 sm:flex-row sm:items-center sm:gap-8"
            >
              <div
                className="h-16 w-full shrink-0 rounded-md border border-line sm:h-14 sm:w-28"
                style={{ backgroundColor: t.hex }}
                title={t.hex}
              />
              <div className="min-w-0 flex-1">
                <p className="code-inline text-[13px]">{t.cssVar}</p>
                <p className="mt-2 text-icon pattern-label">Tailwind utilities</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.utilities.map((u) => (
                    <code key={u} className="code-inline text-[12px]">
                      {u}
                    </code>
                  ))}
                </div>
                <p className="mt-3 break-all font-mono text-[12px] leading-relaxed text-fg">
                  <span className="text-icon">Example className · </span>
                  <code className="code-inline">{t.exampleClassName}</code>
                </p>
                <p className="text-body mt-2 text-muted">{t.usage}</p>
                <p className="text-body mt-2 text-fg">
                  <span className="text-icon">Use case · </span>
                  {t.useCase}
                </p>
                <p className="font-mono text-[12px] text-icon">{t.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </SubCategory>

      <SubCategory
        id="kit-classnames"
        title="className patterns"
        description="Ready-made strings to paste into className or merge with cn(). Pair semantic type classes from Text with these color utilities."
        sourceFile="Foundations + Text sections"
      >
        <ul className="space-y-4">
          {classNamePatterns.map((row) => (
            <li
              key={row.label}
              className="border-b border-line pb-4 last:border-0"
            >
              <p className="text-headline-tertiary text-muted">{row.label}</p>
              <p className="mt-2 break-all font-mono text-[12px] text-fg">
                <code className="code-inline">{row.snippet}</code>
              </p>
            </li>
          ))}
        </ul>
      </SubCategory>

      <SubCategory
        id="kit-surface"
        title="Surfaces"
        description="Default page background vs inset / alternate bands."
        sourceFile="Tailwind: bg-canvas · bg-subtle"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="border border-line bg-canvas p-6">
            <p className="text-headline-tertiary text-muted">Canvas</p>
            <p className="text-body mt-2 text-muted">
              <code className="code-inline">bg-canvas</code> — main page shell
            </p>
          </div>
          <div className="border border-line bg-subtle p-6">
            <p className="text-headline-tertiary text-muted">Subtle</p>
            <p className="text-body mt-2 text-muted">
              <code className="code-inline">bg-subtle</code> — panels, stripes
            </p>
          </div>
        </div>
      </SubCategory>
    </CategoryGroup>
  );
};
