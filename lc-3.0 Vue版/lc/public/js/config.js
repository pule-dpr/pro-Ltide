//配置默认基础url
import axios from 'axios'
var baseURL=axios.defaults.baseURL="http://127.0.0.1:3000"
//抛出baseURL
export{
    baseURL
}