import type { LocaleCode } from "@/types/content";

type Question = {
  key: string;
  q: string;
  a: string;
};

type FaqCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  questions: Question[];
  helpCta: {
    label: string;
    text: string;
    button: string;
    href: string;
  };
};

export const faqContent: Record<LocaleCode, FaqCopy> = {
  ro: {
    eyebrow: "Secțiunea 09 · FAQ",
    title: "Întrebări frecvente.",
    titleAccent: "Răspunsuri directe.",
    intro:
      "Tot ce trebuie să știi înainte să aplici. Dacă nu găsești răspunsul aici, scrie-ne — răspundem în 24h.",
    questions: [
      {
        key: "experience",
        q: "Am nevoie de experiență tehnică sau de programare?",
        a: "Nu. Programul e conceput să înceapă de la fundamente. Mulți participanți vin din domenii non-tehnice (marketing, vânzări, management). Ai nevoie de motivație și disponibilitate full-time pe 8 săptămâni.",
      },
      {
        key: "format",
        q: "Programul e online sau fizic?",
        a: "Format hibrid. Sesiunile principale sunt fizice în București, cu o componentă online structurată pentru flexibilitate. Detaliile complete despre săli, calendar și platforma online ți le trimitem după aplicare.",
      },
      {
        key: "price",
        q: "Cât costă programul?",
        a: "Trimite-ne o aplicare și îți prezentăm opțiunile complete de preț — inclusiv Early Bird și plată în rate. Investiția e semnificativ sub prețul altor bootcamp-uri din Europa, iar ROI-ul se vede din prima lună de salariu în domeniu.",
      },
      {
        key: "certs",
        q: "Primesc o certificare la final?",
        a: "Da. Te pregătim pentru 4+ certificări Microsoft recunoscute global (AI-900, AZ-900, PL-900, SC-900). Examenele se susțin individual după program. În plus, primești certificatul de absolvire NEXINARI AI Academy.",
      },
      {
        key: "career",
        q: "Ce se întâmplă după program? Mă ajutați să-mi găsesc un job?",
        a: "Da. Programul include career coaching (CV, LinkedIn, mock interviews) și Demo Day cu invitați din industrie. Rămâi parte din comunitatea NEXINARI Alumni cu acces la oportunități, evenimente și networking permanent.",
      },
      {
        key: "fulltime",
        q: "Pot participa dacă am un job full-time?",
        a: "Programul e intensiv și necesită dedicație full-time pe 8 săptămâni. Dacă lucrezi, va fi foarte dificil să ții pasul. Recomandăm să îți iei o pauză sau să folosești concediu.",
      },
      {
        key: "seats",
        q: "Câte locuri sunt disponibile?",
        a: "40 per ediție. Păstrăm grupuri mici pentru a asigura atenție individuală de la mentori. Aplicațiile se procesează în ordinea înregistrării.",
      },
      {
        key: "refund",
        q: "Ce fac dacă nu îmi place sau vreau să renunț?",
        a: "Oferim garanție de satisfacție pe primele 5 zile — dacă nu rezonezi cu programul, primești înapoi întreaga sumă, fără întrebări. După prima săptămână, politica de refund e detaliată în contractul de înscriere.",
      },
      {
        key: "equipment",
        q: "Ce echipament îmi trebuie?",
        a: "Un laptop cu minim 8GB RAM și conexiune stabilă la internet. Toate tool-urile și licențele Microsoft sunt furnizate de noi pe durata programului.",
      },
      {
        key: "payment",
        q: "Pot să plătesc în rate?",
        a: "Da. Oferim opțiuni flexibile de plată — rate fără dobândă pe 3, 6 sau 12 luni. Detaliile complete le primești după aplicare.",
      },
    ],
    helpCta: {
      label: "Mai ai o întrebare?",
      text: "Scrie-ne pe email și răspundem în 24h.",
      button: "contact@nexinari.com",
      href: "mailto:contact@nexinari.com",
    },
  },
  en: {
    eyebrow: "Section 09 · FAQ",
    title: "Frequent questions.",
    titleAccent: "Direct answers.",
    intro:
      "Everything you need to know before applying. If you can't find the answer here, write to us — we reply within 24h.",
    questions: [
      {
        key: "experience",
        q: "Do I need technical or programming background?",
        a: "No. The program is designed to start from fundamentals. Many participants come from non-technical fields (marketing, sales, management). You need motivation and full-time availability for 8 weeks.",
      },
      {
        key: "format",
        q: "Is the program online or in-person?",
        a: "Hybrid format. Main sessions are in-person in Bucharest, with a structured online component for flexibility. Full details on rooms, calendar and online platform are sent after you apply.",
      },
      {
        key: "price",
        q: "How much does the program cost?",
        a: "Send us an application and we'll walk you through full pricing — including Early Bird and installments. The investment is significantly below other European bootcamps, and ROI shows up from your first month's salary in the field.",
      },
      {
        key: "certs",
        q: "Do I get a certification at the end?",
        a: "Yes. We prepare you for 4+ globally recognized Microsoft certifications (AI-900, AZ-900, PL-900, SC-900). Exams are taken individually after the program. You also receive the NEXINARI AI Academy graduation certificate.",
      },
      {
        key: "career",
        q: "What happens after? Will you help me find a job?",
        a: "Yes. The program includes career coaching (CV, LinkedIn, mock interviews) and Demo Day with industry guests. You stay part of the NEXINARI Alumni community with permanent access to opportunities, events and networking.",
      },
      {
        key: "fulltime",
        q: "Can I attend if I have a full-time job?",
        a: "The program is intensive and requires full-time dedication for 8 weeks. If you're working, it will be very hard to keep up. We recommend taking a sabbatical or using vacation days.",
      },
      {
        key: "seats",
        q: "How many seats are available?",
        a: "40 per cohort. We keep groups small to ensure individual mentor attention. Applications are processed in order of registration.",
      },
      {
        key: "refund",
        q: "What if I don't like it or want to drop out?",
        a: "We offer a 5-day satisfaction guarantee — if you don't resonate with the program, you get a full refund, no questions asked. After week one, the refund policy is detailed in the enrollment contract.",
      },
      {
        key: "equipment",
        q: "What equipment do I need?",
        a: "A laptop with at least 8GB RAM and stable internet. All tooling and Microsoft licenses are provided by us for the duration of the program.",
      },
      {
        key: "payment",
        q: "Can I pay in installments?",
        a: "Yes. We offer flexible payment options — 0% interest installments over 3, 6 or 12 months. Full details after you apply.",
      },
    ],
    helpCta: {
      label: "Still have a question?",
      text: "Write to us and we reply within 24h.",
      button: "contact@nexinari.com",
      href: "mailto:contact@nexinari.com",
    },
  },
};
