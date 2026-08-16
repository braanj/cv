// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Brahim Anjjar - Vue.js/Nuxt.js Developer | Morocco", // default fallback title
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          name: "description",
          content:
            "Brahim Anjjar, Vue.js and Nuxt.js developer with 5+ years of production experience delivering performant, SEO-optimised web applications. Open to remote EU roles and freelance missions.",
        },
        { name: "author", content: "Brahim Anjjar" },
        { name: "robots", content: "index, follow" },
      ],
    },
  },

  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
  ],

  css: ["../assets/css/tailwind.css"],

  tailwindcss: {
    configPath: "tailwind.config.ts",
    cssPath: "~/assets/css/tailwind.css",
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "English" },
      { code: "fr", language: "fr-FR", file: "fr.json", name: "Français" },
    ],
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
