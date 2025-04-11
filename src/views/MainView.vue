<template>
  <body>
    <HeaderMenu />
    <main>
      <GalleryTrack />
    </main>
    <FooterContact />
  </body>
</template>

<script>
import FooterContact from '@/components/FooterContact.vue'
import GalleryTrack from '@/components/GalleryTrack.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  components: {
    GalleryTrack,
    HeaderMenu,
    FooterContact
  }
}
</script>
