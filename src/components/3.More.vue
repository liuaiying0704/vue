<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>

    <p>2. 获取组件对象 - 可调用组件内一切</p>
    <Demo ref="mydemo"></Demo>

    <p>3、vue更新Dom是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1，马上提取p标签内容</button>
  </div>
</template>

<script>
import Demo from './Child/Demo.vue';
export default {
  components: {
    Demo,
  },
  beforeMount() {
    console.log(this.$refs.myP);
    this.$nextTick(() => console.log(this.$refs.myP));
  },
  mounted() {
    console.log(this.$refs.mydemo);
    this.$refs.mydemo.fn();
    console.log(this.$refs.myH, this.$refs['myH']);
  },
  data() {
    return {
      count: '',
    };
  },
  methods: {
    btn() {
      this.count++;
      console.log(this.count);
      this.$nextTick(() => console.log(this.$refs.myP.innerHTML));
    },
  },
};
</script>

<style></style>
