/**
 * 2017-09-20 Stanley Chen
 */

var add = {
    string : '123',
}
var foo = function(x){
    return add.x
}

var foo1 = new foo;
var foo2 = new foo;

foo.prototype.getX = function(y){
    return add.y
};

Object.prototype.getY = function(z){
    return add.z
};

console.log(foo1.getX(st));

