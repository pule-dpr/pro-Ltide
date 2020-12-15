import axios from 'axios'
import qs from 'qs'
//引入并解构
import {baseURL} from '../config.js'
function getLogin(uname,upwd){
    return new Promise(function(resolve,reject){
        let obj={
            uname:uname,
            upwd:upwd,
        }
        //qs解析对象为字符串
        let str=qs.stringify(obj); 
        //请求
        axios.post(baseURL+'/user/v1/login',str).then(result=>{
            //请求成功返回结果
            resolve(result.data)
        });
    })
}
function getreg(uname,upwd,phone){
    return new Promise(function(resolve,reject){
        let obj={
            uname:uname,
            upwd:upwd,
            phone:phone
        }
         //qs解析对象为字符串
         let str=qs.stringify(obj); 
         axios.post(baseURL+'/user/v1/register',str).then(result=>{
             resolve(result.data);
         })
    });
}
export{getLogin,getreg}