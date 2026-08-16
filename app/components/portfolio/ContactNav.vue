<!-- eslint-disable vue/first-attribute-linebreak -->
<script setup lang="ts">
import type { ContactLink } from '../../../types'

const { t } = useI18n()

interface Props {
  links: ContactLink[]
  /** Set to false when reused outside the main Person itemscope (e.g. the footer)
   *  to avoid emitting duplicate email/sameAs microdata entries. */
  withMicrodata?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withMicrodata: true
})

const microdataProp = (key: ContactLink['key']) => {
  if (!props.withMicrodata) return undefined
  return key === 'email' ? 'email' : 'sameAs'
}
</script>

<template>
  <nav aria-label="Contact links">
    <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      <li v-for="link in links" :key="link.key">
        <a :href="link.href" :target="link.key === 'email' ? undefined : '_blank'"
          :rel="link.key === 'email' ? undefined : 'noopener'"
          class="text-ink-300 underline decoration-ink-700 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          <span :itemprop="microdataProp(link.key)">{{ t(link.label) }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
