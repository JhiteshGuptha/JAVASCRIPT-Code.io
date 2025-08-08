// .map() = accepts a callback and applies that function to each element of an array
//        = RETURNS a NEW Array which can be stored in a variable
//        = very similar to ForEach() but ForEach modifies the same array 

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const fruits = ["apple", "banana", "orange"];

const upperCaseFruits = fruits.map(uppercase);

console.log(upperCaseFruits);

function uppercase(element){
    return element.toUpperCase();
}

// Formatting Dates using Map

const dates = ["2023-07-12","2024-07-12","2025-07-12"];

const newDates = dates.map(formatDate);

console.log(newDates);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}