<template>
    <button @click="show = !show">开关{{show}}---{{ title }}</button>
    <Dialog v-model:title.isBt="title" v-model="show"></Dialog>
  </template>
   
  <script setup lang='ts'>
  import Dialog from "./v-model.vue";
  import {ref} from 'vue'
  const show = ref(false)
  const title = ref('我是标题')

  </script>
   
  <style>
  </style>