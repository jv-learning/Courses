import { questions } from './data.js';

// init dom elements
const btn1 = document.querySelector('#btn_1');

// init listeners
btn1.addEventListener('click', () => checkAnswer(1));

// context
let currentQuestion = 0;
// results: Array<{question: Question, answer: number}>
let results = [];

// functions
/**
 * init: void
 * Defines all the actions we need when the page first opens
 */
function init() {
  console.log(`Let's start the Quiz!`);
}
init();

/**
 * Analyse the User's answer and informs if is CORRECT or not
 * @param {number} answer Is the selected answer from the User
 */
function checkAnswer(answer) {
  console.log('check', answer);
}

/**
 * Stores the answer for each question to keep track of the progress and score
 * @param {Question} question Selected/Current question
 * @param {number} answer selected answer from the User
 */
function addToResults(question, answer) {
  // we need to make sure we don't add duplicates in the results
  if (!isAnswered(question)) {
    results.push({ question: question, answer: answer });
  }
}

function isAnswered(question) {
  // using higher order function 'find':
  // return results.find((r) => r.question.title === question.title);

  // using for of with local variable and break
  let isAnswered = false;
  for (let result of results) {
    if (result.title === question.title) {
      isAnswered = true;
      break;
    }
  }
  return isAnswered;
}

// selectedAnswer: number
function isCorrectAnswer(selectedAnswer) {
  // get current version from the global context
  // question: {title: string, value: number}>, correctAnswer: 0}
  if (questions[currentQuestion].correctAnswer === selectedAnswer) {
    return true;
  } else {
    return false;
  }
}

function goToNextQuestion() {
  if (currentQuestion + 1 < questions.length) {
    resetUI();
    currentQuestion = currentQuestion + 1;
    buildFromCurrentQuestion(currentQuestion);
  } else {
    showResults();
  }
  updateProgressBar();
}

function getCorrectResults() {
  // results: Array<{question: Question, answer: number}>
  // let results = [];
  const correct = results.filter((r) => r.question.correctAnswer === r.answer);
  return (correct || []).length;
}

// UI Functions
function buildFromCurrentQuestion(index) {
  const question = questions[index];
  questionTitle.textContent = question.title;
  btn1.textContent = question.answers[0].text;
  btn2.textContent = question.answers[1].text;
  btn3.textContent = question.answers[2].text;
  btn4.textContent = question.answers[3].text;
}

function updateProgressBar() {
  countQuestions.textContent = currentQuestion + 1;
}

function showResults() {
  resetUI();
  questionSubtitle.textContent = `That's it! Your score is: ${getCorrectResults()}/${questions.length}`;
  questionSubtitle.style.backgroundColor = '#202729';
  questionTitle.style.display = 'none';
  answersWrapper.style.display = 'none';
  questionSubtitle.style.fontSize = '5rem';
  questionSubtitle.style.borderBottom = '4px solid #00e9e9';
}

function resetUI() {
  questionSubtitle.style.backgroundColor = '#616161';
  questionSubtitle.textContent = '';
  btnNext.disabled = true;
}
