<template>
   <div id="index">
     <my-header></my-header>
            <!--轮播图-->
            <div class="lunbo">
            <my-carousel></my-carousel>
            </div>
             <!--show九宫格-->
             <div class="container">
              <div class="row">
                <div class="column-left fl">
                  <div>
                      <img src="../images/show/2.jpg" alt="">
                      <img class="cover-img1" src="../images/show/2.1.jpg" alt="">
                  </div>
                  <div>
                    <div>
                      <img src="../images/show/6.png" alt="">
                    </div>
                    <div>
                      <img src="../images/show/4.jpg" alt="">
                      <img class="cover-img2" src="../images/show/4.1.jpg" alt="">
                    </div>
                  </div>
                  <div>
                    <img class="big" src="../images/show/5.jpg" alt="">
                  </div>
                </div>
                <div class="column-right fr">
                  <div>
                    <img src="../images/show/6.png" alt="">
                  </div>
                  <div>
                    <img src="../images/show/3.jpg" alt="">
                    <img class="cover-img" src="../images/show/3.1.jpg" alt="">
                  </div>
                </div>
              </div>
             </div>
            <!--关于我们-->
            <div class="about-us">
              <div>
                <img src="../images/show/6.png" alt="">
                <a href="" class="dou">关于我们 >></a>
              </div>
            </div>
             <!--作品主体-->
            <div id="list">
                <div class="head">
                  <h1>精选作品列表</h1>
                  <p>List of goods</p>
                </div>
                <div class="body">
                  <ul class="row">
                    <li>
                      <div>潮鞋/shoes</div>
                      <ul class="clearfix" id="shoese">
                        <li v-for="(p,i) in p1" :key="i">
                          <div class="img">
                            <img :src="p.pic" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：{{p.title}}
                            </div>
                            <div>
                              浏览次数：<span class=" iconfont iconliulan">{{p.look_count}}</span>
                            </div>
                            <div>
                              发布人：<a href="">{{p.author_name}}</a> 
                            </div>
                           <div>
                              <router-link :to="{path:'/detail',query:{id:p.pid}}">查看详情</router-link>
                              <div class="tb xh" :class="proxh[p.pid-1]['btnxh'+p.pid]" @click="xh('btnxh'+p.pid)"></div>
                              <div class="tb sc" :class="prosc[p.pid-1]['btnsc'+p.pid]" @click="sc('btnsc'+p.pid)"></div>
                             <router-link to="" class=" iconfont iconfenxiang"></router-link>
                           </div>
                          </div>
                        </li>                        
                      </ul>
                    </li>
                    <li>
                      <div>配饰/ACC</div>
                      <ul class="clearfix" id="accs">
                          <li v-for="(p,i) in p2" :key="i">
                          <div class="img">
                            <img :src="p.pic" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：{{p.title}}
                            </div>
                            <div>
                              浏览次数：<span class=" iconfont iconliulan">{{p.look_count}}</span>
                            </div>
                            <div>
                              发布人：<a href="">{{p.author_name}}</a> 
                            </div>
                           <div>
                             <router-link to="">查看详情</router-link>
                             <router-link to=""  class=" iconfont iconxihuan"></router-link>
                             <router-link to="" class=" iconfont iconxingji"></router-link>
                             <router-link to="" class=" iconfont iconfenxiang"></router-link>
                           </div>
                          </div>
                        </li>                   
                      </ul>
                    </li>
                    <li>
                      <div>潮帽/Caps</div>
                      <ul class="clearfix" id="caps">
                          <li v-for="(p,i) in p3" :key="i">
                          <div class="img">
                            <img :src="p.pic" alt="">
                          </div>
                          <div class="textcontent">
                            <div>
                              标题：{{p.title}}
                            </div>
                            <div>
                              浏览次数：<span class=" iconfont iconliulan">{{p.look_count}}</span>
                            </div>
                            <div>
                              发布人：<a href="">{{p.author_name}}</a> 
                            </div>
                           <div>
                             <router-link to="">查看详情</router-link>
                             <router-link to=""  class=" iconfont iconxihuan"></router-link>
                             <router-link to="" class=" iconfont iconxingji"></router-link>
                             <router-link to="" class=" iconfont iconfenxiang"></router-link>
                           </div>
                          </div>
                        </li>                   
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="foot">
                  <router-link to="/list" class="dou">更多作品 >></router-link>
                </div>
            </div>
            <!--结尾ending-->
            <div class="ending">
              <div>
                <img src="../images/ending.jpg" alt="">
              </div>
              <div>
                <div>
                  <p>吴亦凡红色卫衣写真 最新潮流</p>
                  <p>lead the fashion trend</p>
                </div>
                  <p>
                    虽然说现在很多人都想做时尚达人,于是为此追逐潮流。但我觉得潮流还应该是最适合自己的!了解现在的流行趋势作为自己的参考,但不是死守.所有的流行也只是个人的创意被广泛地传播,接受,于是很多人追捧的变成了潮.
                  无论潮流如何,自己总要坚持点什么,再考虑到底是不适合.说不定自己也成了潮人,让别人来追了。敢潮，不赶潮。
                  </p>
              </div>
            </div>
            <my-footer></my-footer>
      </div>
