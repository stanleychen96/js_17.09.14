/**
 * 
 */

const _ = require('lodash');

/*
var objects = [{ 'x': 3 }, {'j': 4 }, { 'j': 6 }, {'x   ': 6 }];
console.log(_.sortedIndexBy(objects, { 'j': 7 }, 'j'));  only inspect which include element 'j'
*/

/*

const bigbird = require('./bigbird');
const littlebird = require('./littlebird');
const c = require('./fish(c)');
const d = require('./fish(d)');
var x = new bigbird();
var y = new littlebird();
var z = new c();
var w = new d();


console.log(x.f4()); // x's property is "have" and "f4",not "bigbird"
y.b;
z.c;
w.d;*/
function duplicate(n) {
    return [n, n];
  }
console.log(_.flatMap([1, 2, 2, 1], duplicate));
