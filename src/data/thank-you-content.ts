import type { LocaleCode } from "@/types/content";

type ThankYouCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  body: string;
  note: string;
  homeLabel: string;
};

export const thankYouContent: Record<LocaleCode, ThankYouCopy> = {
  ro: {
    eyebrow: "Aplicația trimisă",
    title: "Mulțumim că",
    titleAccent: "ai aplicat.",
    body: "Am primit aplicația ta la NEXINARI AI Academy. Echipa o analizează în perioada următoare și îți vom scrie pe email cu detalii complete despre preț, calendar și pașii următori.",
    note: "Confirmare trimisă pe email.",
    homeLabel: "Înapoi pe Home",
  },
  en: {
    eyebrow: "Application sent",
    title: "Thanks for",
    titleAccent: "applying.",
    body: "We received your application to NEXINARI AI Academy. Our team will review it shortly and reach out by email with full details on pricing, calendar and next steps.",
    note: "Confirmation sent to your email.",
    homeLabel: "Back to Home",
  },
};
