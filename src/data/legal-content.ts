import type { LocaleCode } from "@/types/content";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const COMPANY_NAME = "NEXINARI AI Academy";
const COMPANY_LEGAL = "INARI Education SRL";
const CONTACT_EMAIL = "contact@nexinari.com";
const DPO_EMAIL = "privacy@nexinari.com";
const COMPANY_ADDRESS = "Timisoara, România";
const LAST_UPDATED = {
  ro: "Ultima actualizare · 24 iunie 2026",
  en: "Last updated · 24 June 2026",
};

// ============================================================================
// PRIVACY
// ============================================================================
export const privacyContent: Record<LocaleCode, LegalPageCopy> = {
  ro: {
    eyebrow: "Politica de confidențialitate",
    title: "Date personale.",
    titleAccent: "Tratate cu respect.",
    intro: `Această politică explică ce date colectăm de la tine, de ce le colectăm, cum le folosim și ce drepturi ai. Aplicabilă pentru tot site-ul ${COMPANY_NAME} și pentru formularul de aplicare.`,
    lastUpdated: LAST_UPDATED.ro,
    sections: [
      {
        heading: "1. Cine suntem",
        body: [
          `Operatorul de date personale este ${COMPANY_LEGAL}, cu sediul în ${COMPANY_ADDRESS}, denumit în continuare „${COMPANY_NAME}" sau „noi".`,
          `Pentru orice întrebare legată de prelucrarea datelor tale, ne poți contacta la ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "2. Ce date colectăm",
        body: [
          "Când completezi formularul de aplicare colectăm: nume complet, email, telefon, oraș, vârstă (interval), nivel de studii, domeniu profesional, ani de experiență, experiență cu ecosistemul Microsoft, motivația ta, așteptări, disponibilitate, sursa prin care ai aflat de noi, și opțional link-uri către LinkedIn sau CV.",
          "Când navighezi pe site colectăm date tehnice limitate (tip dispozitiv, browser, pagini vizitate, durata sesiunii) prin intermediul cookie-urilor și serviciilor de analitică. Vezi Politica de Cookies pentru detalii.",
        ],
      },
      {
        heading: "3. De ce colectăm aceste date",
        body: [
          "Procesul de aplicare — pentru a evalua aplicația ta, a te contacta cu detalii despre program, preț, calendar și pașii următori (temei legal: măsuri precontractuale la solicitarea ta).",
          "Comunicare relevantă — pentru a-ți trimite informații despre program, cohorte viitoare, evenimente NEXINARI dacă ți-ai exprimat acordul (temei legal: consimțământ).",
          "Îmbunătățirea serviciului — pentru analize agregate de trafic și performanță site (temei legal: interes legitim).",
          "Obligații legale — păstrarea anumitor date pentru perioada cerută de legislația fiscală, comercială sau de protecție a consumatorului.",
        ],
      },
      {
        heading: "4. Cât timp păstrăm datele",
        body: [
          "Aplicații neacceptate — maxim 12 luni de la primirea aplicației, după care sunt șterse automat.",
          "Aplicații acceptate (participanți / alumni) — pe durata programului plus 5 ani după absolvire, pentru certificate, networking și obligații fiscale.",
          "Date de marketing (newsletter, comunicări) — până la retragerea consimțământului.",
        ],
      },
      {
        heading: "5. Cu cine partajăm datele",
        body: [
          "Nu vindem și nu închiriem datele tale. Le partajăm doar cu:",
          "Furnizori tehnici esențiali — Vercel (hosting), Resend (email transactional), Cloudflare (DNS/CDN). Toți sunt conformi GDPR și au contracte de prelucrare cu noi.",
          "Mentori și parteneri ai programului — doar cu acordul tău explicit, doar pentru oportunități directe de carieră.",
          "Autorități — doar dacă există obligație legală.",
        ],
      },
      {
        heading: "6. Drepturile tale",
        body: [
          "Ai dreptul să accesezi, corectezi, ștergi, restricționezi sau să te opui prelucrării datelor tale.",
          "Ai dreptul la portabilitatea datelor — îți putem trimite copia datelor tale în format structurat.",
          "Ai dreptul să retragi consimțământul oricând, fără să afecteze prelucrarea anterioară.",
          `Pentru a exercita oricare dintre aceste drepturi, scrie-ne la ${DPO_EMAIL}. Răspundem în maxim 30 de zile.`,
          "Ai dreptul să depui plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) — www.dataprotection.ro.",
        ],
      },
      {
        heading: "7. Securitatea datelor",
        body: [
          "Folosim măsuri tehnice și organizatorice rezonabile pentru a proteja datele tale (criptare în tranzit prin HTTPS, acces restrâns la nivel de echipă, backup-uri regulate).",
          "Niciun sistem nu e 100% sigur — dacă apare un incident de securitate care îți afectează datele, te vom notifica conform GDPR în maxim 72 de ore.",
        ],
      },
      {
        heading: "8. Modificări",
        body: [
          "Putem actualiza această politică. Versiunea curentă o găsești mereu pe această pagină, cu data ultimei actualizări vizibilă sus.",
          "Pentru schimbări semnificative, te vom anunța direct prin email dacă ești în baza noastră de date.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Privacy Policy",
    title: "Personal data.",
    titleAccent: "Treated with respect.",
    intro: `This policy explains what data we collect from you, why we collect it, how we use it and what rights you have. Applies to the entire ${COMPANY_NAME} site and the application form.`,
    lastUpdated: LAST_UPDATED.en,
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `The data controller is ${COMPANY_LEGAL}, headquartered in ${COMPANY_ADDRESS}, hereinafter "${COMPANY_NAME}" or "we".`,
          `For any question regarding the processing of your data, contact us at ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "2. Data we collect",
        body: [
          "When you fill out the application form we collect: full name, email, phone, city, age (range), education level, professional field, years of experience, Microsoft ecosystem experience, your motivation, expectations, availability, source through which you found us, and optionally LinkedIn or CV links.",
          "When you browse the site we collect limited technical data (device type, browser, pages visited, session duration) via cookies and analytics services. See the Cookies Policy for details.",
        ],
      },
      {
        heading: "3. Why we collect this data",
        body: [
          "Application process — to evaluate your application, contact you with program details, pricing, calendar and next steps (legal basis: precontractual measures at your request).",
          "Relevant communication — to send program information, future cohorts, NEXINARI events if you have given consent (legal basis: consent).",
          "Service improvement — for aggregated analytics on traffic and site performance (legal basis: legitimate interest).",
          "Legal obligations — keeping certain data for the period required by fiscal, commercial or consumer protection law.",
        ],
      },
      {
        heading: "4. How long we keep data",
        body: [
          "Rejected applications — up to 12 months from receipt, after which they are deleted automatically.",
          "Accepted applications (participants / alumni) — for the duration of the program plus 5 years after graduation, for certificates, networking and fiscal obligations.",
          "Marketing data (newsletter, communications) — until consent is withdrawn.",
        ],
      },
      {
        heading: "5. Who we share data with",
        body: [
          "We do not sell or rent your data. We only share it with:",
          "Essential technical providers — Vercel (hosting), Resend (transactional email), Cloudflare (DNS/CDN). All GDPR-compliant with data processing agreements.",
          "Program mentors and partners — only with your explicit consent, only for direct career opportunities.",
          "Authorities — only when legally required.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "You have the right to access, correct, delete, restrict or object to the processing of your data.",
          "You have the right to data portability — we can send you a copy of your data in a structured format.",
          "You have the right to withdraw consent at any time, without affecting prior processing.",
          `To exercise any of these rights, write to us at ${DPO_EMAIL}. We respond within 30 days.`,
          "You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP) — www.dataprotection.ro.",
        ],
      },
      {
        heading: "7. Data security",
        body: [
          "We use reasonable technical and organizational measures to protect your data (HTTPS in transit, team-level restricted access, regular backups).",
          "No system is 100% safe — if a security incident affects your data, we will notify you per GDPR within 72 hours.",
        ],
      },
      {
        heading: "8. Changes",
        body: [
          "We may update this policy. The current version is always on this page, with the last updated date visible at the top.",
          "For significant changes, we will notify you directly by email if you are in our database.",
        ],
      },
    ],
  },
};

// ============================================================================
// TERMS
// ============================================================================
export const termsContent: Record<LocaleCode, LegalPageCopy> = {
  ro: {
    eyebrow: "Termeni și condiții",
    title: "Reguli simple.",
    titleAccent: "Așteptări clare.",
    intro: `Acești termeni reglementează utilizarea site-ului ${COMPANY_NAME} și înscrierea în programul nostru educațional. Prin aplicare sau utilizarea site-ului, ești de acord cu acești termeni.`,
    lastUpdated: LAST_UPDATED.ro,
    sections: [
      {
        heading: "1. Despre program",
        body: [
          `${COMPANY_NAME} este un program intensiv de educație de 8 săptămâni, axat pe ecosistemul Microsoft (AI, Cloud, Dynamics 365, Power Platform, Security & DevOps).`,
          `Programul este organizat de ${COMPANY_LEGAL}, cu sediul în ${COMPANY_ADDRESS}.`,
          "Numărul de locuri per cohortă este limitat la 40. Locurile se alocă în ordinea aplicării și a confirmării plății.",
        ],
      },
      {
        heading: "2. Aplicare și acceptare",
        body: [
          "Aplicarea se face prin completarea formularului de pe acest site. Aplicația durează aproximativ 2 minute și include date personale, background și motivație.",
          "Răspundem la fiecare aplicație în maxim 48 de ore lucrătoare cu un email care include detalii complete de preț, opțiuni de plată, calendar și instrucțiuni de înscriere.",
          "Ne rezervăm dreptul de a accepta sau respinge orice aplicație, pe baza criteriilor noastre interne (motivație, disponibilitate full-time, potrivirea cu programul).",
          "Locul nu e rezervat până la confirmarea plății primei tranșe sau a întregii sume conform opțiunii alese.",
        ],
      },
      {
        heading: "3. Plata și opțiuni",
        body: [
          "Prețul programului și opțiunile de plată sunt comunicate individual după aplicare, în funcție de cohortă și de promoțiile active (Early Bird, plata integrală, plata în rate).",
          "Acceptăm plata integrală sau în rate (3, 6 sau 12 luni, în funcție de opțiune).",
          "Facturarea se face conform legislației române. Factura se emite la încasarea fiecărei tranșe.",
        ],
      },
      {
        heading: "4. Garanție de satisfacție de 5 zile",
        body: [
          "Oferim o garanție de satisfacție pe primele 5 zile calendaristice de la începerea programului.",
          "Dacă în acest interval consideri că programul nu corespunde așteptărilor tale, primești înapoi întreaga sumă plătită, fără întrebări și fără penalități. Cererea de refund se trimite la " + CONTACT_EMAIL + ".",
          "După expirarea celor 5 zile, politica de refund e detaliată în contractul de înscriere individual.",
        ],
      },
      {
        heading: "5. Obligațiile participantului",
        body: [
          "Participarea full-time pe durata celor 8 săptămâni — programul e intensiv și necesită disponibilitate completă.",
          "Respectarea codului de conduită — comportament profesionist față de mentori, colegi și parteneri.",
          "Confidențialitatea materialelor — materialele de curs, exercițiile și proiectele sunt protejate prin drepturi de autor și nu pot fi distribuite în afara cohortei fără acord scris.",
          "Plata la termen a tranșelor conform calendarului acceptat.",
        ],
      },
      {
        heading: "6. Drepturi de autor și proprietate intelectuală",
        body: [
          `Toate materialele de curs (slide-uri, exerciții, înregistrări, repository-uri) sunt proprietatea ${COMPANY_LEGAL} și sunt licențiate participantului doar pentru uz personal pe durata programului plus 12 luni după absolvire.`,
          "Proiectul de echipă realizat în săptămânile 6-7 rămâne proprietatea participanților. Îl puteți publica pe GitHub, LinkedIn, CV cu acordul echipei.",
          `Marca „${COMPANY_NAME}", logo-urile și materialele de brand sunt proprietatea ${COMPANY_LEGAL} și nu pot fi utilizate fără acord scris.`,
        ],
      },
      {
        heading: "7. Limitarea răspunderii",
        body: [
          `${COMPANY_NAME} oferă pregătire profesională de calitate, dar nu garantează obținerea unui anumit loc de muncă, salariu sau certificare. Rezultatele depind de efortul individual al participantului.`,
          "Examenele de certificare Microsoft (AI-900, AZ-900 etc.) se susțin individual la centre Microsoft, iar plata examenelor și succesul lor sunt responsabilitatea participantului. Programul include pregătirea, nu și taxa de examen.",
          "Nu suntem răspunzători pentru daune indirecte, pierderea oportunităților sau prejudicii subiective.",
        ],
      },
      {
        heading: "8. Modificări ale programului",
        body: [
          "Ne rezervăm dreptul de a face modificări minore ale curriculei, calendarului sau mentorilor anunțați, dacă aceste modificări sunt necesare pentru a păstra calitatea programului.",
          "Modificările majore (cum ar fi anularea unei cohorte) sunt comunicate cu minim 14 zile înainte, iar suma plătită se rambursează integral.",
        ],
      },
      {
        heading: "9. Soluționarea litigiilor",
        body: [
          "Acești termeni sunt guvernați de legislația română.",
          "Orice litigiu se va soluționa pe cale amiabilă. În lipsa unei soluții, competența revine instanțelor judecătorești din București.",
          `Pentru întrebări sau plângeri, scrie-ne la ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  en: {
    eyebrow: "Terms & Conditions",
    title: "Simple rules.",
    titleAccent: "Clear expectations.",
    intro: `These terms govern the use of the ${COMPANY_NAME} site and enrollment in our educational program. By applying or using the site, you agree to these terms.`,
    lastUpdated: LAST_UPDATED.en,
    sections: [
      {
        heading: "1. About the program",
        body: [
          `${COMPANY_NAME} is an intensive 8-week education program focused on the Microsoft ecosystem (AI, Cloud, Dynamics 365, Power Platform, Security & DevOps).`,
          `The program is organized by ${COMPANY_LEGAL}, headquartered in ${COMPANY_ADDRESS}.`,
          "The number of seats per cohort is limited to 40. Seats are allocated in order of application and payment confirmation.",
        ],
      },
      {
        heading: "2. Application and acceptance",
        body: [
          "Application is done by filling out the form on this site. The application takes approximately 2 minutes and includes personal data, background and motivation.",
          "We respond to every application within 48 working hours with an email including full pricing details, payment options, calendar and enrollment instructions.",
          "We reserve the right to accept or reject any application, based on our internal criteria (motivation, full-time availability, fit with the program).",
          "The seat is not reserved until the first installment or full amount payment is confirmed, depending on the chosen option.",
        ],
      },
      {
        heading: "3. Payment and options",
        body: [
          "The program price and payment options are communicated individually after application, depending on the cohort and active promotions (Early Bird, full payment, installments).",
          "We accept full payment or installments (3, 6 or 12 months, depending on the option).",
          "Invoicing is done according to Romanian law. The invoice is issued upon receipt of each installment.",
        ],
      },
      {
        heading: "4. 5-day satisfaction guarantee",
        body: [
          "We offer a satisfaction guarantee for the first 5 calendar days from the start of the program.",
          "If during this interval you feel the program does not meet your expectations, you receive a full refund of the amount paid, no questions asked, no penalties. The refund request is sent to " + CONTACT_EMAIL + ".",
          "After the 5 days expire, the refund policy is detailed in the individual enrollment contract.",
        ],
      },
      {
        heading: "5. Participant obligations",
        body: [
          "Full-time participation during the 8 weeks — the program is intensive and requires full availability.",
          "Adherence to the code of conduct — professional behavior toward mentors, peers and partners.",
          "Confidentiality of materials — course materials, exercises and projects are copyright-protected and may not be distributed outside the cohort without written consent.",
          "Timely payment of installments per the agreed calendar.",
        ],
      },
      {
        heading: "6. Copyright and intellectual property",
        body: [
          `All course materials (slides, exercises, recordings, repositories) are the property of ${COMPANY_LEGAL} and are licensed to the participant for personal use during the program plus 12 months after graduation.`,
          "The team project built in weeks 6-7 remains the property of the participants. You may publish it on GitHub, LinkedIn, CV with team consent.",
          `The "${COMPANY_NAME}" brand, logos and brand materials are the property of ${COMPANY_LEGAL} and may not be used without written consent.`,
        ],
      },
      {
        heading: "7. Limitation of liability",
        body: [
          `${COMPANY_NAME} provides quality professional training, but does not guarantee a specific job, salary or certification. Results depend on the participant's individual effort.`,
          "Microsoft certification exams (AI-900, AZ-900, etc.) are taken individually at Microsoft centers; the exam fee and success are the participant's responsibility. The program includes preparation, not the exam fee.",
          "We are not liable for indirect damages, lost opportunities or subjective harm.",
        ],
      },
      {
        heading: "8. Program changes",
        body: [
          "We reserve the right to make minor changes to the curriculum, calendar or announced mentors if these changes are necessary to maintain program quality.",
          "Major changes (such as cancellation of a cohort) are communicated at least 14 days in advance, and the amount paid is fully refunded.",
        ],
      },
      {
        heading: "9. Dispute resolution",
        body: [
          "These terms are governed by Romanian law.",
          "Any dispute will be resolved amicably. Failing that, jurisdiction lies with the courts in Bucharest.",
          `For questions or complaints, write to us at ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
};

// ============================================================================
// COOKIES
// ============================================================================
export const cookiesContent: Record<LocaleCode, LegalPageCopy> = {
  ro: {
    eyebrow: "Politica de cookies",
    title: "Cookies simple.",
    titleAccent: "Fără tracking agresiv.",
    intro: `Această politică explică ce cookies folosim pe ${COMPANY_NAME}, de ce și cum poți gestiona preferințele tale.`,
    lastUpdated: LAST_UPDATED.ro,
    sections: [
      {
        heading: "1. Ce sunt cookies",
        body: [
          "Cookies sunt fișiere text mici stocate pe dispozitivul tău (computer, telefon, tabletă) când vizitezi un site. Acestea permit site-ului să-și amintească preferințele tale (ex: limba aleasă) și să funcționeze corect.",
        ],
      },
      {
        heading: "2. Ce cookies folosim",
        body: [
          "Cookies strict necesare — pentru funcționarea de bază a site-ului (limba RO/EN, sesiunea de navigare). Nu poți dezactiva aceste cookies.",
          "Cookies de analitică — pentru a înțelege cum e folosit site-ul (Plausible Analytics, conform GDPR, fără IP individual stocat).",
          "Nu folosim cookies de tracking, retargeting, advertising sau social media de la terți.",
        ],
      },
      {
        heading: "3. Detalii cookies",
        body: [
          "nexinari.locale — stochează preferința ta de limbă (RO sau EN). Durată: persistent, până îl ștergi.",
          "Cookies Plausible — anonim, agregat, fără date personale individuale. Durată: sesiune.",
          "Acestea sunt singurele cookies stocate. Nu primește nimeni date despre tine de pe acest site fără să te anunțăm.",
        ],
      },
      {
        heading: "4. Cum gestionezi cookies",
        body: [
          "Poți șterge cookies oricând din setările browser-ului tău. Notă: dacă ștergi cookie-ul „nexinari.locale”, site-ul va reveni la limba implicită (română).",
          "Poți bloca toate cookies din setările browser-ului, dar unele funcționalități pot fi afectate.",
          "Ghiduri rapide pentru browser-ele populare:",
          "Chrome — Settings → Privacy and Security → Cookies and other site data",
          "Firefox — Settings → Privacy & Security → Cookies and Site Data",
          "Safari — Preferences → Privacy → Manage Website Data",
          "Edge — Settings → Cookies and site permissions",
        ],
      },
      {
        heading: "5. Modificări",
        body: [
          "Putem actualiza această politică pentru a reflecta schimbări în tool-urile pe care le folosim. Versiunea curentă o găsești mereu pe această pagină.",
          `Pentru întrebări scrie-ne la ${DPO_EMAIL}.`,
        ],
      },
    ],
  },
  en: {
    eyebrow: "Cookies Policy",
    title: "Simple cookies.",
    titleAccent: "No aggressive tracking.",
    intro: `This policy explains what cookies we use on ${COMPANY_NAME}, why, and how you can manage your preferences.`,
    lastUpdated: LAST_UPDATED.en,
    sections: [
      {
        heading: "1. What are cookies",
        body: [
          "Cookies are small text files stored on your device (computer, phone, tablet) when you visit a site. They allow the site to remember your preferences (e.g. chosen language) and function correctly.",
        ],
      },
      {
        heading: "2. What cookies we use",
        body: [
          "Strictly necessary cookies — for basic site functionality (RO/EN language, navigation session). You cannot disable these.",
          "Analytics cookies — to understand how the site is used (Plausible Analytics, GDPR-compliant, no individual IP stored).",
          "We do NOT use tracking, retargeting, advertising or third-party social media cookies.",
        ],
      },
      {
        heading: "3. Cookie details",
        body: [
          "nexinari.locale — stores your language preference (RO or EN). Duration: persistent until deleted.",
          "Plausible cookies — anonymous, aggregated, no individual personal data. Duration: session.",
          "These are the only cookies stored. No one receives data about you from this site without us notifying you.",
        ],
      },
      {
        heading: "4. How to manage cookies",
        body: [
          "You can delete cookies at any time from your browser settings. Note: if you delete the „nexinari.locale” cookie, the site will revert to default language (Romanian).",
          "You can block all cookies from browser settings, but some functionality may be affected.",
          "Quick guides for popular browsers:",
          "Chrome — Settings → Privacy and Security → Cookies and other site data",
          "Firefox — Settings → Privacy & Security → Cookies and Site Data",
          "Safari — Preferences → Privacy → Manage Website Data",
          "Edge — Settings → Cookies and site permissions",
        ],
      },
      {
        heading: "5. Changes",
        body: [
          "We may update this policy to reflect changes in the tools we use. The current version is always on this page.",
          `For questions write to us at ${DPO_EMAIL}.`,
        ],
      },
    ],
  },
};

// ============================================================================
// LEGAL HUB INDEX
// ============================================================================
export const legalIndexContent: Record<LocaleCode, {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  links: Array<{ label: string; description: string; href: string }>;
}> = {
  ro: {
    eyebrow: "Legal",
    title: "Toate documentele.",
    titleAccent: "Într-un singur loc.",
    intro: "Politicile noastre legale, scrise simplu, fără jargon. Dacă ai întrebări, scrie-ne oricând.",
    links: [
      {
        label: "Politica de confidențialitate",
        description: "Ce date colectăm, de ce, cât timp le păstrăm și drepturile tale GDPR.",
        href: "/legal/confidentialitate",
      },
      {
        label: "Termeni și condiții",
        description: "Reguli ale programului, plată, refund de 5 zile, drepturi de autor.",
        href: "/legal/termeni",
      },
      {
        label: "Politica de cookies",
        description: "Ce cookies folosim (puține) și cum le gestionezi.",
        href: "/legal/cookies",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "All documents.",
    titleAccent: "In one place.",
    intro: "Our legal policies, written simply, no jargon. If you have questions, write to us anytime.",
    links: [
      {
        label: "Privacy Policy",
        description: "What data we collect, why, how long we keep it, and your GDPR rights.",
        href: "/legal/confidentialitate",
      },
      {
        label: "Terms & Conditions",
        description: "Program rules, payment, 5-day refund, copyright.",
        href: "/legal/termeni",
      },
      {
        label: "Cookies Policy",
        description: "What cookies we use (few) and how to manage them.",
        href: "/legal/cookies",
      },
    ],
  },
};
