<!--
  NOTE: Badges below assume the repo lives at github.com/braanj/cv.
  If the actual GitHub path is different, replace "braanj/cv" throughout this file.
-->

<div align="center">

# Brahim Anjjar — Portfolio

A Nuxt.js landing page portfolio for a Vue.js / Nuxt.js frontend developer, built with performance and SEO as first-class citizens, not an afterthought.

[![License: MIT](https://img.shields.io/github/license/braanj/cv?color=6FCF97)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/braanj/cv?style=flat&color=6FCF97)](https://github.com/braanj/cv/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/braanj/cv?style=flat&color=6FCF97)](https://github.com/braanj/cv/network/members)
[![GitHub issues](https://img.shields.io/github/issues/braanj/cv?color=6FCF97)](https://github.com/braanj/cv/issues)
[![Last commit](https://img.shields.io/github/last-commit/braanj/cv?color=6FCF97)](https://github.com/braanj/cv/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/braanj/cv?color=6FCF97)](https://github.com/braanj/cv)

[![Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20FR-6FCF97?logo=i18next&logoColor=white)](https://i18n.nuxtjs.org)

[Live site](https://anjjar.com/en) · [Report a bug](https://github.com/braanj/cv/issues) · [Request a feature](https://github.com/braanj/cv/issues)

</div>

---

## About

This is the source for my personal portfolio — a single-page landing site built to showcase real production metrics (Core Web Vitals, LCP improvements, sites shipped) rather than just listing job history. It's fully bilingual (English/French), schema.org-annotated for SEO, and built with a minimalistic, dark, animated design.

### Features

- 🚀 **Performance-first** — server-side rendered with Nuxt 3, optimised for Core Web Vitals
- 🌍 **Bilingual** — English and French via `@nuxtjs/i18n`, with hreflang tags and localized canonical URLs
- 🔍 **SEO-ready** — schema.org Microdata (`Person`, `OrganizationRole`, `EducationalOccupationalCredential`), Open Graph tags, reactive per-locale meta
- 🎨 **Modern, minimalistic UI** — dark theme, single restrained accent color, built with Tailwind CSS
- ✨ **Animated** — orchestrated hero load sequence, scroll-triggered reveals, a live-feeling performance readout with animated metrics — all respecting `prefers-reduced-motion`
- 🧩 **Componentized** — each section (hero, skills, experience, projects, footer) is a standalone, reusable Vue component
- ♿ **Accessible** — semantic HTML, visible focus states, reduced-motion support throughout

### Tech stack

| Layer     | Choice                                                         |
| --------- | -------------------------------------------------------------- |
| Framework | [Nuxt 3](https://nuxt.com)                                     |
| UI        | [Vue 3](https://vuejs.org) (Composition API, `<script setup>`) |
| Language  | TypeScript                                                     |
| Styling   | [Tailwind CSS](https://tailwindcss.com)                        |
| i18n      | [@nuxtjs/i18n](https://i18n.nuxtjs.org)                        |
| SEO       | schema.org Microdata + Nuxt `useHead`                          |

---

## Getting started

### Prerequisites

- Node.js ≥ 18
- npm (or your package manager of choice — pnpm/yarn/bun work too)

### Installation

```bash
git clone https://github.com/braanj/cv.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production build

```bash
npm run build
npm run preview
```

---

## Project structure

```
app/
  app.vue                    # Root shell — reactive i18n-aware SEO head (OG, hreflang, canonical)
  layouts/
    default.vue              # Default layout
  pages/
    index.vue                # Composes the landing page from portfolio sections
  components/portfolio/
    Nav.vue                  # Sticky nav with section anchors + availability indicator
    Hero.vue                 # Headline, CTAs, embedded performance readout
    PerformanceReadout.vue   # Signature element — animated Core Web Vitals-style metrics
    Summary.vue
    Skills.vue                # Stack manifest
    Experience.vue / ExperienceItem.vue   # Git-log-style work history
    Credentials.vue
    Projects.vue
    ContactNav.vue           # Reusable contact links (header + footer)
    Footer.vue
  composables/
    usePortfolioLinks.ts     # Static contact link data
    usePerformanceMetrics.ts # Static metric data for the readout
    useCountUp.ts            # Count-up animation composable
  plugins/
    reveal.ts                # v-reveal scroll-in-view directive
i18n/
  locales/
    en.json
    fr.json
types/
  index.d.ts                # Shared TypeScript interfaces
tailwind.config.ts
nuxt.config.ts
```

---

## Internationalization

Content lives in `i18n/locales/en.json` and `i18n/locales/fr.json`. Structural data that doesn't need translation (URLs, contact handles) lives in composables instead, to keep the locale files limited to genuinely translatable copy.

To add a new locale, add its entry to the `i18n.locales` array in `nuxt.config.ts` and create a matching JSON file in `i18n/locales/`.

---

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

## Contact

**Brahim Anjjar**
[anjar.bra@gmail.com](mailto:anjar.bra@gmail.com) · [LinkedIn](https://www.linkedin.com/in/anjjar) · [GitHub](https://github.com/braanj) · [anjjar.com](https://anjjar.com/en)
