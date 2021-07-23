import Vue from 'vue'
import Router from 'vue-router'
// require.ensure（dependencies：String []，callback：function（require），errorCallback：function（error），chunkName：String）
// 第一个参数的依赖关系是一个数组，代表了当前需要进来的模块的一些依赖;
// 。第二个参数回调就是一个回调函数其中需要注意的是，这个回调函数有一个参数要求，通过这个要求就可以在回调函数内动态引入其他模块值得注意的是，虽然这个要求是回调函数的参数，理论上可以换其他名称，但是实际上是不能换的，否则的的的的WebPack就无法静态分析的时候处理它;
// 第三个参数errorCallback比较好理解，就是处理错误的回调;
// 第四个参数chunkName则是指定打包的组块名称。
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const Index = r => require.ensure([], () => r(require('../page/Index')), 'Index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      // meta:{
      //   needLogin:true
      // }    
    }
  ]
})

