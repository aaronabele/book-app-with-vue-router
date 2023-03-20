<template>
  <h1 class="booklist-header-styling">
    See our complete Portfolio of Books below:
  </h1>
  <div>
    <ListComponent />
  </div>
</template>

<script>
import ListComponent from "@/components/ListComponent";

export default {
  components: {
    ListComponent,
  },
};
</script>

<style scoped>
.booklist-header-styling {
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
</style>
