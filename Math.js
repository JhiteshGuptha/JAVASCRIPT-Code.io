// Math = Built in Object / function
//      = collection of properties and methods related to maths

// Value of PI using Math function

console.log(Math.PI);

// Round a Number to it's nearest integer = round(variable)

let x = 3.21;
let y;

y = Math.round(x);
console.log(y);

// Round Down a number = floor(variable)

let p = 3.99;
let q;

q = Math.floor(p);
console.log(q);

// Round Up a number = ceil(variable)

let a = 3.12;
let b;

b = Math.ceil(a);
console.log(b);

// Eliminate any decimal portion = trunc(variable)

let i = 2.12;
i = Math.trunc(i);
console.log(i);

// x to the power y = pow(base, exponent)

let m = 3;
let n = 2;
let c;

c = Math.pow(m, n);
console.log(c);

// Square root of a number = sqrt(variable)

let d = 81;
let e;
e = Math.sqrt(d);
console.log(e);

// Sign of a number = sign(variable)
// 1 if +ve
// -1 if -ve
// 0 if 0

let z = -4;

console.log(Math.sign(d));
console.log(Math.sign(z));

// Max of numbers = max(variable)

console.log(Math.max(y, q, b, i, c, e))

// Min of numbers = min(variable)

console.log(Math.min(y, q, b, i, c, e))