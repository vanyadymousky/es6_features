'use strict';

var firstCarYears = {
    audi: {
        year: 1910
    },
    bmw: {
        year: 1927
    },
    bentley: {
        year: 1921
    },
    opel: {

    }
};

firstCarYears[Symbol.iterator] = function* carsGenerator() {
    for (let make in this) {
        if (this.hasOwnProperty(make)) {
            yield this[make].year;
        }
    }
};

console.log(...firstCarYears);

function logYears(year1) {
    console.log(year1);
}

logYears(...firstCarYears);
