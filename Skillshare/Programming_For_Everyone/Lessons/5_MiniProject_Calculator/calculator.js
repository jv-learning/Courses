/*
We want to build a simple calculator
it accepts two numbers, and an symbol, with indicates the operation
the permitted symbols are: +, -, *, /. This is a string
we want to create a function 'calculate(num1, num2, operator)'
1. checks the operation. is valid?
  then continue with the program
  otherwise print a message "The operator {} is not valid" and return null
2. print the numbers and the operation we are performing
3. finally, we return the result
*/

const n1 = 3;
const n2 = 5;
const operator = '+';

function calculate(num1, num2, operator) {
  // if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
  //   console.log(`The operator '${operator}' is not valid`);
  //   return null;
  // }
  console.log(`Calculating (${num1} ${operator} ${num2})`);

  // '+' => +
  // if (operator === '+') {
  //   return num1 + num2;
  // } else if (operator === '-') {
  //   return num1 - num2;
  // } else if (operator === '*') {
  //   return num1 * num2;
  // } else if (operator === '/') {
  //   return num1 / num2;
  // } else {
  //   console.log(`The operator '${operator}' is not valid`);
  //   return null;
  // }
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      console.log(`The operator '${operator}' is not valid`);
      return null;
  }
}

const result = calculate(n1, n2, operator);
console.log(`Result: ${result}`);

// switch
