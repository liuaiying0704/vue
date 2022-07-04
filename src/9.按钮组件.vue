<template>
  <div>
    <MyButton title="成功按钮" type="success" @myclick="myclickFn"></MyButton>
    <MyButton title="默认按钮" type="primary" @myclick="myclickFn"></MyButton>
    <MyButton title="警告按钮" type="warning" @myclick="myclickFn"></MyButton>
    <MyButton title="危险按钮" type="danger" @myclick="myclickFn"></MyButton>
  </div>
</template>

<script>
import MyButton from './components/button1.vue';
export default {
  components: {
    MyButton,
  },
  methods: {
    myclickFn() {
      alert('11');
      // 点击处理函数
    },
  },
};
</script>

<style></style>
