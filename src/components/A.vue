<template>
  <button @click="sendMsg">发送</button>
</template>

<script>
import EventBus from './EventBus.vue';
export default {
  data() {
    return {
      MsgA: 'A组件中的MsgA',
    };
  },
  methods: {
    sendMsg() {
      EventBus.$emit('sendMsg', this.MsgA);
    },
  },
};
</script>

<style></style>
