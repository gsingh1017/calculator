/* Javascript */


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const numberButtons = document.querySelectorAll(".main");
const operatorButtons = document.querySelectorAll(".operator");

const display = document.querySelector("#display");
const equalSign = document.querySelector("#equalSign");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#back");


// Initializer
let str = "";
let operatorIndex = 0;
let a = null;
let b = null;
let tempArr = null;


function resetCalculator() {
    str = "";
    operatorIndex = 0;
    a = null;
    b = null;
    tempArr = null;
    display.textContent = "0";
}


function operate(a, b, operator) {
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


// Display border changes when buttons are pressed
function displayInterface() {

    numberButtons.forEach((element) => {
        element.addEventListener("mousedown", () => {
            display.style.border = "1px rgb(130, 130, 130) solid";
        });
    
        element.addEventListener("mouseup", () => {
            display.style.border = "1px rgb(127, 255, 212) solid";
        });
    });

    operatorButtons.forEach((element) => {
        element.addEventListener("mousedown", () => {
            display.style.border = "1px rgb(130, 130, 130) solid";
        });
    
        element.addEventListener("mouseup", () => {
            display.style.border = "1px rgb(127, 255, 212) solid";
        });
    });
}


// Takes str and splits into an array
// Operator equals string value at operatorIndex
// variable a equals array left of operatorIndex, joined into string and converted to Number
// variable b equals array right of operatorIndex, joined into string and converted to Number
// Operate will be called and result will be converted to string and assigned to str
// Display updated with str
function handleOperation() {

    let tempArr = str.split("");

    operator = tempArr[operatorIndex];
    a = Number(tempArr.slice(0, operatorIndex).join(""));
    b = Number(tempArr.slice((operatorIndex + 1), tempArr.length).join(""));

    /*
    console.log("tempArr = " + tempArr);
    console.log("operator = " + operator);
    console.log("a = " + a);
    console.log("b = " + b);
    */

    str = String(operate(a, b, operator));
    display.textContent = str;
}


numberButtons.forEach((element) => {
    element.addEventListener("click", () => {
        str += element.textContent; 
        display.textContent = str;

        console.log(str);
    });
});


operatorButtons.forEach((element) => {
    element.addEventListener("click", () => {
        str += element.textContent;
        display.textContent = str;

        operatorIndex = str.length - 1;

        console.log("operatorIndex = " + operatorIndex);
    });
});


// handleOperation() called when "=" is clicked
equalSign.addEventListener("click", () => {
    handleOperation();
});


// resetCalculator() called when "AC" is clicked
clear.addEventListener("click", () => {
    resetCalculator();
});


// remove last string character
// if string is empty or last string character is 0, 0 will display
backspace.addEventListener("click", () => {
    str = str.slice(0, -1);

    if (str === "" || display.textContent === "0") {
        display.textContent = "0";
    } else {
        display.textContent = str;
    }
});


displayInterface();