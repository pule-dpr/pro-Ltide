const express=require('express');
//导入第三方获取post数据
const bodyParser=require('body-parser');
const jwt = require('jsonwebtoken');
//导入用户路由
const userRouter=require('./router/user.js');
//导入商品路由
const productRouter=require('./router/product.js');
//导入首页路由
const indexRouter=require('./router/index.js');
const cors = require('cors');
//创建服务器
let app=express();
//创建端口
app.listen(3000);
app.use(cors({

    origin:['http://127.0.0.1:8080','http://localhost:8080']
  
  }));
 app.get('/cat',(req,res)=>{
    res.send('OK');
  });
//使用第三方中间件
app.use(bodyParser.urlencoded({
    extended:false
}))
//托管静态资源到public目录下
app.use(express.static('public'));
//挂载用户路由  前缀为/user
app.use('/user',userRouter);
//挂在商品路由 前缀为/product
app.use('/product',productRouter);
//挂在首页路由 前缀为/index
app.use('/index',indexRouter);
//验证token的接口
let secret="mouchun.com";
app.get('/validate',(req,res)=>{
  let token = req.headers['user-token'];  //我们会把token放到我们自己设置的http的头authorization中，在这里可以直接拿到
  console.log(token);
  jwt.verify(token,secret,(err,decode)=>{     //验证token
      if(err){
          return res.json({
              code:1,
              data:'token失效了'
          })
      }else{
          // token合法  在这里，需要把token的时效延长，
          //总不能我们看着看着突然让我们重新登录，token过期的意思是，你在这之间不进行任何操作才会过期
          console.log("6666",decode);
          res.json({
              code:0,
              username:decode.username,
              token:jwt.sign({username:'Fan'},secret,{    //合法时，我们需要重新生成一个token,我们每次切换路由，都要重新生成一个token
                  expiresIn:20
              })
          })
      }
  })
})
