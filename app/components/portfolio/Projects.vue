<script setup lang="ts">
import type { ProjectItem } from '../../../types'

const { t, tm, rt } = useI18n()

const projects = computed<ProjectItem[]>(() =>
  (tm('projects.items') as ProjectItem[]).map((p) => ({
    label: rt(p.label),
    href: rt(p.href),
    isWorkExample: !!p.isWorkExample
  }))
)
</script>

<template>
  <section id="work" aria-labelledby="projects-heading" class="scroll-mt-16 border-t border-ink-800 bg-ink-900/40">
    <div class="mx-auto max-w-content px-6 py-16">
      <h2 v-reveal id="projects-heading" class="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {{ t('projects.heading') }}
      </h2>

      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <a v-for="(project, index) in projects" :key="project.href" v-reveal="index * 80"
          :itemprop="project.isWorkExample ? 'workExample' : undefined" :href="project.href" target="_blank"
          rel="noopener"
          class="group flex items-center justify-between gap-3 rounded-lg border border-ink-800 bg-ink-900/60 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-ink-700 hover:bg-ink-900">
          <span class="text-sm text-ink-300 group-hover:text-ink-100">{{ project.label }}</span>
          <span class="shrink-0 text-ink-700 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
