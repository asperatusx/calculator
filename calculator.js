function add(a,b) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}

function subtract(a,b) {
  a = parseInt(a);
  b = parseInt(b);
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return b/a;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case 'x':
      return multiply(a,b);
      break;
    case '/':
      return divide(a,b);
      break;
  }
}

const digits = document.querySelectorAll('.button.digit');
const clearBtn = document.getElementById('reset');
const operation = document.getElementById('operation');
const display = document.getElementById('display');
const operatorBtn = document.querySelectorAll('button.operator');
const equalBtn = document.getElementById('equal');

let firstNumber, currentOperation, firstOperation, secondNumber = 0, result;
let state = false;
let input = 0;
let equalState = false;

operatorBtn.forEach(operator => operator.addEventListener('click', doOperation));
equalBtn.addEventListener('click', getResult);

function doOperation() {
  state = true;
  if (equalState) {
    operation.textContent = '';
    firstOperation = this.textContent;
    operation.textContent = result + firstOperation;
    equalState = false;
    return;
  }
  if (operation.textContent === '') {
    firstNumber = input;
    firstOperation = this.textContent;
    operation.textContent = firstNumber + firstOperation;
    return;
  }
  secondNumber = input;
  result = operate(firstOperation, result, secondNumber);
  if (isNaN(result)) {
    result = operate(firstOperation, firstNumber, secondNumber);
    display.textContent = result;
    firstOperation = this.textContent;
    operation.textContent += secondNumber + firstOperation;
    equalState = false;
    return;
  }
  
  display.textContent = result;
  firstOperation = this.textContent;
  operation.textContent += secondNumber + firstOperation;
  equalState = false;
}

function getResult() {
  secondNumber = input;
  result = operate(firstOperation, firstNumber, secondNumber);
  display.textContent = result;
  state = true;
  equalState = true;

}

// set defualt display to 0
display.textContent = "0";

//set event on click of all buttons except equal and operators to change display
//const newArray = Array.from(buttons).filter(button => button.id !== "equal");
digits.forEach(button => button.addEventListener('click', fillDisplay));

//clear the display screen back to 0
clearBtn.addEventListener('click', clearDisplay);


function fillDisplay(e) {
  if (display.textContent === '0'){
    display.textContent = ''; 
  }
  if (state) {
    display.textContent = '';
    state = false;
  }
  display.textContent += this.textContent;
  input = display.textContent;
  
  
}

function clearDisplay() {
  display.textContent = '0';
  operation.textContent = '';
  firstNumber = '';
  secondNumber = '';
  firstOperation = '';
}






/*
first input = 1

first input +- second input = total


total = 2

total - display.textContent;
total + display.textContent; 


*/