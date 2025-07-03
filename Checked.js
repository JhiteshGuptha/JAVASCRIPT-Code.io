// .checked = Property that determines the checked state
//          = HTML checkbox or radio button element 

const subscribe = document.getElementById("subscribe");
const java = document.getElementById("java");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");
const submitInput = document.getElementById("submitInput");
const checkboxOutput = document.getElementById("checkboxOutput");
const radioOutput = document.getElementById("radioOutput");

submitInput.onclick = function(){
    if(subscribe.checked){
        radioOutput.textContent = `Thankyou for Subscribing to Code.io😁`;
    } else {
        radioOutput.textContent = `Please Subscribe to Code.io🥺`;
    }

    if(java.checked && python.checked && javascript.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Java, Python & Javascript`;
    }else if (java.checked && python.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Java & Python`;
    }else if (java.checked && javascript.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Java & Javascript`;
    }else if (javascript.checked && python.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Python & Javascript`;
    }else if (java.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Java`;
    }else if (python.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Python`;
    }else if (javascript.checked){
        checkboxOutput.textContent = `Your Favorite Programming Language = Javascript`;
    } else{
        checkboxOutput.textContent = `You do not like any Programming Language😶`;
    }
}