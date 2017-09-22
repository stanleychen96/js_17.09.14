/**
 * 2017-09-21 Stanley Chen
 */

const animal = require('./animal');
function bird(){

};
bird.prototype = {
    f2 : function(){
        console.log('bird.f2')
    }    
};
bird.prototype.__proto__ = animal.prototype;
module.exports = bird;
