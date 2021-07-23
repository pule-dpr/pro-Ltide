// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
//引入axios
import axios from 'axios'
import qs from 'qs'
Vue.config.productionTip = false
//添加到原型对象
Vue.prototype.axios=axios;
Vue.prototype.qs=qs;
//配置默认基础url
// axios.defaults.baseURL="http://127.0.0.1:3000"
/* eslint-disable no-new */
//每一次切换路由时，都执行这个导航守卫
router.beforeEach(async (to,from,next)=>{
  //store.dispatch含有异步操作，数据提交至 actions ，可用于向后台提交数据
  let isLogin = await store.dispatch('validate')  //判断是否登录了
  // needLogin  表示哪些路由需要在登录条件下才能访问
  // console.log(to);
  let needLogin = to.matched.some(match=>match.meta.needLogin)
  if(needLogin){
    //需要登录
    if(isLogin){
      //登录过了
      next()
    }else{
      //没有登录
      next('/login')
    }
  }else{
    //不需要登录
    if(isLogin && to.path === '/login'){  //如果你访问login页面，则给你跳到首页面，因为不需要登录
      // next('/')
    }else{
      next()
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
