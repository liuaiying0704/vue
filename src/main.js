import Vue from 'vue';
import App from './App.vue';

import Find from '@/views/Find.vue';
import My from '@/views/My.vue';
import Part from '@/views/Part.vue';
import NotFound from '@/views/NotFound.vue';

import Ranking from '@/views/Second/Ranking';
import Recommend from '@/views/Second/Recommend';
import SongList from '@/views/Second/SongList';
// 1\下载vue-router
// 2\引入
import VueRouter from 'vue-router';
// 注册全局插件
Vue.use(VueRouter);
// 报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/find',
    component: Find,
    name: 'Find',

    children: [
      {
        path: '', // 默认hash值路径
        redirect: 'recommend', // 重定向到/find
        // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
      },
      { path: 'ranking', component: Ranking },
      { path: 'recommend', component: Recommend },
      { path: 'songlist', component: SongList },
    ],
  },
  { path: '/my', component: My, name: 'My' },
  {
    path: '/part',
    component: Part,
    name: 'Part',
  },
  {
    path: '/part/:username', // 有:的路径代表要接收具体的值
    component: Part,
    name: 'Part',
  },
  // 路径错误配置
  { path: '*', component: NotFound },
  // 重定向配置，默认路径Find
  {
    path: '/', // 默认hash值路径
    redirect: '/find', // 重定向到/find
    // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
  },
];

// 5\挂载到实例上
const router = new VueRouter({
  routes,
  // mode: 'history', // 打包上线后需要后台支持, 模式是hash
});

// 路由守卫
// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地
const islogin = true;
router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  if (to.path === '/my' && !islogin) {
    alert('请登录');
    next(false);
  } else {
    next();
  }

  // //
  // if (to.path !== '/part') {
  //   next('/part');
  // } else {
  //   next();
  // }

  // // 报错
  // next('/part');
});

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// const vm =
console.log(vm);
// 可查看$router,,,$route
