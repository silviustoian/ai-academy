import type { LocaleCode } from "@/types/content";

type Step = {
  key: "apply" | "confirm" | "start";
  label: string;
  title: string;
  body: string;
  meta: string;
};

type HowCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  steps: [Step, Step, Step];
  cta: string;
  ctaNote: string;
};

export const howContent: Record<LocaleCode, HowCopy> = {
  ro: {
    eyebrow: "Secțiunea 07 · Cum funcționează",
    title: "3 pași simpli.",
    titleAccent: "8 săptămâni de impact.",
    steps: [
      {
        key: "apply",
        label: "Pasul 1",
        title: "Aplică",
        body: "Completezi formularul în 2 minute. Fără experiență tehnică — doar motivație și disponibilitate full-time.",
        meta: "2 min",
      },
      {
        key: "confirm",
        label: "Pasul 2",
        title: "Primești confirmarea",
        body: "Răspuns în max. 48h. Ghid de pregătire, acces la comunitate, calendar complet al programului.",
        meta: "≤ 48h",
      },
      {
        key: "start",
        label: "Pasul 3",
        title: "Începi cohorta",
        body: "Te alături celor 40 de participanți. Mentori, proiecte, certificări, Demo Day și rețea de alumni pe viață.",
        meta: "8 săpt.",
      },
    ],
    cta: "Aplică acum",
    ctaNote: "Locuri limitate · Cohorta 2026",
  },
  en: {
    eyebrow: "Section 07 · How it works",
    title: "3 simple steps.",
    titleAccent: "8 weeks of impact.",
    steps: [
      {
        key: "apply",
        label: "Step 1",
        title: "Apply",
        body: "Fill the form in 2 minutes. No technical background needed — just motivation and full-time availability.",
        meta: "2 min",
      },
      {
        key: "confirm",
        label: "Step 2",
        title: "Get confirmed",
        body: "Reply within 48h. Prep guide, community access, full program calendar.",
        meta: "≤ 48h",
      },
      {
        key: "start",
        label: "Step 3",
        title: "Join the cohort",
        body: "You join the 40-person cohort. Mentors, projects, certifications, Demo Day and a lifelong alumni network.",
        meta: "8 weeks",
      },
    ],
    cta: "Apply now",
    ctaNote: "Limited seats · 2026 cohort",
  },
};
