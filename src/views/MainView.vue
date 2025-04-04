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
        v-for="(images, category) in state.categorizedImages"
        :key="category"
        :category="category"
        :images="images"
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
      visibleArticles: {}
    }
  },
  components: {
    GalleryTrack
  },
  mounted() {
    this.state.fetchImages()
  }
}
</script>
