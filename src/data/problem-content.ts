import type { LocaleCode } from "@/types/content";

type ProblemItem = {
  quote: string;
  body: string;
};

type ProblemCopy = {
  eyebrow: string;
  title: string;
  items: [ProblemItem, ProblemItem, ProblemItem, ProblemItem];
  closing: string;
  closingAccent: string;
};

export const problemContent: Record<LocaleCode, ProblemCopy> = {
  ro: {
    eyebrow: "Problema",
    title: "Sună cunoscut?",
    items: [
      {
        quote: "Am terminat facultatea, dar nu știu să fac nimic practic.",
        body: "Teoria din universitate nu te pregătește pentru proiecte reale. Companiile cer experiență, tu ai doar diplomă.",
      },
      {
        quote: "Am început 5 cursuri online. N-am terminat niciunul.",
        body: "Cursurile online sunt solitare, fără deadline-uri reale, fără mentor care să te împingă. 90% din oameni renunță.",
      },
      {
        quote: "Vreau să intru în AI / Cloud, dar nu știu de unde să încep.",
        body: "Oferta de cursuri e copleșitoare. AI, ML, Azure, AWS, Python, Power BI — pe care să-l alegi? Ce e relevant? Ce te angajează?",
      },
      {
        quote: "Sunt PM / analist / BA și simt că AI-ul mi-a luat-o înainte.",
        body: "Colegii vorbesc despre Copilot, AI Agents, automatizări. Tu nu știi exact ce fac. Și te întrebi cât de relevant mai ești.",
      },
    ],
    closing:
      "NEXINARI există pentru a rezolva exact aceste probleme. Într-un program structurat de 8 săptămâni, cu mentori care lucrează în industrie zilnic, înveți nu doar teorie —",
    closingAccent:
      "construiești proiecte reale pe care le pui în CV.",
  },
  en: {
    eyebrow: "The Problem",
    title: "Sound familiar?",
    items: [
      {
        quote: "I finished college, but I can't actually do anything in practice.",
        body: "University theory doesn't prepare you for real projects. Companies want experience — you only have a diploma.",
      },
      {
        quote: "I started 5 online courses. I never finished any of them.",
        body: "Online courses are lonely, with no real deadlines, no mentor to push you. 90% of people give up.",
      },
      {
        quote: "I want to get into AI / Cloud, but I don't know where to start.",
        body: "The offer is overwhelming. AI, ML, Azure, AWS, Python, Power BI — which one do you pick? What's relevant? What gets you hired?",
      },
      {
        quote: "I'm a PM / analyst / BA and I feel AI is already ahead of me.",
        body: "Colleagues talk about Copilot, AI Agents, automation. You don't really know what they do. And you wonder how relevant you still are.",
      },
    ],
    closing:
      "NEXINARI exists to solve exactly these problems. In a structured 8-week program, with mentors who work in the industry every day, you learn more than theory —",
    closingAccent:
      "you build real projects you put on your CV.",
  },
};
