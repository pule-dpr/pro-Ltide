<template>
  <div class="header">
        <!--nav-->
        <nav class="">
            <!--logo-->
            <img src="../images/logo/L潮logo6.png" alt="" class="logo">
            <div class="notlogin fr" v-if="islogin==0">
                <ul class="loginnav clearfix">
                    <li>|</li>
                    <li @click="register('reg')"><router-link to="/login">注册</router-link></li>
                    <li>|</li>
                    <li  @click="register('log')"><router-link to="/login">登录</router-link></li>
                </ul>
            </div>
            <div class="login" v-else>
              <ul class="loginnav clearfix yes">
                  <li>
                    <!-- <img :src="info.avatar" alt=""> -->
                  </li>
                  <li><router-link to="/personal">个人中心</router-link></li>
                  <li>|</li>
                  <li @click="logout"><router-link  to="">注销</router-link></li>
                  <li>|</li>
                  <li><router-link to="">我的消息<span class="iconfont icontixing"></span></router-link></li>
              </ul>
          </div>
        </nav>
          <!--分页导航栏-->
        <div class="classify">
            <div class="classcontent">
                <ul class="navcontent clearfix">
                    <li><router-link to="/"> 首页</router-link></li>
                    <li><router-link to="/">最新发布</router-link></li>
                    <li><router-link to="/">潮物推荐</router-link></li>
                    <li>
                      <a href="#">潮牌</a>
                      <div class="nav clearfix" id="pai">
                        <div class="fl textcontent">
                          <h4 >分类</h4>
                          <ul class="sort">
                              <li>
                                  <a @click="jump('Adidas')">Adidas</a>
                                  <div class="first">
                                    <img src="../images/chaopai/1.jpg" alt="">
                                  </div>
                                </li>
                              <li>
                                  <a href="">Nick</a>
                                  <div>
                                    <img src="../images/chaopai/2.jpg" alt="">
                                  </div> 
                                </li>
                              <li>
                                  <a href="">Puma</a>
                                  <div>
                                    <img src="../images/chaopai/3.jpg" alt="">
                                  </div>                               </li>
                              <li>
                                  <a href="">GXG</a>
                                   <div>
                                    <img src="../images/chaopai/4.jpg" alt="">
                                  </div>                              </li>
                              <li>
                                  <a href="">Kappa</a>
                                  <div>
                                    <img src="../images/chaopai/5.jpg" alt="">
                                  </div>                                </li>
                              <li>
                                <a href="">Supreme</a>
                                   <div>
                                    <img src="../images/chaopai/6.jpg" alt="">
                                  </div> 
                                </li>
                              <li>
                                  <a href="">优衣库</a>
                                   <div>
                                    <img src="../images/chaopai/7.jpg" alt="">
                                  </div>                              </li>
                              <li>
                                  <a href="">彭贝</a>
                                    <div>
                                    <img src="../images/chaopai/8.jpg" alt="">
                                  </div>                             </li>
                              <li>
                                  <a href="">其他</a>
                                    <div>
                                    <img src="../images/chaopai/9.jpg" alt="">
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
                                    <img src="../images/style/1.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">日系</a>
                                <div>
                                    <img src="../images/style/2.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">简约</a>
                                <div>
                                    <img src="../images/style/3.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">运动</a>
                                <div>
                                    <img src="../images/style/4.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">嘻哈</a>
                                <div>
                                    <img src="../images/style/5.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">商务</a>
                                <div>
                                    <img src="../images/style/6.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">休闲</a>
                                <div>
                                    <img src="../images/style/7.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">微胖界</a>     
                                <div>
                                    <img src="../images/style/8.jpg" alt="">
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
                                    <img src="../images/Acc/1.jpg" alt="">
                                  </div> 
                            </li>
                          <li>
                              <a href="">手饰</a>
                               <div>
                                    <img src="../images/Acc/2.jpg" alt="">
                                  </div> 
                            </li>                          
                          <li>
                              <a href="">挂饰</a>
                               <div>
                                    <img src="../images/Acc/3.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">耳环</a>
                                 <div>
                                      <img src="../images/Acc/4.jpg" alt="">
                                    </div> 
                              </li>
                          <li>
                              <a href="">包</a>
                               <div>
                                    <img src="../images/Acc/5.jpg" alt="">
                                  </div> 
                          </li>
                          <li>
                              <a href="">手表</a>
                               <div>
                                    <img src="../images/Acc/6.jpg" alt="">
                                  </div> 
                            </li>                           
                          <li>
                              <a href="">头巾</a>
                               <div>
                                    <img src="../images/Acc/7.jpg" alt="">
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
                                    <img src="../images/shoes/1.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">帆布鞋</a>
                                <div>
                                    <img src="../images/shoes/2.jpg" alt="">
                                  </div> 
                            </li>                         
                            <li>
                                <a href="">运动鞋</a>
                                <div>
                                    <img src="../images/shoes/3.jpg" alt="">
                                  </div>
                            </li>
                            <li>
                                <a href="">皮鞋</a>
                                <div>
                                    <img src="../images/shoes/4.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">板鞋</a>
                                <div>
                                    <img src="../images/shoes/5.jpg" alt="">
                                  </div> 
                            </li>                         
                            <li>
                                <a href="">休闲鞋</a>
                                <div>
                                    <img src="../images/shoes/6.jpg" alt="">
                                  </div> 
                            </li>
                            <li>
                                <a href="">马丁靴</a>
                                <div>
                                    <img src="../images/shoes/7.jpg" alt="">
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
                          <img src="../images/maozi/maozi.jpg" alt="">
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
                          <img src="../images/style/shu.jpg" alt="">
                        </div>            
                    </div>
                    </li> 
                </ul>  
                <!--搜索框-->
                <div class="searchcontent">
                    <input type="text" placeholder="你应该会喜欢...">
                    <span class="iconfont iconchazhao"></span>
                </div>   
            </div>
        </div>
    </div>
