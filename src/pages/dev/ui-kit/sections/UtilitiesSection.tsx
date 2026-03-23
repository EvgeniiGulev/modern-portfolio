import { mixinDocs } from "../data";
import { CategoryGroup, SubCategory } from "../components/CategoryGroup";

export const UtilitiesSection = () => {
  return (
    <CategoryGroup
      id="category-utilities"
      tag="Utilities"
      title="Mixin classes"
      description="Small composed classes in @layer components. Import nothing extra — they ship with index.css. Use when the same Tailwind cluster repeats."
    >
      <SubCategory
        id="kit-mixins"
        title="Reference"
        description="Copy the mixin class into className, then add Tailwind for spacing, color, and borders from Foundations (e.g. text-fg, border-line)."
        sourceFile="src/styles/mixins.css"
      >
        <ul className="space-y-3">
          {mixinDocs.map((m) => (
            <li
              key={m.className}
              className="flex flex-col gap-1 border-b border-line py-4 last:border-0 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <div className="min-w-0 flex-1">
                <code className="code-inline shrink-0">.{m.className}</code>
                <p className="mt-2 break-all font-mono text-[12px] text-fg">
                  <span className="text-icon">Example className · </span>
                  <code className="code-inline">{m.exampleClassName}</code>
                </p>
                <span className="mt-1 block text-body text-muted">
                  <span className="font-mono text-[12px] text-icon">
                    {m.file}
                  </span>{" "}
                  — {m.note}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </SubCategory>
    </CategoryGroup>
  );
};
