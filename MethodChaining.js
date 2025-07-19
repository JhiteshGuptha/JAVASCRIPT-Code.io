// Method Chaining = Calling one String Method after Another
//                 = Done in one continous line of code

let userName = window.prompt("Enter your Username: ");
let firstName = window.prompt("Enter your First Name: ");

// ***** NO METHOD CHAINING *****

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraCharacter = userName.slice(1, );
extraCharacter = extraCharacter.toLowerCase();
userName = letter + extraCharacter;

console.log(userName);

//***** METHOD CHAINING *****

firstName = firstName.trim().charAt(0).toUpperCase() + firstName.slice(1, ).toLowerCase()
console.log(firstName);
