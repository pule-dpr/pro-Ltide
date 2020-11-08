var sclunbo=document.querySelectorAll('.sconed>.sclunbo');
var count=0;
var timer=setInterval(function(){
    var act=document.querySelector('.sconed>.sclunbo.active');
    if(count<4){
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