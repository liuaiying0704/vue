<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('userName created');
  },
  activated() {
    console.log('userName activated');
  },
  deactivated() {
    console.log('userName deactivated');
  },
};
</script>
