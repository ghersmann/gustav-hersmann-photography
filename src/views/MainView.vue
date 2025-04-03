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
      <GalleryTrack
        v-for="(images, category, title) in state.categorizedImages"
        :key="category"
        :category="category"
        :images="images"
        :title="title"
      />
    </main>

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
      //lightboxActive: false,
      //currentImage: null,
      visibleArticles: {}
    }
  },
  components: {
    GalleryTrack
  },
  mounted() {
    this.state.fetchImages()
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

    /* toggleGallery(galleryId) {
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
    } */
  }
}
</script>

<!-- <style scoped>
h2 {
  color: black;
}
</style> -->
