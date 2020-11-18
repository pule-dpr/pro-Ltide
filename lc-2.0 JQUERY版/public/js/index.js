
/*************ajax请求主页作品******************* */
$.ajax({
    url:'/index/',
    type:'get',
    datatype:'json'
}).then(result=>{
    var shoese=result.slice(0,4);
    var accs=result.slice(4,8);
    var caps=result.slice(8,12);
    var html1='';
    var html2='';
    var html3='';
    for(var s of shoese){
        html1+=` <li>
        <div class="img">
          <img src="${s.pic}" alt="">
        </div>
        <div class="textcontent">
          <div>
          标题：${s.title}
          </div>
          <div>
            浏览次数：<span class=" iconfont iconliulan">${s.look_count}</span>
          </div>
          <div>
            发布人：<a href="">${s.author_name}</a> 
          </div>
         <div>
           <a href="${s.href}">查看详情</a>
           <div class="tb xh"></div>
          <div class="tb sc"></div>
           <a href="" class=" iconfont iconfenxiang"></a>
         </div>
        </div>
      </li>`
    }
    for(var a of accs){
        html2+=` <li>
        <div class="img">
          <img src="${a.pic}" alt="">
        </div>
        <div class="textcontent">
          <div>
            标题：${a.title}
          </div>
          <div>
            浏览次数：<span class=" iconfont iconliulan">${a.look_count}</span>
          </div>
          <div>
            发布人：<a href="">${a.author_name}</a> 
          </div>
         <div>
           <a href="${a.href}">查看详情</a>
           <div class="tb xh"></div>
           <div class="tb sc"></div>
           <a href="" class=" iconfont iconfenxiang"></a>
         </div>
        </div>
      </li>`
    }
    for(var c of caps){
        html3+=` <li>
        <div class="img">
          <img src="${c.pic}" alt="">
        </div>
        <div class="textcontent">
          <div>
          标题：${c.title}
          </div>
          <div>
            浏览次数：<span class=" iconfont iconliulan">${c.look_count}</span>
          </div>
          <div>
            发布人：<a href="">${c.author_name}</a> 
          </div>
         <div>
           <a href="${c.href}">查看详情</a>
           <div class="tb xh"></div>
           <div class="tb sc"></div>
           <a href="" class=" iconfont iconfenxiang"></a>
         </div>
        </div>
      </li>`
    }
    $('#shoese').html(html1);
    $('#accs').html(html2);
    $('#caps').html(html3)
    var a=document.querySelectorAll('#list .body .row li ul.clearfix li .textcontent div:last-child');
    for(var annui of a){
        annui.onclick=function(e){
          e.target.classList.toggle('active');
        }  
      }
});
/*************图片轮播********************* */
var imgs=document.querySelectorAll('.lunbo div');
var count=0;
var timer=setInterval(function(){
    var act=document.querySelector('.lunbo .active');
    if(count<3){
        act.classList.remove('active');
        act.nextElementSibling.classList.add('active');
        count++
    }else{
        act.classList.remove('active');
        var first=act.parentElement.firstElementChild;
        first.classList.add('active');
        count=0;
    }
},2000);