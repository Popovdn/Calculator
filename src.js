const keypad = document.querySelector(".calculator-keypad");
const display = document.querySelector(".calculator-display");
const clearAllButton = document.querySelector(".clear-all");
const clearButton = document.querySelector(".clear");
keypad.addEventListener("click", updateDisplay);
clearAllButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);

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

function clearAll() {
  display.innerText = 0;
  // ! Not finished - should also clear current state of the calculator
}

function clear() {
  display.innerText = display.innerText.slice(0, -1);

  if (display.innerText === "") {
    display.innerText = "0";
  }
}
