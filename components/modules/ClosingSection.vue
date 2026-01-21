<template>
  <section class="module closing-section">
    <div v-if="heroImageUrl" class="closing-section__hero">
      <img :src="heroImageUrl" :alt="heroImageAlt" />
    </div>

    <div class="closing-section__content">
      <h2 v-if="module.headline" class="closing-section__headline">
        {{ module.headline }}
      </h2>

      <div
        v-if="module.body && module.body.length"
        class="closing-section__body"
        v-html="$portableText(module.body)"
      />

      <div v-if="columns.length" class="closing-section__columns">
        <div
          v-for="(column, columnIndex) in columns"
          :key="column._key || columnIndex"
          class="closing-section__column"
        >
          <p v-if="column.heading" class="closing-section__column-heading">
            {{ column.heading }}
          </p>

          <ul v-if="Array.isArray(column.rows) && column.rows.length">
            <li
              v-for="(row, rowIndex) in column.rows"
              :key="row._key || `${columnIndex}-${rowIndex}`"
              class="closing-section__row"
            >
              <span class="closing-section__row-label">{{ row.label }}</span>
              <span class="closing-section__row-value">{{ row.value }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        v-if="module.footerItems && module.footerItems.length"
        class="closing-section__footer"
      >
        <div
          v-for="(item, index) in module.footerItems"
          :key="item._key || index"
          class="closing-section__footer-item"
        >
          <span class="closing-section__footer-label">{{ item.label }}</span>
          <span class="closing-section__footer-value">{{ item.value }}</span>
        </div>
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
      return this.module.heroImage || null
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
      return this.module.headline || 'Closing section image'
    },
    columns() {
      if (Array.isArray(this.module.columns)) {
        return this.module.columns.slice(0, 2)
      }
      return []
    },
  },
}
</script>
