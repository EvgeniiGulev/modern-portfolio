import { useEffect, useMemo, useState } from "react";
import cvPdf from "@/data/files/Evgenii_Gulev_CV_Latest.pdf";

type SocialLink = {
  label: string;
  href: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/evgenii-gulev-95233b274/" },
  { label: "GitHub", href: "https://github.com/EvgeniiGulev" },
  { label: "CV", href: cvPdf },
];

type FooterSectionProps = {
  compact?: boolean;
};

export const FooterSection = ({ compact = false }: FooterSectionProps) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const localTime = useMemo(
    () =>
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    [now],
  );

  return (
    <section
      className={`${compact ? "mt-6 sm:mt-8" : "my-20 sm:my-24 lg:my-32"} flex w-full min-w-0 flex-col items-start justify-start gap-8 text-left sm:gap-10 lg:flex-row lg:gap-16 xl:gap-24`}
    >
      <h3 className="w-full shrink-0 text-fg text-[20px] leading-[1.2] lg:w-1/4 text-left">
        LET'S GET IN TOUCH
      </h3>

      <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-12 min-[1200px]:gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center justify-start gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-headline-tertiary rounded-[15px] border border-muted px-[18px] py-2 text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-headline-tertiary text-left text-muted tracking-[0.15em]">
          {localTime}
        </p>
      </div>
    </section>
  );
};