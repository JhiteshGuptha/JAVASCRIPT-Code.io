// Temperature Converter Program in JavaScript

const tempInput = document.getElementById("tempInput");
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const submitTemp = document.getElementById("submitTemp");
const tempOutput = document.getElementById("tempOutput");
let calculateFahrenheit;
let calculateCelcius;
let temp;


submitTemp.onclick = function celToFah(){
    temp = Number(tempInput.value)
    if(celcius.checked){
        calculateFahrenheit = (temp * (9/5)) + 32;
        tempOutput.textContent = `Temperature: ${calculateFahrenheit.toFixed(3)}°F`;
    } else if(fahrenheit.checked){
        calculateCelcius = (temp - 32) * (5/9);
        tempOutput.textContent = `Temperature: ${calculateCelcius.toFixed(3)}°C`;
    } else {
        tempOutput.textContent = "Nothing Selected!";
    }
}