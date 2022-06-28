<template>
  <div>
    <p>商品总数：{{ count }}</p>
    <button v-on:click="count++">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addFn1(5)">+5</button>
    <!-- v-on:可写为@ -->
    <button @click="subFn">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addFn() {
      this.count++;
    },
    addFn1(val) {
      this.count += val;
    },
    subFn() {
      this.count--;
    },
  },
};
//  1. 绑定事件
//   语法: v-on:事件名="少量代码"
//   语法: v-on:事件名="methods里函数名"
//   语法: v-on:事件名="methods里函数名(值)"
//   语法: @事件名="methods里函数名"
</script>
<style></style>
