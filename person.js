/**
 * 2017-09-19 Stanley Chen
 */

/* 
var person = function(age){
    this.age = age;
};
var t = new person (12)
var tt = new person (22);
person.prototype.getAge = function(){
    return this.age;
}

t.aaaa = function(){};
tt.bbbb = function(){};
console.log(t.aaaa.prototype, typeof t.aaaa.prototype);
console.log(tt.bbbb.__proto__);
*/

var person = function(age){
    this.age = age; 
}; // create a function object 'person'

var add1 = new person(3); // clone an person as an 'add1'
var add2 = new person(4);

person.prototype.getx = function(){
    return this.age;
}; // person.prototype mounting a 'getx' property

console.log(add1.getx(),add2.getx()); // check whether 'add1' and 'add2' have the same 'getx'

// --------------------------------------------------------------------------

add1.get1 = function(){
    return 1;
}; // add1 mounting a 'get1' property, and 'get1.prototype' be created as well
add2.get2 = function(){
    return 2;
};
// --------------------------------------------------------------------------
console.log(typeof add1.get2); // OUT function as (function object)'s property. 
console.log(typeof add2.get1);
console.log(typeof person.prototype.getx); // If 'add1' mounting a property, dont exist in 'add2' .

console.log(person.__proto__ === Function.prototype); // true
console.log(add1.get1.__proto__.__proto__ === Function.prototype); // false (object === function)
console.log(add2.get2.__proto__ === Function.prototype); // true
console.log(typeof add1.get1.__proto__); // function
// --------------------------------------------------------------------------

// add1.__proto__ = null;
// console.log(add1.getx);

Object.prototype.gety = function (){
    return this.age;
};
console.log(person.prototype.gety());
console.log(add1.gety());

