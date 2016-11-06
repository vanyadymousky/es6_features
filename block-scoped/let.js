'use strict';

let a = 4;
if (true) {
    let a = 3;
    if (true) {
        console.log(a);

        // let a;
        // console.log(a);
    }
}
console.log(a); // 4
