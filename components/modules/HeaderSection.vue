<template>
  <header class="module header-section">
    <div class="header-section__nav" ref="nav">
      <img
        src="/logo.svg"
        class="header-section__logo-image"
      />
      <!-- <p class="header-section__logo">{{ module.logo || 'Paprika' }}</p> -->

      <nav class="header-section__links" aria-label="Primary navigation">
        <a href="#editorial-text__headline2">about</a>
        <a href="#closing">support</a>
        <a href="#support">team</a>
        <a href="#page-bottom">contacts</a>
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
    <div
      class="header-section__nav-spacer"
      :style="{ height: `${navHeight}px` }"
      aria-hidden="true"
    />

    <div class="header-section__title">
      <p v-if="module.tagline" class="header-section__eyebrow">
        {{ module.tagline }}
      </p>
      <h1
        v-if="module.headline"
        class="header-section__headline"
        :aria-label="module.headline"
        role="text"
      >
        <span
          class="header-section__headline-track"
          aria-hidden="true"
        >
          <span>{{ module.headline }}</span>
          <span>{{ module.headline }}</span>
        </span>
      </h1>
      <!-- <div
        v-if="module.description && module.description.length"
        class="header-section__description"
        v-html="$portableText(module.description)"
      /> -->
      <div class="paprika-magazine-container">
