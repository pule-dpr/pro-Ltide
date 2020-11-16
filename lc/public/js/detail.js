var fid=location.search.slice(5);
ajax({
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
   document.querySelector('#imgs').innerHTML=html;
});