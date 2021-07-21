// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
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
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
