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

import { useTestStore } from './store'
import { storeToRefs } from 'pinia'


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

const Test = useTestStore()
// 直接解构是会失去响应性的
const { current, age } = storeToRefs(Test)
console.log(current, age);

const Add = () => {
  // 直接修改值
  // Test.current++
  // 批量修改State的值
  // Test.$patch({
  //   current: 200,
  //   age: 300
  // })
  // 批量修改函数形式
  // Test.$patch((state)=>{
  //   state.current++;
  //   state.age = 40
  // })
  // 通过原始对象修改整个实例
  // Test.$state = {
  //   current: 10,
  //   age: 30
  // }
  // 通过actions修改
  // Test.setCurrent()
  // Test.randomizeCounter()
  Test.getLoginInfo()
}

const change = () => {
   Test.current++
}
const reset = () => {
   Test.$reset()
}
// 类似于Vuex 的abscribe  只要有state 的变化就会走这个函数,如果你的组件卸载之后还想继续调用请设置第二个参数
Test.$subscribe((args,state)=>{
  console.log(args,state);
},{
  detached:true
})
// 只要有actions被调用就会走这个函数
Test.$onAction((args)=>{
  args.after(()=>{
    console.log('after');
  })
  console.log(args, 'onAction');
},true)


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
  <!-- <AHooks a="aa" title="组件"></AHooks> -->
  <!-- <img id="img" width="300" height="300" src="./assets/vue.svg"/> -->
  <div class="card">
    <button type="button" @click="Add">+</button>
    <button type="button" @click="reset">reset</button>
    <!-- <div>count is {{ Test.current }}</div>
    <div>{{ Test.age }}</div> -->
   
    <!-- <div>origin value {{Test.current}}</div>
    <div>
      pinia:{{ current }}--{{ age }}
      change :
      <button @click="change">change</button>
    </div> -->
    <div>{{ Test.user }}</div>
    <!-- <div>{{ Test.name }}</div>
    <div>{{ Test.newPrice }}</div>
    <div>{{ Test.newName }}</div>
    <div>{{ Test.newCurrent }}</div> -->
  </div>
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
