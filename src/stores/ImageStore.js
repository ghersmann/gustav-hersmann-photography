import { defineStore } from 'pinia'

export const useImageStore = defineStore('images', {
  state: () => ({
    imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
    images: [],
    galleries: []
  }),

  actions: {
    async fetchGalleries() {
      try {
        const response = await fetch('/api/galleries')
        this.galleries = await response.json()
      } catch (error) {
        console.error('Error fetching galleries:', error)
      }
    },
    async fetchImagesForGallery(gallerySlug) {
      if (!gallerySlug) return
      try {
        const response = await fetch(`/api/galleryTrack?gallerySlug=${gallerySlug}`)
        this.images[gallerySlug] = await response.json()
      } catch (error) {
        console.error(`Error fetching images for ${gallerySlug}:`, error)
      }
    }
  }
})
