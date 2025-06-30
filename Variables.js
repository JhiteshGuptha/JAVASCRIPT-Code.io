// Variable = A container to Store a value
//            Data inside the variable can be changed at any moment
//            Javascript is a dynamically typed language
//            Datatype of variable is not specified during declaration

// 1. declaration   let x;
// 2. assignment    x = 100;

// Integer Variable 

let x;
x = 100;

let year = 2025;

// Printing Integer Variables

console.log(x);
console.log(`Current Year: ${year}`);

// Float Variable

let price = 10.99;
let gpa = 3.9;

// Printing Float Variables

console.log(price);
console.log(`Your GPA is: ${gpa} / 4.00`);

// String Variable

let name = "Code.io";
let email = "abc123@gmail.com"

// Printing String Variables

console.log(`Hello ${name}`);
console.log(`"Your Email is: ${email}`);

// Boolean Variable 
// Used with Conditional Statements Mostly

let isOnline = true;
let doesFollow = false;

// Printing Boolean Variables

console.log(`Is he Online?: ${isOnline}`);
console.log(`Does he Follow the Account: ${doesFollow}`);

// To find the Type of Datatype = typeof(variable)

console.log(typeof(year));
console.log(typeof(gpa));
console.log(typeof(name));
console.log(typeof(isOnline));

// Displaying Variables on Webpage 
// You can either enter the Variable directly or using a text

document.getElementById("name").textContent = `Hello ${name}`;
document.getElementById("year").textContent = `Current Year: ${year}`;
document.getElementById("isOnline").textContent = `Is the User Online: ${isOnline}`;
