// Spread Operator = Allowa an iterable such as array or string to be expanded
//                 = Expand into seperate elements [Unpack the elements]
//                 = ...

let numbers = [1,2,3,4,5];
console.log(numbers); 

console.log(Math.max(numbers)); // Returns Nan = Not a Number

// Finding the max and min of Array elements by unpacking 

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// Unpacking a String

let brandName = "Code.io";
let letterName = [...brandName];
console.log(letterName);

// Joining all the characters after unpacking = join(character)

letterName = letterName.join("-");
console.log(letterName);

// Combining Arrays using Spread Operator

let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Tomato", "Onion", "Carrot"];

let eatables = [...fruits, ...vegetables, "Egg", "Bread"];

console.log(eatables);