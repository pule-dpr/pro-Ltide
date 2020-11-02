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