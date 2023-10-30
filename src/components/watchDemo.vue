<template>
    <div>{{ message }}</div>
    <button @click="clickBtn">点击</button>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
 
//  let message = reactive({
//      nav:{
//          bar:{
//              name:""
//          }
//      }
//  })
  
//  watch(message, (newVal,oldVal) => {
//      console.log('新的值----', newVal);
//      console.log('旧的值----', oldVal);
//  },{
//     immediate:true,
//     // deep:true
//  })
 const clickBtn = ()=>{
    message.name = "李四"
 }

 // reactive 单一值 
let message = reactive({
    name:"",
    name2:""
})
 
 
watch(()=>message.name, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})

</script>