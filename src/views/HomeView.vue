<template>
  <div class="columns is-gapless">
    <div class="column is-2">
      <SideBar/>
    </div>
    <div class="column is-10">
      <div class="has-background-light is-flex is-justify-content-flex-end p-2 is-align-items-center">
        <h4 class="mr-4">{{ user?.name }}</h4>
        <button class="button is-primary is-normal" @click="logout">Logout</button>
      </div>
      <div class="p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import store from "@/store";
import { computed, onMounted, ref } from "@vue/runtime-core";
import SideBar from "../components/SideBar.vue";

const user = ref()
const logout = async () => {
  await localStorage.clear()
  router.push({ name: "Login" })
}

onMounted( async () => {
  user.value = await JSON.parse(localStorage.getItem("user"))
})

</script>

<style scoped>
.home{
  height: 100%;
}
.columns{
  height: 100%;
}
.column{
  padding: 0;
  
}
</style>
