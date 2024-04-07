<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef, defineAsyncComponent } from 'vue'

import MyModal from './components/teleport.vue'
// import HelloWorld from './components/reactiveDemo.vue'
import AVue from './components/example/A.vue'
import BVue from './components/example/B.vue'
import CVue from './components/example/C.vue'

import Skeleton from './/components/example/skeleton.vue';
const Sync = defineAsyncComponent(()=> import('./components/example/sync.vue'))


// const data = reactive([
//   {
//     name: 'A组件',
//     com: markRaw(AVue)
//   },
//   {
//     name: 'B组件',
//     com: markRaw(BVue)
//   },
//   {
//     name: 'C组件',
//     com: markRaw(CVue)
//   }
// ])
const data = reactive<Tree[]>([
    {
        name: '1',
        checked: false,
        children: [
            {
                name: '1-1',
                checked: false
            }
        ]
    },
    {
        name: '2',
        checked: false,
    },
    {
        name: '3',
        checked: false,
        children: [
            {
                name: '3-1',
                checked: false,
                children: [
                    {
                        name: '3-1-1',
                        checked: false
                    },
                    {
                        name: '3-1-2',
                        checked: false
                    }
                ]
            }
            
        ]
    }
])
const comId = shallowRef(AVue)
const active = ref(0)
const open = ref(false)

const switchCom = (item, index)=>{
  comId.value = item.com
  active.value = index
}
</script>

<template>
   <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <Sync />
    <!-- 在 #fallback 插槽 -->
    <template #fallback>
      <Skeleton />
    </template>
  </Suspense>
  <!-- <div style="display: flex">
    <div @click="switchCom(item, index)" :class="[active=== index?'active':'']" class="tabs" v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <button @click="open = true">Open Modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
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
