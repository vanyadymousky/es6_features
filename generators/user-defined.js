'use strict';

var myIterable = {
    test: [1, 2, 3],
    test2: [4, 5, 6]
};

myIterable[Symbol.iterator] = function*() {
    yield* this.test;
    yield* this.test2;
};

for (let current of myIterable) {
    console.log(current);
}

// 1,2,3,4,5,6
