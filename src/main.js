import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.scss";
// import Toast, { POSITION, TYPE } from 'vue-toastification'

// import  useToast  from "vue-toastification/composition"
// const toast = useToast()

// import { provideToast } from "vue-toastification/composition";
// import { useToast } from "vue-toastification/composition";
// import "vue-toastification/dist/index.css";

createApp(App).use(store).use(router).mount("#app");
