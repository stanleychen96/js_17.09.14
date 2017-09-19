/**
 * 2017-09-18 Stanley Chen
 */

console.log(`typeof Function -> ${typeof Function}`);
console.log(`typeof Function -> ${typeof Object}`);

console.log("-------------1-------------");
console.log(`typeof null -> ${typeof null}`);
console.log(`typeof undefined -> ${typeof undefined}`);
console.log(`typeof Object.__proto__ -> ${typeof Object.__proto__}`);
console.log(`typeof Function.__proto__ -> ${typeof Function.__proto__}`);

console.log("-------------2-------------");

console.log(`typeof Function.prototype -> ${typeof Function.prototype}`);
console.log(`typeof Object.prototype -> ${typeof Object.prototype}`);
console.log(`typeof Object.prototype.__proto__ -> ${typeof Object.prototype.__proto__}`);


console.log("-------------3-------------");

console.log(`Function.prototype === Object.prototype -> ${Function.prototype === Object.prototype}`);
console.log(`Function.__proto__ === Object.__proto__ -> ${Function.__proto__ === Object.__proto__}`);
console.log(`Object.prototype.__proto__ === Object.prototype -> ${Object.prototype.__proto__ === Object.prototype}`);


console.log("-------------4-------------");

console.log(`Function.prototype.__proto__ === Object.prototype -> ${Function.prototype.__proto__ === Object.prototype.__proto__}`);
console.log(`Function.__proto__.__proto___ === Object.__proto__.__proto__ -> ${Function.__proto__.__proto__ === Object.__proto__.__proto__}`); 

console.log("------------car------------");

var car = function() {};
console.log(`typeof car.prototype -> ${typeof car.prototype}`);
console.log(`typeof car.__proto__ -> ${typeof car.__proto__}`);
console.log(`car.prototype.__proto__ === Object.prototype -> ${car.prototype.__proto__ === Object.prototype}`);

console.log("------------emp------------");

var emp = {};
console.log(typeof emp.prototype);
