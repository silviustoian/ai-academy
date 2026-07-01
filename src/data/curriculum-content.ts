import type { LocaleCode } from "@/types/content";

type Phase = {
  key: "fundamentals" | "dynamics" | "security" | "project" | "demo";
  weeks: string;
  title: string;
  certs?: string[];
  covers?: string;
  doing: string;
  handsOn?: string;
  handsOnLabel: string;
  coversLabel?: string;
  certsLabel?: string;
  doingLabel: string;
};

type Stat = {
  value: string;
  label: string;
};

type CurriculumCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  phasesLabel: string;
  phases: [Phase, Phase, Phase, Phase, Phase];
  statsLabel: string;
  stats: [Stat, Stat, Stat, Stat];
};

export const curriculumContent: Record<LocaleCode, CurriculumCopy> = {
  ro: {
    eyebrow: "Curriculum",
    title: "De la fundamente la proiect real.",
    titleAccent: "Săptămână cu săptămână.",
    intro:
      "Program intensiv de 8 săptămâni, structurat pe 5 etape, fiecare cu certificări Microsoft, hands-on real și aplicabil imediat la job.",
    phasesLabel: "Parcurs",
    phases: [
      {
        key: "fundamentals",
        weeks: "Săptămâna 1–2",
        title: "Fundamente & AI",
        certs: ["AI-900", "AZ-900", "PL-900"],
        certsLabel: "Certificări",
        doing:
          "Înțelegi bazele AI, Cloud-ului și Power Platform. Primele tale interacțiuni cu Azure, Copilot și AI Agents.",
        doingLabel: "Ce faci",
        handsOn:
          "Construiești un chatbot AI în Copilot Studio. Primul tău AI agent funcțional.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "dynamics",
        weeks: "Săptămâna 3–4",
        title: "Dynamics 365 & Data",
        covers: "Dynamics CRM · Dynamics ERP · Power BI · Microsoft Fabric",
        coversLabel: "Ce acoperi",
        doing:
          "Implementezi un CRM, configurezi un ERP, construiești dashboarduri interactive, lucrezi cu date reale.",
        doingLabel: "Ce faci",
        handsOn:
          "Dashboard de vânzări în Power BI conectat la Dynamics 365.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "security",
        weeks: "Săptămâna 4–5",
        title: "Security & DevOps",
        certs: ["SC-900", "SC-300"],
        certsLabel: "Certificări",
        doing:
          "Securitate cloud, GDPR, Responsible AI, CI/CD pipelines, MLOps. Completezi profilul de specialist.",
        doingLabel: "Ce faci",
        handsOn:
          "Configurezi politici de securitate în Azure AD și deploy-ezi un model AI cu monitoring.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "project",
        weeks: "Săptămâna 6–7",
        title: "Proiect real de echipa",
        doing:
          "Lucrezi în echipă la un proiect real. Aplici tot ce ai învățat: AI, Cloud, Dynamics, Power Platform, Security. Fiecare echipă are un mentor tehnic dedicat care ghidează și face code review.",
        doingLabel: "Ce faci",
        handsOn:
          "Proiectul intră în portofoliul tău, îl pui pe CV și pe LinkedIn.",
        handsOnLabel: "Rezultat",
      },
      {
        key: "demo",
        weeks: "Săptămâna 8",
        title: "Demo Day & Career Launch",
        doing:
          "Prezinți proiectul în fața mentorilor, invitaților din industrie și potențialilor angajatori. Career coaching: CV, LinkedIn, mock interviews, pitch personal.",
        doingLabel: "Ce faci",
        handsOn:
          "Networking direct cu profesioniști și companii din ecosistemul Microsoft.",
        handsOnLabel: "Bonus",
      },
    ],
    statsLabel: "Total program",
    stats: [
      { value: "320h", label: "8 săptămâni × 5 zile × 8h" },
      { value: "4+", label: "certificări Microsoft" },
      { value: "1", label: "proiect real în portofoliu" },
      { value: "Demo Day", label: "cu invitați din industrie" },
    ],
  },
  en: {
    eyebrow: "Curriculum",
    title: "From fundamentals to a real project.",
    titleAccent: "Week by week.",
    intro:
      "An intensive 8-week program structured in 5 phases, each one with Microsoft certifications, real hands-on work, and immediate on-the-job impact.",
    phasesLabel: "Track",
    phases: [
      {
        key: "fundamentals",
        weeks: "Week 1–2",
        title: "Fundamentals & AI",
        certs: ["AI-900", "AZ-900", "PL-900"],
        certsLabel: "Certifications",
        doing:
          "You learn the basics of AI, Cloud and Power Platform. Your first interactions with Azure, Copilot and AI Agents.",
        doingLabel: "What you do",
        handsOn:
          "You build an AI chatbot in Copilot Studio. Your first working AI agent.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "dynamics",
        weeks: "Week 3–4",
        title: "Dynamics 365 & Data",
        covers: "Dynamics CRM · Dynamics ERP · Power BI · Microsoft Fabric",
        coversLabel: "What you cover",
        doing:
          "You implement a CRM, configure an ERP, build interactive dashboards, and work with real data.",
        doingLabel: "What you do",
        handsOn:
          "Sales dashboard in Power BI connected to Dynamics 365.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "security",
        weeks: "Week 4–5",
        title: "Security & DevOps",
        certs: ["SC-900", "SC-300"],
        certsLabel: "Certifications",
        doing:
          "Cloud security, GDPR, Responsible AI, CI/CD pipelines, MLOps. You round out the specialist profile.",
        doingLabel: "What you do",
        handsOn:
          "You configure security policies in Azure AD and deploy an AI model with monitoring.",
        handsOnLabel: "Hands-on",
      },
      {
        key: "project",
        weeks: "Week 6–7",
        title: "Real team project",
        doing:
          "You work in a team on a real-world project. You apply everything: AI, Cloud, Dynamics, Power Platform, Security. Each team has a dedicated technical mentor who guides and reviews the work.",
        doingLabel: "What you do",
        handsOn:
          "The project goes straight into your portfolio, on your CV and LinkedIn.",
        handsOnLabel: "Outcome",
      },
      {
        key: "demo",
        weeks: "Week 8",
        title: "Demo Day & Career Launch",
        doing:
          "You pitch your project to mentors, industry guests and potential employers. Career coaching: CV, LinkedIn, mock interviews, personal pitch.",
        doingLabel: "What you do",
        handsOn:
          "Direct networking with professionals and companies in the Microsoft ecosystem.",
        handsOnLabel: "Bonus",
      },
    ],
    statsLabel: "Program total",
    stats: [
      { value: "320h", label: "8 weeks × 5 days × 8h" },
      { value: "4+", label: "Microsoft certifications" },
      { value: "1", label: "real project in your portfolio" },
      { value: "Demo Day", label: "with industry guests" },
    ],
  },
};
