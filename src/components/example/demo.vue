
<template>
    <div>
      <TreeVue :data="data"></TreeVue>
    </div>
  </template>
<script setup lang="ts">
import TreeVue from './Tree.vue'
import { ref, reactive } from 'vue'
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

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

</script>


<style scoped>

</style>
