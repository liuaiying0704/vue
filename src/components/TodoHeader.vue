<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    // 子向父传值
    enter() {
      if (this.task == '') return alert('Please enter a task');
      this.$emit('send', this.task);
      this.task = '';
    },
  },
};
</script>
