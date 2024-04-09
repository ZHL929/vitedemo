import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import mitt from 'mitt'

const Mit = mitt()

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

const app = createApp(App)
 
//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit
app.use(ElementPlus)
app.mount('#app')
// createApp(App).use(ElementPlus).mount('#app')
