<template>
  <div>
    <input type="text" v-number v-model="eqq" />
    <p v-color="colorStr" @click="colorStr = 'red'">改变颜色</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eqq: '',
      colorStr: 'green',
    };
  },
  directives: {
    focus: {
      inserted(el) {
        console.log(el);
        el.focus();
      },
    },
    number: {
      inserted(el) {
        console.log(el);
        el.value = el.value.replace(/[^\d.]/g, '');
        console.log(el.value);
      },
      update(el) {
        el.value = el.value.replace(/[^\d.]/g, '');
        console.log(el.value);
      },
    },
    color: {
      inserted(el, bind) {
        el.style.color = bind.value;
      },
      update(el, bind) {
        el.style.color = bind.value;
      },
    },
  },
};
</script>

<style></style>
