<template>
  <section class="section-single-book-styling">
    <h1>{{ sourceData.title }}</h1>
    <img :src="sourceData.cover" :alt="sourceData.title" />
    <p class="p-styling">{{ sourceData.abstract }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sourceData: {},
    };
  },
  created() {
    fetch("http://localhost:4730/books/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.sourceData = data));
  },
};
</script>

<style>
.section-single-book-styling {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.p-styling {
  width: 60ch;
}
</style>
