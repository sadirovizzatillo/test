import { createStore } from "vuex";
import api from "../../services/api";
// import toast from "./toast/toast";
export default createStore({
  state: {
    user:JSON.parse(localStorage.getItem("user")),
    datas:[],
    pgData:[],
    page:null
  },
  getters: {
    
  },
  mutations: {
    sortName(state, payload){
      state.pgData = state.pgData.filter(c => c.name.includes(payload))
    },
    SortByData(state, payload){
      if(payload === "quantity"){
        state.pgData.sort((a,b) => a.quantity - b.quantity).reverse()
      }
      if(payload === "distance"){
        state.pgData.sort((a,b) => a.distance - b.distance).reverse()
      }
      if(payload === "data"){
        state.pgData.sort((a,b) => a.data - b.data).reverse()
      }
    },
    SET_PG_DATA(state, payload){
      state.pgData = payload
    },
    SET_ALL_DATA(state, payload){
      state.datas = payload
    }
  },
  actions: {
    async  SET_PG_DATA(_, page = 1){
      try{
        const  { data }  = await api.getPgData(page);
        _.state.page = page
        _.commit("SET_PG_DATA", data)
      }catch(err){
        console.log(err)
      }
    },
    async getDatas(_){
      try{
        const { data } = await api.getDatas();
        _.commit("SET_ALL_DATA", data)
      }catch(err){
        console.log(err)
      }
    },
    async changeData(_, form){
      try{
        const { data } = await api.changeData(form)
        await _.dispatch("SET_PG_DATA")
      }catch(err){
        console.log(err)
      }
    },
    async deleteData(_, id){
      try{
        const { data } = await api.deleteData(id);
        await _.dispatch("SET_PG_DATA")
      }catch(err){
        console.log(err)
      }
    },
    async addData(_, payload){
      try{
        const { data } = await api.addData(payload);
        await _.dispatch("SET_PG_DATA");
        await _.dispatch("getDatas")
      }catch(err){
        console.log(err)
      }
    },
    async sortData(_, payload){
      _.commit("SortByData", payload)
    },
    async sortName(_, payload){
      if(payload === ""){
        _.dispatch("SET_PG_DATA", _.state.page)
      }
      _.commit("sortName", payload)
    },
    async deleteData(_, id){
      const { data } = api.deleteData(id);
      await _.dispatch("SET_PG_DATA");
      await _.dispatch("getDatas")
    }
  },
  modules: {},
});
