/**
 * 2017-09-23 Stanley Chen
 */
function asyncFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Async Hello world');
    }, 0);
  });
}


asyncFunction().then(function (value) {
  console.log(value);
}).catch(function (error) {
  console.log(error);
});

setTimeout(function() {
    console.log('1----->');  
}, 0); 
//confirm the program order


