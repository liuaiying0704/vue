<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @mouseover="mouseoverFn(1)"
        @click="clickFn(1, $event)"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @mouseover="mouseoverFn(2)"
        @click="clickFn(2, $event)"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @mouseover="mouseoverFn(3)"
        @click="clickFn(3, $event)"
      />
    </div>

    <div class="show">
      <h3>图片预览区</h3>
      <img alt="" style="width: 600px; height: auto" :src="img" />
    </div>
  </div>
</template>

<script>
import img1 from './assets/01.jpg';
import img2 from './assets/02.jpg';
import img3 from './assets/03.jpg';
export default {
  data() {
    return {
      img: img1,
    };
  },
  methods: {
    mouseoverFn(val) {
      this.img = { 1: img1, 2: img2, 3: img3 }[val];
    },
    clickFn(index, e) {
      alert(`第${index}张图，地址：${e.target.src}`);
    },
  },
};
//  需求如下：
// 1. 鼠标经过图片列表区的哪张图片，右侧的预览区 就是展示对应的图片
// 2. 鼠标点击图片列表区的哪张图片， alert出图片的具体信息
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
