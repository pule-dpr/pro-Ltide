import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'
//引入页头页脚
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
//将页头页脚 子组件变为全局组件
Vue.component('my-header',MyHeader);
Vue.component('my-footer',MyFooter);

Vue.config.productionTip = false
//配置默认基础url
axios.defaults.baseURL="http://127.0.0.1:3000"
//添加到原型对象
Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
