import { fontTokens } from "../data";
import { DocBlock } from "../components/DocBlock";
import { CategoryGroup, SubCategory } from "../components/CategoryGroup";

export const TextSection = () => {
  return (
    <CategoryGroup
      id="category-text"
      tag="Text"
      title="Typography"
      description="Headline primary → secondary → tertiary, then body and mono accent. Pair with color tokens (text-fg, text-muted). Font stacks below are for one-off overrides."
    >
      <SubCategory
        id="kit-type"
        title="Type scale"
        description="Names map to roles: main hero (primary), section title (secondary), label/H3 (tertiary), paragraph (body), mono block (accent)."
        sourceFile="src/styles/typography.css"
      >
        <div className="space-y-12">
          <div>
            <DocBlock
              title=".text-headline-primary"
              classNameSnippet="text-headline-primary text-fg"
            >
              50px / 1.4 · Inter Tight · 500 — H1, multi-line heroes. Add{" "}
              <code className="code-inline">text-muted</code> for secondary
              display lines.
            </DocBlock>
            <p className="text-headline-primary mt-6">
              Headline primary — comfortable multi-line heroes.
            </p>
          </div>
          <div>
            <DocBlock
              title=".text-headline-secondary"
              classNameSnippet="text-headline-secondary text-fg"
            >
              50px / 1.2 · Inter Tight · 500 — H2, dense headlines
            </DocBlock>
            <p className="text-headline-secondary mt-6">
              Headline secondary — dense section titles.
            </p>
          </div>
          <div>
            <DocBlock
              title=".text-headline-tertiary"
              classNameSnippet="text-headline-tertiary text-muted"
            >
              20px / 1.2 · Inter Tight · 500 — H3, labels, UI lines
            </DocBlock>
            <p className="text-headline-tertiary mt-6">
              Headline tertiary — labels, H3, short UI lines.
            </p>
          </div>
          <div>
            <DocBlock
              title=".text-body"
              classNameSnippet="text-body text-fg"
            >
              20px / 1.2 · Inter Tight · 400 — body / paragraphs. Use{" "}
              <code className="code-inline">text-muted</code> for de-emphasis.
            </DocBlock>
            <p className="text-body mt-6">
              Body — aim for ~60–75 characters per line for readability.
            </p>
          </div>
          <div>
            <DocBlock
              title=".text-mono-accent"
              classNameSnippet="text-mono-accent text-icon"
            >
              32px / 1.2 · Space Mono · 400 — mono accent blocks
            </DocBlock>
            <p className="text-mono-accent mt-6">
              BLOCK · 0123456789 · mono accent
            </p>
          </div>
        </div>
      </SubCategory>

      <SubCategory
        id="kit-fonts"
        title="Font stacks"
        description="Loaded in index.html; assigned in @theme inside tokens.css. Copy the Tailwind class into className next to color utilities (text-fg, text-muted, …)."
        sourceFile="index.html · src/styles/tokens.css"
      >
        <ul className="space-y-4">
          {fontTokens.map((f) => (
            <li
              key={f.cssVar}
              className="border-b border-line py-4 last:border-0"
            >
              <p className="code-inline text-[13px]">{f.cssVar}</p>
              <p className="text-headline-tertiary mt-1 text-muted">{f.family}</p>
              <p className="mt-2 font-mono text-[12px] text-fg">
                <span className="text-icon">className · </span>
                <code className="code-inline">{f.tailwindClass}</code>
              </p>
              <p className="text-body mt-2 text-muted">{f.usage}</p>
            </li>
          ))}
        </ul>
      </SubCategory>
    </CategoryGroup>
  );
};
