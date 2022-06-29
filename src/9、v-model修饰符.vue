<template>
  <div>
    <span>密码：</span>
    <input type="text" v-model.number="pass" /><br />
    <span>文本框：</span> <input type="text" v-model.trim="phone" /><br />
    <span>文本域：</span> <input type="text" v-model.lazy="info" /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pass: '',
      phone: '',
      info: '',
    };
  },
};
</script>

<style></style>
