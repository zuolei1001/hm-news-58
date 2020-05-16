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
// 导入axios
import axios from 'axios';

Vue.config.productionTip = false;

// ------------------------全局注册组件----------------------------
import HmHeader from './components/HmHeader.vue';
import HmLogo from './components/HmLogo.vue';
import HmButton from './components/HmButton.vue';
import HmInput from './components/HmInput.vue';

Vue.component('hm-header', HmHeader);
Vue.component('hm-logo', HmLogo);
Vue.component('hm-button', HmButton);
Vue.component('hm-input', HmInput);

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:3000';

import { Toast } from 'vant';
Vue.use(Toast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
