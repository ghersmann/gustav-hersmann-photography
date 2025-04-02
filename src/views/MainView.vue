<template>
  <body>
    <header>
      <h1>
        Gustav<br />
        Hersmann<br />
        Photographer
      </h1>
    </header>

    <main>
      <!-- <article v-for="gallery in state.galleries" :key="gallery.id" class="gallery-article">
        <p class="article-p" @click="toggleGallery(gallery.id)">
          {{ gallery.title }}
        </p>

        <div v-if="visibleArticles[gallery.id]" :id="'gallery-' + gallery.id" class="gallery-track">
          <div v-for="image in gallery.images" :key="image">
            <div class="thumbnail-box">
              <img
                :src="`${state.imageBaseUrl}/250px/${image}`"
                :data-full="`${state.imageBaseUrl}/800px/${image}`"
                alt="Gallery Image"
                class="thumbnail"
                @load="swapImage"
                @click="openLightbox(image)"
              />
            </div>
          </div>
        </div>
      </article> -->
      <GalleryTrack />
    </main>

    <!-- Lightbox Modal -->
    <div v-if="lightboxActive" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content">
        <div class="lightbox-close" @click="closeLightbox"></div>
        <img
          :src="`${state.imageBaseUrl}/2500px/${currentImage}`"
          alt="Full Size Image"
          class="lightbox-img"
        />
      </div>
    </div>

    <footer>
      <h2>
        <a href="mailto:gustav@gustavhersmman.com">gustav@gustavhersmann.com</a>
      </h2>
    </footer>
  </body>
</template>

<script>
import { useImageStore } from '@/stores/ImageStore.js'
import GalleryTrack from '@/components/GalleryTrack.vue'

export default {
  data() {
    return {
      state: useImageStore(),
      lightboxActive: false,
      currentImage: null,
      visibleArticles: {}
    }
  },
  components: {
    GalleryTrack
  },
  created() {
    this.state.galleries.forEach((gallery) => {
      this.visibleArticles[gallery.id] = gallery.render
    })
  },
  methods: {
    swapImage(event) {
      event.target.src = event.target.dataset.full
    },
    openLightbox(image) {
      this.currentImage = image
      this.lightboxActive = true
    },
    closeLightbox() {
      this.lightboxActive = false
      this.currentImage = null
    },

    toggleGallery(galleryId) {
      this.visibleArticles[galleryId] = !this.visibleArticles[galleryId]

      if (this.visibleArticles[galleryId]) {
        this.$nextTick(() => {
          const galleryElement = document.getElementById(`gallery-${galleryId}`)
          if (galleryElement) {
            const headerHeight = document.querySelector('header').offsetHeight
            window.scrollTo({
              top: galleryElement.offsetTop - headerHeight,
              behavior: 'smooth'
            })
          }
        })
      }
    }
  }
}
</script>
