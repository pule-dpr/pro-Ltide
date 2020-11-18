
/****************************请求公共部分***********************/
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "./css/comm.css"
    });
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "./img/my_icon/iconfont.css"
    });
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "./css/header.css"
    });
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "./css/footer.css"
    });
  });
/****************喜欢收藏动画******************************* */
var a=document.querySelectorAll('#list .body .row li ul.clearfix li .textcontent div:last-child');
for(var annui of a){
    annui.onclick=function(e){
       e.target.classList.toggle('active');
    }
}