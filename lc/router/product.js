const express=require('express');
//导入连接池
const pool=require('../pool.js');
//创建路由器
const router=express.Router();
//添加商品路由
//添加商品登录路由
//添加商品检索路由
router.get('/v1/detail/:fid',(req,res)=>{
    var $fid=req.params.fid;
    var sql='select * from lc_fashion_pic where fashion_id=?';
    pool.query(sql,[$fid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})
//添加商品删除路由
//添加商品修改路由
//添加商品列表路由
//添加商品邮箱检测路由
//添加检测手机路由
//检测商品名路由
//添加退出登录路由
//获取当前商品信息路由
//导出路由
module.exports=router;