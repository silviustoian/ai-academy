export type LocaleCode = "ro" | "en";

export type NavigationItem = {
  label: string;
  href: `#${string}` | `/${string}`;
};

export type ProgramDetail = {
  label: string;
  value: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type CurriculumModule = {
  period: string;
  title: string;
  certifications?: string[];
  summary: string;
  handsOn?: string;
};

export type Mentor = {
  name: string;
  role: string;
  company?: string;
  expertise: string;
  quote?: string;
  image?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CareerOutcome = {
  title: string;
  description: string;
};
