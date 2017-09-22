/**
 * 2017-09-21 Stanley Chen
 */

const bird = require('./bird');
function bigbird (){

};
bigbird.prototype = {
    have1 : 'big' ,
    f4 : function(){
        console.log('bigbird.f4')
    }
};
bigbird.prototype.__proto__ = bird.prototype;
module.exports = bigbird;