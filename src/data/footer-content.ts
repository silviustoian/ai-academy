import type { LocaleCode } from "@/types/content";

type FooterCopy = {
  tagline: string;
  navLabel: string;
  nav: Array<{ label: string; href: string }>;
  social: Array<{ label: string; href: string; icon: "linkedin" | "youtube" | "instagram" }>;
  contactLabel: string;
  email: string;
  address: string;
  poweredBy: string;
  legalLinks: Array<{ label: string; href: string }>;
};

export const footerContent: Record<LocaleCode, FooterCopy> = {
  ro: {
    tagline:
      "Program intensiv pentru AI, Cloud și ecosistemul Microsoft. 8 săptămâni. 40 de locuri.",
    navLabel: "Navigare",
    nav: [
      { label: "Program", href: "/program" },
      { label: "Rezultate", href: "/program#outcomes" },
      { label: "Cum funcționează", href: "/#how" },
      { label: "FAQ", href: "/#faq" },
      { label: "Aplică", href: "/#aplica" },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
    contactLabel: "Contact",
    email: "contact@nexinari.com",
    address: "Timișoara · România",
    poweredBy: "Un program INARI",
    legalLinks: [
      { label: "Termeni", href: "/legal/termeni" },
      { label: "Confidențialitate", href: "/legal/confidentialitate" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
  en: {
    tagline:
      "Intensive program for AI, Cloud and the Microsoft ecosystem. 8 weeks. 40 seats.",
    navLabel: "Navigation",
    nav: [
      { label: "Program", href: "/program" },
      { label: "Outcomes", href: "/program#outcomes" },
      { label: "How it works", href: "/#how" },
      { label: "FAQ", href: "/#faq" },
      { label: "Apply", href: "/#aplica" },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    ],
    contactLabel: "Contact",
    email: "contact@nexinari.com",
    address: "Timișoara · Romania",
    poweredBy: "A program by INARI",
    legalLinks: [
      { label: "Terms", href: "/legal/termeni" },
      { label: "Privacy", href: "/legal/confidentialitate" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
};
