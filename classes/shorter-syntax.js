var wow = {

    property: 1,

    omg: 'b',

    omg2: 'c',

    test() {
        console.log(this.property);
    },

    ['asd' + 'f']() {
        console.log('wow');
    }
};

wow.test();
wow.asdf();
