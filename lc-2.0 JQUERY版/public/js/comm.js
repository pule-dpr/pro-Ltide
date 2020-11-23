
/****************************请求公共部分***********************/
$(function(){
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('#share').load('share.html');
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "./css/share.css"
    });
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
    $("head").append("<link>");
    $("head").children(":last").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    });
  });
/****************喜欢收藏动画******************************* */
$('#list .body .row li ul.clearfix li .textcontent div:last-child').click(function(e){
    $(e.target).toggleClass('active');
  }
)
/*************分享********************** */
var fx=function(){
    $('#fx').css('display','block');
    $('#fx .close').click(function(){
        $('#fx').css('display','none');
    })
    }