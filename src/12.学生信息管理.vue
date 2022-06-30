<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="userName" />
    </div>
    <br />

    <div>
      <span>年龄:</span>
      <input type="number" v-model="userAge" />
    </div>
    <br />

    <div>
      <span>性别:</span>
      <select v-model="userSex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <br />

    <div><button @click="add">添加</button><button>修改</button></div>
    <br />

    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button>删除</button>
            <button>编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, name: '张三', age: 18, sex: '男' },
        { id: 1, name: '张三', age: 18, sex: '男' },
      ],
      userName: '',
      userAge: '',
      userSex: '男',
    };
  },
  methods: {
    add() {
      // if (this.userName == '' || this.userAge == '')
      //   return alert('请您重新输入信息');
      this.arr = this.arr.push({
        id: this.arr.length + 1,
        name: userName,
        age: userAge,
        sex: userSex,
      });
      // console.log(this.userName);
    },
  },
};
</script>

<style>
th,
td {
  border: 1px solid rgb(28, 25, 25);
  width: 150px;
}
</style>
