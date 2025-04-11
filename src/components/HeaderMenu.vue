<template>
  <header>
    <h1 class="title-logo">
      Gustav<br />
      Hersmann<br />
      Photography
    </h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style scoped>
header {
  background-color: black;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
}

.title-logo {
  margin: clamp(0.6rem, 1.5vw, 1.2rem);
  padding-right: clamp(0.6rem, 1.5vw, 1.2rem);
  border-right: 1px solid white;
}

h1 {
  font-size: clamp(0.6rem, 2vmin, 1.9rem);
  font-family: 'nohemi-regular';
  color: white;
}
</style>
