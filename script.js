/* Javascript */


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const equalSign = document.querySelector("#equalSign");
const clear = document.querySelector(`button[value = "clear"]`);

// Initializer
let a = "";
let b = "";
let operator = "";
let total = 0;


function resetCalculator() {
    a = "";
    b = "";
    operator = "";
    total = 0;
    display.textContent = "0";
}


function operate(a, operator, b) {
    if (operator === "+") {
        return add(a,b);
    }

    if (operator === "-") {
        return subtract(a, b);
    }

    if (operator === "×") {
        return multiply(a, b);
    }

    if (operator === "÷") {
        return divide(a, b);
    }
}


// Feedback when mouse interacts with buttons
function buttonInterface() {

    buttons.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            element.style.opacity = 0.9;
        });
    
        element.addEventListener("mouseleave", () => {
            element.style.opacity = 1;
        });
    
        element.addEventListener("mousedown", () => {
            element.style.opacity = 0.9;
            display.style.border = "1px rgb(130, 130, 130) solid";
        });
    
        element.addEventListener("mouseup", () => {
            element.style.opacity = 1;
            display.style.border = "1px rgb(127, 255, 212) solid";
        });
    });
}


buttons.forEach((element) => {
    element.addEventListener("click", () => {
        a = a + element.textContent; 
        display.textContent = a;  
        console.log(a); 
    });
});


equalSign.addEventListener("click", () => {
    total = operate(a, operator, b);
    display.textContent = String(total);
});


// resetCalculator called when "AC" is clicked
clear.addEventListener("click", () => {
    resetCalculator();
});

buttonInterface();