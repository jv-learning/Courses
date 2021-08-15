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
];
