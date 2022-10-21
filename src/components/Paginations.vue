<template>
<nav class="pagination" role="navigation" aria-label="pagination">
  <ul class="pagination-list">
    <li  v-for="(btn, id) in new Array(props.count)" :key="id" @click="setActiveId(id + 1)">
      <button class="pagination-link" :class="[activeId === id + 1 ? 'is-current' : '']" @click="getCount">{{ id + 1 }}</button>
    </li>
  </ul>
</nav>
</template>

<script setup>
import { ref } from "vue"

const activeId = ref(1)
const setActiveId = (id) => {
    activeId.value = id
}
const props = defineProps({
    count:Number,
    getCount: Function
})
</script>

<style>

</style>