<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <!-- 更新 -->
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, Vue',
      arr: [1, 2, 3, 4],
      //   销毁定时器
      timer: null,
    };
  },
  // 一. 初始化
  // new Vue()以后, vue内部给实例对象添加了一些属性和方法, data和methods初始化"之前"
  beforeCreate() {
    console.log('beforeCreate -- 执行');
    console.log(this.msg); // undefined
  },
  // data和methods初始化以后
  // 场景: 网络请求, 注册全局事件
  created() {
    console.log('created -- 执行');
    console.log(this.msg); // hello, Vue
    this.fn();
    // 销毁
    this.timer = setInterval(() => {
      console.log('11');
    }, 2000);
  },
  //  beforeMount 挂载前,不可以操作dom,获取不到dom，null
  beforeMount() {
    console.log('beforeMount执行');
    console.log(document.getElementById('myP'));
  },
  //  mounted 挂载后,可以操作dom,获取dom
  mounted() {
    console.log('mounted执行');
    console.log(document.getElementById('myP'));
  },
  // 更新前 beforeUpdate
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL>li')[4]);
    // 数据更新，页面不更新
  },
  //  更新后 updated
  updated() {
    console.log('updated');
    console.log(this.arr[4]);
    console.log(document.querySelectorAll('#myUL > li')[4]);
    // 数据更新，页面更新
  },
  //
  beforeDestroy() {
    console.log('beforeDestroy');
    // 销毁前，清除定时器
    clearInterval(this.timer);
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {
    fn() {
      console.log('created,方法');
    },
  },
};
</script>
