<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
    </div>
    <Pannel>
      <template v-slot:title> <h4>芙蓉</h4> </template>
      <template v-slot:content="scope">
        {{ scope.row.defaultOne + '=====*===' + scope.row.defaultTwo }}
      </template>
    </Pannel>
  </div>
</template>

<script>
import Pannel from './components/06Panel.vue';
export default {
  components: {
    Pannel,
  },
};
</script>
