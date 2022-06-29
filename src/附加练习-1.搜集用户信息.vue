<template>
  <!-- 
  需求点：

1. 完成页面初搭
2. 选择所在地区有默认选中 中国大陆
3. 年龄 只可以 输入数字
4. 爱好 默认选中 学习 写代码 这两项
5. 信息展示部分 爱好 展示 以逗号 做为分割符
6. 信息展示部分 是否记住密码 用是和否
 -->
  <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" :value="1" name="area" v-model="area" />中国大陆
      <input type="radio" :value="0" name="area" v-model="area" />中国香港
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" v-model.number="phone" />
    </div>

    <div>
      <span>年龄</span>：
      <input type="text" v-model.number="age" />
    </div>
    <div>
      <span>密码</span>：
      <input type="password" v-model="pass" />
    </div>

    <div>
      <span>爱好：</span>
      <input type="checkbox" value="看书" v-model="hobby" />看书
      <input type="checkbox" value="学习" v-model="hobby" />学习
      <input type="checkbox" value="写代码" v-model="hobby" />写代码
      <input type="checkbox" value="游戏" v-model="hobby" />游戏
    </div>
    <div><input type="checkbox" v-model="info" /> 记住密码</div>
    <div>===============================================</div>
    <div>
      我来自：{{ { 1: '中国大陆', 0: '中国香港' }[area] }}
      <br />
      手机号码是：{{ phone }}
      <br />
      年龄是：{{ age }}
      <br />
      密码是：{{ pass }}
      <br />
      爱好是：{{ hobby }}
      <br />
      是否记住密码：{{ info ? '是' : '否' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: 1,
      phone: '',
      age: '',
      pass: '',
      hobby: ['写代码'],
      info: '',
    };
  },
};
</script>

<style></style>
