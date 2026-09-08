export type Author = {
  id: string;
  username: string;
};
export type Company = {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string | null;
  inn: string;
  kpp: string;
  createdAt: string;
  updatedAt: string;
};
export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
};
export type Collection = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
  isFree: boolean;
  keywords: string[];
  createdBy: Author | null;
  company: Company | null;
  specializations: Specialization[];
  questionsCount: number;
  tasksCount: number;
};
