<template>
  <section>
    <!-- Gallery Track -->
    <article v-for="gallery in state.galleries" :key="gallery.id" class="gallery-article">
      <!-- Clickable Title to Toggle Gallery -->
      <p class="article-p" @click="toggleGallery(gallery.slug)">
        {{ gallery.title }}
      </p>

      <!-- Conditional Gallery Rendering -->
      <div v-if="isOpen(gallery.slug)" class="gallery-track">
        <div v-for="img in state.images[gallery.slug]" :key="img.id">
          <div class="thumbnail-box">
            <img
              :src="`${state.imageBaseUrl}/800px/${img.file}`"
              :alt="img.alt_text"
              class="thumbnail"
              loading="lazy"
              @click="openLightbox(img)"
            />
          </div>
        </div>
      </div>
    </article>

    <!-- Lightbox Modal -->
    <article v-if="lightboxActive" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content">
        <div class="lightbox-close" @click="closeLightbox"></div>
        <img
          :src="`${state.imageBaseUrl}/2500px/${currentImage.file}`"
          :alt="currentImage.alt_text"
          class="lightbox-img"
        />
      </div>
    </article>
  </section>
</template>

<script>
import { useImageStore } from '@/stores/ImageStore.js'

export default {
  name: 'GalleryTrack',
  data() {
    return {
      lightboxActive: false,
      currentImage: null,
      state: useImageStore(),
      openGalleries: new Set()
    }
  },

  async mounted() {
    await this.state.fetchGalleries()

    // Open the first gallery by default
    const firstGallerySlug = this.state.galleries[0]?.slug
    if (firstGallerySlug) {
      this.openGalleries.add(firstGallerySlug)
      await this.state.fetchImagesForGallery(firstGallerySlug)
    }

    // Preload other visible galleries (except the first one)
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

    async toggleGallery(gallerySlug) {
      const isOpen = this.openGalleries.has(gallerySlug)
      const newVisibility = !isOpen

      if (newVisibility) {
        try {
          await fetch('/api/update-gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: gallerySlug, visible: true })
          })

          this.openGalleries.add(gallerySlug)
          const gallery = this.state.galleries.find((g) => g.slug === gallerySlug)
          if (gallery) gallery.visible = true

          if (!this.state.images[gallerySlug]?.length) {
            await this.state.fetchImagesForGallery(gallerySlug)
          }
        } catch (err) {
          console.error('Error updating visibility:', err)
        }
      } else {
        this.openGalleries.delete(gallerySlug)

        try {
          await fetch('/api/update-gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: gallerySlug, visible: false })
          })

          const gallery = this.state.galleries.find((g) => g.slug === gallerySlug)
          if (gallery) gallery.visible = false
        } catch (err) {
          console.error('Error updating visibility:', err)
        }
      }
    },

    isOpen(gallerySlug) {
      return this.openGalleries.has(gallerySlug)
    }
  }
}
</script>
