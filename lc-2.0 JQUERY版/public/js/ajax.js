//ajax封装
function ajax({url,type,data,datatype}){
    return new Promise(resolve=>{
    var xhr=new XMLHttpRequest();
    if(type=='get'&&data!==undefined){
        url+='?'+data;
    }
    //4.接收响应
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            if(datatype=='json'){
                var result=JSON.parse(xhr.responseText);
            }else{
                var result=xhr.responseText;
            }
              //调用回调函数
              resolve(result);
           
        }
    }
    //2.创建连接
    xhr.open(type,url,true);
    //设置请求头
    if(type=='post' || type=='put'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    //3.发送请求
    if(type=='post' || type=='put'){
        xhr.send(data);
    }else{
        xhr.send();
    }   
})
}