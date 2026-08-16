<script setup lang="ts">
const { tm, rt } = useI18n()
const metrics = usePerformanceMetrics()

const labels = computed<string[]>(() => (tm('readout.metrics') as { label: string }[]).map((m) => rt(m.label)))

// One count-up per metric, staggered so they don't all land at once.
const counters = metrics.map((metric) => useCountUp(metric.value, { duration: 1100, decimals: metric.decimals }))

const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const ringOffset = computed(() => {
  const cwvIndex = metrics.findIndex((m) => m.isPercentage)
  const progress = cwvIndex >= 0 ? counters[cwvIndex].value.value / 100 : 0
  return RING_CIRCUMFERENCE * (1 - progress)
})

onMounted(() => {
  counters.forEach((counter, index) => {
    setTimeout(() => counter.start(), 300 + index * 180)
  })
})
</script>

<template>
  <div class="w-full max-w-md overflow-hidden rounded-lg border border-ink-700 bg-ink-900/60 shadow backdrop-blur-sm">
    <!-- terminal-style chrome, grounded in the subject: this is literally his daily tool -->
    <div class="flex items-center gap-1.5 border-b border-ink-800 px-4 py-2.5">
      <span class="h-2 w-2 rounded-full bg-ink-700" />
      <span class="h-2 w-2 rounded-full bg-ink-700" />
      <span class="h-2 w-2 rounded-full bg-ink-700" />
      <span class="ml-2 font-mono text-xs text-ink-500">performance.report</span>
    </div>

    <div class="grid grid-cols-3 divide-x divide-ink-800">
      <div v-for="(metric, index) in metrics" :key="metric.key"
        class="flex flex-col items-center gap-2 px-3 py-5 text-center">
        <div v-if="metric.isPercentage" class="relative flex h-16 w-16 items-center justify-center">
          <svg viewBox="0 0 64 64" class="h-16 w-16 -rotate-90">
            <circle cx="32" cy="32" :r="RING_RADIUS" fill="none" stroke-width="4" class="stroke-ink-800" />
            <circle cx="32" cy="32" :r="RING_RADIUS" fill="none" stroke-width="4" stroke-linecap="round"
              class="stroke-accent transition-[stroke-dashoffset] duration-100 ease-linear"
              :stroke-dasharray="RING_CIRCUMFERENCE" :stroke-dashoffset="ringOffset" />
          </svg>
          <span class="absolute font-mono text-sm font-medium text-ink-100">
            {{ metric.prefix }}{{ counters[index].value.value }}{{ metric.suffix }}
          </span>
        </div>

        <span v-else class="font-mono text-2xl font-medium tabular-nums text-ink-100">
          {{ metric.prefix }}{{ counters[index].value.value }}{{ metric.suffix }}
        </span>

        <span class="text-xs leading-snug text-ink-500">{{ labels[index] }}</span>
      </div>
    </div>
  </div>
</template>
