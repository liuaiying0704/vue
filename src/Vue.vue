<template>
  <div>
    <!-- <ul> -->
    <!-- 1、v-for  的级版本使用 
      作用： 列表渲染, 在对应的标签结构, 按照数据数量, 循环生成对应的内容 
      v-for的临时变量名不能用到v-for范围外-->
    <!-- <li v-for="item in arr" :key="item">{{ item }}</li>
      <li v-for="item in arr" :key="item">{{ item }}</li>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li> -->

    <!-- 2、v-for   所有场景 -->
    <!-- <h1>遍历数组</h1>
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}--{{ item.sex }}=={{ item.hobby }}
      </li>
      <h1>遍历对象</h1> -->
    <!-- item 是属性值，k是属性名 -->
    <!-- <li v-for="(item, k) in tObj" :key="k">{{ item }}==={{ k }}</li>
      <h1>遍历数字</h1>
      <li v-for="item in count" :key="item">{{ item }}</li> -->
    <!-- </ul> -->

    <!-- 3、v-for 更新监测 
      目标: 当v-for遍历的目标结构改变, Vue触发v-for的更新
      口诀:
      数组变更方法, 使得原数组改变，会导致v-for更新, 页面更新
      数组非变更方法, 返回新数组, 就不会导致v-for更新, 可采用覆盖数组或this.$set()
      -->
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverse">翻转</button>
    <button @click="slice">截取前3个</button>
    <button @click="change">改变数组的值</button>
    <button @click="splice">改变数组的值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 普通数组
      arr: [1, 2, 3, 4, 5],
      // 数组（对象）
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      // 普通对象
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      // 数字
      count: 10,
    };
  },
  methods: {
    reverse() {
      this.arr.reverse();
    },
    slice() {
      this.arr.slice(0, 2);
    },
    change() {
      // this.arr[0] = 100;
      this.$set(this.arr, 3, 100);
    },
    splice() {
      this.arr.splice(0, 1, 1000);
    },
  },
};
</script>

<style></style>
