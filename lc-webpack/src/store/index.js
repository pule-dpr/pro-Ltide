import Vue from 'vue'
import Vuex from 'vuex'
//引入常量函数
import mutations from './mutations'  
//vuex注册成为vue的插件
Vue.use(Vuex)
const state={
    login: false, //是否登录
    userInfo:null, //用户信息
}
//通过构造函数创建一个vuex的store
export default new Vuex.Store({
  //各个组件中共享的数据
  //定义了应用状态的数据结构，其类型可以为string，number，bool，object
  state,
  //定义方法改变状态
  mutations,
  //发送异步请求
  actions: {

  },
  //store的计算属性 第一次计算的结果会缓存
  getters(){

  },
  modules: {
  }
})
