/* Javascript */


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


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


// Changes button colors when mouse hovers over
const changeButtonColor = document.querySelector("button");
changeButtonColor.addEventListener("mouseover", (event) => {
    event.target.style.backgroundcolor = 'rgb(78, 142, 184)';
});

changeButtonColor.addEventListener("mousedown", (event) => {
    event.target.style.border = "1px solid white";
});


const display = document.querySelector("#display");
