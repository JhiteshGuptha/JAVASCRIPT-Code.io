// IF Statements = if a condition is true, execute block of code
//               = if false, do something else
//               = Order of condition matters [Condition at top is executed first]
// IF Else statement

let age = 12;
if(age >= 18){
    console.log("You have Access");
} else {
    console.log("Age limit: 18+");
}

const number = document.getElementById("ageInput");
const submitAge = document.getElementById("submitAge");
submitAge.onclick = function() {
    age = number.value;
    if(age >= 18){
    window.alert("You have Access ✅");
    } else {
    window.alert("Age limit: 18+ to Access Website ❌");
    }
}

// IF Else statement with boolean 

let isFollow = true;
if(isFollow) {
    console.log("Thankyou for Following😄");
} else {
    console.log("Please Follow the Account🙏");
}

// Nested If Statements

let time = 12; // 24 hour format
let isSunny = false;
if(time < 12){
    if(isSunny){
        console.log("It's Morning and Sunny🌤️")
    } else {
        console.log("It's Morning and Cloudy⛅️")
    }
} else {
    if (time == 12){
        console.log("It's Noon🕛");
    } else {
         console.log("It's Past Noon🌦️")
    }
}

// Else if Clause 
// Simplifies the nested If statemens

if (time < 12 && isSunny){
    console.log("It's Morning and Sunny🌤️")
} else if (time < 12 && !(isSunny)){
    console.log("It's Morning and Cloudy⛅️")
} else if(time == 12){
    console.log("It's Noon🕛");
} else {
    console.log("It's Past Noon🌦️")
}

// Ternary Operator = a shortcut to if{} and else{} statement
//                  = condition ? codeIfTrue : codeIfFalse

age >= 18 ? console.log("You're an Adult") : console.log("You're a Minor");

// Switch = can be effective replacement to many else if statements
//        = Each break after a case exists when the case is matched

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a Day`);        
}