function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
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