export const colorTokens = [
  {
    cssVar: "--color-fg",
    hex: "#E3E3E1",
    usage: "Primary copy, emphasis fills",
    useCase: "Hero titles, main body, high-contrast UI text",
    utilities: ["text-fg", "bg-fg", "border-fg"],
    exampleClassName: "text-body text-fg",
  },
  {
    cssVar: "--color-muted",
    hex: "#999999",
    usage: "Secondary copy, captions",
    useCase:
      "Muted display text — e.g. SiteHeader mail link (`text-headline-primary text-muted`)",
    utilities: ["text-muted", "bg-muted", "border-muted"],
    exampleClassName: "text-headline-primary text-muted",
  },
  {
    cssVar: "--color-canvas",
    hex: "#1C1C1C",
    usage: "Page / default surface",
    useCase: "Default page background (`body`, full-bleed sections)",
    utilities: ["bg-canvas", "text-canvas", "border-canvas"],
    exampleClassName: "min-h-dvh bg-canvas text-fg",
  },
  {
    cssVar: "--color-subtle",
    hex: "#0F0F0F",
    usage: "Inset bands, alternate panels",
    useCase: "Inset cards, alternating bands, doc callouts (`surface-doc`)",
    utilities: ["bg-subtle", "text-subtle", "border-subtle"],
    exampleClassName: "border border-line bg-subtle p-6 text-body text-fg",
  },
  {
    cssVar: "--color-line",
    hex: "#292929",
    usage: "Hairlines, dividers, grid lines",
    useCase: "Borders, scroll progress track, section dividers",
    utilities: ["border-line", "bg-line", "text-line"],
    exampleClassName: "border-b border-line pb-4",
  },
  {
    cssVar: "--color-icon",
    hex: "#A1A1A1",
    usage: "Icons, mono labels",
    useCase: "Icon strokes, uppercase mono labels (`pattern-label`)",
    utilities: ["text-icon", "bg-icon", "border-icon"],
    exampleClassName: "font-mono text-[12px] text-icon",
  },
] as const;

/** Paste the `snippet` string into any `className` (alone or with `cn()`). */
export const classNamePatterns = [
  {
    label: "Body — primary (default emphasis)",
    snippet: "text-body text-fg",
  },
  {
    label: "Body — secondary (supporting / captions)",
    snippet: "text-body text-muted",
  },
  {
    label: "Headline — primary + muted (mail, hero subline)",
    snippet: "text-headline-primary text-muted",
  },
  {
    label: "Inset panel",
    snippet: "border border-line bg-subtle p-6 text-body text-fg",
  },
  {
    label: "Hairline row divider",
    snippet: "border-b border-line",
  },
  {
    label: "Mono caption",
    snippet: "font-mono text-[12px] text-icon",
  },
] as const;

export const mixinDocs = [
  {
    className: "surface-doc",
    file: "mixins.css",
    note: "Rounded panel with subtle fill — documentation callouts.",
    exampleClassName: "surface-doc border border-line p-4 text-body text-fg",
  },
  {
    className: "surface-pattern",
    file: "mixins.css",
    note: "Bordered frame for embedded demos.",
    exampleClassName: "surface-pattern border-line p-4",
  },
  {
    className: "pattern-label",
    file: "mixins.css",
    note: "Mono uppercase label for pattern / section tags.",
    exampleClassName: "pattern-label text-icon",
  },
  {
    className: "code-inline",
    file: "mixins.css",
    note: "Inline code / token references.",
    exampleClassName: "code-inline text-[13px] text-fg",
  },
  {
    className: "font-primary",
    file: "mixins.css",
    note: "Space Grotesk — accents; not the default semantic scale.",
    exampleClassName: "font-primary text-fg",
  },
  {
    className: "font-secondary",
    file: "mixins.css",
    note: "Inter Tight — semantic type scale (display + body).",
    exampleClassName: "font-secondary text-body text-muted",
  },
] as const;

export const fontTokens = [
  {
    cssVar: "--font-primary",
    family: "Space Grotesk",
    usage: "`font-primary` mixin, bespoke headings",
    tailwindClass: "font-primary",
  },
  {
    cssVar: "--font-secondary",
    family: "Inter Tight",
    usage: "`.text-headline-primary`, `.text-headline-secondary`, `.text-headline-tertiary`, `.text-body`",
    tailwindClass: "font-secondary",
  },
  {
    cssVar: "--font-mono",
    family: "Space Mono",
    usage: "`.text-mono-accent`, `font-mono` utility",
    tailwindClass: "font-mono",
  },
] as const;
