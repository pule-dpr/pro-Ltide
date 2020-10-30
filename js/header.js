//****************导航栏移动光标加下拉菜单效果*******************
//查找父元素进行事件委托
var $ul=$('.navcontent');
//对父元素进行事件绑定
$ul.mouseenter(
    function(e){
    $target=$(e.target);
    //过滤允许出发事件的元素
    if($target.attr('data-toggle')=="tab"){
            //添加active class名，并且清楚其他元素的active class名
            $target.addClass('active').siblings().removeClass('active');
            //获得data-divid属性值
            var id=$target.attr("data-divid");
            var $div=$(`#${id}`);
            //改变指定div css属性 
            $div.css("display","block").siblings().css("display","none");
        }
    }   
)
//****************下拉菜单中更改图片效果*******************
//查找父元素进行事件委托
var $sort=$('.sort');
//绑定事件
$sort.on('mouseover',"[data-toggle=tab]",function(){
        //获得图片url
        var $url=$(this).attr('data-img');
       //查找要修改的元素
        var $img=$sort.next();
        //更改属性
        $img.attr('src',`${$url}`);
})