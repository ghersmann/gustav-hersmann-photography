<template>
  <footer>
    <a href="mailto:gustav@gustavhersmman.com">gustav@gustavhersmann.com</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterContact'
}
</script>

<style scoped>
footer {
  background-color: black;
  width: 100vw;
  height: 20vh;
  position: fixed;
  top: auto;
  bottom: 0;
  z-index: 100;
  padding-left: 2vw;
  height: 7vh;
  text-align: left;
}

a {
  font-family: 'nohemi-thin';
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
}
</style>
