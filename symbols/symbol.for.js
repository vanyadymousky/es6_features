Symbol.for("foo"); // create a new global symbol
Symbol.for("foo"); // retrieve the already created symbol

// Same global symbol, but not locally
console.log(Symbol.for("bar") === Symbol.for("bar")); // true
console.log(Symbol("bar") === Symbol("bar")); // false

// The key is also used as the description
var sym = Symbol.for("mario");
console.log(sym); // "Symbol(mario)"
console.log(Symbol.iterator);
