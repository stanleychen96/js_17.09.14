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

for (var x = 1; x < 10; x++){
    var line = '';
    for(var y = 1; y <= x; y++){
        line = line + `${x * y}\t`;
    }
    line = `${x}\t` + line;
    console.log(line);
}