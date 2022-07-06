<template>
  <div class="todoapp">
    <TodoHeader @send="sendFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter :count="count" @filter="filterFn" @clear="clearFn"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      getSel: 'all',
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
    // 4\1
    filterFn(val) {
      this.getSel = val;
    },
    // 5\
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  computed: {
    // 3、剩余统计
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    // 4.2
    showList() {
      if (this.getSel == 'yes') return this.list.filter((ele) => ele.isDone);
      if (this.getSel == 'no') return this.list.filter((ele) => !ele.isDone);
      else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []));
      },
    },
  },
};
</script>
<style></style>
