function add(a,b) {
  if (b == '') 
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a/b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case '*':
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

let sign = false;

operatorBtn.forEach(operator => operator.addEventListener('click', getOperator));

function getOperator() {
  sign = true;
  const leftValue = display.textContent;
  operation.textContent += leftValue + this.textContent;
  operate(this.textContent, leftValue, )

  

}

// set defualt display to 0
display.textContent = "0";

//set event on click of all buttons except equal and operators to change display
//const newArray = Array.from(buttons).filter(button => button.id !== "equal");
digits.forEach(button => button.addEventListener('click', fillDisplay));

//clear the display screen back to 0
clearBtn.addEventListener('click', clearDisplay);


function fillDisplay(e) {
  if (sign) {
    display.textContent = '';
    display.textContent += this.textContent;
    sign = false;
  }
  else {
    const numArray = display.textContent.split('');
    console.log(numArray[1]);
    if (numArray[0] === '0') {
      display.textContent = this.textContent;
    }
    else display.textContent += this.textContent;
   }
    
}

function clearDisplay() {
  display.textContent = '0';
  operation.textContent = '';
}