<span>первый глянцевый выпуск журнала</span>
<span class="paprika-magazine"> Paprika Magazine — «Silent Riot»</span>
</div>
     
    </div>

    <div class="header-section__meta">
      <div class="header-section__card">
        <div>
          <a
            v-if="module.preOrderButton && module.preOrderButton.label"
            class="header-section__pill"
            :href="module.preOrderButton.url || '#'"
          >
            {{ module.preOrderButton.label }}
          </a>
          <p class="header-section__label">{{ module.preOrderLabel }}</p>
          <img
            src="/assets/digimg.svg"
            alt="Digital illustration"
            class="header-section__dig-image"
          />
        </div>

        <div
          v-if="infoBlockLines.length"
          class="header-section__info-block"
        >
          <p
            v-for="(line, index) in infoBlockLines"
            :key="`info-line-${index}`"
            class="header-section__info-line"
          >
            <span
              v-if="line.left"
              class="header-section__info-line-left"
            >
              {{ line.left }}
            </span>
            <span
              v-if="line.right"
              class="header-section__info-line-right"
            >
              {{ line.right }}
            </span>
          </p>
        </div>
        <div
          v-else-if="module.infoBlock && module.infoBlock.length"
          class="header-section__info-block header-section__info-block--raw"
          v-html="$portableText(module.infoBlock)"
        />
      </div>

    <div
      v-if="galleryImages.length"
      class="header-section__gallery"
      ref="gallery"
    >
      <div
        class="header-section__gallery-track"
        :style="trackStyle"
        ref="galleryTrack"
      >
        <figure
          v-for="(image, index) in galleryImages"
          :key="image._key || index"
          class="header-section__gallery-slide"
        >
          <a
            v-if="imageLink(image)"
            :href="imageLink(image)"
            class="header-section__gallery-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              v-if="imageUrl(image)"
              :src="imageUrl(image)"
              :alt="imageAlt(image)"
            />
          </a>
          <img
            v-else
            v-if="imageUrl(image)"
            :src="imageUrl(image)"
            :alt="imageAlt(image)"
          />
          <figcaption
            v-if="image.caption || image.year"
            class="header-section__caption"
          >
            <p
              v-if="image.caption"
              class="header-section__caption-text"
            >
              {{ image.caption }}
            </p>
            <p class="header-section__caption-year">
              {{ image.year || '0000' }}
            </p>
          </figcaption>
        </figure>
      </div>

      <div
        v-if="hasMultipleGalleryImages && (showNextArrow || showBackArrow)"
        class="header-section__gallery-actions"
      >
        <button
          v-if="showNextArrow"
          type="button"
          class="header-section__gallery-action"
          :disabled="!canAdvance"
          @click="nextImage"
          aria-label="Next image"
        >
          <img
            src="/assets/Arrow.svg"
            alt=""
            aria-hidden="true"
            class="header-section__gallery-action-icon"
          />
        </button>
        <button
          v-if="showBackArrow"
          type="button"
          class="header-section__gallery-action header-section__gallery-action--back"
          @click="resetGallery"
          aria-label="Back to first image"
        >
          <img
            src="/assets/Arrow.svg"
            alt=""
            aria-hidden="true"
            class="header-section__gallery-action-icon"
          />
        </button>
      </div>

    
    </div>
    </div>
      <p id="editorial-text__headline2" class="editorial-text__headline2">
        Первый печатный выпуск,<br />
        подготовленный командой<br />
        энтузиастов из журнала<br />
        Paprika.
      </p>
      <div class="text-parent"><div class="text"><span>Paprika — это независимый мультимедийный журнал о музыке, который уже четыре года делают 20 энтузиастов-волонтёров.</span> <span class="span"> Мы представляем кураторскую альтернативу алгоритмам и информационному шуму, поддерживая локальную сцену и создавая среду для осмысленного слушания.</span></div> <img alt="" src="/assets/telegram-cloud-photo-size-2-52-icon.jpg" class="telegram-cloud-photo-size-2-52-icon"></div>
   
  
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
  data() {
    return {
      currentImageIndex: 0,
      slideOffset: 0,
      forwardClicks: 0,
      navHeight: 0,
    }
  },
  computed: {
    galleryImages() {
      return this.module.featureImages || []
    },
    hasMultipleGalleryImages() {
      return this.galleryImages.length > 1
    },
    showNextArrow() {
      return this.hasMultipleGalleryImages && this.canAdvance && this.forwardClicks < 2
    },
    trackStyle() {
      const galleryRef = this.$refs ? this.$refs.gallery : null
      const galleryWidth =
        this.slideOffset || (galleryRef ? galleryRef.clientWidth : 0)
      const translateX = galleryWidth
        ? this.currentImageIndex * galleryWidth
        : 0
      return {
        transform: `translateX(-${translateX}px)`,
      }
    },
    canAdvance() {
      return this.currentImageIndex < this.galleryImages.length - 1
    },
    showBackArrow() {
      return (
        this.hasMultipleGalleryImages &&
        (this.forwardClicks >= 2 ||
          this.currentImageIndex === this.galleryImages.length - 1)
      )
    },
    infoBlockLines() {
      const blocks = this.module.infoBlock || []
      const lines = []

      blocks.forEach((block) => {
        let currentLineSegments = []

        const pushLine = () => {
          if (currentLineSegments.length) {
            lines.push([...currentLineSegments])
            currentLineSegments = []
          }
        }

        if (Array.isArray(block.children)) {
          block.children.forEach((child) => {
            if (!child.text) {
              return
            }

            const textParts = child.text.split('\n')

            textParts.forEach((part, index) => {
              if (part) {
                currentLineSegments.push({
                  text: part,
                  marks: child.marks || [],
                })
              }

              if (index < textParts.length - 1) {
                pushLine()
              }
            })
          })
        }

        pushLine()
      })

      return lines
        .map((segments) => {
          const leftParts = []
          const rightParts = []
          let rightSectionStarted = false

          segments.forEach((segment) => {
            if (!segment.text) {
              return
            }

            const hasUnderline =
              Array.isArray(segment.marks) && segment.marks.includes('underline')

            if (hasUnderline) {
              rightSectionStarted = true
              rightParts.push(segment.text)
            } else if (rightSectionStarted) {
              rightParts.push(segment.text)
            } else {
              leftParts.push(segment.text)
            }
          })

          const left = leftParts.join('').trim()
          const right = rightParts.join('').trim()

          if (!left && !right) {
            return null
          }

          return { left, right }
        })
        .filter(Boolean)
    },
  },
  watch: {
    galleryImages(newImages, oldImages) {
      const prevLength = (oldImages || []).length
      if (newImages.length !== prevLength) {
        this.currentImageIndex = 0
        this.forwardClicks = 0
      } else if (this.currentImageIndex >= newImages.length) {
        this.currentImageIndex = 0
        this.forwardClicks = 0
      }
      this.$nextTick(this.updateGalleryOffset)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateGalleryOffset()
      this.updateNavHeight()
    })
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.handleResize)
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize)
    }
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
    imageLink(image) {
      const normalizedImage = this.normalizeImage(image)
      if (normalizedImage && normalizedImage.link) {
        return normalizedImage.link
      }
      if (image && image.link) {
        return image.link
      }
      return ''
    },
    resetGallery() {
      this.currentImageIndex = 0
      this.forwardClicks = 0
    },
    updateGalleryOffset() {
      if (typeof window === "undefined") {
        return
      }
      if (
        !this.$refs ||
        !this.$refs.gallery ||
        !this.$refs.galleryTrack
      ) {
        return
      }
      const gallery = this.$refs.gallery
      const computedStyles = window.getComputedStyle(
        this.$refs.galleryTrack
      )
      const gap = parseFloat(computedStyles.gap) || 0
      const offset = gallery.clientWidth + gap
      if (offset && offset !== this.slideOffset) {
        this.slideOffset = offset
      }
    },
    handleResize() {
      this.updateGalleryOffset()
      this.updateNavHeight()
    },
    updateNavHeight() {
      if (typeof window === "undefined") {
        return
      }
      if (!this.$refs || !this.$refs.nav) {
        return
      }
      const navEl = this.$refs.nav
      const height = navEl ? navEl.getBoundingClientRect().height : 0
      if (height !== this.navHeight) {
        this.navHeight = height
      }
    },
    prevImage() {
      const length = this.galleryImages.length
      if (length < 2) {
        return
      }
      this.currentImageIndex =
        (this.currentImageIndex - 1 + length) % length
    },
    nextImage() {
      const length = this.galleryImages.length
      if (length < 2) {
        return
      }
      if (this.currentImageIndex < length - 1) {
        if (this.forwardClicks >= 2) {
          return
        }
        this.currentImageIndex += 1
        this.forwardClicks += 1
      }
    },
  },
}
</script>
