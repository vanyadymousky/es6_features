'use strict';

var obj = {};
obj[Symbol.iterator] = function () {
    // Void
};

for (value of obj) {
    console.log(value);
}
