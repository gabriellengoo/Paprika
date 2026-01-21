<template>
  <section class="module qa-section" v-if="entries.length">
    <article
      v-for="(entry, index) in entries"
      :key="entry._key || index"
      class="qa-entry"
    >
      <div class="qa-entry__eyebrow" v-if="entry.eyebrow">
        {{ entry.eyebrow }}
      </div>
      <h3 class="qa-entry__headline">
        {{ entry.headline }}
      </h3>
      <div
        v-if="entry.body && entry.body.length"
        class="qa-entry__body"
        v-html="$portableText(entry.body)"
      />
    </article>
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
    entries() {
      return Array.isArray(this.module.entries) ? this.module.entries : []
    },
  },
}
</script>
