<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age }}</h1>
    <h1>{{ obj.age >= 18 ? '成年' : '未成年' }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    //temlate中的变量，在data函数返回的对象里定义
    //  this指向当前的vue的实例。
    return {
      msg: 'Hello, 小vue !',
      obj: {
        name: 'vue',
        age: 7,
      },
    };
  },
};
// 目标：插值表达式
// 库:  封装的属性或方法 (例jquery.js ==》方法的集合
// 框架: 拥有自己的规则和元素, 比库强大的多 (例vue.js)
// - vue 是什么 ? Vue是一个javascript渐进式框架
// - 什么是渐进式呢?  渐进式就是逐渐使用, 集成更多的功能
// - 什么是库和框架呢?  库是方法的集合, 而框架是一套拥有自己规则的语法

// 语法: {{ 表达式 }}
// 作用可以把表达式的返回值 直接 插入到dom 标签中
// 又叫: 声明式渲染/文本插值
</script>

<style></style>
