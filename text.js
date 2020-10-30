var name='jay';
function person(name){
    this.name=name;
    console.log(this.name);
}
var a=person('tom');
console.log(name);
console.log(a);
var b=new person('monica');
console.log(b);