<template>
  <div>
    <p>过滤器数字</p>
    <p>{{ ss | nn }}</p>
    <p>{{ ss | nn1 }}</p>

    <p>过滤器时间</p>
    <p>{{ num | number('YYYY-MM-DD') }}</p>
    <p>{{ num | number('YYYY/MM/DD') }}</p>
  </div>
</template>

<script>
// 4. 过滤器作业
// 1876986======187.6986万
// 1636450540055时间戳

// 1.请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象
// 2. 模拟实现instanceof
// 3. this 指向
import moment from 'moment';
export default {
  data() {
    return {
      num: 1636450540055,
      ss: 1876986,
    };
  },
  filters: {
    nn(val) {
      return val / 10000 + '万';
    },
    nn1(val) {
      return val / 1000 + '千';
    },
    number(val, a) {
      return moment(val).format(a); // 1318874398
    },
    number1(val, b) {
      return moment(val).format(b); // 1318874398
    },
  },
};
</script>

<style></style>
