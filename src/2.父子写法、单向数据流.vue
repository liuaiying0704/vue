<template>
  <div>
    <!-- 写法一 -->
    <!-- <Myproduct :title="msg" price="45" info="开业大酬宾, 全场8折"></Myproduct>
    <Myproduct title="清蒸鱼" price="69" info="开业大酬宾, 全场5折"></Myproduct> -->

    <!-- 写法二 -->
    <Myproduct
      v-for="item in list"
      :key="item.id"
      :info="item.info"
      :price="item.proprice"
      :title="item.proname"
    ></Myproduct>
  </div>
</template>

<script>
import Myproduct from './components/2.Myproduct.vue';
export default {
  components: {
    Myproduct,
  },
  data() {
    return {
      //   msg: '酸菜鱼',
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    };
  },
};
</script>

<style></style>
