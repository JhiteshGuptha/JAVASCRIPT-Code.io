// Accepting User Input
// The Input accepted is Always a STRING

// 1. EASY WAY = Window Prompt
// 2. PROFESSIONAL WAY = HTML TextBox

// 1. EASY WAY = Prompts like a alert box in the webpage to enter Input

let userInput;
userInput = window.prompt("What's Your username?")
console.log(userInput);

// 2. PROFESSIONAL WAY

let username;
document.getElementById("userSubmit").onclick = function(){
    username = document.getElementById("userInput").value;
    document.getElementById("userOutput").textContent = `Hello ${username}`;
}