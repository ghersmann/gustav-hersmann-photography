<template>
  <footer>
    <nav class="burger-menu" @click="openMenu()">
      <div class="horizontal-line"></div>
      <div class="horizontal-line"></div>
      <div class="horizontal-line"></div>
    </nav>
    <div class="vertical-line"></div>
    <a href="mailto:gustav@gustavhersmman.com" class="email-text">gustav@gustavhersmann.com</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterContact',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    openMenu() {
      console.log('openMenu click')
    }
  }
}
</script>

<style scoped>
footer {
  background-color: black;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: clamp(2rem, 4vmin, 2rem);
  aspect-ratio: 1/1;
  cursor: pointer;
  margin: clamp(0.7rem, 2vmin, 22rem);
}

.horizontal-line {
  height: clamp(2px, 0.3vmin, 2px);
  width: 100%;
  background-color: white;
  border-radius: 1px;
}

.vertical-line {
  height: clamp(2.2rem, 4vmin, 33rem);
  width: 1px;
  background-color: white;
}

.email-text {
  font-family: 'nohemi-thin';
  text-decoration: none;
  color: white;
  font-size: clamp(0.9rem, 2vmin, 8rem);
  margin-left: clamp(0.7rem, 1.7vmin, 0.5rem);
}

@media (min-width: 500px) and (min-height: 500px) {
  .burger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: clamp(0.8rem, 3.5vmin, 2rem);
    aspect-ratio: 1/1;
    cursor: pointer;
    margin: clamp(0.5rem, 1.2vmin, 2rem);
  }

  .horizontal-line {
    height: clamp(1px, 0.3vmin, 2px);
    width: 100%;
    background-color: white;
    border-radius: 1px;
  }

  .vertical-line {
    height: clamp(1.5rem, 4vmin, 3rem);
    width: 1px;
    background-color: white;
  }
}
</style>
