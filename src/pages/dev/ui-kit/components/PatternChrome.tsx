import type { ReactNode } from "react";

type PatternChromeProps = {
  label: string;
  children: ReactNode;
};

export const PatternChrome = ({ label, children }: PatternChromeProps) => {
  return (
    <div>
      <div className="bg-subtle px-6 py-3 md:px-10">
        <p className="pattern-label">{label}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};
