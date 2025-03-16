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
      <article class="gallery-article">
        <p class="article-p">My Life is Less Exciting than Yours.</p>
        <div class="gallery-track">
          <div v-for="image in state.imagesLess" :key="image">
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
      </article>
      <article class="gallery-article">
        <p class="article-p">Stone cold land.</p>
        <div class="gallery-track">
          <div v-for="image in state.imagesLess" :key="image">
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
      </article>
      <article class="gallery-article">
        <p class="article-p">Grease.</p>
        <div class="gallery-track">
          <div v-for="image in state.imagesLess" :key="image">
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
      </article>
    </main>

    <!-- Lightbox Modal -->
    <div v-if="lightboxActive" class="lightbox" @click="closeLightbox">
      <img
        :src="`${state.imageBaseUrl}/2500px/${currentImage}`"
        alt="Full Size Image"
        class="lightbox-img"
      />
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

export default {
  data() {
    return {
      state: useImageStore(),
      lightboxActive: false,
      currentImage: null
    }
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
    }
  }
}
</script>
