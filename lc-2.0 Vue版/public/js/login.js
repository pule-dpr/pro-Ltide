$(function(){
    /*******************login**ajax******************* */
$('.loginbtn>button').click(function(){
    var $uname=uname.value;
    var $upwd=upwd.value;
    $.ajax({
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
})
/*******************register**ajax******************* */
$('.registerbtn>button').click(function(){
    var $setuname=setuname.value;
    var $setupwd=setupwd.value;
    var $phone=phone.value;
    $.ajax({
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
})
/*******************效果******************* */
$(`[data-btn=tab]`).click(function(){
        $(this).addClass('check').siblings().removeClass('check')
        var id=$(this).attr('data-divid');
        $(`#${id}`).addClass('active').siblings().removeClass('active');
})
})