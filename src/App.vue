<template>
  <div>
    <a v-bind:href="href"></a>
    <!-- 在js里面写的就必须import引入图片。 data中： imgLocal: imgLocal, -->
    <img v-bind:src="imgUrl" />
    <!-- 在此处直接用相对路径地址是可以的-->
    <img v-bind:src="imgLocal" />
    <img src="./assets/logo.png" alt="" />
  </div>
</template>

<script>
// 目标：给原生的属性绑定vue变量
// - 语法：`v-bind:属性名="vue变量"`
// - 简写：`:属性名="vue变量"`
// 总结:给标签设置【属性】  v-bind:属性名="变量" 或者 :属性名="变量"
import imgLocal from './assets/logo.png';
export default {
  data() {
    return {
      href: 'https://www.hao123.com/?src=from_pc',
      imgUrl:
        'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgLocal: imgLocal,
    };
  },
};
</script>

<style></style>
