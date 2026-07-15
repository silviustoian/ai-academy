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
const COMPANY_LEGAL = "NEXT INARI IT SRL";
const COMPANY_FULL_ADDRESS_RO =
  "municipiul Timișoara, str. Palanca nr. 4, et. 1, B06, județul Timiș, România";
const COMPANY_FULL_ADDRESS_EN =
  "Timișoara, 4 Palanca St., 1st floor, B06, Timiș County, Romania";
const COMPANY_CUI = "55063936";
const COMPANY_REG_COM = "J2026042048002";
const COMPANY_EUID = "ROONRC.J2026042048002";
const CONTACT_EMAIL = "contact@nexinari.com";
const DPO_EMAIL = "privacy@nexinari.com";
const LAST_UPDATED = {
  ro: "Ultima actualizare · 15 iulie 2026",
  en: "Last updated · 15 July 2026",
};

// ============================================================================
// PRIVACY
// ============================================================================
export const privacyContent: Record<LocaleCode, LegalPageCopy> = {
  ro: {
    eyebrow: "Politica de confidențialitate",
    title: "Date personale.",
    titleAccent: "Tratate cu respect.",
    intro: `Această politică explică ce date cu caracter personal colectăm, de ce le colectăm, cum le folosim, cât timp le păstrăm și ce drepturi ai. Politica se aplică site-ului ${COMPANY_NAME} și formularului de exprimare a interesului disponibil în etapa actuală.`,
    lastUpdated: LAST_UPDATED.ro,
    sections: [
      {
        heading: "1. Cine suntem",
        body: [
          `Operatorul datelor cu caracter personal este ${COMPANY_LEGAL}, denumit în continuare „${COMPANY_NAME}” sau „noi”.`,
          `Date de identificare: ${COMPANY_LEGAL}, cu sediul social în ${COMPANY_FULL_ADDRESS_RO}, CUI ${COMPANY_CUI}, Nr. Reg. Com. ${COMPANY_REG_COM}, EUID ${COMPANY_EUID}.`,
          `Pentru orice întrebare privind prelucrarea datelor tale sau pentru exercitarea drepturilor, ne poți contacta la ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "2. Ce date colectăm",
        body: [
          "Date transmise prin formularul de exprimare a interesului, respectiv: nume complet, adresă de email, număr de telefon, oraș, interval de vârstă, nivel de studii, domeniu profesional, ani de experiență, experiență cu ecosistemul Microsoft, motivație, așteptări, disponibilitate și sursa prin care ai aflat de noi. În funcție de formular, poți transmite opțional un link către profilul LinkedIn sau un CV.",
          "Date din comunicările cu noi, respectiv: adresa de email, numărul de telefon, conținutul mesajului și orice alte informații pe care alegi să ni le comunici atunci când ne contactezi.",
          "Date tehnice și de utilizare, respectiv: adresa IP, tipul dispozitivului, sistemul de operare, browserul, paginile vizitate, data și durata sesiunii, identificatori online și informații similare generate de servere, cookie-uri sau servicii de analiză, în funcție de configurația site-ului și de opțiunile tale privind cookie-urile.",
          "Câmpurile obligatorii sunt marcate ca atare. Dacă nu furnizezi aceste date, este posibil să nu putem înregistra în mod util expresia ta de interes sau să nu te putem contacta. Furnizarea profilului LinkedIn, a CV-ului și a celorlalte câmpuri marcate ca opționale nu este obligatorie.",
          "Formularul este destinat persoanelor care au împlinit vârsta de 18 ani. Te rugăm să nu ne transmiți date sensibile, precum date medicale, informații privind originea rasială sau etnică, convingerile religioase ori alte categorii speciale de date, dacă acestea nu sunt solicitate în mod expres și nu sunt necesare.",
        ],
      },
      {
        heading: "3. De ce colectăm datele și care sunt temeiurile legale",
        body: [
          "Gestionarea expresiei de interes, respectiv: pentru a înregistra formularul, a confirma primirea lui, a înțelege profilul persoanelor interesate și a evalua oportunitatea, structura și publicul viitorului program. Temeiul este interesul nostru legitim de a pregăti și valida un program educațional și de a răspunde persoanelor care ne contactează.",
          "Informarea despre lansarea programului, respectiv: pentru a-ți comunica, în legătură directă cu expresia de interes transmisă, dacă programul este lansat și care sunt calendarul, prețul, criteriile de participare și pașii următori. Temeiul este interesul nostru legitim de a continua comunicarea inițiată la solicitarea ta. Te poți opune oricând acestei comunicări.",
          "Marketing și comunicări suplimentare, respectiv: pentru newslettere, evenimente, cohorte viitoare sau alte comunicări promoționale care depășesc răspunsul la expresia ta de interes, numai dacă ți-ai exprimat consimțământul, atunci când acesta este necesar. Îți poți retrage consimțământul oricând.",
          "Funcționarea și securitatea site-ului, respectiv: pentru administrarea tehnică, prevenirea abuzurilor, detectarea incidentelor, protejarea infrastructurii și soluționarea erorilor. Temeiul este interesul nostru legitim de a menține site-ul sigur și funcțional.",
          "Analiză și îmbunătățire, respectiv: pentru a înțelege modul de utilizare a site-ului și a îmbunătăți conținutul și performanța acestuia. Cookie-urile și tehnologiile de analiză care nu sunt strict necesare sunt utilizate numai după exprimarea opțiunii tale prin mecanismul de gestionare a cookie-urilor.",
          "Obligații legale și apărarea drepturilor, respectiv: pentru a răspunde cererilor autorităților, a gestiona solicitările privind protecția datelor, a păstra dovezi relevante și a constata, exercita sau apăra drepturi. Temeiul este obligația legală sau interesul nostru legitim, după caz.",
          "În etapa actuală nu utilizăm procese decizionale exclusiv automatizate și nu realizăm profilare care să producă efecte juridice asupra ta sau să te afecteze în mod similar într-o măsură semnificativă.",
        ],
      },
      {
        heading: "4. Cât timp păstrăm datele",
        body: [
          "Datele din formularul de exprimare a interesului, respectiv: maximum 12 luni de la data transmiterii formularului. Le putem șterge mai devreme dacă îți retragi expresia de interes sau soliciți ștergerea, cu excepția datelor a căror păstrare este necesară pentru îndeplinirea unei obligații legale ori pentru apărarea unui drept.",
          "Dacă programul este lansat în acest interval și alegi să continui cu procesul efectiv de selecție sau înscriere, datele necesare acelei etape vor fi prelucrate în baza unei informări dedicate, iar perioadele de păstrare aplicabile participanților vor fi comunicate separat.",
          "Datele utilizate pentru marketing, respectiv: până la retragerea consimțământului sau până când comunicările nu mai sunt relevante, dar nu mai mult de 3 ani de la ultima interacțiune relevantă cu noi. După acest termen, datele vor fi șterse ori vom solicita, dacă este cazul, reconfirmarea opțiunii tale.",
          "Corespondența și solicitările adresate nouă, respectiv: pe durata necesară soluționării și, atunci când este justificat pentru gestionarea reclamațiilor ori apărarea drepturilor, de regulă maximum 3 ani de la ultima comunicare.",
          "Jurnalele tehnice și de securitate, respectiv: pentru perioada necesară funcționării și protejării site-ului, de regulă maximum 12 luni, cu excepția situațiilor în care un incident de securitate, o investigație sau apărarea unui drept justifică păstrarea pentru o perioadă mai lungă.",
          "Cookie-urile și datele de analiză, respectiv: potrivit duratelor indicate în Politica de cookies și în instrumentul de gestionare a preferințelor disponibil pe site.",
          "La expirarea perioadelor aplicabile, datele sunt șterse sau anonimizate, cu excepția situațiilor în care păstrarea lor este impusă ori permisă de lege. Datele necesare pentru constatarea, exercitarea sau apărarea unui drept pot fi păstrate până la expirarea termenelor legale aplicabile sau până la soluționarea definitivă a procedurii relevante.",
        ],
      },
      {
        heading: "5. Cu cine partajăm datele",
        body: [
          "Nu vindem și nu închiriem datele tale. Accesul la date este limitat la persoanele și furnizorii care au nevoie de ele pentru scopurile descrise în această politică.",
          `Echipa autorizată, respectiv: persoane din cadrul ${COMPANY_LEGAL} care se ocupă de administrarea proiectului, comunicare, suport tehnic, securitate sau conformitate și care sunt supuse obligațiilor de confidențialitate.`,
          "Furnizori tehnici, respectiv: Vercel pentru hosting și deployment, Resend pentru transmiterea emailurilor și Cloudflare pentru servicii DNS, CDN și securitate, în măsura în care aceste servicii sunt utilizate în configurația site-ului. Furnizorii prelucrează datele în baza unor obligații contractuale și numai în măsura necesară furnizării serviciilor.",
          "Consultanți și autorități, respectiv: avocați, contabili, auditori, furnizori de securitate și autorități publice, atunci când transmiterea este necesară pentru respectarea unei obligații legale, gestionarea unui incident sau apărarea drepturilor noastre.",
          "În această etapă nu transmitem datele tale mentorilor, angajatorilor sau partenerilor în scopul oferirii unor oportunități de carieră. O asemenea transmitere va putea avea loc ulterior numai în baza unei informări și a unui temei legal corespunzător, inclusiv consimțământ separat atunci când acesta este necesar.",
          `Unii furnizori tehnici pot fi stabiliți în afara Spațiului Economic European sau pot utiliza infrastructură ori subcontractanți din alte state. În aceste situații, transferul se realizează în baza unui mecanism legal adecvat, precum o decizie de adecvare, clauze contractuale standard aprobate de Comisia Europeană și, dacă este necesar, măsuri suplimentare de protecție. Poți solicita informații suplimentare la ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "6. Drepturile tale",
        body: [
          "În condițiile prevăzute de legislația privind protecția datelor, ai dreptul de a solicita accesul la datele tale, rectificarea datelor inexacte, ștergerea, restricționarea prelucrării și, atunci când sunt îndeplinite condițiile legale, portabilitatea datelor.",
          "Ai dreptul să te opui, din motive legate de situația ta particulară, prelucrărilor bazate pe interes legitim. Te poți opune oricând marketingului direct, fără a fi necesară indicarea unui motiv. Atunci când prelucrarea se bazează pe consimțământ, îl poți retrage în orice moment, fără ca retragerea să afecteze legalitatea prelucrărilor realizate anterior.",
          `Pentru exercitarea drepturilor, scrie-ne la ${DPO_EMAIL}. Vom răspunde fără întârzieri nejustificate și, în principiu, în termen de o lună de la primirea cererii. Termenul poate fi prelungit cu cel mult două luni în situațiile prevăzute de lege, caz în care te vom informa în prima lună.`,
          "Pentru protejarea datelor, putem solicita informații rezonabile pentru verificarea identității solicitantului. Cererile sunt soluționate gratuit, cu excepția situațiilor în care sunt vădit nefondate sau excesive, în condițiile legii.",
          "Ai dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), prin www.dataprotection.ro, fără a fi afectat dreptul tău de a utiliza alte căi administrative sau judiciare.",
        ],
      },
      {
        heading: "7. Securitatea datelor",
        body: [
          "Aplicăm măsuri tehnice și organizatorice adecvate riscurilor, precum criptarea comunicațiilor prin HTTPS, controlul și limitarea accesului la nivel de echipă, actualizarea sistemelor, copii de siguranță, monitorizarea securității și proceduri de răspuns la incidente.",
          "Niciun sistem nu poate garanta securitate absolută. În cazul unei încălcări a securității datelor, vom evalua riscurile și vom notifica autoritatea de supraveghere și/sau persoanele afectate atunci când sunt îndeplinite condițiile legale aplicabile.",
        ],
      },
      {
        heading: "8. Cookies și tehnologii similare",
        body: [
          "Site-ul poate utiliza cookie-uri strict necesare pentru funcționare, securitate și păstrarea opțiunilor tale. Acestea sunt utilizate fără consimțământ atunci când sunt indispensabile furnizării funcționalității solicitate.",
          "Cookie-urile de analiză, personalizare sau marketing care nu sunt strict necesare sunt activate numai după ce îți exprimi opțiunea prin bannerul sau centrul de preferințe. Poți refuza sau modifica ulterior opțiunile fără ca accesul la funcțiile esențiale ale site-ului să fie condiționat de acceptarea cookie-urilor neesențiale. Detaliile privind cookie-urile utilizate și durata lor se regăsesc în Politica de cookies.",
        ],
      },
      {
        heading: "9. Modificări ale politicii",
        body: [
          "Putem actualiza această politică pentru a reflecta modificări ale site-ului, furnizorilor, activităților de prelucrare sau legislației. Versiunea curentă este cea publicată pe site, cu data ultimei actualizări afișată în partea de sus.",
          "Pentru modificările semnificative, vom utiliza mijloace rezonabile de informare, inclusiv emailul, dacă datele tale se află în baza noastră și comunicarea este adecvată.",
          "Înainte de lansarea efectivă a programului și de începerea procesului de selecție, înscriere sau plată, politica va fi completată ori înlocuită pentru a descrie prelucrările specifice participanților, inclusiv platformele de curs, plățile și facturarea, sesiunile online, eventualele înregistrări, evaluările și certificatele, dacă acestea vor fi utilizate.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Privacy Policy",
    title: "Personal data.",
    titleAccent: "Treated with respect.",
    intro: `This policy explains what personal data we collect, why we collect it, how we use it, how long we keep it and what rights you have. The policy applies to the ${COMPANY_NAME} website and to the expression-of-interest form available at this stage.`,
    lastUpdated: LAST_UPDATED.en,
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `The controller of personal data is ${COMPANY_LEGAL}, hereinafter "${COMPANY_NAME}" or "we".`,
          `Company details: ${COMPANY_LEGAL}, registered office in ${COMPANY_FULL_ADDRESS_EN}, VAT ID ${COMPANY_CUI}, Trade Register No. ${COMPANY_REG_COM}, EUID ${COMPANY_EUID}.`,
          `For any question regarding the processing of your data or to exercise your rights, contact us at ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "2. Data we collect",
        body: [
          "Data submitted through the expression-of-interest form, namely: full name, email address, phone number, city, age range, education level, professional field, years of experience, experience with the Microsoft ecosystem, motivation, expectations, availability and the source through which you found us. Depending on the form, you may optionally submit a LinkedIn profile link or a CV.",
          "Data from communications with us, namely: email address, phone number, message content and any other information you choose to share when contacting us.",
          "Technical and usage data, namely: IP address, device type, operating system, browser, pages visited, session date and duration, online identifiers and similar information generated by servers, cookies or analytics services, depending on the site configuration and your cookie preferences.",
          "Mandatory fields are marked as such. If you do not provide this data, we may be unable to properly register your expression of interest or contact you. Providing the LinkedIn profile, CV and other fields marked as optional is not mandatory.",
          "The form is intended for persons aged 18 or over. Please do not send us sensitive data, such as medical information, data regarding racial or ethnic origin, religious beliefs or other special categories of data, if not expressly requested and necessary.",
        ],
      },
      {
        heading: "3. Why we collect data and the legal bases",
        body: [
          "Managing the expression of interest, namely: to register the form, confirm receipt, understand the profile of interested persons and evaluate the opportunity, structure and audience of the future program. The basis is our legitimate interest in preparing and validating an educational program and responding to persons who contact us.",
          "Informing about the program launch, namely: to inform you, in direct connection with the expression of interest submitted, whether the program is launched and the calendar, price, participation criteria and next steps. The basis is our legitimate interest in continuing the communication initiated at your request. You can object to this communication at any time.",
          "Marketing and additional communications, namely: for newsletters, events, future cohorts or other promotional communications going beyond the response to your expression of interest, only if you have given consent, where required. You can withdraw consent at any time.",
          "Operation and security of the site, namely: for technical administration, prevention of abuse, incident detection, infrastructure protection and error resolution. The basis is our legitimate interest in keeping the site secure and functional.",
          "Analytics and improvement, namely: to understand how the site is used and to improve its content and performance. Analytics and cookies that are not strictly necessary are used only after you express your choice through the cookie management mechanism.",
          "Legal obligations and defense of rights, namely: to respond to requests from authorities, handle data protection requests, keep relevant evidence and establish, exercise or defend rights. The basis is legal obligation or our legitimate interest, as the case may be.",
          "At this stage we do not use fully automated decision-making processes and we do not carry out profiling that would produce legal effects concerning you or similarly significantly affect you.",
        ],
      },
      {
        heading: "4. How long we keep the data",
        body: [
          "Data from the expression-of-interest form, namely: up to 12 months from the date the form is submitted. We may delete it earlier if you withdraw your expression of interest or request deletion, except for data whose retention is required to fulfil a legal obligation or defend a right.",
          "If the program is launched during this period and you choose to continue with the actual selection or enrollment process, the data required for that stage will be processed under a dedicated notice, and the retention periods applicable to participants will be communicated separately.",
          "Data used for marketing, namely: until withdrawal of consent or until communications are no longer relevant, but no longer than 3 years from the last relevant interaction with us. After that period, the data will be deleted or we will ask, if applicable, for reconfirmation of your choice.",
          "Correspondence and requests addressed to us, namely: for the time necessary to resolve them and, where justified for handling complaints or defending rights, as a rule up to 3 years from the last communication.",
          "Technical and security logs, namely: for the period necessary for operating and protecting the site, as a rule up to 12 months, unless a security incident, investigation or defense of a right justifies longer retention.",
          "Cookies and analytics data, namely: according to the durations indicated in the Cookies Policy and in the preferences management tool available on the site.",
          "Upon expiry of the applicable periods, the data is deleted or anonymized, except where retention is required or permitted by law. Data necessary to establish, exercise or defend a right may be retained until the expiry of the applicable statutory periods or until the final resolution of the relevant procedure.",
        ],
      },
      {
        heading: "5. Who we share data with",
        body: [
          "We do not sell or rent your data. Access to data is limited to persons and providers who need it for the purposes described in this policy.",
          `Authorized team, namely: persons within ${COMPANY_LEGAL} who handle project administration, communication, technical support, security or compliance and who are subject to confidentiality obligations.`,
          "Technical providers, namely: Vercel for hosting and deployment, Resend for email delivery and Cloudflare for DNS, CDN and security services, to the extent these services are used in the site configuration. Providers process data based on contractual obligations and only to the extent necessary to provide the services.",
          "Consultants and authorities, namely: lawyers, accountants, auditors, security providers and public authorities, when transmission is necessary to comply with a legal obligation, handle an incident or defend our rights.",
          "At this stage we do not transmit your data to mentors, employers or partners for the purpose of offering career opportunities. Such transmission may take place later only under a notice and an appropriate legal basis, including separate consent when necessary.",
          `Some technical providers may be established outside the European Economic Area or may use infrastructure or subcontractors from other countries. In such cases, transfer is carried out based on an adequate legal mechanism, such as an adequacy decision, standard contractual clauses approved by the European Commission and, if necessary, additional protection measures. You can request further information at ${DPO_EMAIL}.`,
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "Under the conditions set by data protection legislation, you have the right to request access to your data, rectification of inaccurate data, deletion, restriction of processing and, when the legal conditions are met, data portability.",
          "You have the right to object, on grounds related to your particular situation, to processing based on legitimate interest. You can object to direct marketing at any time without needing to state a reason. Where processing is based on consent, you can withdraw it at any time, without affecting the lawfulness of processing carried out beforehand.",
          `To exercise your rights, write to us at ${DPO_EMAIL}. We will respond without undue delay and, in principle, within one month of receiving the request. This period may be extended by up to two months in the cases provided by law, in which case we will inform you within the first month.`,
          "To protect your data, we may ask for reasonable information to verify the identity of the requester. Requests are handled free of charge, except where they are manifestly unfounded or excessive, under the conditions provided by law.",
          "You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP), via www.dataprotection.ro, without prejudice to your right to use other administrative or judicial remedies.",
        ],
      },
      {
        heading: "7. Data security",
        body: [
          "We apply technical and organizational measures appropriate to the risks, such as encryption of communications via HTTPS, access control and restriction at team level, system updates, backups, security monitoring and incident response procedures.",
          "No system can guarantee absolute security. In case of a personal data breach, we will assess the risks and notify the supervisory authority and/or affected persons when the applicable legal conditions are met.",
        ],
      },
      {
        heading: "8. Cookies and similar technologies",
        body: [
          "The site may use strictly necessary cookies for functioning, security and preserving your options. These are used without consent when indispensable for delivering the requested functionality.",
          "Analytics, personalization or marketing cookies that are not strictly necessary are activated only after you express your choice through the banner or preferences center. You can refuse or later modify your options without access to the essential functions of the site being conditional on accepting non-essential cookies. Details about the cookies used and their duration are provided in the Cookies Policy.",
        ],
      },
      {
        heading: "9. Policy changes",
        body: [
          "We may update this policy to reflect changes to the site, providers, processing activities or legislation. The current version is the one published on the site, with the date of last update shown at the top.",
          "For significant changes, we will use reasonable means of notification, including email, if your data is in our database and the communication is appropriate.",
          "Before the actual launch of the program and the start of any selection, enrollment or payment process, the policy will be supplemented or replaced to describe the processing specific to participants, including course platforms, payments and invoicing, online sessions, any recordings, assessments and certificates, if these will be used.",
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
    intro: `Acești termeni reglementează utilizarea site-ului ${COMPANY_NAME} și transmiterea unei expresii de interes pentru programul nostru educațional. Prin accesarea site-ului sau transmiterea formularului, confirmi că ai citit și ai înțeles acești termeni.`,
    lastUpdated: LAST_UPDATED.ro,
    sections: [
      {
        heading: "1. Statutul actual al programului",
        body: [
          `${COMPANY_NAME} se află în prezent în etapa de pregătire și de evaluare a interesului publicului. Programul nu este deschis pentru înscrieri, nu se comercializează și nu se încasează nicio sumă de bani prin intermediul acestui site în această etapă.`,
          "Formularul disponibil pe site are exclusiv rolul de a permite exprimarea interesului față de un posibil program educațional viitor. Completarea și transmiterea lui nu constituie înscriere, rezervare, comandă, ofertă, acceptarea unei oferte, promisiune de contractare sau precontract și nu creează obligația niciuneia dintre părți de a încheia ulterior un contract.",
          "Transmiterea formularului nu garantează un loc în program și nu ne obligă să lansăm programul. Data de începere, prețul, structura de plată, condițiile de participare și celelalte elemente contractuale nu sunt încă stabilite și vor fi comunicate separat, înainte de orice înscriere efectivă sau plată.",
        ],
      },
      {
        heading: "2. Despre program",
        body: [
          `În forma avută în vedere la data ultimei actualizări, ${COMPANY_NAME} este conceput ca un program intensiv de educație online, cu o durată estimată de 8 săptămâni, axat pe ecosistemul Microsoft, inclusiv AI, Cloud, Dynamics 365, Power Platform, Security și DevOps.`,
          `Programul este organizat de ${COMPANY_LEGAL}, cu sediul social în ${COMPANY_FULL_ADDRESS_RO}, CUI ${COMPANY_CUI}, Nr. Reg. Com. ${COMPANY_REG_COM}, EUID ${COMPANY_EUID}. Ne poți contacta la ${CONTACT_EMAIL}.`,
          "Programul este conceput pentru o cohortă de maximum 40 de participanți. Durata, structura, curricula, formatul de desfășurare, mentorii, numărul de locuri, calendarul, criteriile de selecție și orice alte elemente prezentate pe site au caracter orientativ și pot fi modificate până la lansare.",
          "Referirile la Microsoft, la produsele sale sau la certificări Microsoft sunt utilizate exclusiv pentru descrierea domeniilor avute în vedere. În lipsa unei mențiuni exprese, acestea nu implică sponsorizarea, acreditarea, aprobarea sau afilierea programului cu Microsoft.",
        ],
      },
      {
        heading: "3. Expresia de interes",
        body: [
          "Expresia de interes se transmite prin completarea formularului disponibil pe site. Formularul durează aproximativ 2 minute și poate include date de contact, informații despre studii și experiența profesională, experiența cu ecosistemul Microsoft, disponibilitatea, motivația și așteptările tale, precum și, opțional, un link către profilul LinkedIn sau un CV.",
          "Formularul este destinat persoanelor care au împlinit vârsta de 18 ani. Prin transmiterea lui confirmi că informațiile furnizate sunt reale, actuale și transmise în nume propriu și că nu comunici datele unei alte persoane fără un temei legal corespunzător.",
          "Îți putem transmite un mesaj de confirmare a primirii formularului. Dacă programul va fi lansat, te putem contacta cu informații despre calendar, preț, condițiile de participare, criteriile de selecție și pașii următori. Primirea unei asemenea comunicări nu te obligă să te înscrii, să răspunzi sau să efectuezi vreo plată.",
          "În etapa viitoare de înscriere efectivă, selecția participanților se va realiza pe baza unor criterii comunicate în prealabil, precum motivația, disponibilitatea și potrivirea profilului cu obiectivele programului. Înscrierea va fi reglementată prin documente contractuale distincte.",
        ],
      },
      {
        heading: "4. Preț și condiții comerciale",
        body: [
          "Prețul programului nu este stabilit la acest moment. Nu solicităm și nu acceptăm prin intermediul actualului site plăți, avansuri, taxe de aplicare, depozite sau garanții.",
          "Dacă programul va fi lansat, prețul total, eventualele taxe, modalitățile și termenele de plată, condițiile de participare și regulile privind retragerea, anularea și rambursarea vor fi prezentate clar și complet înainte de încheierea oricărui contract și înainte de efectuarea oricărei plăți.",
        ],
      },
      {
        heading: "5. Retragerea expresiei de interes",
        body: [
          `Poți solicita oricând retragerea expresiei de interes și ștergerea datelor transmise prin formular, fără a fi necesară indicarea unui motiv, scriindu-ne la ${DPO_EMAIL}. Cererea va fi soluționată în condițiile și în termenele prevăzute de legislația privind protecția datelor.`,
          "Întrucât în această etapă nu se efectuează nicio plată și nu se încheie un contract de participare, nu există sume de restituit și nu se aplică o politică de rambursare.",
          "Condițiile de retragere, anulare și rambursare aplicabile programului plătit vor fi comunicate integral, în formă scrisă, înainte de înscrierea efectivă și de efectuarea oricărei plăți.",
        ],
      },
      {
        heading: "6. Condiții orientative ale viitorului program",
        body: [
          "Următoarele condiții descriu modul în care este gândit programul la data ultimei actualizări. Ele au caracter exclusiv informativ, nu produc efecte contractuale în această etapă și vor fi confirmate sau modificate prin documentația aplicabilă la înscrierea efectivă.",
          "Participare full-time pe durata celor 8 săptămâni, respectiv: programul este conceput ca unul intensiv și presupune disponibilitate constantă pentru sesiuni online, studiu individual, exerciții și proiecte.",
          "Respectarea codului de conduită, respectiv: participanții vor avea obligația de a păstra un comportament profesionist și respectuos față de mentori, colegi, parteneri și membrii echipei.",
          "Confidențialitatea materialelor, respectiv: materialele de curs, exercițiile, înregistrările și proiectele protejate nu vor putea fi distribuite în afara cohortei fără acordul scris al titularului drepturilor.",
        ],
      },
      {
        heading: "7. Drepturi de autor și proprietate intelectuală",
        body: [
          `Conținutul actual al site-ului, inclusiv textele, elementele grafice, structura, marca „${COMPANY_NAME}”, logo-urile și materialele de prezentare, aparține ${COMPANY_LEGAL} sau este utilizat în baza unor drepturi legale și este protejat de legislația privind proprietatea intelectuală. Conținutul poate fi consultat numai în scop personal și informativ, cu respectarea limitelor prevăzute de lege.`,
          "În forma avută în vedere pentru viitorul program, materialele de curs, inclusiv slide-urile, exercițiile, înregistrările și repository-urile, ar urma să fie puse la dispoziția participantului printr-o licență limitată, neexclusivă și netransmisibilă, exclusiv pentru uz personal, pe durata programului și pentru încă 12 luni după absolvire. Regimul definitiv va fi stabilit în termenii aplicabili înscrierii.",
          "Contribuțiile originale realizate de participanți în cadrul proiectului de echipă vor rămâne, în principiu, ale autorilor lor. Publicarea sau utilizarea proiectului comun pe GitHub, LinkedIn, în CV ori în portofoliu va trebui să respecte acordul membrilor echipei, drepturile asupra materialelor preexistente și licențele componentelor terțe.",
          `Marca „${COMPANY_NAME}”, logo-urile și celelalte materiale de brand nu pot fi reproduse sau utilizate fără acordul scris al ${COMPANY_LEGAL}, cu excepția situațiilor permise expres de lege.`,
        ],
      },
      {
        heading: "8. Limitarea răspunderii",
        body: [
          "Informațiile despre program publicate în această etapă sunt orientative și pot fi modificate înainte de lansare. În limitele permise de lege, nu răspundem pentru decizii luate exclusiv pe baza unor informații preliminare, pentru indisponibilități temporare ale site-ului sau pentru conținutul paginilor terțe către care pot exista linkuri.",
          "Dacă programul va fi lansat, acesta va urmări dezvoltarea competențelor profesionale, însă nu va garanta obținerea unui anumit loc de muncă, nivel salarial, rezultat profesional sau certificare. Rezultatele vor depinde inclusiv de pregătirea, implicarea și efortul individual al participantului.",
          "În forma avută în vedere, examenele de certificare Microsoft, precum AI-900 sau AZ-900, se vor susține individual, prin canalele indicate de Microsoft, iar taxele de examinare și promovarea vor rămâne în responsabilitatea participantului, dacă documentația finală nu va prevedea în mod expres altfel.",
          "Nicio prevedere din acești termeni nu exclude și nu limitează răspunderea care nu poate fi exclusă ori limitată potrivit legii și nici drepturile imperative recunoscute consumatorilor.",
        ],
      },
      {
        heading: "9. Modificări ale programului și ale acestor termeni",
        body: [
          "Întrucât programul nu este încă lansat, orice element descris pe site, inclusiv curricula, calendarul, mentorii, durata, formatul, numărul de locuri sau condițiile orientative de participare, poate fi modificat, amânat ori retras înainte de deschiderea înscrierilor.",
          "Putem actualiza acești termeni pentru a reflecta evoluția proiectului, modificările site-ului sau cerințele legale. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei actualizări afișată în partea de sus.",
          "La lansarea programului vor fi publicate condiții contractuale dedicate înscrierii și participării, care vor reglementa inclusiv modificările programului după contractare, anularea unei cohorte și eventualele rambursări.",
        ],
      },
      {
        heading: "10. Legea aplicabilă și soluționarea sesizărilor",
        body: [
          `Acești termeni sunt guvernați de legislația română. Pentru întrebări, sesizări sau reclamații ne poți contacta la ${CONTACT_EMAIL}, iar noi vom încerca soluționarea amiabilă a situației.`,
          "Dacă ai calitatea de consumator, beneficiezi de toate drepturile prevăzute de legislația aplicabilă și te poți adresa instanțelor competente potrivit legii, inclusiv instanței de la domiciliul tău atunci când normele de protecție a consumatorilor prevăd această competență.",
          "În măsura în care ia naștere un litigiu de consum, poți sesiza Autoritatea Națională pentru Protecția Consumatorilor (ANPC), prin www.anpc.ro, și poți utiliza mecanismul de soluționare alternativă a litigiilor (SAL), prin platforma disponibilă la reclamatiisal.anpc.ro.",
          "Pentru raporturile cu profesioniștii, orice litigiu care nu poate fi soluționat amiabil va fi supus instanțelor competente potrivit legii, părțile putând conveni, în condițiile permise de lege, competența instanțelor din Timișoara.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Terms & Conditions",
    title: "Simple rules.",
    titleAccent: "Clear expectations.",
    intro: `These terms govern the use of the ${COMPANY_NAME} website and the submission of an expression of interest for our educational program. By accessing the site or submitting the form, you confirm that you have read and understood these terms.`,
    lastUpdated: LAST_UPDATED.en,
    sections: [
      {
        heading: "1. Current status of the program",
        body: [
          `${COMPANY_NAME} is currently in the preparation stage and public interest assessment. The program is not open for enrollment, is not being marketed and no payment is collected through this site at this stage.`,
          "The form available on the site is intended solely to allow you to express interest in a possible future educational program. Filling in and submitting it does not constitute enrollment, reservation, order, offer, acceptance of an offer, promise to contract or pre-contract and does not create any obligation on either party to enter into a contract later on.",
          "Submitting the form does not guarantee a seat in the program and does not oblige us to launch the program. The start date, price, payment structure, participation conditions and other contractual elements are not yet established and will be communicated separately, before any actual enrollment or payment.",
        ],
      },
      {
        heading: "2. About the program",
        body: [
          `As envisaged at the date of the last update, ${COMPANY_NAME} is designed as an intensive online educational program of approximately 8 weeks, focused on the Microsoft ecosystem, including AI, Cloud, Dynamics 365, Power Platform, Security and DevOps.`,
          `The program is organized by ${COMPANY_LEGAL}, registered office in ${COMPANY_FULL_ADDRESS_EN}, VAT ID ${COMPANY_CUI}, Trade Register No. ${COMPANY_REG_COM}, EUID ${COMPANY_EUID}. You can contact us at ${CONTACT_EMAIL}.`,
          "The program is designed for a cohort of up to 40 participants. The duration, structure, curriculum, delivery format, mentors, number of seats, calendar, selection criteria and any other elements presented on the site are indicative and may be modified until launch.",
          "References to Microsoft, its products or Microsoft certifications are used solely to describe the domains covered. In the absence of an express statement, they do not imply sponsorship, accreditation, endorsement or affiliation of the program with Microsoft.",
        ],
      },
      {
        heading: "3. Expression of interest",
        body: [
          "The expression of interest is submitted by completing the form available on the site. The form takes approximately 2 minutes and may include contact details, information about studies and professional experience, experience with the Microsoft ecosystem, availability, your motivation and expectations, and optionally a LinkedIn profile link or a CV.",
          "The form is intended for persons aged 18 or over. By submitting it you confirm that the information provided is true, current and submitted on your own behalf and that you are not communicating another person's data without an appropriate legal basis.",
          "We may send you a confirmation of receipt of the form. If the program is launched, we may contact you with information about the calendar, price, participation conditions, selection criteria and next steps. Receiving such a communication does not oblige you to enroll, respond or make any payment.",
          "In the future stage of actual enrollment, participant selection will be carried out based on criteria communicated in advance, such as motivation, availability and fit with the program's objectives. Enrollment will be regulated by separate contractual documents.",
        ],
      },
      {
        heading: "4. Price and commercial conditions",
        body: [
          "The price of the program is not established at this time. We do not request or accept, through the current site, payments, advances, application fees, deposits or guarantees.",
          "If the program is launched, the total price, any fees, methods and terms of payment, participation conditions and the rules regarding withdrawal, cancellation and refund will be presented clearly and completely before entering into any contract and before making any payment.",
        ],
      },
      {
        heading: "5. Withdrawing your expression of interest",
        body: [
          `You may request at any time the withdrawal of your expression of interest and the deletion of the data submitted through the form, without needing to state a reason, by writing to ${DPO_EMAIL}. The request will be handled under the conditions and within the deadlines provided by data protection legislation.`,
          "Since no payment is made and no participation contract is concluded at this stage, there are no amounts to refund and no refund policy applies.",
          "The conditions of withdrawal, cancellation and refund applicable to the paid program will be fully communicated in writing before actual enrollment and any payment.",
        ],
      },
      {
        heading: "6. Indicative conditions of the future program",
        body: [
          "The following conditions describe how the program is envisaged at the date of the last update. They are for informational purposes only, do not produce contractual effects at this stage and will be confirmed or modified through the documentation applicable at actual enrollment.",
          "Full-time participation during the 8 weeks, namely: the program is designed as an intensive one and presumes constant availability for online sessions, individual study, exercises and projects.",
          "Adherence to the code of conduct, namely: participants will be required to maintain professional and respectful behavior towards mentors, peers, partners and team members.",
          "Confidentiality of materials, namely: course materials, exercises, recordings and protected projects may not be distributed outside the cohort without the written consent of the rights holder.",
        ],
      },
      {
        heading: "7. Copyright and intellectual property",
        body: [
          `The current content of the site, including texts, graphics, structure, the "${COMPANY_NAME}" trademark, logos and presentation materials, belongs to ${COMPANY_LEGAL} or is used under legal rights and is protected by intellectual property law. The content may only be consulted for personal and informational purposes, within the limits provided by law.`,
          "As envisaged for the future program, course materials, including slides, exercises, recordings and repositories, would be made available to the participant under a limited, non-exclusive and non-transferable license, solely for personal use, during the program and for another 12 months after graduation. The definitive regime will be established in the terms applicable to enrollment.",
          "Original contributions made by participants within the team project will, in principle, remain those of their authors. Publishing or using the joint project on GitHub, LinkedIn, in CVs or in portfolios will have to comply with the agreement of team members, rights over preexisting materials and licenses of third-party components.",
          `The "${COMPANY_NAME}" trademark, logos and other brand materials may not be reproduced or used without the written consent of ${COMPANY_LEGAL}, except in situations expressly permitted by law.`,
        ],
      },
      {
        heading: "8. Limitation of liability",
        body: [
          "The information about the program published at this stage is indicative and may be modified before launch. To the extent permitted by law, we are not liable for decisions taken solely on the basis of preliminary information, for temporary unavailability of the site or for the content of third-party pages to which links may exist.",
          "If the program is launched, it will aim to develop professional skills, but will not guarantee obtaining a specific job, salary level, professional result or certification. Results will depend, among other things, on the participant's preparation, involvement and individual effort.",
          "As envisaged, Microsoft certification exams, such as AI-900 or AZ-900, will be taken individually, through the channels indicated by Microsoft, and the examination fees and passing will remain the participant's responsibility, unless the final documentation expressly provides otherwise.",
          "No provision in these terms excludes or limits liability that cannot be excluded or limited under the law, nor the mandatory rights recognized to consumers.",
        ],
      },
      {
        heading: "9. Changes to the program and these terms",
        body: [
          "Since the program is not yet launched, any element described on the site, including curriculum, calendar, mentors, duration, format, number of seats or indicative participation conditions, may be modified, postponed or withdrawn before enrollment opens.",
          "We may update these terms to reflect the evolution of the project, changes to the site or legal requirements. The version in force is the one published on this page, with the date of last update shown at the top.",
          "At the program launch, dedicated contractual conditions will be published governing enrollment and participation, including changes to the program after contracting, cancellation of a cohort and any refunds.",
        ],
      },
      {
        heading: "10. Applicable law and dispute resolution",
        body: [
          `These terms are governed by Romanian law. For questions, notices or complaints, you may contact us at ${CONTACT_EMAIL} and we will attempt to resolve the matter amicably.`,
          "If you are a consumer, you benefit from all rights provided by applicable law and may address the competent courts under the law, including the court of your domicile when consumer protection rules provide for such jurisdiction.",
          "In the event that a consumer dispute arises, you may notify the Romanian National Authority for Consumer Protection (ANPC), via www.anpc.ro, and use the alternative dispute resolution (ADR) mechanism, through the platform available at reclamatiisal.anpc.ro.",
          "For relations with professionals, any dispute that cannot be resolved amicably will be submitted to the competent courts under the law, the parties being able to agree, under the conditions permitted by law, on the jurisdiction of the courts in Timișoara.",
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
          "Cookies strict necesare, pentru funcționarea de bază a site-ului (limba RO/EN, sesiunea de navigare). Nu poți dezactiva aceste cookies.",
          "Cookies de analitică, pentru a înțelege cum e folosit site-ul (Plausible Analytics, conform GDPR, fără IP individual stocat).",
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
          "Strictly necessary cookies, for basic site functionality (RO/EN language, navigation session). You cannot disable these.",
          "Analytics cookies, to understand how the site is used (Plausible Analytics, GDPR-compliant, no individual IP stored).",
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
        description: "Statutul actual al programului, expresia de interes, drepturi de autor.",
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
        description: "Current program status, expression of interest, copyright.",
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
