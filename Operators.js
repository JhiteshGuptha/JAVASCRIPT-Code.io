// Arithmentic Operators = operand (values, variables and so on)
//                         operators (+, -, *, /, %, **)

let numberOne = 10;
let numberTwo = 2;

console.log("Arithmetic Operators\n");

let addition = numberOne + numberTwo;
console.log(addition);
let subraction = numberOne - numberTwo;
console.log(subraction);
let multiplication = numberOne * numberTwo;
console.log(multiplication);
let division = numberOne / numberTwo;
console.log(division);
let modulus = numberOne % numberTwo;
console.log(modulus);
let exponent = numberOne ** numberTwo;
console.log(exponent);

// Augmented Arithmetic Operators = Shorter way to write Arithmetic Operators

console.log("\nAugmented Arithmetic Operators\n");
addition += 1;
console.log(addition);
subraction -= 1;
console.log(subraction);
multiplication *= 2;
console.log(multiplication);
division /= 2;
console.log(division);
modulus %= 2;
console.log(modulus);
exponent **= 2;
console.log(exponent);

// Increment and Decrement = Increase and Decrease by 1

console.log("\nIncrement and Decrement\n");
addition++;
console.log(addition);
subraction--;
console.log(subraction);

/* 
    Operator Precedence
    1. Parenthesis ()
    2. Exponents
    3. Multiplication & division & modulo
    4. Addition and Subraction
*/

console.log("\nOperator Precedence\n")
let precedence = (1 + 2) * 3 - 2 ** 3;
console.log(precedence);

// Logical Operators = Used to combine or change boolean values
//                   = true or false
//                   = AND &&
//                   = OR ||
//                   = NOT !

console.log("\nLogical Operators\n");

// AND

const temp = 20;
if(temp > 0 && temp <= 30){
    console.log("The weather is Good 😌");
} else {
    console.log("The weather is Bad 😢")
}

// OR

const age = 18;
if(age < 13 || age > 60) {
    console.log("Discount Applies");
} else {
    console.log("No Discount Applied");
}

const isFollowing = true
if(!isFollowing){
    console.log("Please Follow Code.io 🤕")
} else {
    console.log("Thankyou for Following 🥳");
}

/*
    =   Assignment Operator 
    ==  Comparison Operator [Compare if Values are equal]
    === Strict Equality Operator [Compare if values & datatypes are equal]
    !=  Inequality Operator [Compare if Values are not equal]
    !== Strict Inequality Operator [Compare if values & datatypes are not equal]
*/

const quantity = 3; // Assignment Operator

console.log("\n Equality Operators\n");

// Comaprison Operator
// The condition is true because we check only value not datatype

if(quantity == "3"){
    console.log("Quantity is Equal to 3");
} else {
    console.log("Quantity is Not Equal to 3");
}

// Strict Equality Operator
// The condition is false because we check value & datatype

if(quantity === "3"){
    console.log("Quantity is Equal to 3");
} else {
    console.log("Quantity is Not Equal to 3");
}

// Inequality Operator

const PI = 3.14;

if(PI != "3.14"){
    console.log("PI is not Equal to 3.14");
} else {
    console.log("PI is Equal to 3.14");
}

// Strict Inequality Operator

if(PI !== "3.14"){
    console.log("PI is not Equal to 3.14");
} else {
    console.log("PI is Equal to 3.14");
}