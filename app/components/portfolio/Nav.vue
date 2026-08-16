<script setup lang="ts">
const { t, locale, locales } = useI18n()

const sections = [
  { id: 'stack', labelKey: 'nav.stack' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'work', labelKey: 'nav.work' },
  { id: 'contact', labelKey: 'nav.contact' }
]

const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() =>
  (locales.value as { code: 'fr' | 'en'; name: string }[]).filter((l) => l.code !== locale.value)
)
</script>

<template>
  <div class="sticky top-0 z-40 border-b border-ink-800 bg-ink-950/80 backdrop-blur-md">
    <nav class="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
      <a href="#top" class="font-mono text-sm text-ink-100">
        {{ t('header.name') }}
      </a>

      <ul class="hidden items-center gap-6 sm:flex">
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" class="text-sm text-ink-500 transition-colors hover:text-ink-100">
            {{ t(section.labelKey) }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1 text-sm">
          <span class="font-mono text-ink-100">{{ locale.toUpperCase() }}</span>
          <template v-for="l in availableLocales" :key="l.code">
            <span class="text-ink-700">/</span>
            <NuxtLink :to="switchLocalePath(l.code)" class="font-mono text-ink-500 transition-colors hover:text-accent">
              {{ l.code.toUpperCase() }}
            </NuxtLink>
          </template>
        </div>

        <span class="flex items-center gap-2 rounded-full border border-ink-700 py-1 pl-2.5 pr-3">
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span class="text-xs text-ink-300">{{ t('nav.availability') }}</span>
        </span>
      </div>
    </nav>
  </div>
</template>
