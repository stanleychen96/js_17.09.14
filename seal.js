/**
 * 2017-09-20 Stanley Chen
 */

var obj = {
    p : {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
    },
    q : {
        value: 35,
        writable: true,
        enumberable: false,
        configurable: true,
    }
};

Object.seal(obj);
delete obj.p;
console.log(obj);
obj.p =23
console.log(obj);
