const express=require('express');
//导入第三方获取post数据
const bodyParser=require('body-parser');
//导入用户路由
const userRouter=require('./router/user.js');
//导入商品路由
const productRouter=require('./router/product.js');
//导入首页路由
const indexRouter=require('./router/index.js');
//创建服务器
let app=express();
//创建端口
app.listen(8080);
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

