// CONTROL FLOWS
// if statement
// pseudocode = blueprint

// = == ===
// > < >= <=
// && ||
// ?
// ! - negation

let trafficLight = 'red';

// if trafficLight is green
// then I print 'You can pass!'
// = = =
if (trafficLight === 'green') {
  console.log('You can pass!');
}

// if trafficLight is green
// then I print 'You can pass!'
// otherwise I print 'Stop!'
if (trafficLight === 'green') {
  console.log('You can pass!');
} else {
  console.log('Stop!');
}

// if trafficLight is green
// then I print 'You can pass!'
// if trafficLight is orange
// then I print 'Get ready'
// otherwise I print 'Stop!'
if (trafficLight === 'green') {
  console.log('You can pass!');
} else if (trafficLight === 'orange') {
  console.log('Get ready');
} else {
  console.log('Stop!');
}

let age = 15;
// if age is greater or equal than 18
// then I print 'You are an adult!'
// otherwise I print 'You are still a kid'
// > =

if (age >= 18) {
  console.log('You are an adult!');
} else {
  console.log('You are still a kid!');
}

// if age is greater or equal to 18 and less than 21
// show 'You are an adult but you can't drink'
// if age is greater or equal to 21
// show 'You can drink now, but be smart with it'
// otherwise show 'You are still a kid, good!'
// && - AND
if (age >= 18 && age < 21) {
  console.log(`You are an adult but you can't drink`);
} else if (age > 21) {
  console.log(`You can drink now, but be smart with it`);
} else {
  console.log(`You are still a kid, good!`);
}

// || - OR
const food = 'pasta';
// if food is pizza or pasta
// show 'Nyaaaaam, let's have it!'
// else
// show 'No thanks, I'm okay'
if (food === 'pizza' || food === 'pasta') {
  console.log(`Nyaaaaam, let's have it!`);
} else {
  console.log(`No thanks, I'm okay`);
}

// ! - Negation
// ! = = it means different
if (food !== 'pizza' && food !== 'pasta') {
  console.log(`No thanks, I'm okay`);
} else {
  console.log(`Nyaaaaam, let's have it!`);
}

trafficLight = 'green';
// if light is not green
// show 'STOP'
// otherwise show 'CONTINUE'
if (!(trafficLight === 'green')) {
  console.log('STOP!');
} else {
  console.log('CONTINUE');
}
