<template>
    <div>我是组件！</div>
    <div ref="div">{{ str }}</div>
    <button @click="change">修改</button>
</template>
<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from "vue";
// 在我们使用Vue3 组合式API 是没有 beforeCreate 和 created 这两个生命周期的 setup 去替代
// onBeforeMount 读取不到dom onMounted 可以读取到dom
console.log('setup');
const str = ref<string>('张三')
const div = ref<HTMLDivElement>()
const change = ()=>{
    str.value = "我被修改了！"
}
//创建
onBeforeMount(()=>{
    console.log('创建之前+++++',div.value);
})
onMounted(()=>{
    console.log('创建完成',div.value);
})
//更新的钩子函数+
onBeforeUpdate(()=>{
    console.log('更新组件之前+++++',div.value?.innerText);
})
onUpdated(()=>{
    console.log('更新组件完成',div.value?.innerText);
})
onBeforeUnmount(()=>{
    console.log('销毁组件之前');
})
onUnmounted(()=>{
    console.log('销毁组件完成');
})
onRenderTracked((e)=>{
    console.log(e);
})
onRenderTriggered((e)=>{
    console.log(e);
})
</script>