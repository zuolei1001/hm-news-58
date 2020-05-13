import Vue from 'vue';
import App from './App.vue';

// 引入通用样式
import './styles/base.less';
// 引入字体图标
import './styles/iconfont.css';
// 导入lib-flexible模块,会自动适配屏幕
import 'lib-flexible';
// 导入路由对象
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
