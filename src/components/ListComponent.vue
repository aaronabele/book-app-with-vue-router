<template>
  <div class="ul-wrapper">
    <ul class="unorderedlist-styling">
      <li class="listitem-styling" v-for="book in sourceData" :key="book.isbn">
        <img class="img-styling" :src="book.cover" :alt="book.title" />
        <b>{{ book.title }}</b> &nbsp; - &nbsp;
        <span class="listitem-author-styling">
          Author:&nbsp; {{ book.author }}
        </span>
        &nbsp;
        <router-link :to="{ name: 'details', params: { id: book.id } }">
          &nbsp;
          <span class="router-link-styling">
            => More Details
          </span></router-link
        >
        <router-view></router-view>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceData: [],
    };
  },
  created() {
    fetch("http://localhost:4730/books")
      .then((response) => response.json())
      .then((data) => (this.sourceData = data));
  },
};
</script>

<style scoped>
.ul-wrapper {
  max-width: 1200px;
  min-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.unorderedlist-styling {
  list-style-type: none;
}

.listitem-styling {
  padding: 0.3rem 0;
  display: flex;
  justify-content: left;
  align-items: center;
}

.img-styling {
  width: 3rem;
  height: auto;
}

.listitem-author-styling {
  font-style: italic;
}

.listitem-pages-styling {
  text-decoration: underline;
}

.router-link-styling {
  text-decoration: underline #42b983;
  color: black;
  font-weight: 800;
}
</style>
