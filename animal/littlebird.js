/**
 * 2017-09-21 Stanley Chen
 */

const bird = require('./bird');

function littlebird (){

};
littlebird.prototype = {
    have2 : 'little',
    f5 : function(){
        console.log('littlebird')
    }
};
littlebird.prototype.__proto__ = bird.prototype;
module.exports = littlebird;
