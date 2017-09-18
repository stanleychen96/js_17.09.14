/**
 * 2017-09-18 Stanley Chen
 */

/*
console.log('----------------------------');
for (var x = 1; x < 10; x++){
    var arr = ['|'];
    for(var y = 1; y <=x ; y++){
        arr.push(`${x * y}`);
    }
    console.log(`${arr}`);
}
*/
var empty = '';
console.log(`${empty.padEnd(8,"_")}1________2_______3_______4_______5_______6_______7_______8_______9_______`);
for (var x = 1; x < 10; x++){
    var line = '';
    for(var y = 1; y <= x; y++){
        line = line + `${x * y}\t`;
    }
    line = `${x}|\t` + line;
    console.log(line);
}