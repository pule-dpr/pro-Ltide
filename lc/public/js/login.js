/*******************login**ajax******************* */
var login=document.querySelector('.loginbtn>button');
login.onclick=function(){
    var $uname=uname.value;
    var $upwd=upwd.value;
    ajax({
        url:`/user/v1/login/${$uname}&${$upwd}`,
        type:'get',
    }).then(result=>{
        if(result==1){
            alert('登录成功');
        }else{
            alert('登录失败');
        }
    });
}
/*******************register**ajax******************* */
var register=document.querySelector('.registerbtn>button');
console.log(register);
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
var tabs=document.querySelectorAll(`[data-btn=tab]`);
for(var tab of tabs){
    tab.onclick=function(){
        this.className='check'
        var id=this.dataset.divid;
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