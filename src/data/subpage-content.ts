import type { LocaleCode } from "@/types/content";

type SubpageCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  next: {
    label: string;
    title: string;
    href: string;
  };
};

export const programPageContent: Record<LocaleCode, SubpageCopy> = {
  ro: {
    eyebrow: "Programul · 8 săptămâni",
    title: "Ce înveți la",
    titleAccent: "NEXINARI AI Academy.",
    intro:
      "Patru piloni pe ecosistemul Microsoft, livrați în 8 săptămâni intensive. Începi cu fundamente, termini cu un proiect real prezentat la Demo Day.",
    next: {
      label: "Pasul următor",
      title: "Aplică acum",
      href: "/#aplica",
    },
  },
  en: {
    eyebrow: "Program · 8 weeks",
    title: "What you learn at",
    titleAccent: "NEXINARI AI Academy.",
    intro:
      "Four pillars across the Microsoft ecosystem, delivered in 8 intensive weeks. You start from fundamentals and finish with a real project at Demo Day.",
    next: {
      label: "Next step",
      title: "Apply now",
      href: "/#aplica",
    },
  },
};

export const mentorsPageContent: Record<LocaleCode, SubpageCopy> = {
  ro: {
    eyebrow: "Mentori · Industria Microsoft",
    title: "Oameni care fac.",
    titleAccent: "Nu doar predau.",
    intro:
      "Consultanți, arhitecți și developeri activi în ecosistemul Microsoft. Predau doar ce livrează zilnic, relevant, actual, aplicabil.",
    next: {
      label: "Pasul următor",
      title: "Aplică acum",
      href: "/#aplica",
    },
  },
  en: {
    eyebrow: "Mentors · Microsoft industry",
    title: "People who do.",
    titleAccent: "Not just teach.",
    intro:
      "Consultants, architects and developers active in the Microsoft ecosystem. They only teach what they ship daily, relevant, current, applicable.",
    next: {
      label: "Next step",
      title: "Apply now",
      href: "/#aplica",
    },
  },
};
