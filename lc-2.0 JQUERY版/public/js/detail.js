$(()=>{
var fid=location.search.slice(5);
$.ajax({
    url:`/product/v1/detail/${fid}`,
    type:'get',
    datatype:'json',
}).then(result=>{
    var [f1]=result;
    var html='';
    for(var key in f1){
        if(key!='fid'&&key!='fashion_id'&&f1[key]!=null){
           html+=`<div>
                    <img src="${f1[key]}" alt="">
                </div>`;
        }
    }
   $('#imgs').html(html);
});
    /**************关注************************ */
    $('#introduce>div:last-child .guanzhu').click(function(){
        $(this).toggleClass('active');
        $('#introduce>div:last-child button.active').length>0?$(this).html('已关注'):$(this).html('关注');
    })
    /*************私信************************* */
    $('#introduce>div:last-child .sixin').click(()=>{
    $('#siliao').css('display','block');
    $('#siliao .close').click(function(){
        $('#siliao').css('display','none');
    })
    $('#siliao .write>button.qx').click(function(){
        $('#siliao').css('display','none');
    })
    })
    /*************分享********************** */
    var fx=function(){
    $('#fx').css('display','block');
    $('#fx .close').click(function(){
        $('#fx').css('display','none');
    })
    }
    $('.fixnav>li:nth-child(3)').click(fx);
    $('.btns>button:last-child').click(fx);
    /*************固定栏的喜欢收藏交互********************** */
    $('.fixnav>li.dh').click(function(){
        $(this).toggleClass('active');
    })
});
