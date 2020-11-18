var fid=location.search.slice(5);
ajax({
    url:`/product/v1/detail/${fid}`,
    type:'get',
    datatype:'json',
}).then(result=>{
    var [f1]=result;
    var html='';
    for(var key in f1){
        if(key!='fid'&&key!='fashion_id'&&f1[key]!=null){
           html+=`<div>
                    <img src="${f1[key]}" alt="">
                </div>`;
        }
    }
   document.querySelector('#imgs').innerHTML=html;
});
/**************关注************************ */
var btngz=document.querySelector('#introduce>div:last-child button');
    btngz.onclick=function(){
        this.classList.toggle('active');
        var act=document.querySelector('#introduce>div:last-child button.active');
        if(act!=null){
            this.innerHTML='已关注';
        }else{
            this.innerHTML='关注';
        }
    }
/*************私信************************* */
var btnsx=document.querySelector('#introduce>div:last-child button:last-child');
btnsx.onclick=function(){
    var sx=document.querySelector('#siliao');
    sx.style.display='block';
    var close=document.querySelector('#siliao .close');
    close.onclick=function(){
        sx.style.display='none';
    }
    var qx=document.querySelector('#siliao .write>button.qx');
    qx.onclick=function(){
        sx.style.display='none';
    }
}
/*************分享********************** */
var btnfx=document.querySelector('.fixnav>li:nth-child(3)');
btnfx.onclick=function(){
    var fx=document.querySelector('#fx');
    fx.style.display='block';
    var close=document.querySelector('#fx .close');
    close.onclick=function(){
        fx.style.display='none';
    }
}
var btnfx2=document.querySelector('.btns>button:last-child');
btnfx2.onclick=function(){
    var fx=document.querySelector('#fx');
    fx.style.display='block';
    var close=document.querySelector('#fx .close');
    close.onclick=function(){
        fx.style.display='none';
    }
}
/*************固定栏的喜欢收藏交互********************** */
var dhs=document.querySelectorAll('.fixnav>li.dh');
console.log(dhs);
for(var dh of dhs){
    dh.onclick=function(){
        this.classList.toggle('active');
    }
}