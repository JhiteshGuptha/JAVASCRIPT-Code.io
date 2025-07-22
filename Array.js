// Array = Variable like structure that can hold more than 1 value
//       = Ordered and Changeable

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Array Index = [element1, element2, element3]
//             =      0         1         2

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Changing an Element using Index

fruits[2] = "Mango";
console.log(fruits);

// Adding an element in an array using index

fruits[3] = "Pineapple";
console.log(fruits);

// Loop through an Array

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Reverse an Array using Loop

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// Array Methods = in-built Operations to perform on an Array 

// add an element at the end of the array = push(element)

fruits.push("Watermelon");
console.log(fruits);

// Remove the last element from an array = pop()

fruits.pop();
console.log(fruits);

// Adding an element at the beginning of an array = unshift(element)

fruits.unshift("Kiwi");
console.log(fruits);

// Removing an element at the beginning of an array = shift()

fruits.shift();
console.log(fruits);

// Length of an array = length

console.log(`Length of Fruits Array: ${fruits.length}`);

// To find the index of an element = indexOf(element)
//                                 = -1 if index not found [Kiwi]

console.log(`Index of Apple: ${fruits.indexOf("Apple")}`);
console.log(`Index of Apple: ${fruits.indexOf("Banana")}`);
console.log(`Index of Apple: ${fruits.indexOf("Mango")}`);
console.log(`Index of Apple: ${fruits.indexOf("Pineapple")}`);
console.log(`Index of Apple: ${fruits.indexOf("Kiwi")}`);

// Sorting the array in Aplhabetical Order = sort()

fruits.sort();
console.log(fruits);

// Sorting the array in Aplhabetical Order and in reverse = sort().reverse()

fruits.sort().reverse();
console.log(fruits);