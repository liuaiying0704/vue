<template>
  <div class="my_div">
    <img :src="dog.dogImgUrl" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn">{{ dog.dogName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      colorStr: '',
    };
  },
  methods: {
    btn() {
      // 1\点击。背景颜色改变
      // rgb(255,255,255)
      // ${Math.floor(Math.random() * 256)}
      this.colorStr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      // 2\把喜欢的小狗的名字传父组件
      this.$emit('love', this.dog.dogName);
    },
  },
};
</script>

<style scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
