<template>
  <div class="columns is-striped is-justify-content-flex-end p-3 my-2">
    <div class="select is-link mr-4">
      <select @change="sortitem">
        <option value="name">Sort by name</option>
        <option value="quantity">Sort by quantity</option>
        <option value="distance">Sort by distance</option>
        <option value="data">Sort by date</option>
      </select>
    </div>
    <input class="input column is-3 mr-4" type="text" name="" id="" @input="changeName">
    <button class="button  is-info" @click="() => $router.push({ name: 'AddData'})">Add Data</button>
  </div>
  
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Date</th>
        <th>Distance</th>
        <th>Actions</th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="(data, id) in pgDatas" :key="id"  class="has-text-left">
        <td>{{ data.name }}</td>
        <td>{{ data.quantity }}</td>
        <td>{{ data.data }}</td>
        <td>{{ data.distance }}</td>
        <td>
          <div>
            <button class="button is-warning is-normal mr-3" @click="showModal({edit:true, data})">Edit</button>
            <button class="button is-danger is-normal" @click="showModal({delete:true, data})">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  
  
  <Paginations :count="datas" :getCount="getNewData"/>
  <Modal v-show="modal" :toggleModal="modal" @changeModal="modalItem">
    <div v-show="editModal"> 
      <ul>
        <li class="mb-2"><input class="input" type="date" placeholder="Enter the date" v-model="editDate"/></li>
        <li class="mb-2"><input class="input" type="text" placeholder="Enter the date" v-model="editName"/></li>
        <li class="mb-2"><input class="input" type="number" placeholder="Enter the date" v-model="editQuantity"/></li>
        <li class="mb-2"><input class="input" type="text" placeholder="Enter the date" v-model="editDistance"/></li>
      </ul>
    </div>
    <div v-show="deleteModal">
      <h3>Are you sure to delete this data?</h3>
    </div>
  </Modal>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core"
import { useStore } from "vuex"
import Paginations from "@/components/Paginations.vue"
import Modal from "@/components/Modal.vue"
const store = useStore()
const editDate = ref("")
// const sortitem = ref("")
const editDistance = ref("")
const editName = ref("")
const editQuantity = ref("")
const deleteId = ref(null)
const modal = ref(false)
const editId = ref(null)
const editModal = ref(false)
const deleteModal = ref(false)
const modalItem = (bool) => {
  if(bool === false){
    modal.value = false
    editModal.value = false
    deleteModal.value = false
  }
  if(bool === true){
    if(deleteModal.value === true){
      store.dispatch("deleteData", deleteId.value)
      modal.value = false
      return
    }
    const form = {
      id: editId.value,
      name: editName.value,
      data: editDate.value,
      distance: editDistance.value,
      quantity: editQuantity.value,
    }
    store.dispatch("changeData", form)
    modal.value = false
  }
}

const changeName  = (e) => {
  store.dispatch("sortName", e.target.value)
}

const sortitem = (e) => {
  store.dispatch("sortData", e.target.value)
  console.log(e.target.value)
}
const showModal = (target) => {
  if(target.edit){
    const { name, quantity, distance, id, data } = target.data
    editDate.value =  data
    editQuantity.value = quantity
    editDistance.value = distance
    editName.value = name
    editId.value = id
    modal.value = !modal.value
    editModal.value = true
  }
  if(target.delete){
    modal.value = !modal.value
    deleteModal.value = true
    deleteId.value = target.data.id
  }
}

onMounted( async () => {
  await store.dispatch("SET_PG_DATA");
  await store.dispatch("getDatas")
})

const getNewData = (e) => {
  store.dispatch("SET_PG_DATA", e.target.innerText)
}

const pgDatas = computed( () => {
  return  store.state.pgData
})
const datas = computed(() => {
  const result =  Math.ceil(store.state.datas.length / 5 ) ;
  return result
})
</script>
