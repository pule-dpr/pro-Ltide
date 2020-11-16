/****************************请求公共页***********************/
ajax({
    url:'header.html',
    type:'get',
}).then(result=>{
    var header=document.querySelector('#header');
    header.innerHTML=result;
});
ajax({
    url:'footer.html',
    type:'get',
}).then(result=>{
    var footer=document.querySelector('#footer');
   footer.innerHTML=result;
});
/*************ajax请求主页作品******************* */
ajax({
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
    document.getElementById('shoese').innerHTML=html1;
    document.getElementById('accs').innerHTML=html2;
    document.getElementById('caps').innerHTML=html3;
    console.log(1);
});
