// ERROR HANDLING
// in functions, we should always check that our parameters are valid

// function add(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
//   console.error('This function expects number');
//   return 0;
// }

// console.log(add(1, '3'));

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    // prevents unexpected behaviour
    throw new Error('This function expects number');
  }
  return a + b;
}

// we might want a fallback
const DEFAULT_RESULT = 30;
let result = 0;

// try-catch block
try {
  // try to do something
  result = add(10, '10');
} catch (error) {
  // if error, get it
  console.warn(`Error occurred when calling add function: ${error.message}. Setting it to default result ${DEFAULT_RESULT}`);
  result = DEFAULT_RESULT;
}

console.log(result);

// prevent program to crash if there is an exception, and we have to manage it on our own

// function upper(text) {
//   return text.toUpperCase();
// }

// console.log(upper('hello'));
// console.log(upper(1234));

function upper(text) {
  try {
    return text.toUpperCase();
  } catch (error) {
    console.warn(`Error occurred: ${error.message}`);
    return text;
  }
}

console.log(upper('hello'));
console.log(upper(1234));

// try - catch is mandatory
// finally is optional. It reads: "regardless if everything was good or we got any errors, execute the code in the finally block"

try {
  greeting('Juan');
} catch (error) {
  console.warn(`Error occurred when calling greeting function: '${error.message}'`);
} finally {
  // used to close streams, database connections, sockets
  console.log('Thanks for calling greetings function');
}

function greeting(name) {
  if (name === 'Unknown') {
    throw new Error(`Sorry, we don't know you`);
  } else {
    console.log(`Hello ${name}`);
  }
}
