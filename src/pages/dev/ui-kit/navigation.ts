/**
 * UI kit navigation — grouped categories for sidebar + in-page anchors.
 * Prefix `kit-` avoids clashing with live pattern ids (`work`, `signal`, `contact`).
 */
export const UI_KIT_NAV = [
  {
    id: "foundations",
    label: "Foundations",
    description: "Color and surface primitives",
    items: [
      { href: "#kit-color", label: "Color tokens" },
      { href: "#kit-classnames", label: "className patterns" },
      { href: "#kit-surface", label: "Surfaces" },
    ],
  },
  {
    id: "text",
    label: "Text",
    description: "Type scale and font stacks",
    items: [
      { href: "#kit-type", label: "Type scale" },
      { href: "#kit-fonts", label: "Font stacks" },
    ],
  },
  {
    id: "utilities",
    label: "Utilities",
    description: "Reusable CSS helper classes",
    items: [{ href: "#kit-mixins", label: "Mixins" }],
  },
  {
    id: "layout",
    label: "Layout",
    description: "App shell components",
    items: [{ href: "#kit-layout", label: "Shell" }],
  },
  {
    id: "interaction",
    label: "Interaction",
    description: "Controls, links, focus",
    items: [
      { href: "#kit-controls", label: "Controls" },
      { href: "#kit-focus", label: "Focus" },
    ],
  },
  {
    id: "patterns",
    label: "Patterns",
    description: "Full section demos",
    items: [{ href: "#patterns", label: "Live patterns" }],
  },
] as const;
