<template>
  <div>
    <input type="text" v-model="btn" />
    <br />
    <input type="text" v-bind:value="val1" v-on:input="inputFn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      btn: '',
      val1: '',
    };
  },

  methods: {
    inputFn(e) {
      this.val1 = e.target.value;
    },
  },
};
</script>

<style></style>
