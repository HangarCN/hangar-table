import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由插件
Vue.use(VueRouter)

//
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/demo/index.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})