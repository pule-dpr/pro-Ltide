<template>
  <div class="header">
        <!--nav-->
        <nav class="clearfix">
            <!--logo-->
            <a href="javascript:;" class="logofl">
                <img src="/img/logo/L潮logo6.png" alt="" class="logo">
            </a>
            <div class="notlogin rf" v-if="islogin">
                <ul class="loginnav clearfix">
                    <li>|</li>
                    <li><a href="#">注册</a></li>
                    <li>|</li>
                    <li><a href="./login.html">登录</a></li>
                </ul>
            </div>
            <div class="login rf" v-else>
              <ul class="loginnav clearfix yes">
                  <li>
                    <img src="/img/detail/tx4.jpg" alt="">
                  </li>
                  <li><a href="personal.html">个人中心</a></li>
                  <li>|</li>
                  <li><a href="#">注销</a></li>
                  <li>|</li>
                  <li><a href="#">我的消息<span class="iconfont icontixing"></span></a></li>
              </ul>
          </div>
        </nav>
          <!--分页导航栏-->
        <div class="classify">
            <div class="classcontent">
                <ul class="navcontent clearfix">
                    <li><a href="index.html"> 首页</a></li>
                    <li><a href="new.html">最新发布</a></li>
                    <li><a href="recommend.html">潮物推荐</a></li>
                    <li>
                      <a href="#">潮牌</a>
                      <div class="nav clearfix" id="pai">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                          <ul class="sort">
                              <li>
                                  <a href="">Adidas</a>
                                  <div class="first">
                                    <img src="/img/chaopai/1.jpg" alt="">
                                  </div>
                                </li>
                              <li>
                                  <a href="">Nick</a>
                                  <div>
                                    <img src="/img/chaopai/2.jpg" alt="">
                                  </div> 
                                </li>
                              <li>
                                  <a href="">Puma</a>
                                  <div>
                                    <img src="/img/chaopai/3.jpg" alt="">
                                  </div>                               </li>
                              <li>
                                  <a href="">GXG</a>
                                   <div>
                                    <img src="/img/chaopai/4.jpg" alt="">
                                  </div>                              </li>
                              <li>
                                  <a href="">Kappa</a>
                                  <div>
                                    <img src="/img/chaopai/5.jpg" alt="">
                                  </div>                                </li>
                              <li>
                                <a href="">Supreme</a>
                                   <div>
                                    <img src="/img/chaopai/6.jpg" alt="">
                                  </div> 
                                </li>
                              <li>
                                  <a href="">优衣库</a>
                                   <div>
                                    <img src="/img/chaopai/7.jpg" alt="">
                                  </div>                              </li>
                              <li>
                                  <a href="">彭贝</a>
                                    <div>
                                    <img src="/img/chaopai/8.jpg" alt="">
                                  </div>                             </li>
                              <li>
                                  <a href="">其他</a>
                                    <div>
                                    <img src="/img/chaopai/9.jpg" alt="">
                                  </div>                             </li>
                          </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                      <a href="#">风格</a>
                      <div class="nav clearfix" id="ge">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                          <ul class="sort">
                            <li>
                                <a href="">韩风</a>
                                <div class="first">
                                    <img src="/img/style/1.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">日系</a>
                                <div>
                                    <img src="/img/style/2.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">简约</a>
                                <div>
                                    <img src="/img/style/3.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">运动</a>
                                <div>
                                    <img src="/img/style/4.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">嘻哈</a>
                                <div>
                                    <img src="/img/style/5.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">商务</a>
                                <div>
                                    <img src="/img/style/6.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">休闲</a>
                                <div>
                                    <img src="/img/style/7.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">微胖界</a>     
                                <div>
                                    <img src="/img/style/8.jpg" alt="">
                                </div>
                            </li>
                         </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                      <a href="#">配饰</a>
                      <div class="nav clearfix" id="shi">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                        <ul class="sort">
                          <li>
                              <a href="">项链</a>
                               <div class="first">
                                    <img src="/img/Acc/1.jpg" alt="">
                                  </div> 
                            </li>
                          <li>
                              <a href="">手饰</a>
                               <div>
                                    <img src="/img/Acc/2.jpg" alt="">
                                  </div> 
                            </li>                          
                          <li>
                              <a href="">挂饰</a>
                               <div>
                                    <img src="/img/Acc/3.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">耳环</a>
                                 <div>
                                      <img src="/img/Acc/4.jpg" alt="">
                                    </div> 
                              </li>
                          <li>
                              <a href="">包</a>
                               <div>
                                    <img src="/img/Acc/5.jpg" alt="">
                                  </div> 
                          </li>
                          <li>
                              <a href="">手表</a>
                               <div>
                                    <img src="/img/Acc/6.jpg" alt="">
                                  </div> 
                            </li>                           
                          <li>
                              <a href="">头巾</a>
                               <div>
                                    <img src="/img/Acc/7.jpg" alt="">
                                  </div> 
                            </li>
                        </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                      <a href="#">潮鞋</a> 
                      <div class="nav clearfix" id="xei">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                          <ul class="sort">
                            <li>
                                <a href="">高帮鞋</a>
                                <div class="first">
                                    <img src="/img/shoes/1.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">帆布鞋</a>
                                <div>
                                    <img src="/img/shoes/2.jpg" alt="">
                                  </div> 
                            </li>                         
                            <li>
                                <a href="">运动鞋</a>
                                <div>
                                    <img src="/img/shoes/3.jpg" alt="">
                                  </div>
                            </li>
                            <li>
                                <a href="">皮鞋</a>
                                <div>
                                    <img src="/img/shoes/4.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">板鞋</a>
                                <div>
                                    <img src="/img/shoes/5.jpg" alt="">
                                  </div> 
                            </li>                         
                            <li>
                                <a href="">休闲鞋</a>
                                <div>
                                    <img src="/img/shoes/6.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">马丁靴</a>
                                <div>
                                    <img src="/img/shoes/7.jpg" alt="">
                                  </div> 
                            </li>                           
                          </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                      <a href="#">帽子</a>
                      <div class="nav clearfix" id="zi">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                        <ul class="sort">
                            <li><a href="">鸭舌帽</a></li>
                            <li><a href="">板帽</a></li>
                            <li><a href="">针织帽</a></li>
                            <li><a href="">渔夫帽</a></li>
                            <li><a href="">盆帽</a></li>
                        </ul>
                        </div>
                        <div class="fr imgs">
                          <img src="/img/maozi/maozi.jpg" alt="">
                        </div>   
                    </div>
                    </li>
                    <li>
                      <a href="#">小知识</a>
                      <div class="nav clearfix" id="xiao">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                          <ul class="sort">
                            <li><a href="">色彩搭配</a></li>
                            <li><a href="">穿搭建议</a></li>
                            <li><a href="">突显风格</a></li>
                            <li><a href="">不同天气</a></li>
                            <li><a href="">不同心情</a></li>
                            <li><a href="">回头率</a></li>
                            <li><a href="">小技巧</a></li>
                          </ul></div>
                        <div class="fr imgs">
                          <img src="/img/style/shu.jpg" alt="">
                        </div>            
                    </div>
                    </li> 
                    <li>
                       <!--搜索框-->
                      <div class="searchcontent">
                        <input type="text" placeholder="你应该会喜欢...">
                        <span class="iconfont iconchazhao"></span>
                      </div>
                    </li>
                </ul>      
            </div>
        </div>
    </div>
