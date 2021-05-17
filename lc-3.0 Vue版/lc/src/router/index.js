import Vue from 'vue'
import VueRouter from 'vue-router'
//导入页面组件 主页
import Index from '../views/Index'
//导入页面组件 登录页
import Login from '../views/login'
//导入页面组件 个人中心页
import Personal from '../views/personal'
//导入详情页面组件
import Details from  '../views/details'
import test from  '../views/test'
import list from '../views/list'
Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/detail',
    name: 'Details',
    component: Details
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
