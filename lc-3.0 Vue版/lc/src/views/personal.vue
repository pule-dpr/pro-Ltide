<template>
    <div class="container personal">
        <!--上半部-->
        <div id="top">
          <!--个人背景-->
          <div class="bg">
            <img src="/img/personal/bg1.jpg" alt="">
          </div>
          <div class="content">
            <!--头像-->
            <div class="tx">
              <div>
                <img src="/img/detail/tx4.jpg" alt="">
              </div>
            </div>
            <!--基本信息-->
            <div class="basic">
              <p>-pule-</p>
              <ul>
                <li>
                  <a href="#">粉丝 <span>461</span></a>
                </li>
                <li>|</li>
                <li>
                  <a href="">关注 <span>284</span></a>
                </li>
              </ul>
            </div>
            <!--按钮-->
            <div class="btn">
              <button class="animate__animated">＋<span>关注</span></button>
              <button class="iconfont iconxiaoxi"><span>私信</span></button>
            </div>
          </div>
          <!--详细信息-->
          <div class="detail">
            <div class="first">
              <div class="one">
                <span class="iconfont iconbianji">个人简介：</span>
                <span>趣味相投才能做朋友。</span>
              </div>
              <div>
                  <a href="javascript:;" :class="open" @click="openclose()"></a>
              </div>
            </div>
            <div class="other" :class="open">
              <div class="one">
                <span class="iconfont iconlishi">注册时间：</span>
                <span>2015-04-10</span>
              </div>
              <div class="one">
                <span class="iconfont icondingdan">出生年月：</span>
                <span>1998-12-24 摩羯座</span>
              </div>
              <div class="one">
                <span class="iconfont icondingwei">所在地点：</span>
                <span>新疆 博尔塔拉</span>
              </div>
              <div class="update">
                <a href="#">查看和编辑资料>></a>
              </div>
            </div>
          </div>
          <!--导航-->
          <div class="pernav">
            <div>
              <ul>
                <li :class="pro" @click="change('pro')">作品</li>
                <li :class="life" @click="change('life')">生活</li>
                <li :class="collect" @click="change('collect')">收藏</li>
                <li :class="like" @click="change('like')">喜欢</li>
              </ul>
            </div>
          </div>
        </div>
        <!--下半部-->
        <div id="bot" class="clearfix">
          <!--作品页-->
          <div :class="pro" id="pro">
            <p>共有12个作品</p>
             <!--作品主体-->
             <div id="list">
              <div class="body">
                <ul class="row">
                  <li>
                    <ul class="clearfix">
                      <li>
                        <div class="img">
                          <img src="/img/list/1.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：nike blazer mid 灰黑白 迷彩
                          </div>
                          <div>
                            潮牌 潮鞋
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           1小时前
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="img">
                          <img src="/img/list/2.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：Adidas 三叶草 新款 高帮
                          </div>
                          <div>
                            潮牌 潮鞋
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           一天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/3.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：nike air max 97 x undftd联名
                          </div>
                          <div>
                            潮牌 潮鞋
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           八天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/4.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：万斯 新款 吴亦凡同款 板鞋
                          </div>
                          <div>
                            潮牌 潮鞋
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                            九天前
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="clearfix">
                      <li>
                        <div class="img">
                          <img src="/img/list/acc1.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：耳机项链 复古 潮流 配饰
                          </div>
                          <div>
                            配饰 项链
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                          10天前
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="img">
                          <img src="/img/list/acc2.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：海尔兄弟 工艺品吊坠 潮流
                          </div>
                          <div>
                            配饰 项链
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           15天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/acc3.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：hip-hop 潮流嘻哈 饰品
                          </div>
                          <div>
                            配饰 项链
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                            18天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/acc4.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：卡洛奇饰品 街头潮人锁骨链
                          </div>
                          <div>
                            配饰 项链
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           19天前
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="clearfix">
                      <li>
                        <div class="img">
                          <img src="/img/list/cap1.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：GD同款 鸭舌帽 潮流
                          </div>
                          <div>
                            潮帽 鸭舌帽
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                            20天前
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="img">
                          <img src="/img/list/cap2.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：渔夫帽 吴亦凡同款 潮流
                          </div>
                          <div>
                            潮帽 渔夫帽
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                            22天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/cap3.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：针织帽 GD同款 新款
                          </div>
                          <div>
                            潮帽 针织帽
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                           24天前
                          </div>
                        </div>
                      </li> 
                      <li>
                        <div class="img">
                          <img src="/img/list/cap4.jpg" alt="">
                        </div>
                        <div class="textcontent">
                          <div>
                            标题：陈冠希代言 男帽 新款
                          </div>
                          <div>
                            潮帽 同款帽
                          </div>
                          <div class="xinxi">
                            <span class=" iconfont iconliulan">18676</span>
                            <span class=" iconfont iconduihua">25</span>
                            <span class=" iconfont iconxihuan">241</span>
                          </div>
                          <div>
                            25天前
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="foot">
                <a href="">更多作品 >></a>
              </div>
          </div>
          </div>
          <!--生活页-->
          <div :class="life" id="life">
            <img src="/img/personal/empty.png" alt="">
          </div>
          <!--收藏页-->
          <div :class="collect" id="collect">
              <img src="/img/personal/empty.png" alt="">
          </div>
          <!--喜欢页-->
          <div :class="like" id="like">
            <p>共有168个喜欢</p>
            <!--作品主体-->
            <div id="list">
                <div class="body">
                  <ul class="row">
                    <li>
                      <ul class="clearfix">
                        <li>
                          <div class="img">
                            <img src="/img/list/1.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：nike blazer mid 灰黑白 迷彩
                            </div>
                            <div>
                              潮牌 潮鞋
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             1小时前
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="img">
                            <img src="/img/list/2.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：Adidas 三叶草 新款 高帮
                            </div>
                            <div>
                              潮牌 潮鞋
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             一天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/3.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：nike air max 97 x undftd联名
                            </div>
                            <div>
                              潮牌 潮鞋
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             八天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/4.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：万斯 新款 吴亦凡同款 板鞋
                            </div>
                            <div>
                              潮牌 潮鞋
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                              九天前
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul class="clearfix">
                        <li>
                          <div class="img">
                            <img src="/img/list/acc1.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：耳机项链 复古 潮流 配饰
                            </div>
                            <div>
                              配饰 项链
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                            10天前
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="img">
                            <img src="/img/list/acc2.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：海尔兄弟 工艺品吊坠 潮流
                            </div>
                            <div>
                              配饰 项链
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             15天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/acc3.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：hip-hop 潮流嘻哈 饰品
                            </div>
                            <div>
                              配饰 项链
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                              18天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/acc4.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：卡洛奇饰品 街头潮人锁骨链
                            </div>
                            <div>
                              配饰 项链
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             19天前
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul class="clearfix">
                        <li>
                          <div class="img">
                            <img src="/img/list/cap1.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：GD同款 鸭舌帽 潮流
                            </div>
                            <div>
                              潮帽 鸭舌帽
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                              20天前
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="img">
                            <img src="/img/list/cap2.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：渔夫帽 吴亦凡同款 潮流
                            </div>
                            <div>
                              潮帽 渔夫帽
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                              22天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/cap3.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：针织帽 GD同款 新款
                            </div>
                            <div>
                              潮帽 针织帽
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                             24天前
                            </div>
                          </div>
                        </li> 
                        <li>
                          <div class="img">
                            <img src="/img/list/cap4.jpg" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：陈冠希代言 男帽 新款
                            </div>
                            <div>
                              潮帽 同款帽
                            </div>
                            <div class="xinxi">
                              <span class=" iconfont iconliulan">18676</span>
                              <span class=" iconfont iconduihua">25</span>
                              <span class=" iconfont iconxihuan">241</span>
                            </div>
                            <div>
                              25天前
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="foot">
                  <a href="">更多喜欢 >></a>
                </div>
            </div>
          </div>
        </div>
        <!-- 更多 -->
	    <div class="float-menu" :class="menuopen" @click="menuopenclose()">
		<div class="plus"><div class="cross"></div></div>
		<div class="menu-list">
			<a href="#index" class="link-home">发布</a>
			<a href="#my" class="link-my">草稿箱<span id="float-cart">6</span></a>
      <a href="#cart" class="link-cart">客服</a>
      <a href="#about" class="link-about">关于</a>
		</div>
	    </div>
	    <!-- 代码部分end -->
    </div>
