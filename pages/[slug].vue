<template>
  <PageRenderer :slug="$route.params.slug" />
</template>

<script>
import PageRenderer from '@/components/PageRenderer.vue'

export default {
  components: {
    PageRenderer,
  },
}
</script>
