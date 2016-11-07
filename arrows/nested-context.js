'use strict';

let object = {
    name: 'name',

    showName: function () {
        return () => {
            return this.name;
        }
    }
};

console.log(object.showName()());

let object2 = {
    name: 'name2'
};

console.log(
    object
        .showName()
        .bind(object2)
        ()
);
