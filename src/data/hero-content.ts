import type { LocaleCode } from "@/types/content";

type HeroCopy = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  headlineTail: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
  vertical: string;
  scroll: string;
};

export const heroContent: Record<LocaleCode, HeroCopy> = {
  ro: {
    eyebrow: "Nexinari AI Academy · Ediția 2027",
    headlineLead: "Învață",
    headlineAccent: "AI, Cloud și Microsoft",
    headlineTail: "în 8 săptămâni.",
    subheadline:
      "De la zero la specialist. Program intensiv cu mentori din industrie, certificări Microsoft, proiecte reale și Demo Day. Doar 40 de locuri per ediție.",
    primaryCta: "Aplică acum",
    secondaryCta: "Vezi programul",
    note: "Aplicarea durează 2 minute. Locuri limitate.",
    vertical: "Viitorul AI începe aici · Nexinari Academy",
    scroll: "Scroll",
  },
  en: {
    eyebrow: "Nexinari AI Academy · 2027 Program",
    headlineLead: "Learn",
    headlineAccent: "AI, Cloud and Microsoft",
    headlineTail: "in 8 weeks.",
    subheadline:
      "From zero to specialist. Intensive program with industry mentors, Microsoft certifications, real-world projects and Demo Day. Only 40 seats per Program.",
    primaryCta: "Apply for Access",
    secondaryCta: "Explore the Program",
    note: "Application takes 2 minutes. Limited seats.",
    vertical: "The Future of AI Starts Here · Nexinari Academy",
    scroll: "Scroll",
  },
};

export const headerNavContent: Record<LocaleCode, Array<{ label: string; href: string }>> = {
  ro: [
    { label: "Program", href: "/program" },
    { label: "Rezultate", href: "/program#outcomes" },
    { label: "Cum funcționează", href: "/#how" },
    { label: "FAQ", href: "/#faq" },
  ],
  en: [
    { label: "Program", href: "/program" },
    { label: "Outcomes", href: "/program#outcomes" },
    { label: "How it works", href: "/#how" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export const headerCtaContent: Record<LocaleCode, string> = {
  ro: "Aplică",
  en: "Apply",
};

export const headerCtaHref = "/#aplica";
