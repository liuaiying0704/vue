<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
    </div>
    <Pannel>
      <template v-slot:title> <h4>芙蓉</h4> </template>
      <template v-slot:content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </Pannel>
  </div>
</template>

<script>
import Pannel from './components/05Panel.vue';
export default {
  components: {
    Pannel,
  },
};
</script>
