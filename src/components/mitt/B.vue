<template>
    <div>
        <h1>我是B---{{ tol }}</h1>
    </div>
</template>
 
<script setup lang='ts'>
import { getCurrentInstance, ref } from 'vue'
const instance = getCurrentInstance()
const tol = ref<any>(1) 
const Fn = (num: any) => {
    console.log(num,'===========>B')
    tol.value = num
}
instance?.proxy?.$Bus.on('on-num',Fn)//listen
instance?.proxy?.$Bus.on('*****',Fn)//listen
// instance?.proxy?.$Bus.off('on-num',Fn)//unListen

</script>
 
<style>
</style>