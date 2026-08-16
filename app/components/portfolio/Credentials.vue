<script setup lang="ts">
import type { Credential } from '../../../types'

const { t, tm, rt } = useI18n()

const certifications = computed<Credential[]>(() =>
  (tm('credentials.certifications') as Credential[]).map((c) => ({
    category: rt(c.category),
    name: rt(c.name)
  }))
)

const languages = computed<string[]>(() =>
  (tm('credentials.languages') as string[]).map((l) => rt(l))
)
</script>

<template>
  <section v-reveal aria-labelledby="credentials-heading" class="bg-ink-950">
    <div class="mx-auto max-w-content px-6 py-14">
      <h2 id="credentials-heading" class="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {{ t('credentials.heading') }}
      </h2>

      <div class="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span v-for="cert in certifications" :key="cert.name" itemprop="hasCredential" itemscope
          itemtype="https://schema.org/EducationalOccupationalCredential" class="text-sm">
          <span itemprop="credentialCategory" class="text-ink-500">{{ cert.category }}:</span>
          <span itemprop="name" class="text-ink-100"> {{ cert.name }}</span>
        </span>

        <span class="hidden text-ink-800 sm:inline">|</span>

        <span v-for="lang in languages" :key="lang" itemprop="knowsLanguage" class="text-sm text-ink-300">
          {{ lang }}
        </span>
      </div>
    </div>
  </section>
</template>
