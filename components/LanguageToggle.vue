<template>
  <div class="language-toggle" role="group" aria-label="Language selection">
    <button
      v-for="option in options"
      :key="option.code"
      class="language-toggle__button"
      :class="{ 'is-active': value === option.code }"
      type="button"
      :aria-pressed="value === option.code"
      @click="select(option.code)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LanguageToggle',
  props: {
    value: {
      type: String,
      default: 'ru',
    },
  },
  computed: {
    options() {
      return [
        { code: 'ru', label: 'RU' },
        { code: 'en', label: 'EN' },
      ]
    },
  },
  methods: {
    select(code) {
      if (code === this.value) {
        return
      }
      this.$emit('change', code)
    },
  },
}
</script>
