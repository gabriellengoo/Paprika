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
          :alt="imageAlt(image)"
        />
        <figcaption
          v-if="imageText(image)"
          class="hero-images__caption"
        >
          {{ imageText(image) }}
        </figcaption>
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
    normalizeImage(image) {
      if (!image) {
        return null
      }
      if (image.image) {
        return image.image
      }
      return image
    },
    imageUrl(image) {
      const normalized = this.normalizeImage(image)
      if (!normalized) {
        return ''
      }
      if (normalized.asset && normalized.asset.url) {
        return normalized.asset.url
      }
      if (normalized.url) {
        return normalized.url
      }
      return ''
    },
    imageAlt(image) {
      if (!image) {
        return this.module.title || 'Paprika spread'
      }

      if (image.caption) {
        return image.caption
      }

      const normalized = this.normalizeImage(image)
      if (normalized && normalized.alt) {
        return normalized.alt
      }

      return this.module.title || 'Paprika spread'
    },
    imageText(image) {
      if (!image) {
        return ''
      }
      return image.caption || image.title || ''
    },
  },
}
</script>
