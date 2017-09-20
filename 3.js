/**
 * 2017-09-20 Stanley Chen
 */

var num = 1;
Number.prototype.add =function(){
    return '123'
}; // add a 'function' property at 'Number' function object
console.log(num.add()); // 123. 'num' was changed