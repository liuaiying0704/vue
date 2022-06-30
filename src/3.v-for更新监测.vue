<template>
  <div>
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
      arr: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {
    reverse() {
      this.arr.reverse();
      //改变数组，页面的数据就会改变。
    },
    slice() {
      // this.arr.slice(截取开始的索引, 截取结束索引);  不包含结尾。
      this.arr.slice(0, 3); //不改变数组，不更新
      // 解决方案1：
      this.arr = this.arr.slice(0, 3);
    },

    change() {
      this.arr[0] = 100; //改变数组，不更新。
      // 解决方案2：
      this.$set(this.arr, 0, 100);
    },
    splice() {
      this.arr.splice(0, 1, 100);
      // 修改数组的值，页面的数据也会改变
    },
  },
};
</script>

<style></style>