</template>
<style>
 .container #top .bg>img{
    
    width: 100%;
}
 .container #top .content{
    display: flex;
}
 .container #top .content .tx>div{
    width: 120px;
    height:120px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -50px;
    margin-left: 50px;
}
 .container #top .content .tx>div>img{
    width: 100%;
}
 .container #top .content .basic p{
    font-size: 24px;
    font-weight: bolder;
    margin: 15px 0px 25px 25px;
}
 .container #top .content .basic>ul{
    list-style: none;
    display: flex;
}
 .container #top .content .basic>ul>li{
    margin-left: 25px;
}
 .container #top .content .basic>ul>li>a{
    font-weight: bolder;
}
 .container #top .content .basic>ul>li>a>span{
    margin-left: 5px;
    font-weight: normal;
}
 .container #top .content .btn{
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-left: 60%;
}
 .container #top .content .btn>button{
    margin-top: 15px;
    width: 130px;
    height: 35px;
    font-weight: bold;
    border-radius: 5PX;
}
 .container #top .content .btn>button>span{
    margin-left: 5px;
    font-size: 14px;   
}
 .container #top .content .btn>button:first-child{
    font-size: 18px;
}
 .container #top .content .btn>button:first-child.active{
    animation: rubberBand 1s;
}

 .container #top .detail{
    border-bottom: 1px solid #ccc;
}
 .container #top .detail .first{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 15px;
}
 .container #top .detail .one>span:first-child{
    font-weight: bolder;
    margin-left:60px;
    font-size: 14px;
    margin-right: 40px;
}
/****************************信息**********************************/
 .container #top .detail .first{
    margin-bottom: 25px;
}
.container #top .detail .first div:last-child{
    margin-right:14%;
}
.container #top .detail .first div:last-child>a{
    display: block;
    width: 10px;
    height:10px;
    border: 2px solid #000;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}
