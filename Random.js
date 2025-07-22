// Dice with Random number Generator 

const numberDice = document.getElementById("numberDice");
const rollDice = document.getElementById("rollDice");
const min = 1;
const max = 6;
let randomNumber;

rollDice.onclick = function(){
    randomNumber = Math.floor(Math.random() * max) + min;
    numberDice.textContent = randomNumber;
}


