'use strict';

function* idMaker(){
    var index = 0;
    while(index < 3)
        yield index++;
}

var idMakerIterator = idMaker();
console.log(idMakerIterator.next()); // 0
console.log(idMakerIterator.next()); // 1
console.log(idMakerIterator.next()); // 2
console.log(idMakerIterator.next()); // undefined
