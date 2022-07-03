import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
// 全局注册
// import PanelG from './components/1.Panel.vue';
// Vue.component('PanelG', PanelG);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
