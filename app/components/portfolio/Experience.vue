<script setup lang="ts">
import type { ExperienceJob } from '../../../types'

const { t, tm, rt } = useI18n()

const jobs = computed<ExperienceJob[]>(() =>
  (tm('experience.jobs') as ExperienceJob[]).map((job) => ({
    role: rt(job.role),
    companyName: rt(job.companyName),
    startDate: rt(job.startDate),
    endDate: job.endDate ? rt(job.endDate) : null,
    dateLabel: rt(job.dateLabel),
    context: rt(job.context),
    highlights: (job.highlights as string[]).map((h) => rt(h)),
    stack: rt(job.stack),
    relation: rt(job.relation) as ExperienceJob['relation']
  }))
)
</script>

<template>
  <section id="experience" aria-labelledby="experience-heading"
    class="scroll-mt-16 border-t border-ink-800 bg-ink-900/40">
    <div class="mx-auto max-w-content px-6 py-16">
      <h2 v-reveal id="experience-heading" class="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {{ t('experience.heading') }}
      </h2>

      <div class="relative mt-8">
        <PortfolioExperienceItem v-for="(job, index) in jobs" :key="index" :job="job"
          :is-last="index === jobs.length - 1" :reveal-delay="index * 90" />
      </div>
    </div>
  </section>
</template>
