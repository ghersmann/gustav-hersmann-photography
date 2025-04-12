<template>
  <div class="thumbnail-box" @click="$emit('click-image', img)">
    <img
      :src="`${baseUrl}/800px/${img.file}`"
      :alt="img.alt_text"
      class="thumbnail"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  name: 'ThumbNail',
  props: {
    img: Object,
    baseUrl: String
  }
}
</script>

<style scoped>
.thumbnail-box {
  height: 60vh;
  max-width: 80vw;
  aspect-ratio: 1 / 1;
  margin: 0;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  padding: 0.2rem;
  margin: 0;
  cursor: pointer;
}
</style>
