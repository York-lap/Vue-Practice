/*
 * @Author: yk
 * @Date: 2024-07-24 15:30:27
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
// Route
import router from "./router"
// Element-plus
import ElementPlus from "element-plus"  // Cover all moudle & Funcion
import 'element-plus/dist/index.css'    // Cover all css 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // Cover all icons
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'   // Chinese package


const app = createApp(App)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn
})

app.mount('#app')

