const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML",
  },
  {
    question: "Which one is not a JavaScript framework?",
    options: ["React", "Vue", "Django", "Angular"],
    answer: "Django",
  },
  {
    question: "Which tag is used to link CSS?",
    options: ["<link>", "<css>", "<style>", "<script>"],
    answer: "<link>",
  },
  {
    question: "Which method is used to print in console?",
    options: ["print()", "write()", "log()", "console.log()"],
    answer: "console.log()",
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(option));
    optionsElement.appendChild(li);
  });
}

function selectAnswer(option) {
  const correct = questions[currentQuestion].answer;
  if (option === correct) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("question-container").classList.add("hide");
  nextBtn.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreDisplay.textContent = score;
}

// Initial load
showQuestion();
nextBtn.disabled = true;
