<template>
  <section>
    <!-- Gallery Track -->
    <article v-for="gallery in state.galleries" :key="gallery.id" class="gallery-article">
      <p class="article-p">{{ gallery.title }}</p>
      <div v-if="state.images[gallery.slug]?.length" class="gallery-track">
        <div v-for="img in state.images[gallery.slug]" :key="img.id">
          <div class="thumbnail-box">
            <img
              :src="`${state.imageBaseUrl}/250px/${img.file}`"
              :alt="img.alt_text"
              class="thumbnail"
              loading="lazy"
              @click="openLightbox(img)"
            />
          </div>
        </div>
      </div>
      <p v-else-if="gallery.visible === false" class="article-p">Open Gallery</p>
      <p v-else class="article-p">Gallery Loading...</p>
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
      state: useImageStore()
    }
  },
  async mounted() {
    await this.state.fetchGalleries()
    this.state.galleries.forEach((gallery) => {
      this.state.fetchImagesForGallery(gallery.slug)
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
    }
  }
}
</script>
