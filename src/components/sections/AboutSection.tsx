
export const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 min-h-[360px] pt-32 pb-16 min-[561px]:flex-row">
      <h2 className="min-[561px]:w-1/2">
        <p className="text-headline-secondary text-muted max-w-[600px]">
          Hi, I'm Evgenii, a russian web developer that loves writing code.
        </p>
      </h2>
    <div className="min-[561px]:w-1/2">
      <p className="text-body text-muted max-w-[400px] font-bold">
        Frontend Developer specializing in building responsive, production-ready web  applications , with expertise in Vue.js, Nuxt.js, modern JavaScript, pixel-accurate  Figma translation, REST API integration, and crafting clean, modular codebases.
      </p>
    </div>
    </div>
  );
};
