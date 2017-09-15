/**
 * 2017-09-14 Stanley Chen
 */

var object = {
bool: 1 < 0,
value: 10,
fun: function (){
    console.log(
        `bool => ${this.bool}, 
        value => ${this.value}, 
        function => ${this.fun}`);
},
};

object.fun();

object.bool = function() {
console.log('Hi');
};

object.value = function(arg) {
console.log(`arg => ${arg}`);
};

object.fun(); // 调用属性;


var like = {
    boo: true,
    val: 19,
    fu: function (){
        console.log(
            `bool => ${this.boo},
            value => ${this.val},
            function => ${this.fu}`);
        },
    };