</template>
<style>
#index{
  width: 100%;
}   
#index .container{
    position: relative;
    width: 100%;
    height: 920px;
  }
 #index .lunbo{
    width: 100%;
    height: 800px;
    margin: 0 auto;
  }
  #index .lunbo div img{
    width: 100%;
    height:800px;
    
  }
  /*******************九宫格**************************/
  #index .container .row{
    border: 20px solid #663399;;
    width: 1020px;
    height: 1020px;
    left: 50%;
    margin-left: -510px;
    margin-top: -160px;
    background-color: #ff6600;
    position: absolute;
    z-index: 999;
  }
 #index .column-left div{
    width:680px;
    height:340px;
    overflow: hidden;
  }
  #index .column-left div:nth-child(2) div{
    width: 340px;
    height:340px;
    overflow: hidden;
    float: left;
  }

 #index  .column-left div img{
   width: 100%;
  }
   #index .column-left div img.cover-img1{
   position: absolute;
   z-index: 10;
   width: 680px;
   height: 340px;
   left: 0px;
   opacity: 0;
   transition:all .6s linear 0s;
  }
 #index .column-left div img.cover-img1:hover{
    opacity: 1;
    transition:all .6s linear 0s;
  }
 #index .column-left div img.cover-img2{
    position: absolute;
    z-index: 5;
    width: 340px;
    height: 340px;
    left: 340px;
    opacity: 0;
    transition:all .5s linear 0s;
   }
 #index  .column-left div img.cover-img2:hover{
    opacity: 1;
    transition:all .5s linear 0s;
  }
 #index .column-right{
    position: relative;
  }
 #index .column-right div img.cover-img{
    position: absolute;
    z-index: 5;
    width: 340px;
    height: 680px;
    left:0px;
    top:340px;
    opacity: 0;
    transition:all .5s linear 0s;
   }
 #index  .column-right div img.cover-img:hover{
    opacity: 1;
    transform: rotateX(-360deg);
    transition:all .5s linear 0s;
  }
  #index .column-left div img.big{
    transition: all .5s linear 0s;
  }
 #index .column-left div img.big:hover{
    transform: scale(1.1);
    transition: all .5s linear 0s;
  }
 #index .column-right div:first-child{
    width:340px;
    height:340px;
  }
 #index .column-right div:last-child{
    width:340px;
    height:680px;
    overflow: hidden;
  }
 #index .column-right div:last-child img:first-child{
    height: 100%;
  }
  /*******************背景***********************/
 #index .about-us{
    width: 100%;
    font-family: "Exo", sans-serif;
    color: #fff;
    background: linear-gradient(-45deg, #ff6600, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    height: 240px;
    margin-top: 40px;
  }
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  #index .about-us div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    top: -50px;
  }
  #index  .about-us div>a{
    width: 135px;
    height: 35px;
    border: 1px solid #663399;
    color: #663366;
    position: absolute;
    bottom: 100px;
    text-align: center;
    line-height: 35px;
  }
  /***********************************************************list********************************/
  #index{
    background-color: #fff;
    color: #000;
  }
  #index #list .head{
      text-align: center;
      font-weight: bolder;
      padding-top: 100px;
     
  }
  #index #list .head p{
      margin-top: 25px;
  }
  #index #list .body{
      margin-top: 60px;
      margin-bottom: 100px;
  }
  #index #list .body .row, #list .body .row li ul{
      margin-bottom: 50px;
      margin-top: 50px;
      list-style: none;
  }
  #index #list .body .row li{
    margin-top: 15px;
}
#index #list .body .row li ul{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
#index  #list .body .row li ul li{
    width:290px;
    height: 400px;
    border: 1px solid #ffffff;
   float: left;
   color: 14px;
   font-weight: normal;
   padding-bottom: 20px;
  }
 #index #list .body .row li ul li .img{
      width: 290px;
      height: 280px;
      background-color: tomato;
      overflow: hidden;
  }
  #index #list .body .row li ul li .img>img{
      height: 100%;
  }
