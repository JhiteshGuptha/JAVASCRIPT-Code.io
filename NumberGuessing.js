// Number Guessing Game Using Loops and Conditions

let min = 1;
let max = 10;
isPlaying = true
let count = 0;
let randomNumber = Math.floor(Math.random() * max) + min;
while(isPlaying){
        numberGame = window.prompt("Enter a Number between 1 - 10: ");
        numberGame = Number(numberGame);
        if(numberGame < randomNumber){
            console.log(`${numberGame} is less than the number`);
            console.log(`Guess Count: ${count += 1}`)
        } else if(numberGame > randomNumber){
            console.log(`${numberGame} is greater than the number`)
            console.log(`Guess Count: ${count += 1}`)
        } else if(numberGame == randomNumber){
            console.log(`${numberGame} is Equal to the number 🥳`)
            console.log(`Total Guess: ${count + 1}`)
            isPlaying = false
        } else{
            console.log(`Game Over!`)
        }
    }


    