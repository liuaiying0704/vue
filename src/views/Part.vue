<template>
  <div>
    <p>关注明星</p>
    <p>发现精彩</p>
    <p>寻找伙伴</p>
    <p>加入我们</p>
    <p>
      人名: ==username:{{ $route.query.username }}--{{ $route.params.username }}
    </p>
    <!-- <p>人名: {{ $route.params.username }}</p> -->
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route);
    // console.log(this.$route.query.id, this.$route.query.username); //1,zs
  },
};
</script>

<style></style>
