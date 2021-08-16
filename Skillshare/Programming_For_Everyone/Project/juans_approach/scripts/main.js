import { questions } from './data.js';

// init dom elements
const btn1 = document.querySelector('#btn_1');
const btn2 = document.querySelector('#btn_2');
const btn3 = document.querySelector('#btn_3');
const btn4 = document.querySelector('#btn_4');
const btnNext = document.querySelector('#btn_next');
const questionTitle = document.querySelector('.question_title');
const questionSubtitle = document.querySelector('.question_subtitle');
const totalQuestions = document.querySelector('#total_questions');
const countQuestions = document.querySelector('#count_questions');
const answersWrapper = document.querySelector('.answers_wrapper');

// init listeners
btn1.addEventListener('click', () => checkAnswer(1));
btn2.addEventListener('click', () => checkAnswer(2));
btn3.addEventListener('click', () => checkAnswer(3));
btn4.addEventListener('click', () => checkAnswer(4));
btnNext.addEventListener('click', () => {
  goToNextQuestion();
});

// context
let currentQuestion = 0;
// results: Array<{question: Question, answer: number}>
let results = [];

// functions
function init() {
  totalQuestions.textContent = questions.length;
  updateProgress();
}
init();

function checkAnswer(answer) {
  console.log('check', answer);
  if (!isAnswered(questions[currentQuestion])) {
    if (isCorrectAnswer(answer)) {
      questionSubtitle.style.backgroundColor = 'green';
      questionSubtitle.style.color = 'white';
      questionSubtitle.textContent = 'CORRECT!';
    } else {
      questionSubtitle.style.backgroundColor = 'red';
      questionSubtitle.style.color = 'white';
      questionSubtitle.textContent = `INCORRECT, the right answer is "${getCorrectAnswer(questions[currentQuestion]).text}"`;
    }
  }
  // questions.forEach((q) => console.log({ q }));
  addToResults(questions[currentQuestion], answer);
  console.log({ results });
  btnNext.disabled = false;
}

function addToResults(question, answer) {
  // we need to make sure we don't add duplicates in the results
  if (!isAnswered(question)) {
    results.push({ question: question, answer: answer });
  }
}

function getCorrectAnswer(question) {
  return question.answers.find((a) => a.value === question.correctAnswer);
}

function isAnswered(question) {
  return results.find((r) => r.question.title === question.title);
}

// init quiz
function buildFromCurrentQuestion(index) {
  const question = questions[index];
  questionTitle.textContent = question.title;
  btn1.textContent = question.answers[0].text;
  btn2.textContent = question.answers[1].text;
  btn3.textContent = question.answers[2].text;
  btn4.textContent = question.answers[3].text;
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
    reset();
    currentQuestion = currentQuestion + 1;
    buildFromCurrentQuestion(currentQuestion);
  } else {
    showResults();
  }
  updateProgress();
}

function reset() {
  questionSubtitle.style.backgroundColor = '#616161';
  questionSubtitle.textContent = '';
  btnNext.disabled = true;
}

function updateProgress() {
  countQuestions.textContent = currentQuestion + 1;
}

function getCorrectResults() {
  // results: Array<{question: Question, answer: number}>
  // let results = [];
  const correct = results.filter((r) => r.question.correctAnswer === r.answer);
  console.log({ correct });
  return (correct || []).length;
}

function showResults() {
  reset();
  const endMsg = `That's it! Your score is: ${getCorrectResults()}/${questions.length}`;
  questionSubtitle.textContent = `That's it! Your score is: ${getCorrectResults()}/${questions.length}`;
  questionSubtitle.style.backgroundColor = '#202729';
  questionTitle.style.display = 'none';
  answersWrapper.style.display = 'none';
  questionSubtitle.style.fontSize = '5rem';
  questionSubtitle.style.borderBottom = '2px solid #00e9e9';
  // alert(endMsg);
}

buildFromCurrentQuestion(currentQuestion);
