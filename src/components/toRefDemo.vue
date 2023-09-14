<template>
    <div>
       <button @click="change">按钮</button>
       {{state}}
    </div>
 </template>
  
 <script setup lang="ts">
 import { reactive, toRefs, toRaw } from 'vue'
  
 const obj = reactive({
    foo: 1,
    bar: 1
 })

// toRef
// 如果原始对象是非响应式的就不会更新视图 数据是会变的
//  const state = toRef(obj, 'bar')
//  // bar 转化为响应式对象
  
//  const change = () => {
//     state.value++
//     console.log(obj, state);
//  }

//  toRefs
// 可以帮我们批量创建ref对象主要是方便我们解构使用

let { foo, bar } = toRefs(obj)
 
foo.value++
console.log(foo, bar);

// toRaw
// 将响应式对象转化为普通对象

const state = toRaw(obj)
// 响应式对象转化为普通对象
const change = () => {
   console.log(obj, state);
}

 </script>