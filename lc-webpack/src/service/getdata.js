//账号密码登录
//fetch是用来取代传统的XMLHttpRequest的。 它的优点很多，包括链式调用的语法、返回promise等。
export const getLogin=(username,password)=>fetch('/user/v1/login',{username,password},'POST');