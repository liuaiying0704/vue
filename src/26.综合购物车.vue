<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="chang" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span>-</span><input type="text" :value="item.count" /><span>+</span>
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="delFn">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />

    <button>删除选中商品</button>
    <button>清理购物车</button>
    <br />
    <div style="margin-top: 20px" class="sta">
      <p>统计:</p>
      <p>已经选中商品件数:</p>
      <p>总价:</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 320000, count: 1, c: false },
        { id: 2, name: '宝马', price: 500000, count: 1, c: false },
        { id: 3, name: '奥迪', price: 400000, count: 1, c: false },
      ],
    };
  },
  methods: {
    delFn(id) {
      // 删除按钮 - 得到索引, 删除数组里元素
      let index = this.list.findIndex((ele) => id == ele.id);
      this.list.splice(index, 1);
    },
  },
  // 1、全选功能
  computed: {
    chang: {
      set(val) {
        this.list.forEach((ele) => (ele.c = val));
      },
      get() {
        return this.list.every((ele) => ele.c);
      },
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
.sta {
  display: flex;
  width: 500px;
}
.sta p {
  flex: 1;
}
</style>
