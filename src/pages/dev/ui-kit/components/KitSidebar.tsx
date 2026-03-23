import { UI_KIT_NAV } from "../navigation";

export const KitSidebar = () => {
  return (
    <aside
      className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
      aria-label="UI kit categories"
    >
      <p className="pattern-label">Contents</p>
      <nav className="mt-6 flex flex-col gap-8">
        {UI_KIT_NAV.map((group) => (
          <div key={group.id}>
            <p className="font-secondary text-[13px] font-medium text-fg">
              {group.label}
            </p>
            <p className="mt-1 text-body text-[15px] leading-snug text-muted">
              {group.description}
            </p>
            <ul className="mt-3 flex flex-col gap-2 border-l border-line pl-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-[12px] text-icon transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
