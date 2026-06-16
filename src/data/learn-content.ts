import type { LocaleCode } from "@/types/content";

type LearnCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  tabs: {
    pillars: string;
    weeks: string;
  };
};

export const learnContent: Record<LocaleCode, LearnCopy> = {
  ro: {
    eyebrow: "Secțiunea 03 · Ce înveți",
    title: "Nu încă un curs online.",
    titleAccent: "O academie.",
    intro:
      "Patru piloni pe ecosistemul Microsoft, livrați într-un program intensiv de 8 săptămâni — fundamente, hands-on real, proiect de echipă și Demo Day.",
    tabs: {
      pillars: "Piloni",
      weeks: "Săptămâni",
    },
  },
  en: {
    eyebrow: "Section 03 · What you learn",
    title: "Not just another online course.",
    titleAccent: "An academy.",
    intro:
      "Four pillars on the Microsoft ecosystem, delivered in an intensive 8-week program — fundamentals, real hands-on, team project and Demo Day.",
    tabs: {
      pillars: "Pillars",
      weeks: "Weeks",
    },
  },
};
