<template>
  <div>我是组件B，A--->B:{{ formA }}</div>
</template>

<script>
import EventBus from './EventBus.vue';
export default {
  data() {
    return {
      formA: '',
    };
  },
  created() {
    EventBus.$on('sendMsg', (val) => (this.formA = val));
  },
};
</script>

<style></style>
