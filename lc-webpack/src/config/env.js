/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

import axios from "axios";

 let baseUrl = ''; 
 let routerMode = 'hash';
 let imgBaseUrl = '';
 //为开发模式时
 if (process.env.NODE_ENV == 'development') {
     //设置axios默认基础路径
    baseUrl=axios.defaults.baseURL="http://127.0.0.1:3000"
 
 }else if(process.env.NODE_ENV == 'debug'){
     axios.defaults.baseURL=''
 }else if(process.env.NODE_ENV == 'production'){
     axios.defaults.baseURL=''
 }
 
 export {
     baseUrl,
     routerMode,
     imgBaseUrl,
 }