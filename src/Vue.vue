<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td></td>
            <td></td>
            <td><a href="#">删除</a></td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为:</td>
            <td colspan="2">平均价:</td>
          </tr>
        </tbody>

        <tfoot>
          <tr v-if="list.length == 0">
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
// 第二：
// 1.收集表单数据，添加资处
// 2.给添加资产绑定点击事件
//// 目标: 处理时间
// 1. 下载moment模块
import moment from 'moment';
export default {
  data() {
    return {
      list: [
        { id: 100, name: '', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      ],
    };
  },

  // 1\  新增数据==============================
  // 非空判断,  注意：此处：加trim。v-model.trim="name"
  // if后面的就不执行

  //2 删除完了，报错。
};
</script>

<style>
.red {
  color: red;
}
</style>
