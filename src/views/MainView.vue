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
      <GalleryTrack />
    </main>

    <footer>
      <h2>
        <a href="mailto:gustav@gustavhersmman.com">gustav@gustavhersmann.com</a>
      </h2>
    </footer>
  </body>
</template>

<script>
import GalleryTrack from '@/components/GalleryTrack.vue'

export default {
  components: {
    GalleryTrack
  }
}
</script>
