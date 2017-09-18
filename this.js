/**
 * 2017-09-17
 */

/*
function add(x){
   
    return this.a + x;
}
var a = 1;
add(2);
*/

/*
var obj = {
    a : 1,
    add : function(x){
        return function(){
        console.log(`this.a --> ${this.a}`)
        return this.a + x;
        }
    }
}
console.log(obj.add(2)());
setTimeout(obj.add(2),2000);
*/


var obj = {
    a : 1,
    add : function(x){
        this.b = 2;
        this.add = undefined;
        return this.a + x;
    }
};
console.log(obj.add(2),obj.b);
console.log(obj.add(2),obj.b);


/*
var foo = function(){
    console.log(this.a);
}
var obj = {
    a : 1,
    foo : foo,
}
obj.foo();
foo();
*/

