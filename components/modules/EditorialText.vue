<template>
  <section
    class="module editorial-text"
    :class="editorialClasses"
  >
    <h2
      v-if="module.headline && !module.headlineBeforeBody"
      class="editorial-text__headline"
    >
      {{ module.headline }}
    </h2>

    <div v-if="module.body && module.body.length" class="prose">
      <template v-if="module.headline && module.headlineBeforeBody">
        <div class="editorial-text__lead" v-html="$portableText([{ _type: 'block', children: [{ _type: 'span', text: module.headline || '' }] }])" />
        <div
          class="editorial-text__body"
          v-html="$portableText(module.body)"
        />
      </template>
      <div
        v-else
        class="editorial-text__body"
        v-html="$portableText(module.body)"
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
  computed: {
    editorialClasses() {
      return {
        'editorial-text--centered': this.module.centered,
        'editorial-text--lead-first': this.module.headlineBeforeBody,
      }
    },
  },
}
</script>
