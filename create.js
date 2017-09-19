/**
 * 2017-09-19 Stanley Chen
 */

var person = {
    age : 1,
    apple : 2
};
person.mounting = '1';

var c = Object.create(person, {
    age :{ value : '2'}
});

console.log(c.__proto__);
console.log(person.mounting);