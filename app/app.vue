<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const ogLocaleMap: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR'
}

useHead({
  htmlAttrs: { lang: locale.value, class: "dark bg-ink-700 text-ink-100" },
  title: t('meta.title'),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'description', content: t('meta.description') },
    { name: 'author', content: 'Brahim Anjjar' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:url', content: `https://anjjar.com${switchLocalePath(locale.value)}` },
    { property: 'og:image', content: 'https://anjjar.com/og-image.jpg' },
    { property: 'og:locale', content: ogLocaleMap[locale.value] ?? 'en_US' },
    ...(locales.value as { code: string }[])
      .filter((l) => l.code !== locale.value)
      .map((l) => ({ property: 'og:locale:alternate', content: ogLocaleMap[l.code] ?? l.code }))
  ],
  link: [
    { rel: 'canonical', href: `https://anjjar.com${switchLocalePath(locale.value)}` },
    { "rel": "alternate", "hreflang": "en", "href": "https://anjjar.com/" },
    { "rel": "alternate", "hreflang": "fr", "href": "https://anjjar.com/fr" }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
