<template>
    <div class="sk">
      <div class="sk-2">
        <div class="sk-2-1"></div>
        <div></div>
      </div>
      <hr>
      <div class="sk-3"></div>
      <div class="sk-3"></div>
    </div>
  </template>
  
  <script setup lang='ts'></script>
  
  <style lang='less' scoped>
  @bgColor: #eee;
  @conColor: #ccc;
  
  .sk {
    background-color: @bgColor;
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
        background-color: @conColor;
      }
      div:last-child {
        width: 60px;
        height: 20px;
        background-color: @conColor;
      }
    }
    .sk-3 {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      background-color: @conColor;
    }
  }
  </style>
  