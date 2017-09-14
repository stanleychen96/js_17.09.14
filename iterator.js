/**
 * 2017-09-14 Stanley Chen
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.map(function(nu)
{return (1 + nu)  <= 5;
}));

console.log(arr.filter(function(nv)
{return nv <= 3;
}))

console.log(arr.reduce(function(first, second)
{return first + second;
}));

var b = arr.filter(function(nv)
{return nv <= 3;
})
console.log(b);

console.log(b.reduce(function(first, second)
{return first + second;
}));
