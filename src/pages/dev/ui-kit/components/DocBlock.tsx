import type { ReactNode } from "react";

type DocBlockProps = {
  title: string;
  children: ReactNode;
  /** Paste into `className` next to spacing, layout, etc. */
  classNameSnippet?: string;
};

export const DocBlock = ({
  title,
  children,
  classNameSnippet,
}: DocBlockProps) => {
  return (
    <div className="surface-doc">
      <p className="pattern-label">{title}</p>
      {classNameSnippet ? (
        <p className="mt-2 break-all font-mono text-[12px] leading-relaxed text-fg">
          <span className="text-icon">className · </span>
          <code className="code-inline">{classNameSnippet}</code>
        </p>
      ) : null}
      <div className="mt-3 text-body text-muted">{children}</div>
    </div>
  );
};
