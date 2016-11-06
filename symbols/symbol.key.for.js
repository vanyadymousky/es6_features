var globalSym = Symbol.for("foo"); // create a new global symbol
console.log(Symbol.keyFor(globalSym)); // "foo"

var localSym = Symbol('local');
console.log(Symbol.keyFor(localSym)); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator); // undefined