</template>
<style >
.header nav{
    margin-top: 20px;
    margin-bottom: 10px;
}
.header .logo{
    width: 160px;
    height: 75px;
    display: inline-block;
    margin-left: 50%;
    position: relative;
    left: -80px;
}
.header .notlogin{
  margin-right: 5%;
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
    margin-top: 10%;
    margin-right: 30px;
    margin-bottom: 0px;
    padding-top: 15px;
}
 .header .loginnav.yes>li:first-child{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -15px;
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
    width: 65%;
    height: 70px;
    margin: 0 auto;
    position: relative;
}
.header .classcontent .navcontent{
    list-style: none;
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}
.header .classcontent .navcontent>li{
    width: 115px;
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
.header .classcontent .navcontent>li:hover .nav{
    display: block;
    z-index: 999;
}
 .header .classify .searchcontent{
   top: 20px;
   left: 100%;
   margin-left:30px;
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
    box-shadow: 0px 0px 2px 2px #ccc;
}
 .header .iconchazhao{
    color: #000;
    display: inline-block;
    margin-left: -30px;
   
}
/*********************************************************************************************/
.header .nav{
    display: none;
    position: absolute;
    top: 73px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    height: 350px;
    background-color:rgba(255, 255, 255,.9);
    border-bottom: 2px solid #000;
}
.header .nav>.textcontent{
    width: 350px;
    margin-top: 50px;
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
    left: 65%;
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
}
.header .imgs img{
    width: 100%;
}
</style>
<script>
// import {mapState,mapMutations} from 'vuex'
// // import Utils from '../../public/js/util'
export default {
//   computed:{
//     //数组方式不能改名
//     ...mapState(['islogin','info']),
//     //对象方式可以改名
//     // ...mapState({
//     //   ag1:"age",
//     //   sex1:"ssex"
//     //   }),
//   },
  data(){
    return{

    }
  },
  methods:{
    register(msg){
      // Utils.$emit('demo',msg);
    },
    //将$store中的mutations中方法导入为自己的methods
    // ...mapMutations(["logoutMutations"]),
    logout(){
      // this.logoutMutations();
      // localStorage.clear();
    },
    jump(n){
      // this.$router.push(`/list/${n}`);
    }
  },
}
</script>
