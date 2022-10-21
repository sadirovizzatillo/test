<template>
  <div class="add-data container columns is-gapless is-multiline gap-4">
    <input class="input column is-5" type="text" name="" id="" placeholder="Name" v-model="addname">
    <input class="input column is-5" type="number" name="" id="" placeholder="Quantity" v-model="addquantity">
    <input class="input column is-5" type="text" name="" id="" placeholder="Distance" v-model="adddistance">
    <input class="input column is-5" type="date" name="" id="" placeholder="Date" v-model="adddate">
  </div>
  <div class="is-flex p-5">
    <button class="button is-info mr-3 px-6" @click="addData">Add</button>
    <button class="button px-6" @click="(() =>  $router.go(-1))">Back</button>
  </div>
</template>

<script setup>
import router from "@/router"
import store from "@/store"
import { ref } from "@vue/runtime-core" 
const addname = ref('')
const addquantity = ref(null)
const adddate = ref(null)
const adddistance = ref(null)

const addData = () => {
  // if([name.value, quantity.value, date.value, distance.value].includes("")){
    //   return
    // }else{
      const form = {
        name: addname.value,
        quantity: addquantity.value,
        data: adddate.value,
        distance: adddistance.value
      }
      store.dispatch("addData", form)
      router.push({ name: "main"})
    }
    
    // }
  </script>
  
  <style scoped>
  .add-data {
    gap: 20px;
    padding: 20px;
  }
</style>