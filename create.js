/**
 * 2017-09-19 Stanley Chen
 */

var person = {
    age : 19,
    name : true,
    add : '1',
    foo : function(){}
};
person.mounting = '1';

var a = Object.create(person, {
    age :{ 
        value : 20}
});

console.log(a.__proto__);
console.log(person.mounting);
console.log(a.mounting);

console.log('---------');

a.__proto__.name = 1;
 console.log(person.name);

 console.log('---------');
 
var b = Object.create(person,{});
console.log(a.age, b.age);
console.log(person.age);

b.__proto__.age = 3;

console.log(person.age);

// create 'c'
console.log('-----c----');

var c = Object.create(person,{
    age : {
        f : 10,
        g : 20
    },
    name : { value : ['hello',1] },
    add : { value : function(){} },
    foo : { value : true }
});


console.log(person.add,person.age);
console.log(person.name);
console.log(typeof c.add);
console.log(typeof c.age);
console.log(typeof c.name);
console.log(typeof c.foo);


// Find 'String', 'Array', 'Number', 'Boolean' location in proto line

/*
var ar = [1, 2, 3];
var st = '123312';
var nu = 1;
var bo = true;

console.log(typeof ar);
console.log(typeof st);
console.log(typeof nu);
console.log(typeof bo);

console.log('---------');

console.log(ar.__proto__, st.__proto__);
console.log(nu.__proto__, bo.__proto__);

console.log('---------');

console.log(ar.__proto__.__proto__, st.__proto__.__proto__);
console.log(nu.__proto__.__proto__, bo.__proto__.__proto__);

console.log('---------');

console.log(Object.prototype);
console.log(String.prototype, Array.prototype);
console.log(Boolean.prototype, Number.prototype);

console.log('---------');

var car = function(){};
console.log(typeof car);
console.log(car.__proto__);
console.log(car.__proto__.__proto__);
console.log(Function.prototype === car.__proto__.__proto__);

console.log('----function construction-----');

console.log('---------');

console.log(car() === car.prototype.constructor());
console.log(typeof car);
console.log(typeof car.prototype.constructor);
console.log(car.prototype.constructor === car);
console.log(car.prototype.__proto__ === Object.prototype);
*/