import type { ContactLink } from "../../types/index";

/**
 * Contact links are structural data (URLs/handles), not translatable copy,
 * so they live here rather than in the i18n locale files.
 * Display labels are still pulled from i18n via `label`.
 */
export const usePortfolioLinks = (): ContactLink[] => [
  {
    key: "email",
    href: "mailto:anjar.bra@gmail.com",
    label: "anjar.bra@gmail.com",
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/anjjar",
    label: "Linkedin",
  },
  {
    key: "github",
    href: "https://github.com/braanj",
    label: "Github",
  },
  {
    key: "portfolio",
    href: "https://anjjar.com/en",
    label: "Portfolio",
  },
];
