<script setup lang="ts">
const { t } = useI18n()
const links = usePortfolioLinks()

const emailLink = computed(() => links.find((l) => l.key === 'email'))
const githubLink = computed(() => links.find((l) => l.key === 'github'))
</script>

<template>
  <header id="top" class="mx-auto max-w-content px-6 pb-16 pt-14 sm:pt-20">
    <div class="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
      <!-- Load sequence: staggered fade-up, no scroll trigger needed since it's above the fold -->
      <div>
        <p itemprop="jobTitle" class="animate-fade-up motion-reduce:animate-none font-mono text-sm text-accent"
          style="animation-delay: 0ms">
          {{ t('header.jobTitle') }}
        </p>

        <h1
          class="animate-fade-up motion-reduce:animate-none mt-4 font-display text-3xl font-medium tracking-tight text-ink-100 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          style="animation-delay: 90ms">
          {{ t('hero.headline') }}
        </h1>

        <p itemprop="description"
          class="animate-fade-up motion-reduce:animate-none mt-5 max-w-prose text-base leading-relaxed text-ink-300"
          style="animation-delay: 180ms">
          {{ t('header.description') }}
        </p>

        <p class="animate-fade-up motion-reduce:animate-none mt-2 max-w-prose text-sm text-ink-500"
          style="animation-delay: 210ms">
          <strong class="font-medium text-ink-300">{{ t('header.availabilityLabel') }}</strong>
          {{ t('header.availability') }}
        </p>

        <div class="animate-fade-up motion-reduce:animate-none mt-8 flex flex-wrap items-center gap-4"
          style="animation-delay: 270ms">
          <a v-if="emailLink" :href="emailLink.href"
            class="rounded bg-accent px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5">
            {{ t('hero.ctaPrimary') }}
          </a>
          <a v-if="githubLink" :href="githubLink.href" target="_blank" rel="noopener"
            class="rounded border border-ink-700 px-5 py-2.5 text-sm text-ink-300 transition-colors hover:border-ink-500 hover:text-ink-100">
            {{ t('hero.ctaSecondary') }}
          </a>
        </div>

        <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"
          class="animate-fade-up motion-reduce:animate-none mt-8 text-sm not-italic text-ink-500"
          style="animation-delay: 320ms">
          <span itemprop="addressLocality">{{ t('header.location.locality') }}</span>,
          <span itemprop="addressCountry">{{ t('header.location.country') }}</span>
        </address>
      </div>

      <div class="animate-fade-up motion-reduce:animate-none flex justify-center lg:justify-end"
        style="animation-delay: 200ms">
        <PortfolioPerformanceReadout />
      </div>
    </div>

    <div class="mt-10">
      <PortfolioContactNav :links="links" />
    </div>
  </header>
</template>
