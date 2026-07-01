import type { LocaleCode } from "@/types/content";

type Mentor = {
  key: string;
  name: string;
  role: string;
  company: string;
  years: string;
  teaches: string;
  quote: string;
};

type MentorsCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  paragraph: string;
  paragraphAccent: string;
  cardYearsLabel: string;
  cardTeachesLabel: string;
  cardQuoteLabel: string;
  mentors: Mentor[];
  moreLabel: string;
  moreNote: string;
  partnersLabel: string;
  partners: string[];
};

export const mentorsContent: Record<LocaleCode, MentorsCopy> = {
  ro: {
    eyebrow: "Mentori",
    title: "Înveți de la oameni care fac,",
    titleAccent: "nu de la oameni care predau.",
    paragraph:
      "Mentorii NEXINARI nu sunt profesori universitari. Sunt consultanți, arhitecți și developeri care lucrează zilnic cu Microsoft Azure, Dynamics 365, Power Platform și AI. Vin din companii ca BearingPoint, Avanade, Axsys și din comunitatea Microsoft MVP.",
    paragraphAccent:
      "Fiecare mentor predă doar ce face zilnic — relevant, actual, aplicabil imediat.",
    cardYearsLabel: "Experiență",
    cardTeachesLabel: "Predă",
    cardQuoteLabel: "De ce mentor",
    mentors: [
      {
        key: "mentor-1",
        name: "Mentor confirmat",
        role: "Senior Dynamics Consultant",
        company: "BearingPoint",
        years: "10+ ani",
        teaches: "Dynamics 365 CRM + Field Service",
        quote:
          "Pentru că am intrat în Microsoft fără ghidaj. Vreau ca generația următoare să nu piardă 2 ani căutând direcția.",
      },
      {
        key: "mentor-2",
        name: "Mentor confirmat",
        role: "Azure AI Architect",
        company: "Avanade",
        years: "12+ ani",
        teaches: "Azure OpenAI · Copilot Studio · AI Agents",
        quote:
          "AI-ul nu mai e ceva ce înveți la facultate. Te formezi în industrie sau rămâi în urmă.",
      },
      {
        key: "mentor-3",
        name: "Mentor confirmat",
        role: "Power Platform Lead",
        company: "Axsys",
        years: "8+ ani",
        teaches: "Power Apps · Power Automate · Dataverse",
        quote:
          "Citizen developers vor înlocui jumătate din echipele IT clasice. Vreau să formez primii din România.",
      },
      {
        key: "mentor-4",
        name: "Mentor confirmat",
        role: "Microsoft MVP · Cloud Security",
        company: "Comunitate MVP",
        years: "15+ ani",
        teaches: "SC-300 · Identity · Zero-Trust pe Azure",
        quote:
          "Securitatea nu se învață din slide-uri. Se învață prin incidente reale și decizii arhitecturale.",
      },
    ],
    moreLabel: "Și alți mentori din industrie",
    moreNote:
      "Lista completă se anunță odată cu deschiderea Programului 2027. Aplicanții acceptați primesc profilul fiecărui mentor înainte de start.",
    partnersLabel: "Provin din",
    partners: ["BearingPoint", "Avanade", "Axsys", "Microsoft MVP"],
  },
  en: {
    eyebrow: "Mentors",
    title: "Learn from people who do,",
    titleAccent: "not from people who teach.",
    paragraph:
      "NEXINARI mentors aren't university professors. They are consultants, architects and developers who work every day with Microsoft Azure, Dynamics 365, Power Platform and AI. They come from companies like BearingPoint, Avanade, Axsys and from the Microsoft MVP community.",
    paragraphAccent:
      "Every mentor only teaches what they do daily — relevant, current, immediately applicable.",
    cardYearsLabel: "Experience",
    cardTeachesLabel: "Teaches",
    cardQuoteLabel: "Why mentor",
    mentors: [
      {
        key: "mentor-1",
        name: "Confirmed mentor",
        role: "Senior Dynamics Consultant",
        company: "BearingPoint",
        years: "10+ years",
        teaches: "Dynamics 365 CRM + Field Service",
        quote:
          "Because I entered the Microsoft ecosystem without guidance. I want the next generation not to lose 2 years finding direction.",
      },
      {
        key: "mentor-2",
        name: "Confirmed mentor",
        role: "Azure AI Architect",
        company: "Avanade",
        years: "12+ years",
        teaches: "Azure OpenAI · Copilot Studio · AI Agents",
        quote:
          "AI is no longer something you learn at university. You learn it in the industry or you fall behind.",
      },
      {
        key: "mentor-3",
        name: "Confirmed mentor",
        role: "Power Platform Lead",
        company: "Axsys",
        years: "8+ years",
        teaches: "Power Apps · Power Automate · Dataverse",
        quote:
          "Citizen developers will replace half of classic IT teams. I want to train the first ones in Romania.",
      },
      {
        key: "mentor-4",
        name: "Confirmed mentor",
        role: "Microsoft MVP · Cloud Security",
        company: "MVP community",
        years: "15+ years",
        teaches: "SC-300 · Identity · Zero-Trust on Azure",
        quote:
          "Security isn't learned from slides. It's learned through real incidents and architectural decisions.",
      },
    ],
    moreLabel: "And other mentors from the industry",
    moreNote:
      "The full list is announced when the 2027 Program opens. Accepted applicants receive each mentor's profile before kickoff.",
    partnersLabel: "Coming from",
    partners: ["BearingPoint", "Avanade", "Axsys", "Microsoft MVP"],
  },
};
