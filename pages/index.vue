<template>
  <div class="page-wrapper">
    <LanguageToggle
      class="page-language-toggle"
      :value="language"
      @change="setLanguage"
    />
    <PageRenderer
      :slug="currentSlug"
      :key="currentSlug"
      @load-success="handlePageLoadSuccess"
      @load-error="handlePageLoadError"
    />
    <p v-if="languageNotice" class="language-notice">
      {{ languageNotice }}
    </p>
  </div>
</template>

<script>
import PageRenderer from '@/components/PageRenderer.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'

const LANGUAGE_STORAGE_KEY = 'paprika-preferred-language'
const LANGUAGE_SLUG_MAP = {
  ru: 'home',
  en: 'home-en',
}

export default {
  components: {
    PageRenderer,
    LanguageToggle,
  },
  data() {
    return {
      language: 'ru',
      languageNotice: '',
    }
  },
  computed: {
    currentSlug() {
      return LANGUAGE_SLUG_MAP[this.language] || LANGUAGE_SLUG_MAP.ru
    },
  },
  mounted() {
    if (process.client) {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
      if (savedLanguage && LANGUAGE_SLUG_MAP[savedLanguage]) {
        this.language = savedLanguage
      }
      this.applyDocumentLanguage(this.language)
    }
  },
  methods: {
    setLanguage(lang) {
      if (!LANGUAGE_SLUG_MAP[lang] || lang === this.language) {
        return
      }
      this.language = lang
      if (process.client) {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
      }
    },
    applyDocumentLanguage(lang) {
      if (process.client) {
        document.documentElement.setAttribute('lang', lang)
      }
    },
    handlePageLoadSuccess() {
      this.languageNotice = ''
    },
    handlePageLoadError({ slug }) {
      if (slug === LANGUAGE_SLUG_MAP.en && this.language !== 'ru') {
        this.languageNotice = 'English edition is coming soon. Showing Russian content instead.'
        this.language = 'ru'
      }
    },
  },
  watch: {
    language(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.applyDocumentLanguage(newLang)
      }
    },
  },
}
</script>
