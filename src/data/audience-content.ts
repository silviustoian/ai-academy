import type { LocaleCode } from "@/types/content";

type Profile = {
  key: "student" | "career" | "analyst" | "founder";
  tag: string;
  title: string;
  pitch: string;
  body: string;
  outcome: string;
};

type AudienceCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  profiles: [Profile, Profile, Profile, Profile];
  notForLabel: string;
  notForTitle: string;
  notForItems: string[];
};

export const audienceContent: Record<LocaleCode, AudienceCopy> = {
  ro: {
    eyebrow: "Pentru cine",
    title: "Dacă te regăsești aici,",
    titleAccent: "programul e pentru tine.",
    profiles: [
      {
        key: "student",
        tag: "Profil 01",
        title: "Studenți și absolvenți",
        pitch: "Vrei un avantaj concret pe piața muncii.",
        body: "Ai terminat sau termini facultatea și nu vrei să trimiți 100 de CV-uri — vrei să ai un profil pe care companiile îl caută activ.",
        outcome:
          "Certificări Microsoft, proiect real în portofoliu, networking direct cu profesioniști din industrie.",
      },
      {
        key: "career",
        tag: "Profil 02",
        title: "Career changers",
        pitch: "Vrei să intri în tech fără să înveți programare de la zero.",
        body: "Vii din marketing, vânzări, HR, finanțe. Ecosistemul Microsoft e perfect: multe roluri nu necesită cod, ci înțelegere de business + tooling.",
        outcome:
          "Tranziție concretă către Power Platform Developer, Dynamics Consultant sau AI Business Analyst.",
      },
      {
        key: "analyst",
        tag: "Profil 03",
        title: "PM-i, BA-i, analiști",
        pitch: "Vrei să rămâi relevant când AI-ul accelerează totul.",
        body: "Ești deja în tech, dar simți că AI-ul ți-a luat-o înainte. Vrei să înțelegi Copilot, AI Agents, automatizările Power Platform — și să le poți conduce.",
        outcome:
          "Skill-uri AI hands-on, înțelegere completă a ecosistemului Microsoft, capacitatea de a conduce proiecte de transformare digitală.",
      },
      {
        key: "founder",
        tag: "Profil 04",
        title: "Antreprenori și manageri",
        pitch: "Vrei să folosești AI ca avantaj competitiv real.",
        body: "Ai un business și vrei să înțelegi cum AI și automatizarea reduc costuri, cresc eficiența și îți schimbă jocul. Nu vrei să devii developer — vrei să coordonezi implementarea.",
        outcome:
          "Viziune clară pe AI și cloud, capacitatea de a evalua și conduce proiecte de digitalizare în compania ta.",
      },
    ],
    notForLabel: "Sincer cu tine",
    notForTitle: "Programul NU e pentru tine daca:",
    notForItems: [
      "Cauți un curs de programare (Python, Java, C#). Noi ne concentrăm pe ecosistemul Microsoft, nu pe limbaje.",
      "Vrei să „înveți singur la ritmul tău”. NEXINARI e intensiv, full-time, 8 săptămâni. E un commitment serios.",
      "Nu ești dispus să investești timp și efort. Programul e hands-on — nu stai și asculți.",
    ],
  },
  en: {
    eyebrow: "Who it's for",
    title: "If you see yourself here,",
    titleAccent: "the program is for you.",
    profiles: [
      {
        key: "student",
        tag: "Profile 01",
        title: "Students & graduates",
        pitch: "You want a concrete edge in the job market.",
        body: "You've just finished college or are about to — and you don't want to send out 100 CVs. You want a profile companies actively look for.",
        outcome:
          "Microsoft certifications, a real project in your portfolio, direct networking with industry professionals.",
      },
      {
        key: "career",
        tag: "Profile 02",
        title: "Career changers",
        pitch: "You want to break into tech without learning to code from scratch.",
        body: "You're coming from marketing, sales, HR or finance. The Microsoft ecosystem is perfect: many roles require business sense and tooling, not code.",
        outcome:
          "A concrete transition into Power Platform Developer, Dynamics Consultant or AI Business Analyst roles.",
      },
      {
        key: "analyst",
        tag: "Profile 03",
        title: "PMs, BAs, analysts",
        pitch: "You want to stay relevant as AI accelerates everything.",
        body: "You're already in tech, but you feel AI has moved ahead of you. You want to understand Copilot, AI Agents and Power Platform automations — and be able to lead them.",
        outcome:
          "Hands-on AI skills, full grasp of the Microsoft ecosystem, the ability to lead digital transformation projects.",
      },
      {
        key: "founder",
        tag: "Profile 04",
        title: "Founders & managers",
        pitch: "You want AI as a real competitive advantage.",
        body: "You run a business and want to understand how AI and automation reduce cost, increase efficiency and change the game. You don't want to code — you want to lead implementation.",
        outcome:
          "Clear vision on AI and cloud, the ability to evaluate and lead digitalization projects across your company.",
      },
    ],
    notForLabel: "Real talk",
    notForTitle: "The program is NOT for you if:",
    notForItems: [
      "You're looking for a programming course (Python, Java, C#). We focus on the Microsoft ecosystem, not languages.",
      "You want to “learn at your own pace.” NEXINARI is intensive, full-time, 8 weeks. It's a serious commitment.",
      "You're not willing to invest time and effort. The program is hands-on — you don't just sit and watch.",
    ],
  },
};
