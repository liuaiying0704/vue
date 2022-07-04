<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- 组件 -->
        <MyStr
          :info="item"
          v-for="(item, index) in goodList"
          :key="index"
        ></MyStr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">总件数：{{ count }}总价格：{{ sum }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyStr from './components/8.购物车.vue';
export default {
  components: { MyStr },
  data() {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  computed: {
    //
    count() {
      return this.goodList.reduce((sum, next) => (sum = sum + next.num), 0);
    },
    sum() {
      return this.goodList.reduce(
        (sum, next) => (sum = sum + next.num * next.price),
        0
      );
    },
    // 全选isAll,小选绑定checked，
    isAll: {
      set(val) {
        this.goodList.forEach((ele) => (ele.checked = val));
      },
      get() {
        return this.goodList.every((ele) => ele.checked);
      },
    },
  },
};
</script>

<style></style>
