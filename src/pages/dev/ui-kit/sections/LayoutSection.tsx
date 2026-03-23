import { DocBlock } from "../components/DocBlock";
import { CategoryGroup, SubCategory } from "../components/CategoryGroup";

export const LayoutSection = () => {
  return (
    <CategoryGroup
      id="category-layout"
      tag="Layout"
      title="App shell"
      description="Global wrappers and chrome for the site. RootLayout wraps routes in App.tsx — `/ui` is separate and does not use it."
    >
      <SubCategory
        id="kit-layout"
        title="Components"
        description="Source paths for when you extend the main layout and shared chrome."
        sourceFile="src/components/layout/"
      >
        <div className="flex flex-col gap-6">
          <DocBlock title="RootLayout.tsx">
            Site routes only (not <code className="code-inline">/ui</code>):{" "}
            <code className="code-inline">SiteHeader</code>,{" "}
            <code className="code-inline">DynamicBlocks</code>, main sections, then route
            children.
          </DocBlock>
          <DocBlock title="SiteHeader.tsx">
            Mail link, role/location block, and theme switcher. Header spacing and breakpoints
            are handled in the component.
          </DocBlock>
        </div>
      </SubCategory>
    </CategoryGroup>
  );
};
