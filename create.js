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

//console.log(a.__proto__);
//console.log(person.mounting);
//console.log(a.mounting);

a.__proto__.name = 1;
console.log(person.name);
 
var b = Object.create(person,{});
console.log(a.age, b.age);
console.log(person.age);

b.__proto__.age = 3;

console.log(person.age);

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
console.log(typeof c.foo)