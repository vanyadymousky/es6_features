'use strict';

class Human {
    constructor(name) {
        this.name = name + ' is the name';
    }

    testMethod(arg) {
        return arg * 3;
    }
}

class Computer extends Human {
    constructor(name) {
        super('Computer ' + name);
    }

    testMethod(arg) {
        return super.testMethod(arg);
    }
}

var computerWow = new Computer('wow');
console.log(computerWow.name);
console.log(computerWow.testMethod(3));
