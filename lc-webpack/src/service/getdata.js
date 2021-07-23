import { get,post } from "../config/axios";
//账号密码登录
export const getLogin = (uname,upwd) => post('/user/v1/login',{uname,upwd});
export const getIndex = () => get('/index/');
//创建验证token函数
export const validate = () => get('/validate');