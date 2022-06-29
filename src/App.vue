<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" />
      <img src="./assets/02.jpg" alt="" />
      <img src="./assets/03.jpg" alt="" />
    </div>

    <div class="show">
      <h3>图片预览区</h3>
      <img alt="" style="width: 600px; height: auto" />
    </div>
  </div>
</template>

<script>
export default {};
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
