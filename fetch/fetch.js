'use strict';

var request = new Request('https://raw.githubusercontent.com/vanyadymousky/es6_features/master/fetch/test.json'),
    init = { method: 'GET', mode: 'cors' };

fetch(request, init)
    .then(r => r.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    });
