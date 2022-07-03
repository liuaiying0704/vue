<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ info }}</p>
    <!-- 演示单向数据流，不能改子组件的值。页面能出效果，但报错。如果是传对象在App.vue,:obj="item"是不会报错的 -->
    <!-- <button @click="title = '111'"></button> -->
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'info'],
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
