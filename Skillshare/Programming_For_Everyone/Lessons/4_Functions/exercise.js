// create a function "giveMePizza" that accepts a two ingredients and returns the text "I've cooked your pizza with ingredient1 and ingredient2. Enjoy!"
// of course, ingredient1 and ingredient2 will be replace for their values

// use the function giveMePizza multiple times with different ingredients

// create a variable 'myTest' with value of 'hi there'

// then, print it inside the giveMePizza function. Do you see the message printed as many times as you call the function?

// now, lets declare a new variable inside the giveMePizza function with the same name! 'myTest'. Does it work? Why?
// we normally can't declare two variables with the same name, right?

// make sure the value of this variable inside the function is the text 'inside the function'. What happens when you print this variable?
// do you get the text 'hi there' or 'inside the function'?

// now, at the end of the program, outside the function, print myTest variable again. What is printed here? Why?

// finally, instead of declaring the variable with let or const inside the function, let's just assign it
// * before it was "const myTest = 'inside the function'", we change it to just "myTest = 'inside the function'"
// do you see any changes?

// we have caused a "side effect". We modified a global variable inside a function. In some scenarios this could be what we want
// however, is a good practice to avoid this changes, usually by returning the desired value instead

// example
let name = 'Juan';
function rename() {
  name = 'John';
}
console.log('before', name);
rename();
console.log('after', name);
// side effect!

// instead, is recommended to control it in the return
let surname = 'Vieira';
function changeSurname() {
  return 'Doe';
}
console.log('before', surname);
surname = changeSurname();
console.log('after', surname);
// this is usually easier to track and understand
