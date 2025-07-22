// Rest Operator = (...rest) allows a function to work with a variable number of arguments
//               = Bundle the arguments into one as an ARRAY

//               Spread = Expands an array into seperate elements
//               rest   = Bundles seperate elements into an array

function allFruits(...fruits){
    console.log(fruits);
}

const fruitOne = "Apple";
const fruitTwo = "Banana";
const fruitThree = "Mango";
const fruitFour = "Orange";

// We can send any number of arguments to the function 

allFruits(fruitOne, fruitTwo, fruitThree, fruitFour);

// Finding sum and Average using Rest Parameters 

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const average = getAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Total of First 10 Numbers: ${total}`);
console.log(`Average of First 10 Numbers: ${average}`);