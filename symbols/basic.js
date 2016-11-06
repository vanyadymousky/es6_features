'use strict';

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(typeof sym1);
console.log(sym2);
console.log(sym2 === sym3);

