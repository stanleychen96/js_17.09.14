/**
 * 2017-09-21 Stanley Chen
 */

const fish = require('./fish');

function c (){};
c.prototype = {
    need1 : 'oxy',
    f6 : function(){
        console.log('c')
    }
};
c.prototype.__proto__ = fish.prototype;
module.exports = c