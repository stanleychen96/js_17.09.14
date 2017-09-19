/**
 * 2017-09-18 Stanley Chen
 */

var obj = {
    a : 1,
    c : 3
}
var add = function(){
        this.c = 2;
        return this.c + obj.a ;
};

console.log(add.apply(obj), obj); // "obj.add"
console.log(add.bind(obj)(),obj);
