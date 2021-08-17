// questions is an Array of question Objects:
// Array<{title: string, answers: Array<{title: string, value: number}>, correctAnswer: 0}>
// {title: string, answers: [{}], correctAnswer: 0}
export const questions = [
  {
    title: 'Where can you find the Eiffel Tower?',
    answers: [
      { text: 'France', value: 1 },
      { text: 'Italy', value: 2 },
      { text: 'China', value: 3 },
      { text: 'USA', value: 4 },
    ],
    correctAnswer: 1,
  },
  {
    title: `What's Garfield's favorite food?`,
    answers: [
      { text: 'Mice', value: 1 },
      { text: 'Lasagna', value: 2 },
      { text: 'Pasta', value: 3 },
      { text: 'Pepperoni', value: 4 },
    ],
    correctAnswer: 2,
  },
  {
    title: `what is Thor's weapon?`,
    answers: [
      { text: 'Machine gun', value: 1 },
      { text: 'Shield', value: 2 },
      { text: 'Sword', value: 3 },
      { text: 'Hammer', value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    title: `What came first?`,
    answers: [
      { text: 'Wheel', value: 1 },
      { text: 'Fire', value: 2 },
      { text: 'Stone tools', value: 3 },
      { text: 'Agriculture', value: 4 },
    ],
    correctAnswer: 3,
  },
  {
    title: `Who was Mozzart's most known rival?`,
    answers: [
      { text: 'Beethoven', value: 1 },
      { text: 'Antonio Salieri', value: 2 },
      { text: 'Chopin', value: 3 },
      { text: 'Tchaikovsky', value: 4 },
    ],
    correctAnswer: 2,
  },
  {
    title: `Who's Buzz Lightyear best friend in Toy Story?`,
    answers: [
      { text: 'Sully', value: 1 },
      { text: 'Jessy', value: 2 },
      { text: 'Sid', value: 3 },
      { text: 'Woody', value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    title: `What movie franchise uses "The Force"?`,
    answers: [
      { text: 'Star Trek', value: 1 },
      { text: 'Lost in Space', value: 2 },
      { text: 'Star Wars', value: 3 },
      { text: 'Planet of Apes', value: 4 },
    ],
    correctAnswer: 3,
  },
  {
    title: `Who was Harry Houdini?`,
    answers: [
      { text: 'A USA president', value: 1 },
      { text: 'A famous actor', value: 2 },
      { text: 'A famous musician', value: 3 },
      { text: 'A famous magician', value: 4 },
    ],
    correctAnswer: 4,
  },
  {
    title: `What's the real name of Lord Voldemort from Harry Potter?`,
    answers: [
      { text: 'Tom Riddle', value: 1 },
      { text: 'Peter Pettigrew', value: 2 },
      { text: 'Dobby the Elf', value: 3 },
      { text: 'Tod Lemird', value: 4 },
    ],
    correctAnswer: 1,
  },
  {
    title: `Tom and...?`,
    answers: [
      { text: 'Jessy', value: 1 },
      { text: 'Tweety', value: 2 },
      { text: 'Jerry', value: 3 },
      { text: 'The Chipmunks', value: 4 },
    ],
    correctAnswer: 3,
  },
];

// TODO: exercise: add a new field "explanation" that stores some extra details about the correct answer and show it in the front-end
