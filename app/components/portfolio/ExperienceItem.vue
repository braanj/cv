<script setup lang="ts">
import type { ExperienceJob } from '../../../types'

defineProps<{
  job: ExperienceJob
  isLast: boolean
  revealDelay: number
}>()
</script>

<template>
  <article v-reveal="revealDelay" :itemprop="job.relation" itemscope itemtype="https://schema.org/OrganizationRole"
    class="relative flex gap-5 pb-10 last:pb-0">
    <meta itemprop="roleName" :content="job.role">
    <meta itemprop="startDate" :content="job.startDate">
    <meta v-if="job.endDate" itemprop="endDate" :content="job.endDate">

    <!-- rail: filled dot for the current role, hollow for past ones — the connecting line is the actual timeline -->
    <div class="flex flex-col items-center">
      <span class="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
        :class="job.relation === 'worksFor' ? 'bg-accent' : 'border-2 border-ink-700 bg-ink-950'" />
      <span v-if="!isLast" class="mt-1.5 w-px flex-1 bg-ink-800" />
    </div>

    <div class="flex-1 pb-2">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 class="text-base font-medium text-ink-100">
          {{ job.role }}
          <span class="font-normal text-ink-500">&mdash;</span>
          <span :itemprop="job.relation" itemscope itemtype="https://schema.org/Organization">
            <span itemprop="name" class="font-normal text-ink-300">{{ job.companyName }}</span>
          </span>
        </h3>
        <span class="rounded border border-ink-800 px-2 py-0.5 font-mono text-xs text-ink-500">
          {{ job.startDate }}{{ job.endDate ? ` → ${job.endDate}` : ' → present' }}
        </span>
      </div>

      <p class="mt-1 text-sm text-ink-500">{{ job.dateLabel }}</p>
      <p class="mt-3 max-w-prose text-sm text-ink-500">{{ job.context }}</p>

      <ul class="mt-3 space-y-1.5">
        <li v-for="highlight in job.highlights" :key="highlight"
          class="max-w-prose text-sm leading-relaxed text-ink-300">
          <span class="mr-2 text-accent">+</span>{{ highlight }}
        </li>
      </ul>

      <p class="mt-3 font-mono text-xs tracking-wide text-ink-500">{{ job.stack }}</p>
    </div>
  </article>
</template>
