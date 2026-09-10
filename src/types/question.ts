import type { Author } from "./collection";

export type Skill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
};

export type Question = {
  id: number;
  title: string;
  description: string;
  rate: number;
  complexity: number;
  code: string | null;
  shortAnswer: string;
  longAnswer: string;
  imageSrc: string | null;
  keywords: string[];
  createdBy: Author;
  questionSkills: Skill[];
};
