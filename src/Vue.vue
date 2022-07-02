<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }} <button @click="delFn(index)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  methods: {
    delFn(ind) {
      let index = this.arr.findIndex((ele, inddex) => inddex == ind);
      this.arr.splice(index, 1);
    },
    add() {
      this.arr.push(Math.floor(Math.random() * (20 - 0 + 1) + 0));
    },
  },
};
</script>

<style></style>
