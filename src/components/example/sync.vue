<template>
    <div class="sk">
      <div class="sk-2">
        <div class="sk-2-1"><img :src="data.url"></div>
        <div><span>{{ data.name }}</span>&nbsp;<span>{{ data.age }}</span></div>
      </div>
      <hr>
      <div class="sk-3">{{ data.desc }}</div>
    </div>
  </template>
  
  <script setup lang='ts'>
  import { axios } from '../../server/axios'
  
  interface Data {
    data: {
      name: string
      url: string
      age: number
      desc: string
    }
  }
  
  const { data } = await axios.get<Data>('./data.json')
  
  </script>
  
  <style lang='less' scoped>
  
  .sk {
    padding: 20px;
  
    .sk-2 {
      display: inline-flex;
      align-items: center;
      margin: 10px 0;
      height: 50px;
  
      .sk-2-1 {
        height: inherit;
        width: 50px;
        margin-right: 1rem;
        border-radius: 50%;
  
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
  
      div:last-child {
        width: 60px;
        height: 20px;
      }
    }
  
    .sk-3 {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
  }
  </style>
  