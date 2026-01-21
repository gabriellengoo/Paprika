<template>
  <header class="module header-section">
    <div class="header-section__nav">
      <img
        src="/logo.svg"
        class="header-section__logo-image"
      />
      <!-- <p class="header-section__logo">{{ module.logo || 'Paprika' }}</p> -->

      <nav class="header-section__links" aria-label="Primary navigation">
        <a
          v-for="(link, index) in module.navigation || []"
          :key="link._key || index"
          :href="link.url || '#'"
        >
          {{ link.label }}
        </a>
      </nav>

      <div
        v-if="
          (module.cta && module.cta.label) ||
          (module.preOrderCta && module.preOrderCta.label)
        "
        class="header-section__cta-group"
      >
        <a
          v-if="module.cta && module.cta.label"
          class="header-section__cta"
          :href="module.cta.url || '#'"
        >
          {{ module.cta.label }}
        </a>

        <a
          v-if="module.preOrderCta && module.preOrderCta.label"
          class="header-section__cta header-section__cta--preorder"
          :href="module.preOrderCta.url || '#'"
        >
          {{ module.preOrderCta.label }}
        </a>
      </div>
    </div>

    <div class="header-section__title">
      <p v-if="module.tagline" class="header-section__eyebrow">
        {{ module.tagline }}
      </p>
      <h1>{{ module.headline }}</h1>
      <div
        v-if="module.description && module.description.length"
        class="header-section__description"
        v-html="$portableText(module.description)"
      />
    </div>

    <div class="header-section__meta">
      <div class="header-section__card">
        <a
          v-if="module.preOrderButton && module.preOrderButton.label"
          class="header-section__pill"
          :href="module.preOrderButton.url || '#'"
        >
          {{ module.preOrderButton.label }}
        </a>
        <span class="header-section__label">{{ module.preOrderLabel }}</span>

        <div
          v-if="module.infoBlock && module.infoBlock.length"
          class="header-section__info-block"
          v-html="$portableText(module.infoBlock)"
        />
      </div>

      <div
        v-if="module.featureImages && module.featureImages.length"
        class="header-section__gallery"
      >
        <figure
          v-for="(image, index) in module.featureImages"
          :key="image._key || index"
        >
          <img
            v-if="imageUrl(image)"
            :src="imageUrl(image)"
            :alt="imageAlt(image)"
          />
          <figcaption
            v-if="image.caption"
            class="header-section__caption"
          >
            {{ image.caption }}
          </figcaption>
        </figure>
      </div>

    
    </div>
   
  
  </header>
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
      if (image && image.image) {
        return image.image
      }
      return image
    },
    imageUrl(image) {
      const normalizedImage = this.normalizeImage(image)
      if (!normalizedImage) {
        return ''
      }
      if (normalizedImage.asset && normalizedImage.asset.url) {
        return normalizedImage.asset.url
      }
      if (normalizedImage.url) {
        return normalizedImage.url
      }
      return ''
    },
    imageAlt(image) {
      if (image && image.caption) {
        return image.caption
      }
      const normalizedImage = this.normalizeImage(image)
      if (normalizedImage && normalizedImage.alt) {
        return normalizedImage.alt
      }
      return this.module.headline || 'Paprika image'
    },
  },
}
</script>
