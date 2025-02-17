const start8tn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exit8tn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continue8tn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');


start8tn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');

}

exit8tn. onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');

}

continue8tn. onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestions(0);

}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const next8tn = document.querySelector('.next-btn');

next8tn.onclick = () => {
  if (questionCount < questions.length - 1){
  questionCount++;
  showQuestions(questionCount);


  questionNumb++;
  questionCounter(questionNumb);
  next8tn.classList.remove('active');
}

else { 
 showResultBox();
}
}

const optionList = document.querySelector('.option-list');


// getting questions and options from array
function showQuestions(index) {
  const questionText = document.querySelector ('.question-text');
questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
<div class= "option"><span>${questions[index].options[1]}</span></div>
<div class= "option"><span>${questions[index].options[2]}</span></div>
<div class= "option"><span>${questions[index].options[3]}</span></div>`;

optionList.innerHTML = optionTag;
const option = document.querySelectorAll(`.option`);
for (let i =  0; i < option.length; i++) {
  option [i].setAttribute(`onclick`, `optionSelected(this)`);
}
}
 
function optionSelected(answer) {
   let userAnswer = answer.textContent;
let correctAnswer = questions[questionCount].answer;
let allOptions= optionList.children.length;

if (userAnswer == correctAnswer) {
  console.log('answer is correct');
  answer.classList.add('correct');
  userScore += 1;
  headerScore();
}
else { 
  console.log('answer is wrong');
  answer.classList.add(`incorrect`);
}

//if answer incorrect, auto selected correct answer

for (let i = 0; i <allOptions; i++) {
 if (optionList.children[i].textContent== correctAnswer) {
  optionList.children[i].setAttribute('class', 'option correct');
 }
}


//if user has selected, disabled all options
for (let i = 0; i < allOptions; i++) {
  optionList.children[i].classList.add('disabled');
}

next8tn.classList.add('active');
}

function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}



function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
  
}

function showResultBox() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

const scoreText = document.querySelector('.score-text');
scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;
}