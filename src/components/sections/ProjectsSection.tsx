import {
  getProjectsYearRangeLabel,
  PROJECTS,
} from "@/data/projects.ts";

export const ProjectsSection = () => {
  const yearLabel = getProjectsYearRangeLabel();

  return (
    <section className="mt-20 w-full min-w-0 sm:mt-28 lg:mt-40">
      <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:mb-8">
        <h2 className="text-headline-secondary text-fg">Selected Works</h2>
        {yearLabel ? (
          <p className="text-body text-muted">{yearLabel}</p>
        ) : null}
      </div>

      <ul className="flex flex-wrap gap-x-4 gap-y-16">
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className="w-full min-w-0 sm:w-[calc(50%-0.5rem)]"
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.imageSrc}
                  alt=""
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-headline-tertiary text-fg">{project.name}</h3>
                <span className="shrink-0 text-headline-tertiary text-muted">
                  {project.year}
                </span>
              </div>
              <p className="mt-3 text-body text-muted">{project.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
