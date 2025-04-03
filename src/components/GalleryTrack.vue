<template>
  <!-- Gallery Track -->
  <article class="gallery-article">
    <p class="article-p">{{ category }}</p>
    <div class="gallery-track">
      <div v-for="img in images" :key="img.id">
        <div class="thumbnail-box">
          <img
            :src="`${imageBaseUrl}/250px/${img.file}`"
            :data-full="`${imageBaseUrl}/800px/${img.file}`"
            :alt="img.alt_text"
            class="thumbnail"
          />
        </div>
      </div>
    </div>
  </article>

  <!-- Lightbox Modal -->
  <!-- 
   @click="openLightbox(img)"  
  <article>
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
  </article> -->
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  category: String, // Category name
  images: Array // Filtered images for this category
})

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL || 'https://nofotmc.com/images/'

/* const openLightbox = (image) => {
  console.log('Opening lightbox for', image)
} */
</script>
