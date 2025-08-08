// Callback = A function that is passed as an argument to another function

//          Used to handle Asunchronous Operations:
//          1. Reading a File
//          2. Network Requests
//          3. Interacting with Databases

function greeting(){
    setTimeout(function(){
        console.log("Hello, Code.io");
    }, 3000); 
}

function close(){
    console.log("Goodbye!");
}

// As we have set a timer on greeting function,javascript ignores it
// Executes close() first and then greeting()

greeting();
close();

// To Invole the first function first, we use callback

function welcome(callback){
    console.log("Welcome to Code.io")
    callback();
}

function subscribe(){
    console.log("Subscribe to Code.io!");
}

function leave(){
    console.log("You can Leave Code.io");
}

welcome(subscribe); // Function as Parameter
leave();

// Sum 2 Numbers using Callback

function sum(callback, x, y){
    let result = x + y;
    callback(result)
}

function display(result){
    console.log(result);
}

sum(display, 2, 3);