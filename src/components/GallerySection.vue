<template>
  <article class="gallery-article">
    <h2 class="gallery-title" @click="$emit('toggle', gallery.slug)">
      {{ gallery.title }}
      <span class="mobile-indicator">
        <span class="chevron" :class="{ open: isOpen }"></span>
      </span>
    </h2>

    <div v-if="isOpen" class="gallery-track">
      <ThumbNail
        v-for="img in images"
        :key="img.id"
        :img="img"
        :base-url="state.imageBaseUrl"
        @click-image="$emit('open-lightbox', img)"
      />
    </div>
  </article>
</template>

<script>
import ThumbNail from './ThumbNail.vue'
import { useImageStore } from '@/stores/ImageStore'

export default {
  name: 'GallerySection',
  components: { ThumbNail },
  props: {
    gallery: Object,
    images: Array,
    isOpen: Boolean
  },
  data() {
    return {
      state: useImageStore()
    }
  }
}
</script>

<style scoped>
.gallery-title {
  font-family: 'nohemi-thin';
  font-size: clamp(1rem, 2.1vmax, 1.1rem);
  margin: 0.5rem;
  width: 95vw;
  cursor: pointer;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  overflow: hidden;
}

/* Chevron indicator*/
.mobile-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  aspect-ratio: 1 / 1;
  position: relative;
}

.chevron {
  --s: 10%;
  aspect-ratio: 3 / 5;
  height: 100%;
  background: black;
  clip-path: polygon(0 0, var(--s) 0, 100% 50%, var(--s) 100%, 0 100%, calc(100% - var(--s)) 50%);
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(90deg);
}

/* Layout */
.gallery-track {
  flex: 1;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
}

.gallery-article {
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: rgb(230, 230, 230);
}
</style>
