<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="clickFn">翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello,小vue',
    };
  },
  methods: {
    clickFn() {
      this.msg = this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style></style>
