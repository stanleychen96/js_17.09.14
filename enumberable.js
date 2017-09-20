/**
 * 2017-09-20 Stanley Chen
 */

var o1 = Object.create(null, {
    age : {
        value: 22,
        enumerable: false,
    },
    name : {
        value : 10,
        enumberable : true,
    }
});
var o2 = Object.create(o1,{});
console.log(o1.age);
