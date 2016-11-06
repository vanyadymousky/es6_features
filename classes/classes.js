'use strict';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    static name() {
        return 'Polygon';
    }

    calcArea() {
        return this.height * this.width;
    }
}

class Rectangle extends Polygon {
    static name() {
        return 'Rectangle';
    }
}

const square = new Rectangle(10, 10);

console.log(square.area);
try {
    square.name();
} catch (e) {
    console.log(e);
}
console.log(Polygon.name());
try {
    Polygon.calcArea(); // Cannot be accessed w/o instance created
} catch (e) {
    console.log(e);
}
console.log(Rectangle.name());
