<template>
  <div>
    <input type="text" @keydown.enter="keydownFn" />
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>

<script>
// 全部的按键别名：
// .enter
// .tab
// .delete (捕获“删除”和“退格”键)
// .esc
// .space
// .up
// .down
// .left
// .right

// 系统修饰键
// 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
// .ctrl
// .alt
// .shift
// .meta
export default {
  methods: {
    keydownFn() {
      alert('用户敲下了enter');
    },
    escFn() {
      alert('用户敲下了esc');
    },
  },
};
</script>

<style></style>
