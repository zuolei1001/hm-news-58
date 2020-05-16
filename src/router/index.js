import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入组件
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import User from '../pages/User.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/user', component: User, name: 'password' }
  ]
});

export default router;
