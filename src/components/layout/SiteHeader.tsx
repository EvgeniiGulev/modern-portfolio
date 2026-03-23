import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IArrowRight } from "@/assets/icons";
import themeSwitchPng from "@/assets/theme-switch.png";

type SiteHeaderMode = "default" | "notFound";

type SiteHeaderProps = {
  mode?: SiteHeaderMode;
};

export const SiteHeader = ({ mode = "default" }: SiteHeaderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    setTheme(next);
    root.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
    window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 420);
  };

  const themeIconFlipped = theme === "light";

  return (
    <header className="relative mb-4 pr-14">
      <div className="nav-wrapper flex min-w-0 flex-1 flex-col gap-3 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-16">
        <a
          href="mailto:egulev.alt@gmail.com"
          className="text-headline-primary shrink-0 text-muted"
        >
          INFO@GULEV.DEV
        </a>
        {mode === "notFound" ? (
          <Link to="/" className="text-headline-primary text-muted">
            BACK TO HOME
          </Link>
        ) : (
          <span className="flex min-w-0 items-start gap-3 min-[1200px]:items-center min-[1200px]:gap-5">
            <IArrowRight className="mt-1 hidden self-start text-icon min-[470px]:block min-[1200px]:mt-2" />
            <p className="font-secondary flex items-center leading-[1.2] text-fg text-[16px] min-[470px]:text-[20px]">
              FRONTEND DEVELOPER <br />
              BASED PRAGUE, CZECH
            </p>
          </span>
        )}
      </div>
      <button
        type="button"
        className="absolute right-0 top-0 transition-transform duration-200 ease-out hover:scale-95"
        aria-label="Toggle theme"
        aria-pressed={theme === "light"}
        onClick={toggleTheme}
      >
        <span
          className={`inline-block transition-transform duration-300 ease-out ${themeIconFlipped ? "rotate-180" : ""}`}
        >
          <img
            src={themeSwitchPng}
            alt=""
            width={30}
            height={30}
            className="block border-0 outline-none"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </span>
      </button>
    </header>
  );
};
