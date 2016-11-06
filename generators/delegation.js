'use strict';

function* gen(i) {
    yield* [10, 20, 30].map(value => value + i);
}

var gengen = gen(5);
console.log(gengen.next()); // 15
console.log(gengen.next()); // 25
console.log(gengen.next()); // 35