</template>
<style >
.header nav{
    margin-top: 30px;
    margin-bottom: 10px;
}
.header .logo{
    width: 150px;
    margin-left: 685px;
}
.header .logofl{
    float: left;
}
.header .login{
    float: right;
}
.header .loginnav{
  overflow: hidden;
    list-style: none;
    margin-top: 45px;
}
.header .loginnav.yes{
    margin-top: 50px;
    margin-right: 50px;
    margin-bottom: 0px;
}
 .header .loginnav.yes>li:first-child{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -10px;
    overflow: hidden;
}
.header .loginnav.yes>li:first-child>img{
    width: 100%;
}
.header .loginnav li{
    float: right;
    margin-right: 15px;
    color:#cccccc;
    top: -40px;
}
.header .loginnav li>a{
    font-weight:bold;
    font-size: 12px;
}
 .header .loginnav li>a>span{
    font-size: 14px;
    font-weight: normal;
    margin-left: 5px;
}
.header .classify{
    border-top:1px solid rgb(61, 61, 61);
    border-bottom: 3px solid #000;
    position: relative;
}
.header .classify .classcontent{
    width: 1300px;
    height: 70px;
    margin: 0 auto;
}
.header .classcontent .navcontent{
    list-style: none;
    position: relative;
    margin-left:40px;
}
.header .classcontent .navcontent li{
    float: left;
    width: 110px;
    height: 70px;
    
    box-sizing: border-box;
}
.header .classcontent .navcontent li>a{
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 13px;
    line-height: 70px;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
}
.header .classcontent .navcontent>li:not(:first-child):hover{
    border-bottom:3px solid #000;
}
.header .classcontent .navcontent>li:last-child:hover{
    border: none;
}
.header .classcontent .navcontent>li:hover .nav{
    display: block;
    z-index: 999;
}
 .header .classify .searchcontent{
    margin-top:25px;
   margin-left: 50px;
   position: absolute;
}
.header .classify .searchcontent input{
    font-size: 12px;
    outline: none;
    border-radius: 10px;
    background-color:transparent;
    border: 2px solid #000;
    padding:5px 15px;
    color:#000;
    font-weight: bold;
    width: 160px;
}
.header .classify .searchcontent input:focus{
    box-shadow: 0px 0px 2px 1px #663399;
}
 .header .iconchazhao{
    color: #000;
    display: inline-block;
    margin-left: -30px;
   
}
.header .classify::after{
    content: '';
    display: block;
    clear: both;
}
/*********************************************************************************************/
.header .nav{
    display: none;
    position: absolute;
    top: 73px;
    left: 150px;
    width: 900px;
    height: 300px;
    background-color:rgba(255, 255, 255,.9);
    border-bottom: 2px solid #000;
}
.header .nav>.textcontent{
    width: 350px;
    margin-top: 35px;
    margin-left: 60px;
}
.header .textcontent h4{
    margin-left: 150px;
}
.header .sort{
    list-style: none;
}
.header .sort>li{
    width: 33%;
    float: left;
}
.header .sort>li:hover div{
    display: block;
}

.header .sort>li>div{
    position: absolute;
    background-color: tomato;
    top: 40px;
    left: 600px;
    width: 225px;
    height: 225px;
    overflow: hidden;
    display: none;
}
.header .sort>li>div.first{
    display: block;
}
.header .sort>li>div>img{
    width: 100%;
    height: 225px;
}
.header .imgs{
    width: 225px;
    height: 225px;
    overflow: hidden;
    margin-top:40px;
    margin-right: 70px;
}
.header .imgs img{
    width: 100%;
}
</style>
<script>
export default {
  data(){
    return{
      islogin:true,
    }
  },
}
</script>
