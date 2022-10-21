import Toast, { POSITION, TYPE } from 'vue-toastification'
const toast = useToast();
export default  {
    namespaced:true,
    actions: {
      error(message){
        toast.error(message)
      },
      success(message){
        toast.success(message)
      },
      warn(message){
        toast.warning(message)
      }
    },
  }
