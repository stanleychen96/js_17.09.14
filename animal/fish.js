/**
 * 2017-09-22 Stanley Chen
 */

const animal =require('./animal');

function fish(){};
fish.prototype = {
    f3 : function(){
        console.log('fish')
    }
};
fish.prototype.__proto__ = animal.prototype;
module.exports = fish