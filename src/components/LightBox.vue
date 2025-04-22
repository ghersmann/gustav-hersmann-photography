<template>
  <article class="lightbox" @click="$emit('close')">
    <div class="lightbox-content">
      <div class="lightbox-close" @click.stop="$emit('close')"></div>
      <img :src="`${baseUrl}/2500px/${image.file}`" :alt="image.alt_text" class="lightbox-img" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'LightBox',
  props: {
    image: Object,
    baseUrl: String
  }
}
</script>

<style scoped>
/* Lightbox Box */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Lightbox Content (wraps image + close button) */
.lightbox-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;
  max-height: 80vh;
  overflow: visible;
}

/* Lightbox Image */
.lightbox-img {
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
  z-index: 1001;
}

/* Lightbox Close Button */
.lightbox-close {
  position: absolute;
  top: -1.7rem;
  right: -1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   font-size: 1rem;
  font-weight: bold; */
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  z-index: 1003;
  line-height: 1;
}

/* Center "×" properly */
.lightbox-close::after {
  content: 'x';
  font-family: 'nohemi-thin';
  font-weight: 100;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
}
</style>
