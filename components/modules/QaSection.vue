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
        <template v-if="entry.headlineChunks && entry.headlineChunks.length">
          <span
            v-for="(chunk, chunkIndex) in entry.headlineChunks"
            :key="`headline-chunk-${chunkIndex}`"
          >
            {{ chunk }}
            <br v-if="chunkIndex < entry.headlineChunks.length - 1" />
          </span>
        </template>
        <span v-else>
          {{ entry.headline }}
        </span>
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
      if (!Array.isArray(this.module.entries)) {
        return []
      }

      return this.module.entries.map((entry) => ({
        ...entry,
        headlineChunks: this.getHeadlineChunks(entry.headline),
      }))
    },
  },
  methods: {
    getHeadlineChunks(headline) {
      if (!headline) {
        return []
      }

      return headline.split(/&nbsp;|\u00a0/)
    },
  },
}
</script>
