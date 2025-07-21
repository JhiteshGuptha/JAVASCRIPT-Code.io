// While Loop = repeat some code WHILE some condition is true
//            = If no end statement is provided, while loop will run infinitily
//            = Can be best used for taking multiple input

let fullName = "";
while(fullName === "" || fullName === null){
    fullName = window.prompt("Enter Your Full Name: ");
} 
console.log(`Hello, ${fullName}`);

// Do while Loop = Execute the code atleast once and then check WHILE some condition is true
//               = Do the code first and then check condition

let email;
do{
    email = window.prompt("Enter Your Email: ");
}while(email === "" || email === null);
console.log(`Email: ${email}`);

// While Loop with Boolean Values

let isFollow = false;
while(!isFollow){
    let userFollow = window.prompt("Do you Follow Code.io [Y/N]: ");
    if(userFollow === "Y"){
        console.log("Thankyou for Following Code.io🥳");
        isFollow = true;
    } else if(userFollow === "N"){
        console.log("Please Follow Code.io 😕");
        isFollow = true;
    }
}

// For Loop = Repeat some code a LIMITED number of times
//          = Does not run infinitely 

// Counting from 0 to 10
for(let i = 0; i <= 2; i++){
    console.log(i);
}

// Reverse Counting from 10 to 0

for(let i = 2; i >= 0; i--){
    console.log(i);
}

// Even Numbers 

for(let i = 0; i<=10; i+=2){
    console.log(i);
}

// Odd Numbers 

for(let i = 1; i<=10; i+=2){
    console.log(i);
}

// Break = Break the loop when the condition inside the loop is true 

for(let i = 1; i <= 6; i++){
    if(i === 3){
        break;
    }else{
        console.log(i);
    }
}

// Continue = Skip a particular iteration in the loop when the condition is true

for(let i = 1; i <= 6; i++){
    if(i === 3){
        continue;
    }else{
        console.log(i);
    }
}