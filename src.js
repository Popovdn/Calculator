const keypad = document.querySelector(".calculator-keypad");
const display = document.querySelector(".calculator-display");
const clearAllButton = document.querySelector(".clear-all");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
keypad.addEventListener("click", updateDisplay);
clearAllButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);
keypad.addEventListener("click", getInput);
equalButton.addEventListener("click", evaluateExpression);

let clearInputScreenFlag = false;
let operatorSelectedFlag = false;

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
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

function updateDisplay(e) {
  let buttonValue = e.target.innerText;
  if (e.target.classList.contains("digit")) {
    if (display.innerText === "0") {
      display.innerText = "";
    } else if (clearInputScreenFlag) {
      // * Clears input screen so user can input second operand, then resets flag for next operation
      display.innerText = "";
      clearInputScreenFlag = false;
      operatorSelectedFlag = true;
    }
    display.innerText += buttonValue;
  }

    display.innerText += buttonValue;
  }

  if (e.target.classList.contains("operator")) {
    clearInputScreenFlag = true;
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

function getInput(e) {
  let input = e.target.innerText;

  if (
    e.target.classList.contains("digit") ||
    e.target.classList.contains("decimal")
  ) {
    if (operatorSelectedFlag) {
      operandTwo += input;
    } else {
      operandOne += input;
    }
  }
}

function evaluateExpression() {
  if (!operandOne || !operandTwo) {
    return;
  }

  let result = floatify(operate(Number(operandOne), Number(operandTwo), operator));
  display.innerText = result;
  operatorSelectedFlag = false;
  operandTwo = "";
  operandOne = result;
}
