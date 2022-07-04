<template>
  <div>
    <h1>1. 生命周期</h1>
    <Life v-if="show"></Life>
    <button @click="show = false">销毁组件</button>
  </div>
</template>

<script>
import Life from './components/1.Life.vue';
export default {
  components: {
    Life,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
