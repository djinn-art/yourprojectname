const questions = [
    {
    question: "Solve: \\( x^2 + 5x + 6 = 0 \\)",
    options: [
        "\\( x = -2, -3 \\)",
        "\\( x = 2, 3 \\)",
        "\\( x = -1, -6 \\)",
        "\\( x = 1, 6 \\)"
    ],
    answer: "\\( x = -2, -3 \\)"
    },
    {
        question: "Synonym of 'Happy'?",
        options: ["Sad", "Angry", "Joyful", "Tired"],
        answer: "Joyful"
    },
    {
        question: "Next number: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "20"],
        answer: "32"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const div = document.createElement("div");
        div.innerText = option;
        div.classList.add("option");
        div.onclick = function() {
            if (option === q.answer) {
                score++;
            }
            nextQuestion();
        };
        optionsDiv.appendChild(div);
    });
}

if (window.MathJax) {
    MathJax.typeset();
}


function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = "Your score: " + score;
    }
}

loadQuestion();