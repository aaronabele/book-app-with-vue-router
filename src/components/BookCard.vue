<template>
  <div class="card-section">
    <div class="card-section-cards-positioning">
      <div class="card-wrapper" v-for="book in sourceDataTEN" :key="book.isbn">
        <img :src="book.cover" :alt="book.title" class="card-image-styling" />
        <div class="card-information-styling">
          <h2 class="card-information-header">{{ book.title }}</h2>
          <span class="card-information-text-styling"
            >ISBN: {{ book.isbn }}</span
          ><br />
          <span class="card-information-text-styling"
            >Author: <b>{{ book.author }}</b></span
          >
          <br />
          <span class="card-information-text-styling"
            >Price: {{ book.price }}</span
          >
          <br />
          <BaseButton :bookId="book.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      sourceDataTEN: [],
    };
  },
  created() {
    fetch("http://localhost:4730/books?_page=2&_limit=10")
      .then((response) => response.json())
      .then((data) => (this.sourceDataTEN = data));
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 10px;
  margin: 0 0;
  padding: 0 0;
}

.card-section {
  width: 150rem;
  margin-left: auto;
  margin-right: auto;
}

.card-section-cards-positioning {
  display: grid;
  grid-template-columns: 30rem 30rem 30rem 30rem 30rem;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
  width: 30rem;
  max-width: 35rem;
  height: 45rem;
  max-height: 50rem;
  border-radius: 15px;
}

.card-image-styling {
  width: 25rem;
  max-width: 25rem;
  height: 30rem;
  max-height: 30rem;
}

.card-information-styling {
  width: 100%;
  padding: 2rem;
}

.card-information-header {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

.card-information-text-styling {
  font-size: 1.3rem;
}

.card-button-styling {
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid #42b983;
  border-radius: 15px;
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
