// Function = A section of reuseable code
//          = Declare code once, use it whenever you want
//          = Call the function to execute the code within it

// Define and Declare the Function

function message(){
    console.log("Welcome to Code.io");
    console.log("We are learning JavaScript");
}

// Call the Function

message();

// Send Values / Variables to a Function
// Parameter = Inside Function Declaration
//           = The DATATYPE of Arguments and Parameter should be same
//          = Position of Parameter Matters

function greeting(name){
    console.log(`Hi ${name}, Thankyou for Referring to Code.io 🥳`)
}

let inputName = window.prompt("Enter Your Name: ")

// Send the Input to the function
// Argument = Inside Function Call
//          =    of Argument Matters

greeting(inputName);

// Sending 2 Argument

function total(i, j){
    console.log(`${i} + ${j} = ${i+j}`);
}

let x = Number(window.prompt("Enter First Number to find Sum: "));
let y = Number(window.prompt("Enter Second Number to find Sum: "));
total(x, y);

// Return = Statement used to end a function
//        = Send a result back to the caller

function multiply(p, q){
    return p * q;
}

let a = Number(window.prompt("Enter First Number to find Product: "));
let b = Number(window.prompt("Enter Second Number to find Product: "));
console.log(`${a} x ${b} = ${multiply(a, b)}`);