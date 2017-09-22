/**
 * 2017-09-21 Stanley Chen
 */

const fish = require('./fish');

function d (){};
d.prototype = {
    need2 : 'water',
    f7 : function(){
        console.log('d')
    }
};
d.prototype.__proto__ = fish.prototype;
module.exports = d