.container #top .detail .first div:last-child>a.open{
    border: 2px solid #000;
    border-bottom: none;
    border-right: none;
}
/**********隐藏的部分*********/
 .container #top .detail .other{
    display: none;
}
 .container #top .detail .other.open{
    display: block;
}
 .container #top .detail .other .one{
   margin-top: 15px;
}
 .container #top .detail .other .update{
    text-align: center;
    margin-top: 15px;
   
}
 .container #top .detail .other .update>a{
    color: #ff6633;
    font-weight: bolder;
    display: inline-block;
    margin-bottom: 30px;
}
 .container #top .pernav{
    border-bottom: 1px solid #ccc;
}
 .container #top .pernav>div{
    width: 1000px;
    margin: 0 auto;
}
 .container #top .pernav div>ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
 .container #top .pernav div>ul li{
    text-align: center;
    width: 110px;
   font-size: 16px;
    height: 60px;
    line-height: 60px;
    color: #666;
    cursor: pointer;
    box-sizing: border-box;
}
 .container #top .pernav div>ul>li.active{
    color: #000;
    border-bottom: 2px solid #000;
}

 .container #bot{
    background-color: #f4f4f4;
    /* background-image: url(../img/personal/bg2.jpg);
    background-repeat: no-repeat;
    background-size:cover; */
 }
