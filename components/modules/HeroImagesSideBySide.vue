<template>
  <section class="module hero-images">
    <h3 v-if="module.title">{{ module.title }}</h3>

    <div class="hero-images__grid">
      <figure
        v-for="(image, index) in module.images || []"
        :key="image._key || index"
      >
        <img
          v-if="imageUrl(image)"
          :src="imageUrl(image)"
          :alt="image.alt || module.title || 'Paprika spread'"
        />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    module: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageUrl(image) {
      if (!image) {
        return ''
      }

      if (image.asset && image.asset.url) {
        return image.asset.url
      }

      if (image.url) {
        return image.url
      }

      return ''
    },
  },
}
</script>
