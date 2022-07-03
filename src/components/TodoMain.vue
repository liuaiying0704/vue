<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.isDone }"
      v-for="(item, index) in list"
      :key="item.id"
      :index="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="dele(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
// 1\铺设数据
export default {
  props: ['list'],
  methods: {
    // 2\删除
    dele(val) {
      return this.$emit('del', val);
    },
  },
};
</script>
