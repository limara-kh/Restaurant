const startBtn = document.getElementById("firstbtn");
const quizDiv = document.querySelector(".quiz");
const questionDiv = quizDiv.querySelector("div");
const trueBtn = document.getElementById("button1");
const falseBtn = document.getElementById("button2");
const timeSpan = quizDiv.querySelector("span");
const nameInput = document.querySelector("input");

let currentQuestion = 0;
let score = 0;
let timeLeft = 8;
let timer;

const questions = [
    {
        question: "Қазақстан 1991 жылы тәуелсіз ел атанды.",
        answer: true
    },
    {
        question: "Алаш Орда үкіметі 1986 жылы құрылды.",
        answer: false
    },
    {
        question: "Қожа Ахмет Ясауи Түркістанда жерленген.",
        answer: true
    },
    {
        question: "Алматы — қазіргі Қазақстанның астанасы.",
        answer: false
    },
    {
        question: "Ұлы жүз, Орта жүз, Кіші жүз — қазақ халқының үш жүзі.",
        answer: true
    },
    {
        question: "Екінші дүниежүзілік соғыс 1941 жылы басталды.",
        answer: false
    }
];

function startQuiz() {
    const name = nameInput.value.trim();
    if (!name) {
        alert("Атыңды жазып жібер!");
        return;
    }

    document.querySelector("div").style.display = "none";
    quizDiv.style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }

    questionDiv.textContent = questions[currentQuestion].question;
    resetTimer();
}

function handleAnswer(isTrue) {
    if (questions[currentQuestion].answer === isTrue) {
        score++;
    }

    currentQuestion++;
    nextQuestion();
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 8;
    timeSpan.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeSpan.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            currentQuestion++;
            nextQuestion();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    quizDiv.innerHTML = `
        <h1>Ойын аяқталды!</h1>
        <p>Ұпай саның: ${score} / ${questions.length}</p>
        <p>Тағы ойнайсың ба, ${nameInput.value.trim()}?</p>
        <button onclick="location.reload()">Қайта бастау</button>
    `;
}

startBtn.addEventListener("click", startQuiz);
trueBtn.addEventListener("click", () => handleAnswer(false));
falseBtn.addEventListener("click", () => handleAnswer(true));

quizDiv.style.display = "none";
