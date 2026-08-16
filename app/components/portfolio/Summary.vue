<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section v-reveal aria-labelledby="summary-heading" class="border-t border-ink-800 bg-ink-900/40">
    <div class="mx-auto max-w-content px-6 py-14">
      <h2 id="summary-heading" class="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        {{ t('summary.heading') }}
      </h2>
      <p class="mt-4 max-w-prose text-lg leading-relaxed text-ink-300">
        {{ t('summary.body') }}
      </p>
    </div>
  </section>
</template>
