/*******************login**ajax******************* */
var login=document.querySelector('.loginbtn>button');
login.onclick=function(){
    //表单id的value就是输入的值
    var $uname=uname.value;
    var $upwd=upwd.value;
    ajax({
        url:`/user/v1/login/${$uname}&${$upwd}`,
        type:'get',
    }).then(result=>{
        if(result==1){
            alert('登录成功');
            location.href='index.html';
        }else{
            alert('登录失败');
        }
    });
}
/*******************register**ajax******************* */
var register=document.querySelector('.registerbtn>button');
register.onclick=function(){
    var $setuname=setuname.value;
    var $setupwd=setupwd.value;
    var $phone=phone.value;
    console.log($setuname,$setupwd, $phone);
    ajax({
        url:'/user/v1/register',
        type:'post',
        data:`uname=${$setuname}&upwd=${$setupwd}&phone=${$phone}`,
    }).then(result=>{
        if(result==1){
            alert('注册成功');
        }else{
            alert('注册失败');
        }
    });
}
/*******************效果******************* */
//找到dom元素(登录注册的tab按钮)
var tabs=document.querySelectorAll(`[data-btn=tab]`);
//遍历
for(var tab of tabs){
    //单独为每个tab按钮添加点击事件
    tab.onclick=function(){
        //class变为check
        this.className='check'
        //取自定义属性中的值
        var id=this.dataset.divid;
        //根据id找对应div
        var div=document.getElementById(id);
        if(div.className=='logincontent'){
            div.classList.add('active');
            var register=this.nextElementSibling;
            register.classList.remove('check');
        }
        if(div.className=='logincontent active'){
           var reg=div.nextElementSibling;
           reg.className='registermain'
        }else if(div.className=='registermain'){
            var login=this.previousElementSibling;
            login.classList.remove('check');
            div.classList.add('active');
            var log=div.previousElementSibling;
           log.classList.remove('active');
        }
    }
}