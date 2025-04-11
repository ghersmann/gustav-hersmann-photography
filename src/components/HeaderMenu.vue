<template>
  <header>
    <h1 class="title-logo">
      Gustav<br />
      Hersmann<br />
      Photography
    </h1>
    <div class="white-line-header"></div>
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
  height: clamp(5rem, 13vmin, 12rem);
  display: flex;
  align-items: center;
}

.title-logo {
  height: clamp(3rem, 8vmin, 20rem);
  padding-left: clamp(1rem, 1.7vw, 2rem);
}

h1 {
  font-size: clamp(0.9rem, 2.4vmin, 1.9rem);
  font-family: 'nohemi-regular';
  color: white;
}

.white-line-header {
  border-right: 1px solid white;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: clamp(1rem, 1.7vw, 2rem);
  height: clamp(3rem, 8vmin, 20rem);
}

/* Media query for tablet portrait screens */
@media screen and (min-width: 600px) and (max-width: 1025px) and (orientation: portrait) {
  header {
    height: clamp(5rem, 13vmin, 10rem);
    background-color: darkolivegreen;
  }

  .title-logo,
  .white-line-header {
    height: clamp(1rem, 8.5vmin, 8rem);
  }

  h1 {
    font-size: clamp(1.1rem, 2.6vmin, 1.8rem);
  }
}

/* Media query for phone landscape screens */
@media screen and (max-height: 440px) and (orientation: landscape) {
  header {
    height: clamp(4rem, 16vmin, 5rem);
    background-color: darkslategrey;
  }

  .title-logo,
  .white-line-header {
    height: clamp(2.6rem, 3vmin, 3rem);
  }

  h1 {
    font-size: clamp(0.8rem, 2.7vmin, 1.8rem);
  }
}
</style>
