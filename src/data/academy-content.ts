import type { LocaleCode } from "@/types/content";

type Pillar = {
  key: "ai" | "power" | "dynamics" | "security";
  title: string;
  stack: string;
  body: string;
  skills: string[];
  outcome: string;
};

type AcademyCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphTwoAccent: string;
  pillarsLabel: string;
  pillars: [Pillar, Pillar, Pillar, Pillar];
};

export const academyContent: Record<LocaleCode, AcademyCopy> = {
  ro: {
    eyebrow: "Ce este Nexinari",
    title: "Nu încă un curs online.",
    titleAccent: "O academie.",
    paragraphOne:
      "NEXINARI AI Academy este primul program intensiv din România dedicat ecosistemului Microsoft. În 8 săptămâni, treci de la fundamente la proiecte reale, ghidat de mentori care lucrează zilnic cu AI, Azure, Dynamics 365 și Power Platform.",
    paragraphTwo:
      "Nu e un bootcamp de programare. Nu ai nevoie de experiență tehnică. E un program structurat care te pregătește pentru roluri reale în companiile care adoptează AI și cloud —",
    paragraphTwoAccent: "acum.",
    pillarsLabel: "4 piloni",
    pillars: [
      {
        key: "ai",
        title: "AI & Cloud",
        stack: "Azure · AI Agents · Copilot Studio · Azure OpenAI",
        body: "Înveți să construiești soluții AI reale pe infrastructura Microsoft, de la prompt engineering la deployment în producție.",
        skills: [
          "Azure OpenAI & Foundry, modele, embeddings, fine-tuning",
          "Copilot Studio, agenți și automatizări conversaționale",
          "Azure AI Search & Vector DBs pentru RAG",
          "Deploy & monitoring soluții AI în cloud",
        ],
        outcome:
          "AI Engineer / Azure AI Specialist, roluri reale în companii care adoptă AI.",
      },
      {
        key: "power",
        title: "Power Platform",
        stack: "Power Apps · Power Automate · Power BI",
        body: "Automatizezi procese complete și construiești aplicații business fără o linie de cod tradițional.",
        skills: [
          "Power Apps, canvas & model-driven apps",
          "Power Automate, flows, AI Builder, RPA",
          "Power BI, dashboards, DAX, conexiuni enterprise",
          "Integrări cu Dataverse, SharePoint și API-uri externe",
        ],
        outcome:
          "Power Platform Developer / Citizen Developer Lead, unul dintre cele mai cerute roluri din ecosistem.",
      },
      {
        key: "dynamics",
        title: "Dynamics 365",
        stack: "CRM · ERP · Customer Insights",
        body: "Înveți să implementezi soluții business la nivel enterprise pe platforma Microsoft Dynamics 365.",
        skills: [
          "Sales, Customer Service, Marketing modules",
          "Finance & Operations, fluxuri ERP",
          "Customer Insights, segmente, journeys, AI",
          "Configurare, customizare și migrare date",
        ],
        outcome:
          "Dynamics 365 Functional Consultant, pondere mare din proiectele Microsoft enterprise.",
      },
      {
        key: "security",
        title: "Security & DevOps",
        stack: "Cloud security · GDPR · CI/CD · MLOps",
        body: "Completezi profilul de specialist cu securitate, compliance și operare a soluțiilor în producție.",
        skills: [
          "Identity, RBAC & zero-trust pe Azure",
          "GDPR, compliance și governance",
          "CI/CD cu Azure DevOps & GitHub Actions",
          "MLOps, pipeline-uri pentru modele AI în prod",
        ],
        outcome:
          "Cloud Security / DevOps Engineer, diferențiatorul care îți crește salariul.",
      },
    ],
  },
  en: {
    eyebrow: "What is Nexinari",
    title: "Not just another online course.",
    titleAccent: "An academy.",
    paragraphOne:
      "NEXINARI AI Academy is Romania's first intensive program dedicated to the Microsoft ecosystem. Over 8 weeks you move from fundamentals to real-world projects, guided by mentors who work every day with AI, Azure, Dynamics 365 and Power Platform.",
    paragraphTwo:
      "This isn't a programming bootcamp. You don't need a technical background. It's a structured program that prepares you for real roles at companies adopting AI and cloud —",
    paragraphTwoAccent: "right now.",
    pillarsLabel: "4 pillars",
    pillars: [
      {
        key: "ai",
        title: "AI & Cloud",
        stack: "Azure · AI Agents · Copilot Studio · Azure OpenAI",
        body: "You learn to build real AI solutions on Microsoft infrastructure, from prompt engineering to production deployment.",
        skills: [
          "Azure OpenAI & Foundry, models, embeddings, fine-tuning",
          "Copilot Studio, conversational agents and automations",
          "Azure AI Search & Vector DBs for RAG",
          "Deploy & monitor AI solutions in the cloud",
        ],
        outcome:
          "AI Engineer / Azure AI Specialist, real roles at companies adopting AI.",
      },
      {
        key: "power",
        title: "Power Platform",
        stack: "Power Apps · Power Automate · Power BI",
        body: "You automate end-to-end processes and build business apps without writing traditional code.",
        skills: [
          "Power Apps, canvas & model-driven apps",
          "Power Automate, flows, AI Builder, RPA",
          "Power BI, dashboards, DAX, enterprise connectors",
          "Integrations with Dataverse, SharePoint and external APIs",
        ],
        outcome:
          "Power Platform Developer / Citizen Developer Lead, one of the most in-demand roles in the ecosystem.",
      },
      {
        key: "dynamics",
        title: "Dynamics 365",
        stack: "CRM · ERP · Customer Insights",
        body: "You learn to implement enterprise-grade business solutions on the Microsoft Dynamics 365 platform.",
        skills: [
          "Sales, Customer Service, Marketing modules",
          "Finance & Operations, ERP flows",
          "Customer Insights, segments, journeys, AI",
          "Configuration, customization and data migration",
        ],
        outcome:
          "Dynamics 365 Functional Consultant, a large share of Microsoft enterprise projects.",
      },
      {
        key: "security",
        title: "Security & DevOps",
        stack: "Cloud security · GDPR · CI/CD · MLOps",
        body: "You round out your profile with security, compliance and operating production solutions.",
        skills: [
          "Identity, RBAC & zero-trust on Azure",
          "GDPR, compliance and governance",
          "CI/CD with Azure DevOps & GitHub Actions",
          "MLOps, pipelines for AI models in production",
        ],
        outcome:
          "Cloud Security / DevOps Engineer, the differentiator that bumps your salary.",
      },
    ],
  },
};
