<template>
  <button :class="`one-button-${type}`" @click="clickFn">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '按钮组件',
    },
    type: {
      type: String,
      default: '按钮组件',
      validator(val) {
        // 对值进行校验，通过type传的值
        console.log(val);
        return ['primary', 'success', 'warning', 'danger'].includes(val);
      },
    },
  },
  methods: {
    clickFn() {
      console.log('77');
      this.$emit('myclick');
    },
  },
};
</script>

<style>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
