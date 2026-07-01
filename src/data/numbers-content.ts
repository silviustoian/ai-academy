import type { LocaleCode } from "@/types/content";

type Stat = {
  key: string;
  value: number;
  suffix: string;
  label: string;
  emphasis?: "zero" | "iris";
};

type NumbersCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  stats: Stat[];
};

export const numbersContent: Record<LocaleCode, NumbersCopy> = {
  ro: {
    eyebrow: "Cifrele care contează",
    title: "De ce acum. De ce Microsoft.",
    titleAccent: "De ce NEXINARI.",
    intro:
      "Piața cere talent Microsoft mai repede decât poate produce universitatea. Numerele de mai jos sunt motivul pentru care construim NEXINARI.",
    stats: [
      {
        key: "jobs-eu",
        value: 50000,
        suffix: "+",
        label: "Job-uri AI și Cloud deschise în Europa",
        emphasis: "iris",
      },
      {
        key: "dynamics-ro",
        value: 240,
        suffix: "+",
        label: "Roluri Dynamics 365 în România, acum",
      },
      {
        key: "alt-academies",
        value: 0,
        suffix: "",
        label: "Alte academii Microsoft în România",
        emphasis: "zero",
      },
      {
        key: "weeks",
        value: 8,
        suffix: "",
        label: "Săptămâni intensive · full-time",
      },
      {
        key: "seats",
        value: 40,
        suffix: "",
        label: "Locuri per ediție · grup închis",
      },
      {
        key: "mentors",
        value: 9,
        suffix: "+",
        label: "Mentori din industria Microsoft",
      },
    ],
  },
  en: {
    eyebrow: "Numbers that matter",
    title: "Why now. Why Microsoft.",
    titleAccent: "Why NEXINARI.",
    intro:
      "The market wants Microsoft talent faster than universities can produce it. These numbers are why we built NEXINARI.",
    stats: [
      {
        key: "jobs-eu",
        value: 50000,
        suffix: "+",
        label: "Open AI & Cloud jobs in Europe",
        emphasis: "iris",
      },
      {
        key: "dynamics-ro",
        value: 240,
        suffix: "+",
        label: "Dynamics 365 roles open in Romania, now",
      },
      {
        key: "alt-academies",
        value: 0,
        suffix: "",
        label: "Other Microsoft academies in Romania",
        emphasis: "zero",
      },
      {
        key: "weeks",
        value: 8,
        suffix: "",
        label: "Intensive weeks · full-time",
      },
      {
        key: "seats",
        value: 40,
        suffix: "",
        label: "Seats per Program · closed group",
      },
      {
        key: "mentors",
        value: 9,
        suffix: "+",
        label: "Mentors from the Microsoft industry",
      },
    ],
  },
};