#index  #list .body .row li ul li .textcontent{
    width: 270px;
  }
 #index #list .body .row li ul li .textcontent div{
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bolder;
    margin-left: 45px;
  }
 #index #list .body .row li ul li .textcontent div a{
    color: #000;
  }
 #index #list .body .row li ul li .textcontent div:last-child>a:first-child{
    font-size: 12px;
    display:inline-block;
    width: 90px;
    height: 30px;
    background-color: #ff6600;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
 #index #list .body .row li ul li .textcontent div:last-child{
    display: flex;
    align-items: center;
    padding-top: 10px;
  }
#index  #list .body .row li ul li .textcontent div:last-child>a~a{
    display: inline-block;
    margin-left: 15px;
    font-size: 24px;
    color: #ff6600;
    line-height: 24px;
  }
#index  #list .body>.row>li>div{
    margin-left: 160px;
    font-size: 18px;
    color: #ff6600;
    margin-bottom: 10px;
    margin-top: 10px;
  }
#index  #list .body .row li ul li~li{
    margin-left: 15px;      
}
#index #list .foot{
  padding-bottom: 60px;
}
#index  #list .foot a{
   display: block;
   margin: 0 auto;
    width: 140px;
    height: 40px;
    border: 1px solid #ff6600;
    text-align: center;
    line-height: 40px;
   
    color: #ff6600;
  }
    /**********************************************ending*******************************/
  #index  .ending{
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
    }
  #index  .ending div{
      width:600px;
    }
  #index  .ending div>img{
      max-width: 570px;
    }
 #index   .ending div:last-child> div{
      font-size: 22px;
      padding:40px 0px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      color: #ff6600;
      text-align: right;
    }
  #index  .ending div:last-child> div>p:last-child{
      margin-top: 10px;
      font-size: 18px;
    }
   #index .ending div:last-child>p{
      padding: 40px 50px 0px 70px;
      font-weight: normal;
      color: #949494;
      text-indent:30px;
    }
</style>
<script>
// import {getpro} from '../../public/js/apis/indexproduct.js'
import MyCarousel from '../components/IndexCarousel.vue'
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '../components/MyFooter.vue'
export default {
    components:{MyCarousel,MyHeader,MyFooter},
    data(){
        return{
          p1:[],
          p2:[],
          p3:[],
          proxh:[],
          prosc:[]
        }
    },
    methods:{
      xh(n){
        for(var i=0;i<this.proxh.length;i++){
          if(this.proxh[i][n]==""){
            this.proxh[i][n]="active"
            break;
          }else if(this.proxh[i][n]=="active"){
            this.proxh[i][n]=""
            break;
          }  
        }
      },
       sc(n){
        for(var i=0;i<this.prosc.length;i++){
          if(this.prosc[i][n]==""){
            this.prosc[i][n]="active"
            break;
          }else if(this.prosc[i][n]=="active"){
            this.prosc[i][n]=""
            break;
          }  
        }
        console.log(this.prosc)
      },
    },
    mounted(){
    //   getpro().then(result=>{
    //     this.p1=result.slice(0,4);
    //     this.p2=result.slice(4,8);
    //     this.p3=result.slice(8,12);
    //   for(var i=0;i<result.length;i++){
    //     var objxh={};
    //     var objsc={};
    //     objxh["btnxh"+result[i].pid]="";
    //     objsc["btnsc"+result[i].pid]="";
    //     this.proxh.push(objxh);
    //     this.prosc.push(objsc);
    //   }
    //   console.log(this.prosc);
    //   });
    },
}
</script>