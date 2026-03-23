import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader.tsx";
import { DualImageSection } from "@/components/sections/DualImageSection.tsx";
import { DynamicBlocks } from "@/components/sections/DynamicBlocks.tsx";
import { NameSection } from "@/components/sections/NameSection.tsx";
import { AboutSection } from "@/components/sections/AboutSection.tsx";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection.tsx";
import { ProjectsSection } from "@/components/sections/ProjectsSection.tsx";
import { FooterSection } from "@/components/sections/FooterSection.tsx";

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-dvh px-4 pt-6 sm:px-8 sm:pt-10 lg:px-16 lg:pt-16">
      <SiteHeader />
      <DynamicBlocks />
      <NameSection />
      <DualImageSection />
      <AboutSection />
      <ProjectsSection />
      <ExperiencesSection />
      <FooterSection />
      {children}
    </div>
  );
};
