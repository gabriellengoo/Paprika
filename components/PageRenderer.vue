<template>
  <main class="page-shell">
    <template v-if="hasModules">
      <component
        v-for="(block, index) in page.modules"
        v-if="componentMap[block._type]"
        :key="block._key || index"
        :is="componentMap[block._type]"
        v-bind="componentProps(block, index)"
      />
    </template>

    <div v-else class="page-shell__empty">
      <p v-if="isLoading">Loading page content...</p>
      <p v-else-if="loadError">Unable to load this page. Please try again.</p>
      <p v-else>No modules found for this page.</p>
    </div>
  </main>
</template>

<script>
const query = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  modules[]{
    ...,
    images[]{ asset->{ url } },
    photo{ asset->{ url } },
    backgroundGraphic{ asset->{ url } },
    heroImage{ asset->{ url } },
    featureImages[]{
      ...,
      asset->{ url }
    }
  }
}
`

const componentMap = {
  headerSection: () => import('@/components/modules/HeaderSection.vue'),
  heroBlock: () => import('@/components/modules/HeroBlock.vue'),
  heroImagesSideBySide: () => import('@/components/modules/HeroImagesSideBySide.vue'),
  editorialText: () => import('@/components/modules/EditorialText.vue'),
  teamSection: () => import('@/components/modules/TeamSection.vue'),
  supportSection: () => import('@/components/modules/SupportSection.vue'),
  qaSection: () => import('@/components/modules/QaSection.vue'),
  closingSection: () => import('@/components/modules/ClosingSection.vue'),
}

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      page: null,
      loadError: null,
      isLoading: false,
    }
  },
  computed: {
    componentMap() {
      return componentMap
    },
    hasModules() {
      return this.page && Array.isArray(this.page.modules) && this.page.modules.length > 0
    },
    firstEditorialIndex() {
      if (!this.page || !Array.isArray(this.page.modules)) {
        return -1
      }
      return this.page.modules.findIndex((module) => module._type === 'editorialText')
    },
  },
  methods: {
    componentProps(block, index) {
      const props = { module: block }
      if (block._type === 'editorialText') {
        const isFirstEditorial = index === this.firstEditorialIndex
        props.showIntro = isFirstEditorial
        props.isFirstEditorial = isFirstEditorial
      }
      return props
    },
  },
  watch: {
    slug(newSlug, oldSlug) {
      if (!newSlug) {
        this.page = null
        return
      }

      if (newSlug !== oldSlug) {
        this.$fetch()
      }
    },
  },
  fetchKey() {
    return this.slug ? `pageRenderer-${this.slug}` : 'pageRenderer'
  },
  async fetch() {
    if (!this.slug) {
      this.page = null
      return
    }

    this.isLoading = true
    this.loadError = null
    try {
      const result = await this.$sanity.fetch(query, { slug: this.slug })
      if (!result) {
        throw new Error(`Page not found for slug "${this.slug}"`)
      }
      this.page = result
      this.$emit('load-success', { slug: this.slug })
    } catch (error) {
      this.loadError = error
      this.page = null
      // eslint-disable-next-line no-console
      console.error('Failed to load page data', error)
      this.$emit('load-error', { slug: this.slug, error })
    } finally {
      this.isLoading = false
    }
  },
}
</script>
