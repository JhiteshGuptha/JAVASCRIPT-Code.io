// Variable Scope = Where a variable is recognized and Accessible
//                = Local vs Global


// Local Variable = Variable declared inside a function is Local
//                = Only Accessible inside the function 

function function1(){
    let x = 10;
    console.log(x);
}

function1();
// console.log(x); 🟥 Error 

// Global Variable = Variable Declared outside functions
//                 = Accessible Outisde and Inside a function

let y = 100;

function function2(){
    console.log(y);
}

function2();
console.log(y);

