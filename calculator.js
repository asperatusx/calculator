function add(a,b) {
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

const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('#reset');
const display = document.querySelector('#display');

// set defualt display to 0
display.textContent = "0";

//set event on click of all buttons except equal to change display
const newArray = Array.from(buttons).filter(button => button.id !== "equal");
newArray.forEach(button => button.addEventListener('click', fillDisplay));

//clear the display screen back to 0
clearBtn.addEventListener('click', clearDisplay);


function fillDisplay() {
  const numArray = display.textContent.split('');
  console.log(numArray[0]);
  if (numArray[0] === '0') {
    display.textContent = this.textContent;
  }
  else display.textContent += this.textContent;
}

function clearDisplay() {
  display.textContent = '0';
}
