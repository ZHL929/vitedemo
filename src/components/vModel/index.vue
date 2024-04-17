<template>
    <button @click="show = !show">开关{{show}}---{{ title }}</button>
    <input v-model="value" type="text" />

    <!-- <Dialog v-model:title.isBt="title" v-model="show"></Dialog> -->
    <!-- 自定义指令 -->
    <!-- <Dialog v-move-directive="{background:'green',flag:show}" v-model:title.isBt="title" v-model="show"></Dialog> -->
    <!-- 函数简写 -->
    <Dialog v-move="{ background: value }" v-model:title.isBt="title" v-model="show"></Dialog> 
  </template>
   
<script setup lang='ts'>
  import Dialog from "./v-model.vue";
  import { ref, Directive, DirectiveBinding } from 'vue'
  const show = ref(false)
  const title = ref('我是标题')
  const vMoveDirective: Directive = {
    created: () => {
      console.log("初始化====>");
    },
    beforeMount(...args: Array<any>) {
      // 在元素上做些操作
      console.log("初始化一次=======>");
    },
    mounted(el: any, dir: DirectiveBinding<Value>) {
      el.style.background = dir.value.background;
      console.log("初始化========>mounted");
    },
    beforeUpdate() {
      console.log("更新之前");
    },
    updated() {
      console.log("更新结束");
    },
    beforeUnmount(...args: Array<any>) {
      console.log(args);
      // 第一个 el  当前绑定的DOM 元素
      // 第二个 binding
        // instance：使用指令的组件实例。
        // value：传递给指令的值。例如，在 v-my-directive="1 + 1" 中，该值为 2。
        // oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
        // arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 "foo"。
        // modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}。
        // dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中
      // 第三个 当前元素的虚拟DOM 也就是Vnode
      // 第四个 prevNode 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用 

      console.log("======>卸载之前");
    },
    unmounted(...args: Array<any>) {
      console.log(args);
      console.log("======>卸载完成");
    }
  }

  let value = ref<string>('')
  type Dir = {
    background: string
  }
  const vMove: Directive = (el, binding: DirectiveBinding<Dir>) => {
    el.style.background = binding.value.background
  }

</script>
  
<style>
</style>