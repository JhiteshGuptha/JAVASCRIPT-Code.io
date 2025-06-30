// Type Conversion = change the datatype of a value to another
//                   String, number, boolean

let age = window.prompt("How old are you?");
age += 1; // Leads to String Concatenation
console.log(age);

// Filled String to Number and Boolean

let a = "letter";
let b = "letter";
let c = "letter";

a = Number(a); // Returns NaN = Not a Number
b = String(b); 
c = Boolean(c);

console.log("\nFilled String to Number and Boolean\n")
console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));

// Number Filled String to Number and Boolean

let p = "1";
let q = "1";
let r = "1";

p = Number(p);
q = String(q); 
r = Boolean(r);

console.log("\nNumber Filled String to Number and Boolean\n")
console.log(p, typeof(p));
console.log(q, typeof(q));
console.log(r, typeof(r));

// Empty String to Number and Boolean

let x = "";
let y = "";
let z = "";

x = Number(x); 
y = String(y); 
z = Boolean(z);

console.log("\nEmpty String to Number and Boolean\n")
console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));

// Undeclared variables to String, Number and Boolean

let i;
let j;
let k;

i = Number(i); 
j = String(j); 
k = Boolean(k);

console.log("\nUndeclared variables to String, Number and Boolean\n")
console.log(i, typeof(i));
console.log(j, typeof(j));
console.log(k, typeof(k));





