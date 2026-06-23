import type { LocaleCode } from "@/types/content";

type Field = {
  key: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "url";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  optional?: boolean;
  maxLength?: number;
};

type ApplyCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  duration: string;
  sections: Array<{
    label: string;
    fields: Field[];
  }>;
  submitLabel: string;
  submitNote: string;
  privacyNote: string;
};

export const applyContent: Record<LocaleCode, ApplyCopy> = {
  ro: {
    eyebrow: "Aplică · 2 minute",
    title: "Aplică pentru",
    titleAccent: "NEXINARI AI Academy.",
    intro:
      "Completează formularul de mai jos. Durează ~2 minute. Te contactăm în maxim 48h cu opțiuni de preț, calendar și restul detaliilor.",
    duration: "2 min · Răspuns în 48h",
    sections: [
      {
        label: "Informații personale",
        fields: [
          {
            key: "name",
            label: "Nume complet",
            type: "text",
            placeholder: "Ion Popescu",
            required: true,
          },
          {
            key: "email",
            label: "Email",
            type: "email",
            placeholder: "ion@email.com",
            required: true,
          },
          {
            key: "phone",
            label: "Telefon",
            type: "tel",
            placeholder: "07XX XXX XXX",
            required: true,
          },
          {
            key: "city",
            label: "Oraș",
            type: "text",
            placeholder: "București",
            required: true,
          },
          {
            key: "age",
            label: "Vârstă",
            type: "select",
            options: ["18–24", "25–30", "31–40", "40+"],
            required: true,
          },
        ],
      },
      {
        label: "Background",
        fields: [
          {
            key: "education",
            label: "Nivel de studii",
            type: "select",
            options: ["Student", "Licență", "Master", "Doctorat", "Altele"],
            required: true,
          },
          {
            key: "field",
            label: "Domeniul în care lucrezi acum",
            type: "text",
            placeholder: "ex: marketing, vânzări, IT support",
            required: true,
          },
          {
            key: "experience",
            label: "Ani de experiență profesională",
            type: "select",
            options: ["0", "1–2", "3–5", "5+"],
            required: true,
          },
          {
            key: "ms-exp",
            label: "Experiență cu Microsoft ecosystem",
            type: "select",
            options: ["Deloc", "Puțin", "Moderat", "Avansat"],
            required: true,
          },
        ],
      },
      {
        label: "Motivație",
        fields: [
          {
            key: "why",
            label: "De ce vrei să participi la NEXINARI?",
            type: "textarea",
            placeholder: "Spune-ne pe scurt ce vrei să obții...",
            required: true,
            maxLength: 1500,
          },
          {
            key: "expectations",
            label: "Ce așteptări ai de la program?",
            type: "textarea",
            placeholder: "Ce vrei să iei acasă după 8 săptămâni...",
            maxLength: 1000,
            optional: true,
          },
        ],
      },
      {
        label: "Logistică",
        fields: [
          {
            key: "availability",
            label: "Ești disponibil full-time pe durata celor 8 săptămâni?",
            type: "select",
            options: ["Da", "Parțial", "Nu"],
            required: true,
          },
          {
            key: "source",
            label: "Cum ai aflat de NEXINARI?",
            type: "select",
            options: [
              "LinkedIn",
              "YouTube",
              "Instagram",
              "Prieten",
              "Universitate",
              "Altă sursă",
            ],
            required: true,
          },
        ],
      },
      {
        label: "Opțional",
        fields: [
          {
            key: "linkedin",
            label: "Link LinkedIn",
            type: "url",
            placeholder: "https://linkedin.com/in/...",
            optional: true,
          },
          {
            key: "cv",
            label: "Link CV (Google Drive, Dropbox, etc.)",
            type: "url",
            placeholder: "https://...",
            optional: true,
          },
          {
            key: "other",
            label: "Altceva ce vrei să ne spui?",
            type: "textarea",
            placeholder: "Orice context suplimentar...",
            maxLength: 1000,
            optional: true,
          },
        ],
      },
    ],
    submitLabel: "Trimite aplicația",
    submitNote: "Răspundem în maxim 48h",
    privacyNote:
      "Prin trimiterea formularului ești de acord cu prelucrarea datelor conform politicii de confidențialitate NEXINARI.",
  },
  en: {
    eyebrow: "Apply · 2 minutes",
    title: "Apply to",
    titleAccent: "NEXINARI AI Academy.",
    intro:
      "Fill the form below. Takes ~2 minutes. We get back to you within 48h with pricing options, calendar and the rest of the details.",
    duration: "2 min · Reply in 48h",
    sections: [
      {
        label: "Personal info",
        fields: [
          {
            key: "name",
            label: "Full name",
            type: "text",
            placeholder: "John Doe",
            required: true,
          },
          {
            key: "email",
            label: "Email",
            type: "email",
            placeholder: "john@email.com",
            required: true,
          },
          {
            key: "phone",
            label: "Phone",
            type: "tel",
            placeholder: "+40 7XX XXX XXX",
            required: true,
          },
          {
            key: "city",
            label: "City",
            type: "text",
            placeholder: "Bucharest",
            required: true,
          },
          {
            key: "age",
            label: "Age",
            type: "select",
            options: ["18–24", "25–30", "31–40", "40+"],
            required: true,
          },
        ],
      },
      {
        label: "Background",
        fields: [
          {
            key: "education",
            label: "Education level",
            type: "select",
            options: ["Student", "Bachelor's", "Master's", "PhD", "Other"],
            required: true,
          },
          {
            key: "field",
            label: "Field you currently work in",
            type: "text",
            placeholder: "e.g. marketing, sales, IT support",
            required: true,
          },
          {
            key: "experience",
            label: "Years of professional experience",
            type: "select",
            options: ["0", "1–2", "3–5", "5+"],
            required: true,
          },
          {
            key: "ms-exp",
            label: "Microsoft ecosystem experience",
            type: "select",
            options: ["None", "Little", "Moderate", "Advanced"],
            required: true,
          },
        ],
      },
      {
        label: "Motivation",
        fields: [
          {
            key: "why",
            label: "Why do you want to join NEXINARI?",
            type: "textarea",
            placeholder: "Tell us briefly what you want to achieve...",
            required: true,
            maxLength: 1500,
          },
          {
            key: "expectations",
            label: "What expectations do you have?",
            type: "textarea",
            placeholder: "What you want to walk away with after 8 weeks...",
            maxLength: 1000,
            optional: true,
          },
        ],
      },
      {
        label: "Logistics",
        fields: [
          {
            key: "availability",
            label: "Are you available full-time for 8 weeks?",
            type: "select",
            options: ["Yes", "Partially", "No"],
            required: true,
          },
          {
            key: "source",
            label: "How did you hear about NEXINARI?",
            type: "select",
            options: [
              "LinkedIn",
              "YouTube",
              "Instagram",
              "Friend",
              "University",
              "Other source",
            ],
            required: true,
          },
        ],
      },
      {
        label: "Optional",
        fields: [
          {
            key: "linkedin",
            label: "LinkedIn URL",
            type: "url",
            placeholder: "https://linkedin.com/in/...",
            optional: true,
          },
          {
            key: "cv",
            label: "CV link (Google Drive, Dropbox, etc.)",
            type: "url",
            placeholder: "https://...",
            optional: true,
          },
          {
            key: "other",
            label: "Anything else?",
            type: "textarea",
            placeholder: "Any extra context...",
            maxLength: 1000,
            optional: true,
          },
        ],
      },
    ],
    submitLabel: "Send application",
    submitNote: "We reply within 48h",
    privacyNote:
      "By submitting this form you agree to data processing under the NEXINARI privacy policy.",
  },
};
