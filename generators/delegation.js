'use strict';

function* gen(i) {
    yield* [10, 20, 30].map(value => value + i);
}

var gengen = gen(5);
console.log(gengen.next()); // 15
console.log(gengen.next()); // 25
console.log(gengen.next()); // 35





function* fibonacci(limit) {
    yield* [0,1,1,2,3,5,8,13,21].splice(0, limit);
}

var fibonacciIterator = fibonacci(5);
console.log(fibonacciIterator.next().value);
console.log(fibonacciIterator.next().value);
console.log(fibonacciIterator.next().value);
console.log(fibonacciIterator.next().value);
console.log(fibonacciIterator.next().value);
console.log(fibonacciIterator.next().value);
