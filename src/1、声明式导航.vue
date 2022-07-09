<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a> -->

      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part?id=1">朋友</router-link>
      <router-link to="/part/zs">朋友</router-link>
      <!-- router-link   router-link-exact-active router-link-active -->
    </div>
    <div class="top">
      <!-- 7. 设置挂载点-当url的hash值路径切换, 显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 在router-link上的to属性传值, 语法格式如下
// * /path?参数名=值
// * /path/值 – 需要路由对象提前配置 path: “/path/参数名”
// 对应页面组件接收传递过来的值
// * $route.query.参数名
// * $route.params.参数名
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  background-color: pink;
}
</style>
