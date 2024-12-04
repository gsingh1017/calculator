/* Javascript */


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (a === 0 || b === 0) {
        return 0; 
    }
    return a / b;
}

const buttons = document.querySelectorAll("button");

const numberButtons = document.querySelectorAll(".main");
const operatorButtons = document.querySelectorAll(".operator");

const display = document.querySelector("#display");
const equalSign = document.querySelector("#equalSign");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#back");
const percentage = document.querySelector("#percentage");
const plusOrMinus = document.querySelector("#plusOrMinus");


// Initializer
let str = "";
let operatorIndex = 0;
let a = null;
let b = null;
let tempArr = null;
let tempStr = "";


function resetCalculator() {
    str = "";
    operatorIndex = 0;
    a = null;
    b = null;
    tempArr = null;
    tempStr = "";
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

    buttons.forEach((element) => {
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
// Operate called and result is rounded to 10th decimal; converted to string and assigned to str
// Display updated with str
// operatorIndex reset to 0
function handleOperation() {

    let tempArr = str.split("");

    operator = tempArr[operatorIndex];
    a = Number(tempArr.slice(0, operatorIndex).join(""));
    b = Number(tempArr.slice((operatorIndex + 1), tempArr.length).join(""));

    
    console.log("tempArr = " + tempArr);
    console.log("operator = " + operator);
    console.log("a = " + a);
    console.log("b = " + b);
    

    str = String(parseFloat(operate(a, b, operator)).toFixed(10));

    display.textContent = str;
    operatorIndex = 0;
}


// contains all button event listeners
function handleButtons() {

    // handle numbers & "." 
    numberButtons.forEach((element) => {
        element.addEventListener("click", () => {
            
            str += element.textContent; 
            display.textContent = str;

            console.log(str);
        });
    });
    
    
    // handle all operators 
    operatorButtons.forEach((element) => {
        element.addEventListener("click", () => {
    
            // call handleOperation() if an operator is already present in str
            if (operatorIndex != 0) {
                handleOperation();
            }
    
            str += element.textContent;
            display.textContent = str;
    
            // stores index of operator
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
        
        // edge case; reset operatorIndex if backspace removes an operator
        if (str.charAt(str.length-1) === "÷" || "-" || "+" || "×") {
            operatorIndex = 0;
        }
        
        str = str.slice(0, -1);
    
        if (str === "" || display.textContent === "0") {
            display.textContent = "0";
        } else {
            display.textContent = str;
        }
    });
    
    
    // if an operator is not present, percentage is calculated normally
    // else if operator is present, tempStr will get str characters from operator to end of string length
    // tempStr will store new percentage string 
    // str will be sliced to remove all characters after operator and replace with tempStr
    percentage.addEventListener("click", () => {
    
        if (operatorIndex === 0) {
            
            str = String(Number(str / 100));
            display.textContent = str;

        } else {
    
            tempStr = str
                        .split("")
                        .splice((operatorIndex + 1), (str.length - 1))
                        .join("");
    
            tempStr = String(Number(tempStr/ 100));
    
            str = str.slice(0, (operatorIndex + 1));
    
            str += tempStr;
            display.textContent = str;
        }
    });

    
    // if operator is not present
    // and if "-" is not in the first index, then "-" is added to first index of str
    // else "-" is removed from first index
    // if operator is present
    // and if "-" is not in index after operator, then "-" is added 
    // else "-" is removed from index after operator
    plusOrMinus.addEventListener("click", () => {

        if (operatorIndex === 0) {
            if (str.charAt(0) !== "-") {
                str = str.split("");
                str = ["-", ...str];
                str = str.join("");
                display.textContent = str;

            } else {
                str = str.substring(1, str.length);
                display.textContent = str;

            }

        } else {
            if (str.charAt(operatorIndex + 1) !== "-") {
                str = str.split("");
                str = str.toSpliced((operatorIndex + 1), 0, "-");
                str = str.join("");
                display.textContent = str; 

            } else {
                str = str.split("");
                str = str.toSpliced((operatorIndex + 1), 1);
                str = str.join("");
                display.textContent = str; 
            }
        }
    });

}



displayInterface();
handleButtons();