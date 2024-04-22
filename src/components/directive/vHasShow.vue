<template>
    <div class="btns">
        <button v-has-show="'shop:create'">创建</button>
  
        <button v-has-show="'shop:edit'">编辑</button>
  
        <button v-has-show="'shop:delete'">删除</button>
    </div>
 </template>
  
 <script setup lang='ts'>
 import { el } from 'element-plus/es/locale/index.mjs';
import { ref, reactive,  } from 'vue'
 import type {Directive} from 'vue'
 //permission
 localStorage.setItem('userId','xiaoman-zs')
  
 //mock后台返回的数据
 const permission = [
     'xiaoman-zs:shop:edit',
     'xiaoman-zs:shop:create',
     'xiaoman-zs:shop:delete'
 ]
 const userId = localStorage.getItem('userId') as string
 const vHasShow: Directive<HTMLElement,string> = (el, bingding) => {
    if(!permission.includes(userId+':'+ bingding.value)){
        el.style.display = 'none'
    }
 }
  
 </script>
  
 <style scoped lang='less'>
 .btns{
     button{
         margin: 10px;
     }
 }
 </style>