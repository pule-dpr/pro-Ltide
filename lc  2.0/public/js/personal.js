/**********详细资料下拉实现**************** */
var a=document.querySelector('#top .detail .first div:last-child>a');
a.onclick=function(){
    var other=document.querySelector('#top .detail .other');
    other.classList.toggle("open");
    a.classList.toggle('active');
}
/***********nav实现**************** */
var ul=document.querySelector('.pernav ul');
ul.onclick=function(e){
   
    if(e.target.dataset.toggle=="tab"){
        var rem=document.querySelector(".pernav ul>li.active");
        rem.classList.remove("active");
        var actnav=e.target;
        actnav.classList.add("active");
        /********** 主体转换******** */
        var name=e.target.dataset.name;
        var main=document.getElementsByClassName(name)[0];
        var act=document.querySelector('#bot div.active');
        act.classList.remove("active");
        main.classList.add("active");
    }
}
/*****************************悬浮更多************************ */
if(document.querySelector(".float-menu")){
    var plus = document.querySelector(".plus");
    var floatMenu = document.querySelector(".float-menu");
    plus.addEventListener("click", function(){
        floatMenu.className.indexOf("open") > -1?floatMenu.className = "float-menu":floatMenu.className = "float-menu open";
    },false);
}
/***************************ajax请求我的作品********************************** */
var gz=document.querySelector('#top .content .btn>button:first-child');
gz.onclick=function(){
    this.classList.toggle('active');
    var act=document.querySelector('#top .content .btn>button:first-child.active');
    if(act!=null){
        this.innerHTML='<span>已关注</span>';
        this.style.backgroundColor='#ff6633';
    }else{
        this.innerHTML='＋<span>关注</span>';
        this.style.backgroundColor='#efefef';
    }
}