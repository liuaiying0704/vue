<template>
  <div class="todoapp">
    <TodoHeader @send="sendFn"></TodoHeader>
    <TodoMain :list="list" @del="delFn"></TodoMain>
    <TodoFooter :count="count"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 101, name: '睡觉', isDone: false },
        { id: 102, name: '打豆豆', isDone: true },
      ],
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    // 1\添加
    sendFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;

      this.list.push({ id, name: val, isDone: false });
    },
    // 2\删除
    delFn(index) {
      this.list.splice(index, 1);
    },
  },
  computed: {
    // 3、剩余统计
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
  },
};
</script>

<style></style>
