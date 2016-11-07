'use strict';

function go(...params) {
    console.log(params);
}

go(1,2,3,4);
go([1,2,3], 4, { a: 4 });
