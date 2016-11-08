var carsCollection = [
    {
        make: 'mazda',
        model: '6',
        year: 2015
    },
    {
        make: 'bmw',
        model: '3-series',
        year: 2016
    },
    {
        make: 'infiniti',
        model: 'qx-70',
        year: 2017
    }
];

var carsByMakes = new Proxy(carsCollection, {
    get: (obj, prop) => obj.find(car => prop === car.make)
});

console.log(carsByMakes.bmw);
console.log(carsByMakes.mazda);
