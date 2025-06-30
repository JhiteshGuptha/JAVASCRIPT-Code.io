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

// Augmented Arithmetic Operators

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

// Increment and Decrement

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