$(function(){
    /**********详细资料下拉实现**************** */
$('#top .detail .first div:last-child>a').click(function(){
    $('#top .detail .other').toggleClass("open");
    $(this).toggleClass('active');
 })
 /***********nav实现**************** */
 $('.pernav ul').click(function(e){
     if($(e.target).attr('data-toggle')=="tab"){
         $(e.target).addClass('active').siblings().removeClass('active');
         /********** 主体转换******** */
         var name=$(e.target).attr('data-name');
        $(`#${name}`).addClass('active').siblings().removeClass('active');
     }
 })
 /*****************************悬浮更多************************ */
     $(".plus").click(function(){
         $(".float-menu").toggleClass('open');
     })
 /***************************关注动画********************************** */
 $('#top .content .btn>button:first-child').click(function(){
     $(this).toggleClass('active');
     $('#top .content .btn>button:first-child.active').length>0?$(this).html('<span>已关注</span>').css('background-color','#ff6633'):$(this).html('＋<span>关注</span>').css('background-color','#efefef');
 })
 /***************************ajax请求我的作品********************************** */
})
