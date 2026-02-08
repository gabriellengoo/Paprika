<template>
  <footer id="page-bottom" class="footer-section">
    <div v-if="footer" class="footer-section__content">
      <div class="footer-section__column footer-section__contact">
        <p
          v-for="(contact, index) in contactList"
          :key="contact._key || `${contact.label}-${index}`"
          class="footer-section__contact-row"
        >
          <span class="footer-section__secondary-label">
            {{ contact.label || '' }}{{ contact.label ? ':' : '' }}
          </span>
          <span class="footer-section__primary-value">{{ contact.value }}</span>
        </p>
      </div>

      <div class="footer-section__column footer-section__center">
        <div v-if="socialList.length" class="footer-section__social">
          <p
            v-for="(item, index) in socialList"
            :key="item._key || `${item.label}-${index}`"
            class="footer-section__social-item"
          >
            <template v-if="item.wordLinks?.length">
              <template v-for="(word, wordIndex) in item.wordLinks">
                <a
                  v-if="word.url"
                  :key="`footer-word-${wordIndex}-${word.label}`"
                  :href="word.url"
                  target="_blank"
                  rel="noreferrer"
                  class="footer-section__link footer-section__word-link"
                >
                  {{ word.label }}
                </a>
                <span
                  v-else
                  :key="`footer-word-${wordIndex}-${word.label}`"
                  class="footer-section__social-first footer-section__word-link"
                >
                  {{ word.label }}
                </span>
              </template>
            </template>
            <template v-else>
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noreferrer"
                class="footer-section__link"
              >
                <span class="footer-section__social-first">{{ item.labelFirst }}</span>
                <span
                  v-if="item.labelRest"
                  class="footer-section__social-rest"
                >
                  {{ item.labelRest }}
                </span>
              </a>
              <span v-else>
                <span class="footer-section__social-first">{{ item.labelFirst }}</span>
                <span
                  v-if="item.labelRest"
                  class="footer-section__social-rest"
                >
                  {{ item.labelRest }}
                </span>
              </span>
            </template>
          </p>
        </div>
        <div class="footer-section__podcast">
          <p v-if="footer.podcastName" class="footer-section__podcast-title">
            {{ footer.podcastName }}
          </p>
          <p v-if="footer.podcastPlatforms" class="footer-section__podcast-platforms">
            {{ footer.podcastPlatforms }}
          </p>
        </div>
      </div>

      <div class="footer-section__column footer-section__meta">
        <p v-if="footer.quote" class="footer-section__quote">{{ footer.quote }}</p>
        <p v-if="footer.copyright" class="footer-section__copyright">
          {{ footer.copyright }}
        </p>
      </div>
    </div>

    <div v-else class="footer-section__fallback">
      <p>{{ footerStatusMessage }}</p>
    </div>
  </footer>
</template>

<script>
const footerQuery = `
*[_type == "footerSection"][0]{
  contacts[]{
    label,
    value
  },
  socialLinks[]{
    label,
    url,
    wordLinks[]{
      label,
      url
    }
  },
  podcastName,
  podcastPlatforms,
  quote,
  copyright
}
`

export default {
  name: 'FooterSection',
  data() {
    return {
      footer: null,
      footerError: null,
      isFooterLoading: false,
    }
  },
  computed: {
    contactList() {
      const contacts = this.footer?.contacts
      return Array.isArray(contacts) ? contacts : []
    },
    socialList() {
      const socials = this.footer?.socialLinks
      if (!Array.isArray(socials)) {
        return []
      }
      return socials.map((link) => {
        const normalizedWordLinks = Array.isArray(link.wordLinks)
          ? link.wordLinks
              .map((word) => ({
                label: (word?.label || '').trim(),
                url: word?.url,
              }))
              .filter((word) => word.label)
          : []

        if (normalizedWordLinks.length) {
          return {
            ...link,
            wordLinks: normalizedWordLinks,
          }
        }

        const labelText = (link.label || '').trim()
        if (!labelText) {
          return {
            ...link,
            labelFirst: '',
            labelRest: '',
          }
        }

        const [first, ...restWords] = labelText.split(/\s+/)
        return {
          ...link,
          labelFirst: first,
          labelRest: restWords.join(' '),
        }
      })
    },
    footerStatusMessage() {
      if (this.isFooterLoading) {
        return 'Loading footer content…'
      }
      if (this.footerError) {
        return 'Unable to load footer content.'
      }
      return 'Create a footerSection document in Sanity to populate this area.'
    },
  },
  async fetch() {
    if (!this.$sanity) {
      return
    }

    this.footerError = null
    this.isFooterLoading = true
    try {
      this.footer = await this.$sanity.fetch(footerQuery)
    } catch (error) {
      this.footerError = error
      // eslint-disable-next-line no-console
      console.error('Failed to load footer data', error)
      this.footer = null
    } finally {
      this.isFooterLoading = false
    }
  },
}
</script>

<style scoped>
.footer-section {
  background: transparent;
  color: #111;
  padding: 40px 24px 48px;
}

.footer-section__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    gap: clamp(24px, 6vw, 120px);
    text-align: left;
}



.footer-section__contact{
     justify-content: right;
    letter-spacing: 0.02em;
    /* align-items: end; */
    display: flex;
    flex-direction: column;
}

.footer-section__meta{
      justify-content: left;
    letter-spacing: 0.02em;
    align-items: end;
    display: flex;
    flex-direction: column;
}

.footer-section__center{
    text-align: center;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
}

.footer-section__contact-row {
  margin: 3px 0;
  font-size: 16px;
      font-size: 1vw;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

.footer-section__secondary-label {
  text-transform: lowercase;
  font-weight: 600;
  margin-right: 6px;
  color: #111;
}

.footer-section__primary-value {
  color: #747474;
}

.footer-section__social {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.footer-section__social-item {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 2vw, 24px);
      font-size: 2vw;
          font-size: 1.5vw;
  font-weight: 400;
  letter-spacing: 0.04em;
          letter-spacing: -0.05em;
}

.footer-section__social-first {
  margin-right: 1vw;
}

.footer-section__word-link {
  font-size: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  text-transform: none;
  color: inherit;
  text-decoration: none;
}

.footer-section__link {
  color: inherit;
  text-decoration: none;
}

.footer-section__podcast {
  margin-top: 12px;
}

.footer-section__podcast-title,
.footer-section__podcast-platforms {
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.footer-section__podcast-platforms {
  font-size: 16px;
  color: #555;
}

.footer-section__quote {
  font-style: italic;
  color:  #7e7e7e;
  margin-bottom: 6px;
}

.footer-section__copyright {
  letter-spacing: 0.05em;
  font-weight: 400;
}

.footer-section__fallback {
  text-align: center;
  font-size: 14px;
  color: #7a7a7a;
  padding: 32px 0;
}

@media (max-width: 768px) {
  .footer-section__content {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }
  .footer-section__column {
    width: 100%;
    text-align: center;
  }
  .footer-section__contact-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.2rem;
    font-size: clamp(0.95rem, 3vw, 1.1rem);
  }
  .footer-section__social {
    align-items: center;
    gap: 0.25rem;
  }
  .footer-section__social-item {
    font-size: clamp(0.85rem, 3vw, 1rem);
  }
  .footer-section__podcast-title {
    font-size: clamp(0.95rem, 3.2vw, 1.15rem);
  }
  .footer-section__podcast-platforms {
    font-size: clamp(0.85rem, 3vw, 1rem);
  }
  .footer-section__meta {
    align-items: center;
  }
}
</style>
