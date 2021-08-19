// LOOPS
// repetition of code
// cycle

// while
// for
// for/in
// for/of
// do/while
// forEach

// while
// while some condition is true, I'll execute the code I contain
// while (true) {
//   console.log('hi');
// } // infinite loop!!!

const fruits = ['orange', 'lemon', 'watermelon', 'pear', 'banana'];

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// I need a number from 0 to 3
let index = 0; // remember indexOf?
while (index < fruits.length) {
  console.log(fruits[index]);
  index = index + 1;
}
console.log('the end!');

index = 0; // restart counter, index
while (index < fruits.length) {
  console.log(fruits[index]);
  if (fruits[index] === 'lemon') {
    break;
    // return;
    // continue;
  }
  index++;
}

// classic way to find items in an array

console.log('--- FOR ---');
// FOR Loop (index ; condition ; increment)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// FOR of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
// fruits.forEach((fruit) => console.log(fruit));
