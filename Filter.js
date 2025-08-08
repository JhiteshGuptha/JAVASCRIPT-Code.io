// .filter() = Creates a new Array by filtering out elements
//           = Mostly works with boolean result
//           = Filters all the element which does not satisfy the condition [False]

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(isEven); // Filters what is false
const oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0; // Returns True or False
}

function isOdd(element){
    return element % 2 !== 0; 
}

const fruits = ["apple", "orange", "banana", "coconut", "dragonFruit", "pomegranate"];

const shortWordFruit = fruits.filter(shortWords);
const longWordFruit = fruits.filter(longWords);

console.log(shortWordFruit);
console.log(longWordFruit);

function shortWords(element){
    return element.length < 7;
}

function longWords(element){
    return element.length >= 7;
}