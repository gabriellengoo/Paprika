<template>
  <section id="support" class="module support-section">
    <div v-if="heroImageUrl" class="support-section__hero">
      <img :src="heroImageUrl" :alt="heroImageAlt" />
    </div>

    <div class="support-section__body">
      <h2 v-if="module.headline">
        {{ module.headline }}
      </h2>

      <div v-if="detailColumns.length" class="support-section__details">
        <ul
          v-for="(column, columnIndex) in detailColumns"
          :key="`column-${columnIndex}`"
          class="support-section__detail-column"
        >
          <li
            v-for="(item, index) in column"
            :key="item._key || `${columnIndex}-${index}`"
            class="support-section__detail"
          >
            <span class="support-section__detail-title">{{ item.title }}</span>
            <span class="support-section__detail-text">{{ item.description }}</span>
          </li>
        </ul>
      </div>
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
  computed: {
    heroImage() {
      return this.module.backgroundGraphic || this.module.heroImage || null
    },
    heroImageUrl() {
      if (!this.heroImage) {
        return ''
      }
      if (this.heroImage.asset && this.heroImage.asset.url) {
        return this.heroImage.asset.url
      }
      if (this.heroImage.url) {
        return this.heroImage.url
      }
      return ''
    },
    heroImageAlt() {
      if (this.heroImage && this.heroImage.alt) {
        return this.heroImage.alt
      }
      return this.module.headline || 'Support image'
    },
    detailItems() {
      if (Array.isArray(this.module.detailItems) && this.module.detailItems.length) {
        return this.module.detailItems
      }
      if (Array.isArray(this.module.leftList) && this.module.leftList.length) {
        return this.module.leftList.map((title, index) => ({
          _key: `legacy-left-${index}`,
          title,
          description: '',
        }))
      }
      return []
    },
    detailColumns() {
      if (!this.detailItems.length) {
        return []
      }
      const midpoint = Math.ceil(this.detailItems.length / 2)
      return [this.detailItems.slice(0, midpoint), this.detailItems.slice(midpoint)]
    },
  },
}
</script>
