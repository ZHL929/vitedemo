<template>
  <div> A组件 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, useAttrs } from 'vue'

let attr = useAttrs()
console.log(attr)

</script>

<style scoped>

</style>
