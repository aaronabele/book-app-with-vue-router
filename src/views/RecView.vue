<template>
  <div class="home">
    <HeaderComp class="helloworld-header-styling" />
    <BookCard />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";
import BookCard from "@/components/BookCard.vue";

export default {
  name: "RecView",
  components: {
    HeaderComp,
    BookCard,
  },
};
</script>

<style></style>
