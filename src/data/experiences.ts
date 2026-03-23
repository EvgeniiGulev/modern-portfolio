import experiencesJson from "./experiences.json";

export type ExperienceEntry = {
  id: string;
  yearLabel: string;
  title: string;
  company: string;
};

export const EXPERIENCES: ExperienceEntry[] = experiencesJson.experiences;
