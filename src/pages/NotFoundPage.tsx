import { FooterSection } from "@/components/sections/FooterSection.tsx";
import { SiteHeader } from "@/components/layout/SiteHeader.tsx";

export const NotFoundPage = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden px-4 pt-6 pb-6 sm:px-8 sm:pt-10 sm:pb-8 lg:px-16 lg:pt-16 lg:pb-8">
      <SiteHeader mode="notFound" />

      <main className="flex min-h-0 flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="font-primary text-[clamp(8rem,30vw,18.75rem)] leading-none text-fg">404</h1>
          <p className="mt-4 text-[18px] leading-[23px] text-[#666666]">
            Oops! There&apos;s a error. This web-page <br />
            was deleted or never came to be.
          </p>
        </div>
      </main>

      <FooterSection compact />
    </div>
  );
};
