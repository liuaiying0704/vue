<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <!-- 局部 -->
    <Panel title="aaa" :farr="arr"></Panel>
    <!-- 全局 不需要在components写-->
    <!-- <PanelG></PanelG>
    <Panel-g></Panel-g> -->
  </div>
</template>

<script>
import Panel from './components/1.Panel.vue';
// 1、创建组件
// 2、注册组件  2.1引用组件  2.2使用
export default {
  data() {
    return {
      arr: [1, 2],
    };
  },
  components: {
    // Panel1: Panel,
    Panel,
  },
};
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
