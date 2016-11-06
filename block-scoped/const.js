'use strict';

const MY_CONSTANT_VALUE = 3;

{
    const MY_CONSTANT_VALUE = 4;
    console.log(MY_CONSTANT_VALUE);
}
console.log(MY_CONSTANT_VALUE);
