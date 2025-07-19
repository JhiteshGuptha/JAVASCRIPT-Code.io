// String = Group of characters enclosed inside double quotes " "

let userName = "Code.io";
console.log(userName);

// String Index = Numbering for each element [character] of a string
//              = C o d e . i o
//              = 0 1 2 3 4 5 6

console.log(userName[0]);
console.log(userName[1]);
console.log(userName[2]);
console.log(userName[3]);
console.log(userName[4]);
console.log(userName[5]);
console.log(userName[6]);

// String Methods = Allow you to mainpulate and work with strings

// First character of the string = charAt(index)
// You can use index directly also like String Indexing

console.log(userName.charAt(0));

// Index of First Occurance of a Character = indexOf(character)

console.log(userName.indexOf("o"));

// Index of Last Occurance of a character = lastIndexOf(character)

console.log(userName.lastIndexOf("o"));

// Length of a string = length
//                    = index + 1

console.log(userName.length);

// remove whitespaces after or before the text = trim

sentence = "  ABC  ";
console.log(sentence);
console.log(sentence.trim());

// All characters to upper case = toUpperCase()

console.log(userName.toUpperCase());

// All characters to lower case = toLowerCase()

console.log(userName.toLowerCase());

// Repeat a String = repeat(times)

console.log(userName.repeat(2));

// Check if a string starts with a given character = startsWith(character)
//                                                 = Boolean Result
//                                                 = Useful with if statements

console.log(userName.startsWith(" "));
console.log(sentence.startsWith(" "));

// Check if a string ends with a given character = endsWith(character)
//                                                 = Boolean Result
//                                                 = Useful with if statements

console.log(userName.endsWith(" "));
console.log(sentence.endsWith(" "));

// Check if a string has a given character = includes(character)
//                                         = Boolean Result
//                                         = Useful with if statements

console.log(userName.includes(" "));
console.log(sentence.includes(" "));

// Replace all related characters in a string = replaceAll(existing character, new character)

let phoneNumber = "123-456-7890";
console.log(phoneNumber);
console.log(phoneNumber.replaceAll("-", "."));

// String Slicing = Creating a Substring from a String
//                = string.slice(start, end)
//                = Ending index is exclusive, i.e., not included
//                = Does not alter the main string

const completeName = "Jhitesh Guptha";

let first = completeName.slice(0, 7);
let last = completeName.slice(8, 14);

console.log(completeName);
console.log(first);
console.log(last);

// Slicing using indexOf method

const submitName = document.getElementById("submitName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

submitName.onclick = function(){
    const fullName = document.getElementById("fullName").value;
    firstName.textContent = `First Name: ${fullName.slice(0, fullName.indexOf(" "))}`;
    lastName.textContent = `Last Name: ${fullName.slice(fullName.indexOf(" ") + 1, )}`;
}