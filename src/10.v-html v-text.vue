<template>
  <div>
    <!--<span>我是span</span>  -->
    <span>插值</span>
    {{ str }}

    <!--  v-html可以识别HTML -->
    <h1 v-html="str"></h1>

    <!-- v-text把变量当文本处理 -->
    <h1 v-text="str"></h1>

    <!-- v-html="str" ,v-text="str"会把插值表达式覆盖掉-->
    <h1 v-html="str">{{ str }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: ' <span>我是span</span>',
    };
  },
};
</script>

<style></style>
