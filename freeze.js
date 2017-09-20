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

Object.freeze(obj);
delete obj.p;
console.log(obj); // if line 20 is not exist, only console 'q' 
