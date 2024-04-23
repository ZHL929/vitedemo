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


type Filter = {
    format<T>(str: T): string
}
 
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter
    }
}

app.config.globalProperties.$filters = {
    format<T extends any>(str: T): string {
        return `可爱的${str}`
    }
}
app.use(ElementPlus)
app.mount('#app')
// createApp(App).use(ElementPlus).mount('#app')
