// Counting Program
// Increase = Increment by 1
// Decrease = Decrement by 1
// Reset    = 0

let count = 0;

document.getElementById("decreaseCount").onclick = function(){
    count--;
    document.getElementById("count").textContent = count; 
}

document.getElementById("increaseCount").onclick = function(){
    count++;
    document.getElementById("count").textContent = count; 
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("count").textContent = count; 
}