<template>
  <div>
    <ul>
      <!-- 1、v-for  的级版本使用 -->
      <li v-for="item in arr" :key="item">{{ item }}</li>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style></style>