/***************************作品页*********喜欢页************************************/
 .container #bot #pro>p,#bot #like>p{
    padding-top: 50px;
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
    color: #666;
}
/***************************作品主体***********************************/
   .container #list .body{
      margin-top: 20px;
      margin-bottom: 60px;
  }
   .container #list .body .row, #list .body .row li ul{
      list-style: none;
      width: 85%;
      margin: 0 auto;
  }
   .container #list .body .row li{
      margin-top: 15px;
  }
   .container #list .body .row li ul{
      display: flex;
      justify-content: space-around;
  }
   .container #list .body .row li ul li{
    width:290px;
    height: 400px;
    border: 1px solid #ffffff;
   float: left;
   color: 14px;
   font-weight: normal;
   border: 1px solid #ccc;
   background-color: #fff;
  }
   .container #list .body .row li ul li .img{
      width: 290px;
      height: 280px;
      background-color: tomato;
      margin: 0;
      overflow: hidden;
  }
   .container #list .body .row li ul li .img>img{
     width: 100%;
  }
   .container #list .body .row li ul li .textcontent{
    background-color: #fff;
    width: 270px;
  }
   .container #list .body .row li ul li .textcontent div{
      background-color: #fff;
    padding-left: 45px;
    margin-bottom: 10px;
    font-size: 12px;
    width: 220px;
  }
   .container #list .body .row li ul li .textcontent div:first-child{
      font-size: 12px;
      margin-bottom: 15px;
      font-weight: bolder;
  }
   .container #list .body .row li ul li .textcontent>.xinxi>span+span{
    margin-left: 20px;
  }
   .container #list .body .row li ul li .textcontent>.xinxi>.iconfont{
    font-weight: normal;
    font-size: 12px;
  }
  .container #list .body .row li ul li .textcontent div:last-child{
    border-top: 1px solid #ccc;
    margin-top: 10px;
    line-height: 35px;
    color: #aaa;
    padding-left: 20px;
    width: 100%;
  }
   .container #list .body .row li ul li~li{
    margin-left: 15px;      
}
 .container #list .foot{
    text-align: center;
    padding-bottom: 60px;
}
 .container #list .foot>a{
    color: #ff6633;
    font-weight: bolder;
}
 .container #pro,#collect,#life,#like{
    display: none;
}
 .container #bot div.active{
    display: block;
}
/***************************生活页*******收藏页***************************************/
 .container #bot #life,#bot #collect{
    width: 1130px;
    height:600px;
    border-radius: 15px;
    background-color: #fff;
    margin:60px auto;
    position: relative;
}
 .container #life>img,#collect>img{
    position: absolute;
    top: 130px;
    left: 400px;
}
/****************************************************/
/* 代码原创：更多 */
*{margin:0;padding:0;list-style:none;}
.float-menu{width: 50px;height: 50px;position: fixed;z-index: 99999;right: 50px;bottom: 80px;}
.float-menu div{-webkit-transition:all 0.2s linear;-ms-transition:all 0.2s linear;-moz-transition:all 0.2s linear;transition:all 0.2s linear;}
.float-menu .plus{width: 100%;height: 100%;background: url(/img/images/menu-icon.png) no-repeat center center;background-size: 100%;z-index: 2;position: absolute;left: 0;top: 0;}
.float-menu .plus .cross{width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: 3;content: "";background:url(/img/images/menu-add.png) no-repeat center center;background-size: 37%;}
.float-menu .menu-list{opacity:0;width: 100%;height: 100%;z-index: 1;position: absolute;left: 0;top: 0;border-radius: 100%;}
.float-menu .menu-list a{width: 33%;height: 16%;display: block;position: absolute;text-align: center;padding-top: 17%;opacity: 0;font-size: 0;color: #333;font-size: 12px;text-decoration: none;}
.float-menu .menu-list a.link-home{left: 50%;top: 0;-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);background: url(/img/images/fb.png) no-repeat center 5px;background-size: 50%;}
.float-menu .menu-list a.link-my{left: 0%;top: 50%;-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);background: url(/img/images/cg.png) no-repeat center top;background-size: 50%;}
.float-menu .menu-list a.link-cart{left: 50%;bottom: 0;-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);background: url(/img/images/kf.png) no-repeat center top;background-size: 50%;}
.float-menu .menu-list a.link-about{right:0%;top: 50%;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);background: url(/img/images/gy.png) no-repeat center top;background-size: 50%;}
.float-menu.open .menu-list a{opacity: 1;font-size: 12px;}
.float-menu.open .cross{-webkit-transform:rotate(135deg);-moz-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);border-radius: 100%;}
.float-menu.open .menu-list{opacity: 1;width:300%;height: 300%;left: -100%;top: -100%;background-color: rgba(255,232,78,.7);}
.float-menu #float-cart{background-color: #f97157;border-radius: 100%;display: block;position: absolute;right: 5px;top: 0;color: #fff;min-width: 18px;min-height: 18px;line-height: 18px;text-align: center;}
</style>
<script>
export default {
    data(){
      return {
        pro:"active",
        life:"",
        collect:"",
        like:"",
        open:"",
        menuopen:""
      }
    },
    methods:{
      change(a){
        console.log(a);
       if(a=="pro"){
         this.pro="active";
         this.life="";
         this.collect="";
         this.like="";
       }else if(a=="life"){
          this.pro="";
         this.life="active";
         this.collect="";
         this.like="";
       }else if(a=="collect"){
          this.pro="";
         this.life="";
         this.collect="active";
         this.like="";
       }else{
          this.pro="";
         this.life="";
         this.collect="";
         this.like="active";
       }
      },
      openclose(){
        if(this.open==""){
          this.open="open";
        }else{
          this.open="";
        }
      },
      menuopenclose(){
         if(this.menuopen==""){
          this.menuopen="open";
        }else{
          this.menuopen="";
        }
      }
    },
}
</script>