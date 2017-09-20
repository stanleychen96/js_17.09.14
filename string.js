/**
 * 2017-09-26 Stanley Chen
 */

var string = 'Brave shine';  // string.charAt.   //  If string = '', try again.
console.log(string.charAt(20));
console.log(string.charAt());
console.log(string.charAt(-1));

console.log('^-------------------1--------------------^');

var string2 = 'always in your heart';  // string.concat
var string3 = 'will';
console.log(string.concat(string3, string2)); 

console.log('^-------------------2--------------------^');

console.log(string.includes('Brave'));  // string.includes  
console.log(string.includes('brave'));
console.log(string.includes('shine'));
console.log(string.includes('Brave', 2));

console.log('^-------------------3--------------------^');

console.log(string2.endsWith('in'));  // string.endsWith
console.log(string2.endsWith('heart'));
console.log(string2.endsWith('your', 14));

console.log('^-------------------4--------------------^');

console.log(string.indexOf('e s', 6)); //  string.indexOf
console.log(string.indexOf('e s', 1));
console.log(string.indexOf('', 4));
console.log(string.indexOf('e s', -4));
console.log(string.indexOf('eas', 6));
console.log(string.indexOf('e s', 12));

console.log('^-------------------5--------------------^');

console.log(string.lastIndexOf(' ')); //  string.lastIndexOf
console.log(string.lastIndexOf('e'));
console.log(string.lastIndexOf('e', 6));
console.log(string.lastIndexOf('e', 11));
console.log(string.lastIndexOf('Sh'));
console.log(string.lastIndexOf('B'));

console.log('^-------------------6--------------------^');

console.log(string.padEnd(15, "!")); //  string.padEnd
  console.log(string.padEnd(-15, "!"));
console.log(string.padEnd(3, "!"));
  console.log(string.padEnd(-3, "!"));
console.log(string.padEnd(15, "1 3"));
  console.log(string.padEnd(-15, "1 3"));


console.log('^-------------------7--------------------^');

console.log(string.padStart(-16, "!")); //  string.padStart
  console.log(string.padStart(16, "!")); 
console.log(string.padStart(14, " "));
  console.log(string.padStart(-14, " "));
console.log(string.padStart(2, "!"));
  console.log(string.padStart(-2, "!"));

console.log('^-------------------8--------------------^');

console.log(string.repeat(0)); //  string.repeat
console.log(string.repeat(1));
console.log(string.repeat(2));
console.log(string.repeat(3.5));
//  console.log(string.repeat(1/0)); RangeError
//  console.log(string.repeat(-1)); RangeError

console.log('^-------------------9--------------------^');

console.log(string.slice(1, 10)); //  string.slice
console.log(string.slice(4, -2));
  console.log(string.slice(-1, -2));
  console.log(string.slice(6, 2));
console.log(string.slice(5));
  console.log(string.slice(0));
console.log(string.slice(20));

console.log('^-------------------10-------------------^');

console.log(string.split(' ', 2)); //  string.split
console.log(string.split('v', 2));
  console.log(string.split('v', 'e', 2));
console.log(string.split('z', 2));
console.log(string.split('', 4));
console.log(string.split('', -1));
console.log(string.split('1', 0));

console.log('^-------------------11-------------------^');

console.log(string.startsWith('Bra')); //  string.startWith
console.log(string.startsWith('e s'));
console.log(string.startsWith('e s', 4));
//  console.log(string.startsWith(zh)); 'zh' is not in 'Brave shine'

console.log('^-------------------12-------------------^');

console.log(string.substr(0, 2)); //  string.substr
console.log(string.substr(1, 3));
console.log(string.substr(-4, 3));
console.log(string.substr(-4));
console.log(string.substr(-20, 10));
console.log(string.substr(20, 10));

console.log('^-------------------13-------------------^');

console.log(` (1) ${string.substring(0, 3)}`); // string.substring
console.log(string.substring(3, 0));
console.log(`--------|`);

console.log(` (2) ${string.substring(4, 7)}`);
console.log(string.substring(7, 4));
console.log(string.substring(4));
console.log(`--------|`);

console.log(` (3) ${string.substring(0)}`);
console.log(string.substring(0, 11));
console.log(string.substring(0, 20));
console.log(`--------|`);

console.log(` (4) ${string.substring(-2, 2)}`);
console.log(string.substring(-10, 10));
console.log(`--------|`);

console.log('^-------------------14-------------------^');

console.log(string.toLowerCase()); //  string.toLowerCase

console.log('^-------------------15-------------------^');

var orig = '   foo  '; //  string.trim
console.log(orig.trim());
var orig = 'foo    ';
console.log(orig.trim());

console.log('^-------------------16-------------------^');

var str = '   foo  ';
console.log(`     ${str.length}`); // 8
str = str.trimLeft();
console.log(`     ${str.length, str}`); // 5

console.log('^-------------------17-------------------^');

console.log(`     ${str.length}`); // 5
str = str.trimRight();
console.log(`     ${str.length, str}`); // 3

console.log('^-------------------18-------------------^');

