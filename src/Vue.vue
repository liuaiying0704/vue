<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
        <input type="checkbox" v-model="total" :value="item" />{{ item }}
      </li>
    </ul>
    求和：{{ getTotal }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      total: [],
    };
  },

  //
  computed: {
    getTotal() {
      return this.total.reduce((sum, next) => (sum += next), 0);
    },
  },
};
</script>

<style></style>
