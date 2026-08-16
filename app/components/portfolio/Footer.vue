<script setup lang="ts">
const { t } = useI18n()
const links = usePortfolioLinks()
</script>

<template>
  <footer id="contact" v-reveal class="scroll-mt-16 border-t border-ink-800 bg-ink-950">
    <div class="mx-auto max-w-content px-6 py-20 text-center">
      <h2 class="font-display text-2xl font-medium text-ink-100 sm:text-3xl">
        {{ t('footer.heading') }}
      </h2>
      <p class="mx-auto mt-3 max-w-prose text-base text-ink-500">{{ t('footer.body') }}</p>
      <div class="mt-8 flex justify-center">
        <PortfolioContactNav :links="links" :with-microdata="false" />
      </div>
    </div>
  </footer>
</template>
