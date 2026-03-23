import projectsJson from "./projects.json";
import projectImageFallback from "@/assets/image-not-found-light.png";

const projectThumbs = import.meta.glob<string>("../assets/projects/*.png", {
  eager: true,
  import: "default",
});

function resolveProjectImage(filename: string | null | undefined): string {
  if (!filename?.trim()) return projectImageFallback;
  const name = filename.trim();
  const hit = Object.entries(projectThumbs).find(([key]) =>
    key.replace(/\\/g, "/").endsWith(`/${name}`),
  );
  return hit ? hit[1] : projectImageFallback;
}

export type ProjectEntry = {
  id: string;
  name: string;
  description: string;
  year: number;
  imageSrc: string;
  repoUrl: string;
};

const raw = projectsJson.projects as Array<{
  id: string;
  name: string;
  description: string;
  year: number;
  image: string | null;
  repoUrl: string;
}>;

export const PROJECTS: ProjectEntry[] = raw.map((p) => ({
  id: p.id,
  name: p.name,
  description: p.description,
  year: p.year,
  repoUrl: p.repoUrl,
  imageSrc: resolveProjectImage(p.image),
}));

export function getProjectsYearRangeLabel(): string {
  if (PROJECTS.length === 0) return "";
  const years = PROJECTS.map((p) => p.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? `${min}` : `${min} - ${max}`;
}
