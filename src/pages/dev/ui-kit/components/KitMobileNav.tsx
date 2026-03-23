import { UI_KIT_NAV } from "../navigation";

export const KitMobileNav = () => {
  const flat = UI_KIT_NAV.flatMap((g) =>
    g.items.map((item) => ({ ...item, group: g.label })),
  );

  return (
    <div className="mt-10 border-t border-line pt-8 lg:hidden">
      <p className="pattern-label">Jump to</p>
      <ul className="mt-4 flex flex-col gap-3">
        {flat.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex flex-col gap-0.5 font-mono text-[12px] text-icon transition-colors hover:text-fg"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.group}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
