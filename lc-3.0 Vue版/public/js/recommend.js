/**********************轮播*************************************************** */
var timer=setInterval(function(){
    var num=$('.sconed>.sclunbo.active').attr('data-num');
    if(num<5){
        $('.sconed>.sclunbo.active').next().addClass('active').siblings().removeClass('active');
    }else{
        $('.sconed>.first')
        .addClass('active')
        .siblings()
        .removeClass('active');
    }
    num=$('.sconed>.sclunbo.active').attr('data-num');
    $(`.circle>ul>li[data-sb=${num}]`)
    .css('opacity','1')
    .siblings()
    .css('opacity','0.2');
},3000);
/************************左右箭头和指示器************************************************* */
$('a.left').click(function(){
    var num=$('.sconed>.sclunbo.active').attr('data-num');
    if(num>1){
        $('.sconed>.sclunbo.active')
        .prev().addClass('active')
        .siblings()
        .removeClass('active');
    }else{
        $('.sconed>.last')
        .addClass('active')
        .siblings()
        .removeClass('active');
    }
    num=$('.sconed>.sclunbo.active').attr('data-num');
    $(`.circle>ul>li[data-sb=${num}]`)
    .css('opacity','1')
    .siblings()
    .css('opacity','0.2');
});
$('a.right').click(function(){
    var num=$('.sconed>.sclunbo.active').attr('data-num');
    if(num<5){
        $('.sconed>.sclunbo.active')
        .next().addClass('active')
        .siblings()
        .removeClass('active');
    }else{
        $('.sconed>.first')
        .addClass('active')
        .siblings()
        .removeClass('active');
    }
    num=$('.sconed>.sclunbo.active').attr('data-num');
    $(`.circle>ul>li[data-sb=${num}]`)
    .css('opacity','1')
    .siblings()
    .css('opacity','0.2');
});
/*********************************nav更换内容**************************************** */
$('.xiala>ul>li').click(function(){
           $(this)
           .parent()
           .parent()
           .find('span')
           .html($(this).html());
        }   
)
/*************分享******************* */
$(' #list .body .row li ul li .textcontent div:last-child>a:last-child').click(fx).attr('href','javascript:;');
 