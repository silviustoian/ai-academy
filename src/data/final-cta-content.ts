import type { LocaleCode } from "@/types/content";

type FinalCtaCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  copy: string;
  copyAccent: string;
  ctaLabel: string;
  ctaNote: string;
  seatsLeft: string;
  testimonial: {
    quote: string;
    author: string;
  };
};

export const finalCtaContent: Record<LocaleCode, FinalCtaCopy> = {
  ro: {
    eyebrow: "Secțiunea 10 · Aplicăm",
    title: "Locurile se ocupă.",
    titleAccent: "Nu aștepta.",
    copy:
      "În 8 săptămâni, poți fi în alt loc. Cu certificări Microsoft în CV. Cu un proiect real în portofoliu. Cu o rețea de oameni care fac lucrurile pe care vrei să le faci.",
    copyAccent:
      "Sau poți să mai aștepți. Să începi încă un curs online. Să te întrebi „de unde să încep?” peste încă 6 luni.",
    ctaLabel: "Aplică acum",
    ctaNote: "Aplicația durează 2 minute · Locuri limitate · 40 / ediție",
    seatsLeft: "Mai sunt 23 de locuri disponibile pentru cohorta 2026",
    testimonial: {
      quote: "A fost cea mai bună investiție în mine.",
      author: "Absolvent · Ediția 1",
    },
  },
  en: {
    eyebrow: "Section 10 · Apply",
    title: "Seats are filling.",
    titleAccent: "Don't wait.",
    copy:
      "In 8 weeks, you can be somewhere else. With Microsoft certifications on your CV. A real project in your portfolio. A network of people doing the things you want to do.",
    copyAccent:
      "Or you can keep waiting. Start one more online course. Ask yourself „where do I begin?” 6 months from now.",
    ctaLabel: "Apply now",
    ctaNote: "Application takes 2 minutes · Limited seats · 40 / cohort",
    seatsLeft: "23 seats left for the 2026 cohort",
    testimonial: {
      quote: "It was the best investment I made in myself.",
      author: "Graduate · Cohort 1",
    },
  },
};
