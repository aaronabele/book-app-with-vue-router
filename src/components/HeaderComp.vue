<template>
  <div class="hello">
    <h2 class="sub-header-styling">See the most recommended Books below:</h2>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-styling {
  font-size: 3rem;
  margin: 5rem;
}

.sub-header-styling {
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
