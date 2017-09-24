/**
 * 2017-09-22 Stanley Chen
 */

// aniamal
// cat

/*------------------------------------------
function animal(){
  //  this.species = 'mammal';
};
animal.prototype.species = 'mammal'
function cat(name){
    animal.apply(this,arguments); /////
    this.name = name;
};
var c = new cat('foo');
console.log(c);
cat.species = '123';
console.log(animal.prototype.species);
-------------------------------------------*/

/*------------------------------------------
function animal() {
    this.species = 'animal';
  }
  
  function cat(name) {
    this.name = name;
  }
  function dog(name) {
    this.name = name;
  }

cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
dog.prototype = animal.prototype;
dog.prototype.constructor = dog;
var c = new cat('fdd');
var d = new dog('abb');
console.log(d);
console.log(c); // chang any property, all properties will changed
-------------------------------------------*/

/*------------------------------------------
function Animal() {
  }
  Animal.prototype.species = 'mammal'
  
function Cat(name) {
    this.name = name;
  }
function Dog(name) {
    this.name = name;
  }
var F = function(){

};
F.prototype = Animal.prototype;
Cat.prototype = new F('fpp');

console.log(Cat.prototype.constructor); // Animal.
Cat.prototype.constructor = Cat;    // 会把 Animal.prototype.constructor 修改为 Cat

console.log(Animal.prototype.species);

Dog.prototype = new F('pdd');
Dog.prototype.constructor = Dog;
Dog.species = '123'; // change
console.log(Animal.prototype.species); 
-------------------------------------------*/


/*------------------------------------------
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
      c[i] = p[i];
    }
    c.uber = p; // define a property aim to 'p'  
  };
-------------------------------------------*/


function object(o) {
    function F() {}
  
    F.prototype = o; // 
    return new F();
  }
