import axios from  'axios'

export const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
});
export default {
    getPgData(page){
        return apiClient.get(`/datas?_page=${page}&_limit=5`)
    },
    getDatas(){
        return apiClient.get("/datas")
    },
    deleteData(id){
        return apiClient.delete(`/datas/${id}`)
    },
    addData(data){
        return apiClient.post(`/datas`, data)
    },
    changeData(data){
        return apiClient.put(`/datas/${data.id}`, {
            name: data.name,
            data: data.data,
            distance: data.distance,
            quantity: data.quantity
        })
    },
}