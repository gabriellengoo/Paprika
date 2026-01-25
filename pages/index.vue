<template>
  <div class="page-wrapper">
    <PageRenderer slug="home" />
    <FooterSection />
  </div>
</template>

<script>
import PageRenderer from '@/components/PageRenderer.vue'
import FooterSection from '@/components/modules/FooterSection.vue'

export default {
  components: {
    PageRenderer,
    FooterSection,
  },
}
</script>
