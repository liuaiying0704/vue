<template>
  <div>
    <!-- :is="comName"  :is='组件名称' -->
    <component :is="comName"></component>
  </div>
</template>

<script>
// 1\引入组件文件
import Mytest from './components/01.component.vue';
export default {
  data() {
    return {
      // 3（新）组件命名为comName
      comName: 'Mytest',
    };
  },
  components: {
    // 注册组件
    Mytest,
  },
};
</script>

<style></style>
