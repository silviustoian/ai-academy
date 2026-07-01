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
};

export const finalCtaContent: Record<LocaleCode, FinalCtaCopy> = {
  ro: {
    eyebrow: "Aplicăm",
    title: "Locurile se ocupă.",
    titleAccent: "Nu aștepta.",
    copy:
      "În 8 săptămâni, poți fi în alt loc. Cu certificări Microsoft în CV. Cu un proiect real în portofoliu. Cu o rețea de oameni care fac lucrurile pe care vrei să le faci.",
    copyAccent:
      "Sau poți să mai aștepți. Să începi încă un curs online. Să te întrebi „de unde să încep?” peste încă 6 luni.",
    ctaLabel: "Aplică acum",
    ctaNote: "Aplicarea durează 2 minute · Locuri limitate · 40 / Program",
    seatsLeft: "Mai sunt 23 de locuri disponibile pentru Programul 2027",
  },
  en: {
    eyebrow: "Apply",
    title: "Seats are filling.",
    titleAccent: "Don't wait.",
    copy:
      "In 8 weeks, you can be somewhere else. With Microsoft certifications on your CV. A real project in your portfolio. A network of people doing the things you want to do.",
    copyAccent:
      "Or you can keep waiting. Start one more online course. Ask yourself „where do I begin?” 6 months from now.",
    ctaLabel: "Apply now",
    ctaNote: "Application takes 2 minutes · Limited seats · 40 / Program",
    seatsLeft: "23 seats left for the 2027 Program",
  },
};
