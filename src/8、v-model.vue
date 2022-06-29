<template>
  <div>
    <span>文本框：</span>
    <input type="text" v-model="text" />
    <br />
    <span>密码框：</span>
    <input type="password" name="" id="" v-model="pass" />

    <br />
    <span>单选框</span>
    <input type="radio" value="男" name="sex" id="" v-model="radio" />男
    <input type="radio" value="女" name="sex" id="" v-model="radio" />女 <br />

    <span>复选框</span>
    <input type="checkbox" name="" id="" value="抽烟" v-model="hobby" />抽烟
    <input type="checkbox" name="" id="" value="喝酒" v-model="hobby" />喝酒
    <input type="checkbox" name="" id="" value="打豆豆" v-model="hobby" />打豆豆
    <br />

    <span>下拉框</span>
    <select name="" id="" v-model="select">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="杭州">杭州</option>
    </select>
    <br />
    <span>下拉框</span>
    <select name="" id="" v-model="select1" multiple>
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="杭州">杭州</option>
    </select>
    <br />
    <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      pass: '',
      radio: '男',
      hobby: [],
      select: '',
      select1: [],
      textarea: '',
    };
  },
};
</script>

<style></style>
