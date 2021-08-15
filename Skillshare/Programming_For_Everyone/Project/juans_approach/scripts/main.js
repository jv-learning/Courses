import { questions } from './data.js';

// init listeners
document.getElementById('btn_1').addEventListener('click', () => checkAnswer(1));
document.getElementById('btn_2').addEventListener('click', () => checkAnswer(2));
document.getElementById('btn_3').addEventListener('click', () => checkAnswer(3));
document.getElementById('btn_4').addEventListener('click', () => checkAnswer(4));
document.getElementById('btn_next').addEventListener('click', () => {
  goToNextQuestion();
});

// context
let currentQuestion = 0;
// results: Array<{question: Question, answer: number}>
let results = [];

function init() {
  const totalQuestions = document.querySelector('#total_questions');
  totalQuestions.textContent = questions.length;
  updateProgress();
}
init();

function checkAnswer(answer) {
  console.log('check', answer);
  const questionWrapper = document.querySelector('.question_wrapper');
  const questionSubtitle = document.querySelector('.question_subtitle');
  if (!isAnswered(questions[currentQuestion])) {
    if (isCorrectAnswer(answer)) {
      questionWrapper.style.backgroundColor = 'green';
      questionWrapper.style.color = 'white';
      questionSubtitle.textContent = 'CORRECT!';
    } else {
      questionWrapper.style.backgroundColor = 'red';
      questionWrapper.style.color = 'white';
      questionSubtitle.textContent = `INCORRECT, the right answer is "${getCorrectAnswer(questions[currentQuestion]).text}"`;
    }
  }
  // questions.forEach((q) => console.log({ q }));
  addToResults(questions[currentQuestion], answer);
  console.log({ results });
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
  // <section class="question_wrapper">
  //     <h2 class="question_title">
  //       First question
  //     </h2>
  //   </section>
  const questionTitle = document.querySelector('.question_title');
  questionTitle.textContent = question.title;
  const answerListItem1 = document.querySelector('#btn_1');
  const answerListItem2 = document.querySelector('#btn_2');
  const answerListItem3 = document.querySelector('#btn_3');
  const answerListItem4 = document.querySelector('#btn_4');
  answerListItem1.textContent = question.answers[0].text;
  answerListItem2.textContent = question.answers[1].text;
  answerListItem3.textContent = question.answers[2].text;
  answerListItem4.textContent = question.answers[3].text;
  // <section class="answers_wrapper">
  //   <ul class="answer_list">
  //   <li class="answer_list_item_1"><button id="btn_1">LITA</button></li>
  //   <li class="answer_list_item_2"><button id="btn_2">LITA</button></li>
  //   <li class="answer_list_item_3"><button id="btn_3">LITA</button></li>
  //   <li class="answer_list_item_4"><button id="btn_4">LITA</button></li>
  // </ul>
  // </section>
  // const answersWrapper = document.querySelector('.answers_wrapper');
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
    currentQuestion = currentQuestion + 1;
    buildFromCurrentQuestion(currentQuestion);
  } else {
    alert(`That's it!`);
  }
  updateProgress();
}

function updateProgress() {
  const countQuestions = document.querySelector('#count_questions');
  countQuestions.textContent = currentQuestion + 1;
}

buildFromCurrentQuestion(currentQuestion);
