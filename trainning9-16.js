/**
 * 2017-09-16 Stanley Chen
 */

/** 
var i = 1;
var r = function() {
    var a = {
        age: i++,
    };
    return a;  
};
var b = r(i);
var c = r(i);
console.log(b, c);
*/

var clo = function(x) {
    var origin = 1;

    return function() {
        var bag = { 
            age: origin
        };

        origin += x;

        return bag;
    };
};

var d = clo(3);
console.log(d(), d(), d(), d());