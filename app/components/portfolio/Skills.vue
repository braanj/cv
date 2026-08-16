<script setup lang="ts">
import type { SkillGroup } from '../../../types'

const { t, tm, rt } = useI18n()

// tm() reads the raw (untranslated) message nodes so we can iterate an array
// defined in the locale JSON; rt() resolves each node to its localized string.
const groups = computed<SkillGroup[]>(() =>
  (tm('skills.groups') as SkillGroup[]).map((group) => ({
    title: rt(group.title),
    items: (group.items as string[]).map((item) => rt(item))
  }))
)
</script>

<template>
  <section id="stack" aria-labelledby="skills-heading" class="scroll-mt-16 bg-ink-950">
    <div class="mx-auto max-w-content px-6 py-16">
      <h2 v-reveal id="skills-heading" class="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {{ t('skills.heading') }}
      </h2>

      <div class="mt-6 overflow-hidden rounded-lg border border-ink-800">
        <div v-for="(group, index) in groups" :key="group.title" v-reveal="index * 70"
          class="flex flex-col gap-1 border-b border-ink-800 px-5 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-6">
          <h3 class="w-40 shrink-0 font-mono text-sm text-ink-500">{{ group.title }}</h3>
          <p class="text-sm text-ink-300">
            <span v-for="(item, itemIndex) in group.items" :key="item">
              <span itemprop="knowsAbout">{{ item }}</span><span v-if="itemIndex < group.items.length - 1"
                class="text-ink-700"> · </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
