// FUNCTIONS
// blocks of code we can reuse

let num1 = 3;
let num2 = 5;
add(num1, num2);

let num3 = 1;
let num4 = -6;
add(num3, num4);

let num5 = 5;
let num6 = 9;
add(num5, num6);

// we can pass parameters inside the parenthesis
// everything inside the brackets will be executed when we call this function
// void - worker
function add(x, y) {
  console.log('Hi, now we can add numbers');
  console.log(x + y);
}

// returns a value - our chef
function getSum(x, y) {
  console.log(`I'm adding ${x} and ${y}`);
  const sum = x + y;
  return sum;
}

console.log(getSum(1, 3));
const result = getSum(5, 6);
console.log(result);

// SCOPE
// context
// global context

function test() {
  const myTest = 'here is a test';
  console.log('test');
  console.log(num5);
  console.log(myTest);
  if (myTest !== 'hey') {
    const myInnerTest = 'omg';
    console.log('not hey');
    console.log(myInnerTest);
  }
  // console.log(myInnerTest);
}

test();

// console.log(num5);

// tip: always go for the most restrictive action and, only when we see we need it, we move it to less restrictive
// scope
// const and let
