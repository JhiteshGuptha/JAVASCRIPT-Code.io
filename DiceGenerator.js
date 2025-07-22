const diceInput = document.getElementById("diceInput");
const diceOutput = document.getElementById("diceOutput");
const diceTotal = document.getElementById("diceNumber");
const diceImage = document.getElementById("diceImage");
const diceSum = document.getElementById("diceSum");

diceOutput.onclick = function rollDice(){
    const numDice = diceInput.value;
    const values = [];
    const images = [];
    let sum = 0;

    for(let i = 0; i < numDice; i++){
        const randomNumber = Math.floor(Math.random() * 6) +1;
        values.push(randomNumber);
        images.push(`<img src="DiceImages/${randomNumber}.png" alt="Dice ${randomNumber}">`);
    }

    for(let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    diceNumber.textContent = `Rolling Dice: ${[...values]}`;
    diceImage.innerHTML = images.join("");
    diceSum.textContent = `Sum of all Dice: ${sum}`;
}