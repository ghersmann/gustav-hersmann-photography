import { defineStore } from 'pinia'

export const useImageStore = defineStore('images', {
  state: () => ({
    imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL || 'https://nofotmc.com/images/',
    images: [] // Stores all images from the database
  }),
  getters: {
    // Group images by category
    categorizedImages: (state) => {
      return state.images.reduce((acc, img) => {
        if (!acc[img.category]) {
          acc[img.category] = []
        }
        acc[img.category].push(img)
        return acc
      }, {})
    }
  },
  actions: {
    async fetchImages() {
      try {
        const response = await fetch('/api/gallery')
        this.images = await response.json() // Store all images
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
  }
})
