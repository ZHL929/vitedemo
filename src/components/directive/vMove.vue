<template>
    <div v-move class="box">
      <div class="header"></div>
      <div>
        内容
      </div>
    </div>
  </template>
   
  <script setup lang='ts'>
  import { Directive } from "vue";
  const vMove: Directive = {
    mounted(el: HTMLElement) {
        let moveEl = el.firstElementChild as HTMLElement;
        // let moveEl = el.firstElementChild as HTMLElement;
        const mouseDown = (e: MouseEvent) => {
            let X = e.clientX - el.offsetLeft;
            let Y = e.clientY - el.offsetTop;
            const move = (e: MouseEvent) => {
                el.style.left = e.clientX - X + "px";
                el.style.top = e.clientY - Y + "px";
            }
            document.addEventListener("mousemove", move)
            document.addEventListener("mouseup", ()=>{
                document.removeEventListener("mousemove", move)
            })
        }
        moveEl.addEventListener("mousedown", mouseDown)
    }
  };
  </script>
   
  <style lang='less'>
  .box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    .header {
      height: 20px;
      background: black;
      cursor: move;
    }
  }
  .box1 {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    .header {
      height: 20px;
      background: red;
      cursor: move;
    }
  }
  </style>