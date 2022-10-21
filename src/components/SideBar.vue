<template>
  <div class="aside has-background-dark">
    <ul class="aside-list">
      <li class="aside-list__item p-4 has-text-white">
          Test App
      </li>
      <li class="aside-list__item p-4 has-text-dark has-background-light">
        <router-link to="/" class="has-text-dark">
          Main
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.aside{
  height: 100%;
}
a{
  text-decoration: none;
}
</style>