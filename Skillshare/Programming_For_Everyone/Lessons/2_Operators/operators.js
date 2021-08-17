// Operators
// + - * / %
// = == ===
// > < >= <=
// && ||
// ?
// !

let num1 = 5;
let num2 = 3;

console.log(num1 + num2);

// the program reads the statement in specific orders. Right side of the assignment first
let sum = num1 + num2;
console.log(sum);

console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 5 / 3 => 3 * 1 +

// Strings
let name1 = 'Juan';
let surName1 = 'Vieira';

console.log(name1 + ' ' + surName1);

// String + number?
console.log(name1 + num1); // converts numbers to string

let age1 = 30;
// Hi, my name is Juan Vieira and I'm 30 years old

console.log('Hi, my name is ' + name1 + ' ' + surName1 + ` and I'm ` + age1 + ' years old');

// string interpolation ${}
console.log(`Hi, my name is ${name1} ${surName1} and I'm ${age1} years old`);
const paragraph = `
this is first line
second line
end`;
console.log(paragraph);
