/**
 * 2017-09-21 Stanley Chen
 */

function animal(){

};
animal.prototype = {
    can : 'fly',
    can1 : 'swim',
    f1 : function(){
        console.log('animal')
    }
};
module.exports = animal;
