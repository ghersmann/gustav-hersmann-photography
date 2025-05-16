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
      openGallerySlug: null
    }
  },

  async created() {
    await this.state.fetchGalleries()

    const firstGallerySlug = this.state.galleries[0]?.slug
    if (firstGallerySlug) {
      await this.state.fetchImagesForGallery(firstGallerySlug)
      this.openGallerySlug = firstGallerySlug
    }
    this.preloadRemainingGalleries(firstGallerySlug)
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

    async preloadRemainingGalleries(excludeSlug) {
      const slugsToPreload = this.state.galleries
        .map((g) => g.slug)
        .filter((slug) => slug !== excludeSlug)

      for (const slug of slugsToPreload) {
        if (!this.state.images[slug]?.length) {
          await this.state.fetchImagesForGallery(slug)
        }
      }
    },

    async toggleGallery(slug) {
      console.log('toggleGAllery', slug)
      const isCurrentlyOpen = this.openGallerySlug === slug

      if (isCurrentlyOpen) {
        console.log('if isCurrentlyOpen', slug)
        this.openGallerySlug = null
      } else {
        console.log('state.fetchImages called from gallerytrack')
        if (!this.state.images[slug]?.length) {
          await this.state.fetchImagesForGallery(slug)
        }
        this.openGallerySlug = slug
      }
    },

    isOpen(slug) {
      return this.openGallerySlug === slug
    }
  }
}
</script>
