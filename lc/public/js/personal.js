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
    var rem=document.querySelector(".pernav ul>li.active");
    rem.classList.remove("active");
    var actnav=e.target;
    console.log(actnav);
    actnav.classList.add("active");
    if(e.target.dataset.toggle=="tab"){
        /********** 主体转换******** */
        var name=e.target.dataset.name;
        var main=document.getElementsByClassName(name)[0];
        var act=document.querySelector('#bot div.active');
        act.classList.remove("active");
        main.classList.add("active");
    }
}
/*****************************更多************************ */
if(document.querySelector(".float-menu")){
    var plus = document.querySelector(".plus");
    var floatMenu = document.querySelector(".float-menu");
    plus.addEventListener("click", function(){
        floatMenu.className.indexOf("open") > -1?floatMenu.className = "float-menu":floatMenu.className = "float-menu open";
    },false);
}