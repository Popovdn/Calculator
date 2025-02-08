const keypad = document.querySelector(".calculator-keypad");
const display = document.querySelector(".calculator-display");
keypad.addEventListener("click", updateDisplay);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let operandOne;
let operandTwo;
let operator;

function operate(a, b, operator) {
    switch (operator) {
        case '+': return add(a, b);
        break;
        case '-': return subtract(a, b);
        break;
        case '*': return multiply(a, b);
        break;
        case '/': return divide (a, b);
        break;
    }
}
function updateDisplay(e) {
  let digit = e.target.innerText;
  if (e.target.classList.contains("digit")) {
    if (display.innerText === "0") {
      display.innerText = "";
    }

    display.innerText += digit;
  }
}
