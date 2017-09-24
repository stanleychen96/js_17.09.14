var e = (app) => {
    this.age = 'a'
}
console.log(e.prototype);

// var a = new e   .TypeError: e is not a constructor
e();
console.log(e.age);
console.log(this.age);