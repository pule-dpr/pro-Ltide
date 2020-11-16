/**********************轮播*************************************************** */
var sclunbo=document.querySelectorAll('.sconed>.sclunbo');
var act=document.querySelector('.sconed>.sclunbo.active');
var num=act.dataset.num;
var actli=document.querySelector(`.circle>ul>li:nth-child(${num})`);
actli.style.opacity='1';
var timer=setInterval(function(){
    var act=document.querySelector('.sconed>.sclunbo.active');
    var num=act.dataset.num;
    var actli=document.querySelector(`.circle>ul>li:nth-child(${num})`);
    actli.style.opacity='0.2';
    if(num<5){
        act.classList.remove('active');
        act.nextElementSibling.classList.add('active');
        actli.nextElementSibling.style.opacity='1';
    }else{
        act.classList.remove('active');
        var firstli=document.querySelector(`.circle>ul>li:nth-child(1)`);
        firstli.style.opacity='1';
        var first=act.parentElement.firstElementChild;
        first.classList.add('active');
    }
},3000);
/************************左右箭头和指示器************************************************* */
var left=document.querySelector('a.left');
left.onclick=function(){
    var act=document.querySelector('.sconed>.sclunbo.active');
    var num=act.dataset.num;
    var actli=document.querySelector(`.circle>ul>li:nth-child(${num})`);
    actli.style.opacity='0.2';
    if(num>1){
        act.classList.remove('active');
        act.previousElementSibling.classList.add('active');
        actli.previousElementSibling.style.opacity='1';
    }else{
        act.classList.remove('active');
        var lastli=document.querySelector(`.circle>ul>li:nth-child(5)`);
        lastli.style.opacity='1';
        var last=document.querySelector('.sconed>.last');
        last.classList.add('active');
    }
};
var right=document.querySelector('a.right');
right.onclick=function(){
    var act=document.querySelector('.sconed>.sclunbo.active');
    var num=act.dataset.num;
    var actli=document.querySelector(`.circle>ul>li:nth-child(${num})`);
    actli.style.opacity='0.2';
    if(num<5){
        act.classList.remove('active');
        act.nextElementSibling.classList.add('active');
        actli.nextElementSibling.style.opacity='1';
    }else{
        act.classList.remove('active');
        var firstli=document.querySelector(`.circle>ul>li:nth-child(1)`);
        firstli.style.opacity='1';
        var first=act.parentElement.firstElementChild;
        first.classList.add('active');
    }
};
/*********************************更换内容**************************************** */
    var lis=document.querySelectorAll('.xiala>ul>li');
    for(var li of lis){
        li.onclick=function(){
            var xiala=this.parentElement.parentElement;
            var act=xiala.getElementsByTagName('span')[0];
            var content=this.innerHTML;
            act.innerHTML=content;
        }
    }