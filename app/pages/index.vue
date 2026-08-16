<script setup lang="ts">
// Page-level SEO (title/description) lives in app.vue's global useHead,
// keyed off the current route's i18n content — nothing extra needed here.
</script>

<template>
  <div>
    <PortfolioSummary />
    <PortfolioSkills />
    <PortfolioExperience />
    <PortfolioCredentials />
    <PortfolioProjects />
  </div>
</template>
