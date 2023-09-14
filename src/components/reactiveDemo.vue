<template>
    <div>
        <div>{{ person }}</div>
        <form>
            <input v-model="form.name" type="text" />
            <br>
            <input v-model="form.age" type="text" />
            <br>
            <button @click.prevent="submit">提交</button>
        </form>
        <div>{{ state }}</div>
        <button @click="change1">test1</button>
        <button @click="change2">test2</button>

    </div>

</template>
<script setup lang="ts">
// import { ref, reactive, readonly, shallowReactive, triggerRef } from "vue";
import { ref, reactive, shallowReactive,  } from "vue";
// ref reactive
// ref 支持所有类型 reactive 引用类型 Array Object Map Set
// ref 取值加赋值都需要.value, reactive 是不需要的 .value

type Person = {
    list?:Array<number>
}

let person = reactive<Person>({
    list:[]
})
setTimeout(() => {
    const arr = [1, 2, 3]
    // person.push(...arr)
    person.list = arr
    console.log(person);
},1000)

const children = reactive({count:1})
// const copy = readonly(children)

children.count++
// copy.count++



type M = {
    name: string,
    age: number
}
let form = reactive<M>({
    name:"zhangsan",
    age: 12
})
let form2 = ref<M>({
    name:"zhangsan",
    age: 12
})
form.age = 65
console.log(form,'form');
console.log(form2,"form2");

const submit = ()=>{
    console.log(form);
    
}

const obj = {
  a: 1,
  first: {
    b: 2,
    second: {
      c: 3
    }
  }
}
 
const state = shallowReactive(obj)
 
function change1() {
  state.a = 7
}
function change2() {
  state.first.b = 8
  state.first.second.c = 9
  console.log(state);
}

</script>
<style scoped>
</style>