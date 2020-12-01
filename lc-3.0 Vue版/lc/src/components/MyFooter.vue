<template>
        <div class="footer">
        <div class="footermain">
            <!--关于我们-->
            <div>
                <h3>关于我们</h3>
                <ul>
                    <li>制作：pule  &nbsp;蒲乐</li>
                    <li>作品：Ltide  &nbsp;L潮</li>
                </ul>
            </div>
             <!--关于作品-->
            <div>
                <h3>关于作品</h3>
                <ul>
                    <li>诞生地：重庆互联网 x3507</li>
                    <li>邮箱：1776088569@qq.com</li>
                    <li>联系方式：191 8539 1324</li>
                </ul>
            </div>
             <!--联系我们-->
            <div class="last">
                <h3>联系我们</h3>
                <ul>
                    <li><input type="text" placeholder="请输入你的留言内容"></li>
                    <li><button>发送</button></li>
                </ul>
                <div class="erweima">
                    <img src="/img/footer/newAppLoad.jpg" alt="">
                    <p>微信小程序</p>
                </div>
            </div>
        </div>
        <p class="banquan">版权所有 &copy; 2020 Ltide LC 保留所有权利</p>
    </div>
</template>
<style>
    /*footer*/
.footer{
    border-top: 2px solid #424040;
    background-color: #474747;
    padding-bottom: 30px;
}
.footer .footermain div{
    width: 290px;
    background-color:transparent;
    float: left;
    margin-top: 40px;
    margin-left: 100px;
    color: #fff;
    padding-left: 100px;
    box-sizing: border-box;
    font-weight: normal;
    font-size: 12px;
    position: relative;
}
.footer .footermain div ul{
    list-style: none;
    padding: 0px;
    color:#cccccc;
    
}
.footer .footermain div h3{
    border-bottom: 1px solid #cccccc;
    padding-bottom: 15px;
}
.footer .footermain div ul li{
    margin-top: 40px;
}
.footer .footermain div ul li~li{
    margin-top: 20px;
}
.footer .footermain div ul li input{
    padding: 10px 10px;
    border: none;
    outline: none;
}
.footer .footermain div ul li button{
    width: 120px;
    height: 35px;
    background-color:#ee9a39;
    border-radius: 5px;
    outline: none;
}
.footer .footermain div .erweima{
    position: absolute;
    right: 10px;
    top: 35px;
}
.footer .footermain div .erweima p{
    padding-left: 15px;
}
.footer .footermain .last{
    width:600px;
}
.footermain::after{
    content: '';
    display: block;
    clear: both;
}
.footer .banquan{
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    margin-top: 60px;
    color: #cccccc;
}
</style>