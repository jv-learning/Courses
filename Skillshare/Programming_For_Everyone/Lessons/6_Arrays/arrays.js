// ARRAYS
// collection of objects (any type of variables, even functions!!!)
// []
const fruits = ['orange', 'lemon', 'watermelon', 'pear'];
console.log(fruits);

// Operations
// get the number of elements
console.log('length', fruits.length);

// add a new element
fruits.push('apple');
console.log('length', fruits.length);
console.log(fruits);
// append the element, meaning we add at the END of the array
fruits.unshift('coco');
console.log(fruits);

// remove an element
fruits.pop();
console.log(fruits);
// remove latest element in the array
fruits.shift();
console.log(fruits);

// how to access the elements in the array?
// indexes. Each element has its own index. Index starts in 0, NOT in 1
console.log(fruits[2]); // watermelon
console.log(fruits[4]); // undefined

console.log('lemon is in the position', fruits.indexOf('lemon'));
// console.log(fruits[fruits.indexOf('watermelon')]);
const waterMelonPosition = fruits.indexOf('watermelon');
console.log(fruits[waterMelonPosition]);
