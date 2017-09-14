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

object.fun();//调用属性;

