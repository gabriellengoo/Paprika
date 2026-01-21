import blocksToHtml from '@sanity/block-content-to-html'

export default (_, inject) => {
  const portableText = (blocks = []) => {
    if (!Array.isArray(blocks) || blocks.length === 0) {
      return ''
    }

    try {
      return blocksToHtml({
        blocks,
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to render portable text', error)
      return ''
    }
  }

  inject('portableText', portableText)
}
