import type { LocaleCode } from "@/types/content";

type FitCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  tabs: {
    problem: string;
    audience: string;
  };
};

export const fitContent: Record<LocaleCode, FitCopy> = {
  ro: {
    eyebrow: "Secțiunea 02 · Te potrivești?",
    title: "Două întrebări scurte.",
    titleAccent: "Un singur răspuns.",
    tabs: {
      problem: "Sună cunoscut?",
      audience: "Pentru cine e?",
    },
  },
  en: {
    eyebrow: "Section 02 · Are you a fit?",
    title: "Two short questions.",
    titleAccent: "One clear answer.",
    tabs: {
      problem: "Sound familiar?",
      audience: "Who it's for",
    },
  },
};
