<template>
  <router-link :to="{ name: 'details', params: { id: this.bookId } }">
    <button class="button-link-styling">More Details</button></router-link
  >
  <router-view></router-view>
</template>

<script>
export default {
  props: {
    bookId: String,
  },
};
</script>

<style scoped>
.button-link-styling {
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid #42b983;
  border-radius: 15px;
  background-color: white;
  font-size: 1.1rem;
  cursor: pointer;
}
</style>
