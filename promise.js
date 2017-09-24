/**
 * 2017-09-23 Stanley Chen
 */

console.log(1);
new Promise(function(resolve, reject){
    reject(true);
    window.setTimeout(function(){
        resolve('fff');
    }, 0);
}).then(function(){
    console.log(2);
},function(){
    console.log(3);
});
console.log(4);