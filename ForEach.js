// forEach() = method used to iterate over the elements of an array
//           = Apply a specified function (callback) to each element
//           = Modifies the same array it was applied to and Returns it

//           = array.forEach(callback)
//           = Element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(doubleElement);

// Displaying the Modified array as an array

console.log(numbers);

// Displaying each element from the modified array

numbers.forEach(displayNumber);

function doubleElement(element, index, array){
    array[index] = element * 2
}

function displayNumber(element){
    console.log(element);
}

let fruits = ["apple", "orange", "banana"];

fruits.forEach(upperCase);
fruits.forEach(displayFruit);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function displayFruit(element){
    console.log(element);
}



