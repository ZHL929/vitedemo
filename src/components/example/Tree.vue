<template>
  <div class="tree" v-for="item in data" @click.stop="clickTap(item, $event)">
    <input v-model="item.checked" type="checkbox"><span>{{ item.name }}</span>
    <zhanghualian v-if="item?.children?.length" :data="item?.children"></zhanghualian>

  </div>
</template>

<script setup lang="ts">
import { ref, reative } from 'vue'

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

defineOptions({
    name: 'zhanghualian'
})

defineProps<{
    data?: Tree[]
}>()

const clickTap = (item: Tree, e) =>{
    console.log(e.target)
}
</script>
<!-- <script lang="ts">
export default {
    name:'zhanghualian'
}
</script> -->

<style scoped>
.tree {
    margin-left: 10px;
}

</style>