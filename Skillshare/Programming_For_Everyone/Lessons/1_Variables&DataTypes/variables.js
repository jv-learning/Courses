// Here is our first comment
// here's the second one
/*
here everything will be a comment
multiline!!!
*/

// ---- VARIABLES ----
// Definition
// classic (deprecated)
// camelCase
var firstVar; // declaration
firstVar = 1; // assignment
// console.log(firstVar);

firstVar = 5;
// console.log(firstVar);

var name = 'Juan'; // declaration + assignment in one line!
// console.log(name);

// ---- DATA TYPES ----
// primitives
// number: 1 2 3 4
// string "Juan" 'Skillshare' `JS`
// boolean true false
// symbol, bigint, undefined, null

var test;
// console.log(test);

test = null;
// console.log(test);

// Objects and Collections
// object, similar to JSON {}
// array

var num1 = 1;
var num2 = 2;
var num3 = -3;
var num4 = 0.05;
var name1 = 'Juan';
var city = 'Barcelona';
var isTrue = true;
var isHard = false;

console.log(num1, typeof num1);
console.log(num3, typeof num3);
console.log(name1, typeof name1);
console.log(city, typeof city);
console.log(isTrue, typeof isTrue);
console.log(isHard, typeof isHard);

// Object sneak peek
var person = {
  name: 'Juan',
  surname: 'Vieira',
};

console.log(person, typeof person);

// ---- New and Recommended way ----
// var => const, let
// const vs let
const PI = 3.14;
const apiURL = 'https://google.com.au/getUser';
console.log(PI);
// PI = 2;
// console.log(PI);

let myNumber = 3.14;
console.log(myNumber);
myNumber = 2;
console.log(myNumber);

// building a UI Theme
let buttonColor = 'green';
let cardColor = 'green';
let headerColor = 'blue';
let footerColor = 'green';
// =>
const primaryColor = 'orange';
buttonColor = primaryColor;
cardColor = primaryColor;
footerColor = primaryColor;
