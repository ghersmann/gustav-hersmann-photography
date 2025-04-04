<template>
  <!-- Gallery Track -->
  <article class="gallery-article">
    <p class="article-p">{{ category }}</p>
    <div class="gallery-track">
      <div v-for="img in images" :key="img.id">
        <div class="thumbnail-box">
          <img
            :src="`${state.imageBaseUrl}/250px/${img.file}`"
            :data-full="`${state.imageBaseUrl}/800px/${img.file}`"
            :alt="img.alt_text"
            class="thumbnail"
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
        alt="Full Size Image"
        class="lightbox-img"
      />
    </div>
  </article>
</template>

<script>
import { useImageStore } from '@/stores/ImageStore'

export default {
  name: 'GalleryTrack',
  props: {
    category: String,
    images: Array
  },
  data() {
    return {
      lightboxActive: false,
      currentImage: null,
      state: useImageStore()
    }
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
