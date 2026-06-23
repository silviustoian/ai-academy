import type { NavigationItem } from "@/types/content";

export const primaryNavigation = [
  { label: "Academy", href: "#program" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Mentors", href: "#mentors" },
  { label: "Contact", href: "#contact" },
] satisfies NavigationItem[];

export const footerNavigation = [
  { label: "Despre noi", href: "#about" },
  { label: "Termeni si conditii", href: "#legal" },
  { label: "Politica de confidentialitate", href: "#privacy" },
  { label: "Contact", href: "#contact" },
] satisfies NavigationItem[];
