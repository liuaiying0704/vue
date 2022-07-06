<template>
  <div>
    <!-- 04   插槽 -->
    <UseSlot></UseSlot>

    <!-- 05  具名插槽 -->
    <UseSlot1></UseSlot1>

    <!-- 06  作用域插槽，使用子组件的值 -->
    <UseSlot2></UseSlot2>

    <!-- 07  作用域插槽，使用场景 -->
    <UseSlot3></UseSlot3>

    <!-- 08  作用域插槽，使用场景 -->
    <UseSlot4>
      <template v-slot:index="scope">
        {{ scope.row.index + 1 }}
      </template>

      <template v-slot:name="scope">
        {{ scope.row.name }}
      </template>

      <template v-slot:age="scope">
        <input type="text" v-model="scope.row.age" />
      </template>

      <template v-slot:toux="scope">
        <img :src="scope.row.headImgUrl" alt="" />
      </template>
    </UseSlot4>
  </div>
</template>

<script>
import UseSlot from './04_UseSlot.vue';

import UseSlot1 from './05_UseSlot.vue';

import UseSlot2 from './06_UseSlot.vue';

import UseSlot3 from './07.作用域插槽使用场景.vue';
import UseSlot4 from './08.作用域插槽使用场景.vue';

export default {
  components: {
    UseSlot,
    UseSlot1,
    UseSlot2,
    UseSlot3,
    UseSlot4,
  },
};
</script>

<style></style>
