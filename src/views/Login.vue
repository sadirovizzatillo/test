<template>
    <div class="login container column is-4">
    <h3 class="title is-align-self-center">Test App</h3>
        <div class="field">
                <input class="input" type="text" placeholder="Name" v-model="userName" required>
        </div>
        <div class="field">
                <input class="input" type="password" placeholder="Password" v-model="userPassword" required>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="saveUser">
                    Login
                </button>
            </p>
        </div>
    </div> 
    <div class="columns">
        <div class="notification column is-two-fifths  is-right is-success" v-if="loginSuccess">
            <button class="delete"></button>
            Primar lorem ipsum dolor sit amet, consectetur
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
    </div>
</template>


<script setup>
import router from "@/router"
import { ref } from "vue"

const loginSuccess = ref(false)
const userName = ref("")
const userPassword = ref("")


const saveUser = async () => {
    if([userName.value, userPassword.value].includes("")){
        return
    }
    const form = {
        name:userName.value,
        password: userPassword.value
    }
    
    await localStorage.setItem("user", JSON.stringify(form))
    
    await router.push("/")
}
</script>


<style scoped>
.login{
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>