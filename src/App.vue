<script setup lang="ts">
// import { ref, reactive, markRaw, shallowRef, defineAsyncComponent } from 'vue'

import MyModal from './components/teleport.vue'
// import HelloWorld from './components/reactiveDemo.vue'
import AVue from './components/example/A.vue'
import BVue from './components/example/B.vue'
import CVue from './components/example/C.vue'
import provideInject from './components/provideInject/index.vue'
import bus from './components/Bus/index.vue'
import mitt from './components/mitt/index.vue'
import tsx from './components/tsx/index'
import vModel from './components/vModel/index.vue'
import vMove from './components/directive/vMove.vue'
import vHasShow from './components/directive/vHasShow.vue'
import vLazy from './components/directive/vLazy.vue'
import AHooks from './components/AHooks.vue'


import Skeleton from './/components/example/skeleton.vue';
const Sync = defineAsyncComponent(()=> import('./components/example/sync.vue'))

import useBase64 from './components/hooks'

useBase64({ el: '#img' }).then(res=>{
  console.log(res.baseUrl)
})

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
const flag = ref<boolean>(true)


const getItem = (item) => {
  console.log('传回来了',item)
}

</script>

<template>
  <!-- <el-button @click="flag = !flag">切换组件</el-button>
   <AVue v-if="flag"></AVue>
   <BVue v-else></BVue> -->
  <!-- <provideInject></provideInject>
  <bus></bus>
  <mitt></mitt> -->
  <!-- <tsx @on-click="getItem"></tsx> -->
  <!-- <vModel></vModel> -->
  <!-- <vMove></vMove> -->
  <!-- <vHasShow></vHasShow> -->
  <!-- <vLazy></vLazy> -->
  <!-- <div>{{ $filters.format('ffff') }}</div> -->
  <AHooks a="aa" title="组件"></AHooks>
  <img id="img" width="300" height="300" src="./assets/vue.svg"/>
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
