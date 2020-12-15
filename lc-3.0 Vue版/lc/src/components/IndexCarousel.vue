<template>
     <!--轮播图-->
            <div class="lunbo">
              <div class="active"><img src="/img/banner1.png" alt=""> </div>
              <div><img src="/img/banner2.jpg" alt=""> </div>
              <div><img src="/img/banner3.jpg" alt=""> </div>
              <div><img src="/img/banner4.jpg" alt=""></div>
            </div>
</template>
<style>
    #index .lunbo{
        width: 100%;
        margin: 0 auto;
    }
    #index .lunbo div{
        display: none;
    }
    #index .lunbo .active{
        display: block;
    }
    #index .lunbo div img{
        width: 100%;
        height:800px;
        
    }
</style>
<script>

export default {
    
}
</script>