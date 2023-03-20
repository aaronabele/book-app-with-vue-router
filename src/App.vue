<template>
  <header>
    <nav class="navigation-styling">
      <router-link class="link-styling" to="/">Recommendations</router-link>
      |
      <router-link class="link-styling" to="/bookList">Book List</router-link> |
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="footer-styling">
    <FooterComp />
  </footer>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: snow;
}

.navigation-styling {
  background-color: rgb(231, 231, 231);
  border-radius: 15px;
}

.link-styling {
  font-size: 1.5rem;
  padding: 1rem;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer-styling {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
