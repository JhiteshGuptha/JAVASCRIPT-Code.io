// Const = varible that can't be changed 
//       = remains the same in the entire program
//       = Declare Const Variables UPPERCASE

const PI = 3.14156;

// We can use this const value of pi to find area of circle
// Declaring pi as constant does not let to change the value

let radius;
let area;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

area = PI * radius * radius;

console.log(`Area of Circle: ${area}`);