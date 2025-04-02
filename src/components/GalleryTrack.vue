<script setup>
import { ref, onMounted } from 'vue'

const images = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/api/gallery')
    images.value = await response.json()
  } catch (error) {
    console.error('Error fetching images:', error)
  }
})
</script>

<template>
  <div class="gallery">
    <p>Gallery Component</p>
    <figure v-for="img in images" :key="img.id" class="thumbnail-box">
      <img :src="img.file" :alt="img.alt_text" class="thumbnail" />
      <figcaption>{{ img.title }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.thumbnail-box {
  width: 200px;
  text-align: center;
}

.thumbnail {
  max-width: 100%;
  height: auto;
}
</style>
