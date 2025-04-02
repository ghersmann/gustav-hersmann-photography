<template>
  <div class="gallery-track">
    <figure v-for="img in store.images" :key="img.id" class="thumbnail-box">
      <img
        :src="`${store.imageBaseUrl}/250px/${img.file}`"
        :data-full="`${store.imageBaseUrl}/800px/${img.file}`"
        :alt="img.alt_text"
        class="thumbnail"
        @load="swapImage"
        @click="openLightbox(image)"
      />
    </figure>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useImageStore } from '@/stores/ImageStore.js'

const store = useImageStore()

onMounted(async () => {
  store.fetchImages()
})
</script>
