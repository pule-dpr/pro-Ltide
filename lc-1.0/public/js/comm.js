
/****************************请求公共页***********************/
ajax({
    url:'header.html',
    type:'get',
}).then(result=>{
    var header=document.querySelector('#header');
    header.innerHTML=result;
});
ajax({
    url:'footer.html',
    type:'get',
}).then(result=>{
    var footer=document.querySelector('#footer');
   footer.innerHTML=result;
});
/****************喜欢收藏动画******************************* */
var a=document.querySelectorAll('#list .body .row li ul.clearfix li .textcontent div:last-child');
for(var annui of a){
    annui.onclick=function(e){
       e.target.classList.toggle('active');
    }
}