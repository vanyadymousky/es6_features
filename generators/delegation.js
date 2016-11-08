'use strict';

function* gen(i) {
    yield* [10, 20, 30].map(value => value + i);
}

var gengen = gen(5);
console.log(gengen.next(1)); // 15
console.log(gengen.next(2)); // 25
console.log(gengen.next(3)); // 35



function* fibonacciSrc(limit) {
    for (let value of [0,1,1,2,3,5,8,13,21].splice(0, limit)) {
        console.log('limit: ', ++limit);
        yield value;
    }
}

function* fibonacci(limit) {
    yield* fibonacciSrc(limit);
    yield limit;
}

var fibonacciIterator = fibonacci(4);
console.log('next: ', fibonacciIterator.next().value);
console.log('next: ', fibonacciIterator.next().value);
console.log('next: ', fibonacciIterator.next().value);
console.log('next: ', fibonacciIterator.next().value);
console.log('limit: ', fibonacciIterator.next().value);
