<template>
  <!-- name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false, -->
  <tr>
    <td><input type="checkbox" v-model="info.checked" /></td>
    <td>{{ info.name }}</td>
    <td>{{ info.price }}</td>
    <td>
      <!-- 加加减减 -->
      <button @click="info.num > 1 ? info.num-- : 1">-</button> {{ info.num }}
      <button @click="info.num++">+</button>
    </td>
    <td>{{ info.price * info.num }}</td>
    <td><button @click="del(info.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    // 传数组的每一条数据info，{}
    info: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    // 删除功能
    // 根据info.name,val,找index
    del(val) {
      const index = this.$parent.goodList.findIndex((ele) => ele.name == val);
      this.$parent.goodList.splice(index, 1);
    },
  },
};
</script>

<style></style>
