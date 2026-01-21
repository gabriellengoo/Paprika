<template>
  <section class="module hero-block">
    <p v-if="module.subtitle" class="hero-block__subtitle">{{ module.subtitle }}</p>
    <h2 class="hero-block__title">{{ module.title }}</h2>

    <div class="hero-block__grid">
      <div
        class="hero-block__column"
        v-html="$portableText(module.leftText)"
      />
      <div
        class="hero-block__column"
        v-html="$portableText(module.rightText)"
      />
    </div>

    <div
      v-if="module.images && module.images.length"
      class="hero-block__gallery"
    >
      <img
        v-for="(img, i) in module.images"
        :key="img._key || i"
        :src="imageUrl(img)"
        :alt="img.alt || module.title"
      />
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
      if (image?.asset?.url) {
        return image.asset.url
      }
      return image?.url || ''
    },
  },
}
</script>
