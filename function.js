/**
 * 2017-09-16 Stanley Chen
 */

 /*
var a = function(){
    return function(x,y){
        return x + y;
    };
};

var b = a()(1,2);
console.log(b);
*/

var a = function(){
    return function(x){
        return x + 1;
    };
};

var b = a();
var c = b(1);
console.log(c);