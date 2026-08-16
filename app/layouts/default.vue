<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="min-h-screen bg-ink-950 font-sans text-ink-100 antialiased" itemscope
    itemtype="https://schema.org/Person">
    <PortfolioNav />
    <PortfolioHero />

    <main>
      <slot />
    </main>

    <PortfolioFooter />
  </div>
</template>
