import axios from "axios";
import qs from 'qs'
import { baseUrl, routerMode } from "./env";
//设置请求超时
axios.defaults.timeout=10000;
//设置post，put的请求头信息
//不能多加，会请求不到，错误示范：Content-Type']='application/x-www-form-urlencoded;charset=UTF-8;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8;';
//请求拦截
   axios.interceptors.request.use(
        config => {
        return config
        },
        err => {
        return Promise.reject(err)
        })
//响应拦截
    axios.interceptors.response.use(
        response => {
          //如果返回状态码为200，表示接口请求成功，可以正常拿到数据
          //否则抛出错误
          if(response.status===200){
            return Promise.resolve(response);
          }else{
            return Promise.reject(response);
          }
        },
        //服务器返回状态码不是2开头的，可以根据不同的状态码做相应的操作
        error => {
          if(error.response.status){
            // switch(error.response.status){
            //   //401 未登录
            //   case 401:
            //     router.replace({
            //       path:'/login',
            //       query:{
            //         redirect:router.currentRoute.fullPath
            //       }
            //     });
            //     break;
              //403 token过期
              //404 请求不存在
              return Promise.reject(err.response);
            // }
          }
        })
export function get(url,params) {
   return new Promise((resolve,reject)=>{
     axios.get(baseUrl+url,{
       params:params
     }).then(res=>{
       resolve(res.data);
     }).catch(err=>{
       reject(err.data);
     })
   });
  }
  export function post(url,params) {
    return new Promise((resolve,reject)=>{
      let str=qs.stringify(params)
      axios.post(baseUrl+url,str).then(res=>{
        resolve(res.data);
      }).catch(err=>{
        reject(err.data);
      })
    });
   }
  