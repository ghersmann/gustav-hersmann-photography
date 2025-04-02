import { defineStore } from 'pinia'

export const useImageStore = defineStore('images', {
  state: () => ({
    imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL || 'https://nofotmc.com/images/',
    images: [],
    galleries: [
      {
        id: 'gallery1',
        title: 'My Life is Less Exciting than Yours',
        render: true
      },
      {
        id: 'gallery2',
        title: 'Stone Cold Land',
        render: false
      },
      {
        id: 'gallery3',
        title: 'Grease',
        render: false
      }
    ]
  }),
  actions: {
    async fetchImages() {
      try {
        const response = await fetch('/api/gallery')
        this.images = await response.json()
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
  }
})
