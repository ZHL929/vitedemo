<template>
    <div v-show="b">
        hhhhhh
    </div>
    <div @click="parent">
        <button @[event].stop="clickBtn">点击一下</button>
    </div>
    <div>
        <input v-model="a" type="text">
        <div>{{ a }}</div>
    </div>
    <hr>
    <div>Ref: {{ name }}</div>
    <div>shallowRef: {{ name2 }}</div>
    <div>customRef: {{ name3 }}</div>
    <hr>
    <div ref="dom">我是dom</div>
    <button @click="changeName">改变</button>
</template>
<script setup lang="ts">
// ref reactive
// ref shallowRef
// ref 深层次 shallowRef浅层次的响应
// ref 和 shallowRef 是不能一块写的 不然会影响shallowRef，造成视图的更新
// triggerRef 强制触发依赖一个浅层ref的副作用,通常在对浅引用的内布值进行深度变更后使用
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";
import type { Ref } from "vue";
function MyRef<T>(value:T){
    let timer:any
    return customRef((track,trigger)=>{
        return{
            get() {
                track()
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    console.log('触发了！');
                    value = newVal
                    timer = null
                    trigger()
                },500)   
            },
        }
    })
}


const year: Ref<string | number> = ref('2020')
year.value = 2020
const time = '2023.09'
console.log(isRef(time));
console.log(isRef(year));

const name = ref({name:'张三'})
const name2 = shallowRef({name:'张三'})
const name3 = MyRef<string>('自定义的名字')

const dom = ref<HTMLDivElement>()

const changeName = ()=>{
    name2.value.name = '我是被影响了！'
    triggerRef(name2)
    console.log(name2);
    name3.value = "自定义名称修改了！"
    console.log(name3);
    console.log(dom.value?.innerText);

}


const a  = ref("张三")
const b:boolean = false
const event = 'click'
const clickBtn = ()=>{
    console.log("点击了");
    
}
const parent = ()=>{
    console.log("父级");
    
}
</script>
<style scoped lang="less">
</style>