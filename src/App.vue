<template>
  <div>
    <input ref="myInp" type="text" placeholder="这是一个输入框" v-if="isShow" />
    <button v-else @click="btn">点击我进行搜索</button>
  </div>
</template>

<script>
export default {
  // this.$refs.myInp.focus()
  // 原因: data变化更新DOM是异步的
  // 输入框还没有挂载到真实DOM上
  // 解决:
  // this.$nextTick(() => {
  //     this.$refs.myInp.focus()
  // })
  // 扩展: await取代回调函数
  // $nextTick()原地返回Promise对象
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    btn() {
      this.isShow = true;
      this.$nextTick(() => {
        this.$refs.myInp.focus();
      });
    },
  },
};
</script>

<style></style>
