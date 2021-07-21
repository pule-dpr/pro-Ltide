//引入常量
import { 
    USER_LOGIN,
    OUT_LOGIN    
} from "./mutation-types";
import {setStore, getStore,removeStore} from '../config/mUtils'
export default{
    //用户登录
    //我们可以使用es2015的风格计算属性命名功能来使用一个常量作为函数名
    //state为默认参数，不用传入
    [USER_LOGIN](state,info){
        //更改vuex中store中存入的state变量
        state.userInfo = info;
        state.login = true;
        // 调用存储localStorage函数
        setStore('uid',info.uid);
    },
    [OUT_LOGIN](state,info){
        state.userInfo = {};
        state.login = false;
        removeStore('uid');
    }
}