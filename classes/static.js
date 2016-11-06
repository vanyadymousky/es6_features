'use strict';

class Human {
    constructor() {}

    static ping() {
        return 'ping';
    }
}

class Computer extends Human {
    constructor(atg) {
        super(atg);
    }

    static pingpong() {
        return super.ping() + ' pong';
    }
}
var game = Computer.pingpong('lol');
console.log(game);
