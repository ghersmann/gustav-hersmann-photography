<template>
  <GallerySection
    v-for="gallery in state.galleries"
    :key="gallery.id"
    :gallery="gallery"
    :images="state.images[gallery.slug]"
    :is-open="isOpen(gallery.slug)"
    @toggle="toggleGallery"
    @open-lightbox="openLightbox"
  />

  <LightBox
    v-if="lightboxActive"
    :image="currentImage"
    :base-url="state.imageBaseUrl"
    @close="closeLightbox"
  />
</template>

<script>
import { useImageStore } from '@/stores/ImageStore.js'
import GallerySection from './GallerySection.vue'
import LightBox from './LightBox.vue'

export default {
  name: 'GalleryTrack',
  components: {
    GallerySection,
    LightBox
  },
  data() {
    return {
      lightboxActive: false,
      currentImage: null,
      state: useImageStore(),
      openGalleries: new Set()
    }
  },
  async created() {
    await this.state.fetchGalleries()

    const firstGallerySlug = this.state.galleries[0]?.slug
    if (firstGallerySlug) {
      this.openGalleries.add(firstGallerySlug)
      await this.state.fetchImagesForGallery(firstGallerySlug)
    }

    this.state.galleries.forEach((gallery) => {
      if (gallery.visible && gallery.slug !== firstGallerySlug) {
        this.openGalleries.add(gallery.slug)
      }
    })
  },
  methods: {
    openLightbox(image) {
      this.currentImage = image
      this.lightboxActive = true
    },
    closeLightbox() {
      this.lightboxActive = false
      this.currentImage = null
    },
    async toggleGallery(slug) {
      const isOpen = this.openGalleries.has(slug)
      const newVisibility = !isOpen

      if (newVisibility) {
        await fetch('/api/update-gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, visible: true })
        })

        this.openGalleries.add(slug)
        const gallery = this.state.galleries.find((g) => g.slug === slug)
        if (gallery) gallery.visible = true

        if (!this.state.images[slug]?.length) {
          await this.state.fetchImagesForGallery(slug)
        }
      } else {
        this.openGalleries.delete(slug)

        await fetch('/api/update-gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, visible: false })
        })

        const gallery = this.state.galleries.find((g) => g.slug === slug)
        if (gallery) gallery.visible = false
      }
    },
    isOpen(slug) {
      return this.openGalleries.has(slug)
    }
  }
}
</script>
