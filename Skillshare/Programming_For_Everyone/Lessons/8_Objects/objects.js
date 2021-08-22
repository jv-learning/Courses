// OBJECTS
// key-value pairs elements
// defined with {}
const person1 = {
  name: 'Juan',
  age: 30,
};
console.log(person1);

// access properties
// dot notation
// brackets, kind of by index

console.log(person1.name);
console.log(person1.age);

console.log(person1['name']);
console.log(person1['age']);

// modify
person1.name = 'John';
console.log(person1.name);
console.log(person1);

// add a property
person1.surname = 'Vieira';
console.log(person1);

// remove a property
delete person1.surname;
console.log(person1);

// spread operator, is better to copy objects instead of modify them (to add or remove properties)

const people = [];
person1.name = 'Juan';
people.push(person1);

const person2 = { name: 'Alicia', age: 22 };
people.push(person2);

people.push({ name: 'Victor', age: 33 });
console.log(people);

// show all people
for (let person of people) {
  console.log(person);
}

// show only people younger or equal than 30
for (let person of people) {
  if (person.age <= 30) {
    console.log('young!', person);
  }
}

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.age <= 30) {
    console.log('young!', person);
  }
}

people.forEach(function (person) {
  if (person.age <= 30) {
    console.log('young!', person);
  }
});

// for fun, sneak peek
people.forEach((p) => (p.age <= 30 ? console.log('young!', p) : ''));

// what about constant objects?
// const name = 'Juan';
// name = 'John'; // => ERROR!!!

const Juan = {
  name: 'Juan',
  age: 30,
};
console.log(Juan);
Juan.age = 25;
console.log(Juan);

// assign vs modify. Reference, pointers
// Juan = {
//   name: 'Juan2',
//   age: 33,
// };

// freeze
// Object.freeze()
