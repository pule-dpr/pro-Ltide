const { createPool } = require("mysql");

const mysql=require('mysql');
//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'8080',
    user:'root',
    password:'',
    database:'lc',
    connectionLimit:15
});
module.exports=pool;