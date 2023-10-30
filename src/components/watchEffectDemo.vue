<template>
    <div>{{ message }}</div>
    <button @click="stop">停止</button>
</template>
<script setup lang="ts">
// import { ref, watchEffect } from "vue";
// let message = ref<string>('')
// let message2 = ref<string>('')
//  watchEffect(() => {
//     console.log('message', message.value);
//     console.log('message2', message2.value);
// })
// 清除副作用
// 就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖
import { watchEffect, ref } from 'vue'
let message = ref<string>('')
let message2 = ref<string>('')
//  watchEffect((oninvalidate) => {
//     console.log('message', message.value);
//     oninvalidate(()=>{
        
//     })
//     console.log('message2', message2.value);
// })
// 停止跟踪 watchEffect 返回一个函数 调用之后将停止更新
const stop =  watchEffect((oninvalidate) => {
    //console.log('message', message.value);
    oninvalidate(()=>{
 
    })
    console.log('message2', message2.value);
},{
    flush:"post",
    onTrigger () {
 
    }
})
// stop()
</script>