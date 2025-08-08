// .reduce() = reduce the elements of an array to a single value
//           = For example, in a shopping cart, we reduce all the prices to a single value
//           = accumulator, element
//                 |           |
//           = previous       next  
//           = whatever value is returned becomes the next accumulator

const prices = [5, 10, 25, 15, 6];

const totalPrice = prices.reduce(sumPrice);

console.log(`Total: $${totalPrice.toFixed(2)}`)

// Step 1: accumulator = 0
//         element = 5
// Step 2: accumulator = 5
//         element = 10
// ... so on

function sumPrice(accumulator, element){
    return accumulator + element;
}

// Finding MAX using Reduce

const maxPrice = prices.reduce(max);

console.log(`Max Cost in Products: $${maxPrice.toFixed(2)}`);

function max(accumulator, element){
    return Math.max(accumulator, element);
}

