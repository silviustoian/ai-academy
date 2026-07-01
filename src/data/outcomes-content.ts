import type { LocaleCode } from "@/types/content";

type Outcome = {
  key:
    | "certs"
    | "project"
    | "skills"
    | "career"
    | "network"
    | "team"
    | "community";
  icon:
    | "badge"
    | "folder"
    | "stack"
    | "linkedin"
    | "users"
    | "team"
    | "infinity";
  title: string;
  body: string;
  proof: string;
  highlight?: boolean;
};

type OutcomesCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  outcomes: Outcome[];
  footnote: string;
};

export const outcomesContent: Record<LocaleCode, OutcomesCopy> = {
  ro: {
    eyebrow: "Ce obții",
    title: "Nu doar cunoștințe.",
    titleAccent: "Dovezi.",
    intro:
      "După 8 săptămâni, pleci acasă cu rezultate concrete pe care le pui pe CV, pe LinkedIn și în orice interviu. Nu vorbe, output măsurabil.",
    outcomes: [
      {
        key: "certs",
        icon: "badge",
        title: "4+ certificări Microsoft",
        body: "AI-900, AZ-900, PL-900, SC-900, pregătire completă și suport pentru susținerea examenelor.",
        proof: "Recunoscute global de angajatori",
      },
      {
        key: "project",
        icon: "folder",
        title: "1 proiect real în portofoliu",
        body: "Construit în echipă cu tehnologii actuale, code-review-uit de mentor, prezentat la Demo Day.",
        proof: "CV-ready · LinkedIn-ready",
      },
      {
        key: "skills",
        icon: "stack",
        title: "Stack complet Microsoft",
        body: "Competențe practice pe AI, Cloud, Dynamics 365, Power Platform, Security și DevOps.",
        proof: "Hands-on, nu doar teorie",
      },
      {
        key: "career",
        icon: "linkedin",
        title: "CV & LinkedIn optimizate",
        body: "Sesiuni 1-la-1 cu career coach, mock interviews și pitch personal calibrat pe rolul țintă.",
        proof: "Inclus în program",
      },
      {
        key: "team",
        icon: "team",
        title: "Experiență de lucru în echipă",
        body: "Ai colaborat real pe un proiect tehnic cu mentor, deadline-uri și code review.",
        proof: "Ce 90% din juniorii pieței NU au",
        highlight: true,
      },
      {
        key: "network",
        icon: "users",
        title: "Rețea în industria Microsoft",
        body: "Conexiuni directe cu mentori, alumni și companii partenere din ecosistemul Microsoft.",
        proof: "Acces la oportunități înainte de piață",
      },
      {
        key: "community",
        icon: "infinity",
        title: "Acces NEXINARI Alumni pe viață",
        body: "Comunitate închisă, ediții viitoare ca guest sau mentor, evenimente și job board exclusiv.",
        proof: "Pentru totdeauna",
      },
    ],
    footnote: "Tot ce primești e inclus în prețul programului. Fără add-on-uri ascunse.",
  },
  en: {
    eyebrow: "What you get",
    title: "Not just knowledge.",
    titleAccent: "Proof.",
    intro:
      "After 8 weeks you leave with concrete outputs you can put on your CV, LinkedIn and in any interview. Not talk, measurable results.",
    outcomes: [
      {
        key: "certs",
        icon: "badge",
        title: "4+ Microsoft certifications",
        body: "AI-900, AZ-900, PL-900, SC-900, full prep and support for sitting the exams.",
        proof: "Globally recognized by employers",
      },
      {
        key: "project",
        icon: "folder",
        title: "1 real project in your portfolio",
        body: "Built in a team with current technologies, code-reviewed by a mentor, presented on Demo Day.",
        proof: "CV-ready · LinkedIn-ready",
      },
      {
        key: "skills",
        icon: "stack",
        title: "Full Microsoft stack",
        body: "Practical skills across AI, Cloud, Dynamics 365, Power Platform, Security and DevOps.",
        proof: "Hands-on, not just theory",
      },
      {
        key: "career",
        icon: "linkedin",
        title: "CV & LinkedIn optimized",
        body: "1-on-1 sessions with a career coach, mock interviews and a personal pitch dialed in for your target role.",
        proof: "Included in the program",
      },
      {
        key: "team",
        icon: "team",
        title: "Real team-work experience",
        body: "You actually collaborated on a technical project with a mentor, deadlines and code review.",
        proof: "What 90% of market juniors don't have",
        highlight: true,
      },
      {
        key: "network",
        icon: "users",
        title: "Network in the Microsoft industry",
        body: "Direct connections with mentors, alumni and partner companies in the Microsoft ecosystem.",
        proof: "Access to opportunities before the market",
      },
      {
        key: "community",
        icon: "infinity",
        title: "Lifelong NEXINARI Alumni access",
        body: "Closed community, future Programs as guest or mentor, events and exclusive job board.",
        proof: "Forever",
      },
    ],
    footnote: "Everything you get is included in the program price. No hidden add-ons.",
  },
};
