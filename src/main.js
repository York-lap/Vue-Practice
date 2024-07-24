/*
 * @Author: yk
 * @Date: 2024-07-24 15:30:27
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
console.log(import.meta.env)

const app = createApp(App)
app.use(router)
app.mount('#app')

