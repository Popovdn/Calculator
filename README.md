# Calculator App

## Project Overview
This calculator application is built using HTML, CSS, and JavaScript, offering users the ability to perform basic arithmetic operations via both button clicks and keyboard input. It includes a user-friendly interface with a responsive design to enhance usability.

## Features
- Supports basic arithmetic operations: addition, subtraction, multiplication, and division
- Keyboard support for enhanced usability
- Clear entire input or delete the last entered digit
- Handles multi-digit numbers and decimal values correctly
- Toggle positive/negative values
- Prevents errors like division by zero

## How to Start

- You can run the application using this [link](https://popovdn.github.io/Calculator/)
- You can also clone the repository locally and run the code on a local dev server, or open the index.html file in a browser

## How to Use
### Mouse Input
- Click number buttons to enter values
- Click an operator (`+`, `-`, `*`, `/`) to select an operation
- Click `=` to evaluate the current expression
- Click `AC` to clear all input
- Click `C` to delete the last entered digit
- Click `+/-` to toggle the sign of the current number

### Keyboard Support
- **Numbers (0-9):** Enter numeric values
- **Operators (+, -, '*', /):** Perform calculations
- **Enter or =:** Evaluate the expression
- **Escape (Esc):** Clear all input
- **Backspace:** Delete the last entered digit
- **n Key:** Toggle positive/negative sign

## Core Functions
### `updateDisplay(event)`
Handles both button clicks and keyboard input, updating the display accordingly by keeping track of progress for the current operation via boolean values, also updates the color of the operator buttons

### `getInput(event)`
Processes user input, by assigning the current operand and the operator to its respective variable, also keeps track of operator selection in order to evaluate the current expression in cases where an operator is selected prior to its evaluation

### `evaluateExpression()`
Performs the calculation using the `operate()` and `floatify()` functions, based on the stored operands and operator, updating the display with the result

### `clearAll()`
Resets the calculator, clearing the display and all stored values

### `clear()`
Deletes the last entered digit or resets the display if empty

### `negate()`
Toggles the current number between positive and negative

### `removeTrailingDots()`
Ensures numbers do not end with unnecessary decimal points

