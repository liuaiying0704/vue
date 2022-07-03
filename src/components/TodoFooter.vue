<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          @click="change('all')"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          @click="change('no')"
          href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          @click="change('yes')"
          href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  // 3,剩余的统计
  props: ['count'],
  data() {
    return {
      isSel: 'all',
    };
  },
  methods: {
    change(val) {
      this.isSel = val;
    },
  },
};
</script>
