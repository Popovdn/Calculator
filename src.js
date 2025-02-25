const keypad = document.querySelector(".calculator-keypad");
const display = document.querySelector(".calculator-display");
const clearAllButton = document.querySelector(".clear-all");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const negateButton = document.querySelector(".negation");
const operators = [...document.querySelectorAll(".operator")];
keypad.addEventListener("click", updateDisplay);
clearAllButton.addEventListener("click", clearAll);
clearButton.addEventListener("click", clear);
keypad.addEventListener("click", getInput);
equalButton.addEventListener("click", evaluateExpression);
negateButton.addEventListener("click", negate);

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

function floatify(number) {
  // * Floating point numbers cannot be accurately represented in binary
  // * 0.1 + 0.2 ->  0.30000000000000004
  return parseFloat(number.toFixed(10));
}

let operandOne = "";
let operandTwo = "";
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
    if (display.innerText === "0" || display.innerText === "Invalid dividend") {
      display.innerText = "";
      operators.forEach((operator) => (operator.style["background-color"] = `rgb(178, 85, 211)`));
    } else if (clearInputScreenFlag) {
      // * Clears input screen so user can input second operand, then resets flag for next operation
      display.innerText = "";
      clearInputScreenFlag = false;
      operatorSelectedFlag = true;

      operators.forEach((operator) => (operator.style["background-color"] = `rgb(178, 85, 211)`));
    }
    display.innerText += buttonValue;
  }

  if (
    // * If decimal is clicked & there's no decimal placed - place decimal point
    e.target.classList.contains("decimal") &&
    !display.innerText.includes(".")
  ) {
    display.innerText += buttonValue;
  }

  if (e.target.classList.contains("operator")) {
    clearInputScreenFlag = true;
    operators.forEach((operator) => { operator.style["background-color"] = `rgb(178, 85, 211)`});
    e.target.style["background-color"] = `rgb(42, 47, 61)`;
  }
}

function clearAll() {
  display.innerText = 0;
  operandOne = "";
  operandTwo = "";
  operator = null;
  operatorSelectedFlag = false;
  operators.forEach((operator) => { operator.style["background-color"] = `rgb(178, 85, 211)`});
}

function clear() {
  if (display.innerText === "Invalid dividend") {
    display.innerText = "0";
  } 

  display.innerText = display.innerText.slice(0, -1);

  if (operatorSelectedFlag) {
    operandTwo = operandTwo.toString().slice(0, -1);
  } else {
    operandOne = operandOne.toString().slice(0, -1);
  }

  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function getInput(e) {
  let input = e.target.innerText;

  if (e.target.classList.contains("operator")) {
    if (operatorSelectedFlag) {
      evaluateExpression();
      operator = input;
      return;
    }
    operator = input;
  }

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

  removeTraillingDots();

  let result = floatify(operate(Number(operandOne), Number(operandTwo), operator));
  operatorSelectedFlag = false;

  let isDividedByZero = isFinite(result);

  if (!isDividedByZero) {
    display.innerText = "Invalid dividend";
    operandOne = 0;
    return;
  }

  display.innerText = result;
  operandTwo = "";
  operandOne = result;
}

function removeTraillingDots() {
  while (operandOne[operandOne.length - 1] === ".") {
    operandOne = operandOne.toString().slice(0, -1);
  }

  while (operandTwo[operandTwo.length - 1] === ".") {
    operandTwo = operandTwo.toString().slice(0, -1);
  }
}

function negate() {
  if (operatorSelectedFlag) {
    operandTwo = -operandTwo;
    display.innerText = operandTwo;
  } else {
    operandOne = -operandOne;
    display.innerText = operandOne;
  }
}
