var imgs=document.querySelectorAll('.lunbo div');
var count=0;
var timer=setInterval(function(){
    var act=document.querySelector('.lunbo .active');
    if(count<3){
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
// var imgs=document.querySelectorAll('.lunbo div');
//        var count=0;
//         var timer=setInterval(function(){
//             var act=document.querySelector('.active');
//             if(count<3){
//                 act.classList.remove('active');
//                 act.nextElementSibling.classList.add('active');
//                 count++;
//             }else{
//                 act.classList.remove('active'); 
//                 var first=act.parentElement.firstElementChild;
//                 console.log(first);
//                 first.classList.add('active');
//                 count=0;
//             }
//         },5000);