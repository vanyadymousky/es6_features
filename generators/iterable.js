'use strict';

var string = 'abcdf',
    obj = {};

console.log(string[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

for (let value of string) {
    console.log(value);
}
