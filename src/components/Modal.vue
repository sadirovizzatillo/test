<template>
  <div class="modal is-active">
  <div class="modal-background" @click="$emit('changeModal', false)"></div>
  <div class="modal-card ">
    <header class="modal-card-head">
      <p class="modal-card-title">Change Data</p>
      <button class="delete" aria-label="close" @click="$emit('changeModal', false)"></button>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
      <button class="button is-success" @click="$emit('changeModal', true)">Save changes</button>
      <button class="button" @click="$emit('changeModal', false)">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script setup>

import { ref } from "@vue/runtime-core" 

const isActive = ref(props.modal)
const props = defineProps({
    modal:Boolean
})
</script>

<style>

</style>