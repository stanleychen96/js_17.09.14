/**
 * 2017-09-16 Stanley Chen
 */

var divide = function (x){
    return function (y) {
        return x / y ;
    };
}; // This is "closure".

var m = divide(2); // function(x),x = 2

console.log(m(4)); // return 2 / y <--> function(y),y = 4


var add = function(){
    return function(a,b){
        return a + b;
    };
};

var s = mu()(2,3); // *****
console.log(s);