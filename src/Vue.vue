<template>
  <div>
    <div>{{ msg | toUp }}</div>
    <div>{{ msg | toLosssaare }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, World',
    };
  },
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
    toLo(val) {
      return val.toLowerCase();
    },
  },
};
</script>

<style></style>
