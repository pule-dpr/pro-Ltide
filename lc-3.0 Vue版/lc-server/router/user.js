const express=require('express');
//导入连接池
const pool=require('../pool.js');
//创建路由器
const router=express.Router();
//添加用户注册路由
router.post('/v1/register',(req,res)=>{
    var obj=req.body;
    var sql='insert into lc_user set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    })
})
//添加用户登录路由
router.post('/v1/login',(req,res)=>{
    console.log(req.body);
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    console.log($uname,$upwd);
    var sql='select*from lc_user where uname=? and upwd=?';
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result[0]);
        }else{
            res.send('0');
        }
    });
});
//添加用户检索路由
router.get('/v1/detail/:uid',(req,res)=>{
    var $uid=req.params.uid;
    var sql='select * from lc_user where uid=?';
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('0');
        }
    });
 });
//添加用户删除路由
router.delete('/v1/delete/:uid',(req,res)=>{
   var $uid=req.params.uid;
   var sql='delete from lc_user where uid=?';
   pool.query(sql,[$uid],(err,result)=>{
       if(err) throw err;
       if(result.affectedRows>0){
           res.send('1');
       }else{
           res.send('0');
       }
   });
});
//添加用户修改路由
router.put('/v1/update',(req,res)=>{
    var obj=req.body;
    var sql='update lc_user set ? where uid=?';
    pool.query(sql,[obj,obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
});
//添加用户列表路由
router.get('/v1/list',(req,res)=>{
    var sql='select *from lc_user';
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
//添加用户邮箱检测路由
router.get('/v1/checkemail/:email',(req,res)=>{
    var $email=req.params.email;
    var sql='select *from lc_user where email=?';
    pool.query(sql,[$email],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
});
//添加检测手机号路由
router.get('/v1/phone/:phone',(req,res)=>{
    var $phone=req.params.phone;
    var sql='select *from lc_user where phone=?';
    pool.query(sql,[$phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
});
//检测用户名路由
router.get('/v1/search/:uname',(req,res)=>{
    var $uname=req.params.uname;
    var sql='select*from lc_user where uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
});
//添加退出登录路由
//获取当前用户信息路由
//导出路由
module.exports=router;