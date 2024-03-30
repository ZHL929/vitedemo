<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef } from 'vue'

// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/reactiveDemo.vue'
import AVue from './components/example/A.vue'
import BVue from './components/example/B.vue'
import CVue from './components/example/C.vue'

const data = reactive([
  {
    name: 'A组件',
    com: markRaw(AVue)
  },
  {
    name: 'B组件',
    com: markRaw(BVue)
  },
  {
    name: 'C组件',
    com: markRaw(CVue)
  }
])

const comId = shallowRef(AVue)
const active = ref(0)

const switchCom = (item, index)=>{
  comId.value = item.com
  active.value = index
}
</script>

<template>
  <div style="display: flex">
    <div @click="switchCom(item, index)" :class="[active=== index?'active':'']" class="tabs" v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>

    <!-- <TreeVue :data="data"></TreeVue> -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <component :is="comId"></component>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.active {
  background: skyblue;
}
.tabs {
  border: 1px solid #ccc;
  padding:  5px 10px;
  margin: 5px;
  cursor: pointer;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
