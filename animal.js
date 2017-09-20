/**
 * 2017-09-19 Stanley Chen
 */

function animal(){};
animal.prototype = {
    can : 'fly',
    can1 : 'swim',
};

function bird(){};
bird.prototype = {
    can2 : 'run',
    can3 : 'eat',
};

function fish(){};
fish.prototype = {
    can4 : 'kill',
    can5 : 'save',
};

function a (){};
a.prototype = {
    can6 : 'attack',
};

function b (){};
b.prototype = {
    can7 : 'drink',
};

function c (){};
c.prototype = {
    can8 : 'attacked',
};

function d (){};
d.prototype = {
    can9 : 'hand',
}

bird.prototype.__proto__ = animal.prototype;
fish.prototype.__proto__ = animal.prototype;

a.prototype.__proto__ = bird.prototype;
b.prototype.__proto__ = bird.prototype;

c.prototype.__proto__ = fish.prototype;
d.prototype.__proto__ = fish.prototype;

var x = new a();
var y = new b();
var z = new c();
var w = new d();

console.log(x.can2);
console.log(y.can3);
console.log(z.can8);
console.log(w.can9);