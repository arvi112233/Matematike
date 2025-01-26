const questions = [
    { question: "Sa është shuma e këndëve të brendshëm në një trekëndësh?", answer: "180" },
    { question: "Sa gradë është një kënd i drejtë?", answer: "90" },
    { question: "Sa është shuma e këndëve të brendshëm në një katërkëndësh?", answer: "360" },
    { question: "Si quhet një kënd që është më pak se 90 gradë?", answer: "kend i ngushte" },
    { question: "Si quhet një kënd që është më shumë se 90 gradë, por më pak se 180 gradë?", answer: "kend i gjere" },
    { question: "Si quhet një kënd që është më shumë se 180 gradë, por më pak se 360 gradë?", answer: "kend refleksiv" },
    { question: "Sa është shuma e këndëve të brendshëm në një gjashtëkëndësh?", answer: "720" },
    { question: "Sa është shuma e këndëve të brendshëm në një pesëkëndësh?", answer: "540" },
    { question: "Sa është shuma e këndëve të brendshëm në një shtatëkëndësh?", answer: "900" },
    { question: "Sa gradë ka një kënd i plotë?", answer: "360" }
];

let currentQuestion = 0;
let completed = 0;
let remaining = questions.length;

function updateProgress() {
    const completedElement = document.getElementById('completed');
    const remainingElement = document.getElementById('remaining');

    completedElement.classList.add('blur-out');
    remainingElement.classList.add('blur-out');

    setTimeout(() => {
        completedElement.innerText = completed;
        remainingElement.innerText = remaining;

        completedElement.classList.remove('blur-out');
        completedElement.classList.add('blur-in');

        remainingElement.classList.remove('blur-out');
        remainingElement.classList.add('blur-in');
    }, 300);
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestion].question;
    updateProgress();
}

document.getElementById('submit').addEventListener('click', function() {
    const answer = document.getElementById('answer').value;
    const resultElement = document.getElementById('result');
    const body = document.body;

    if (answer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        resultElement.innerText = "Saktë!";
        body.style.backgroundColor = "lightgreen";
        setTimeout(() => {
            body.style.backgroundColor = "blue";
        }, 1000);

        completed++;
        remaining--;

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            document.getElementById('answer').value = '';
        } else {
            resultElement.innerText = "Kuizi përfundoi!";
        }
    } else {
        resultElement.innerText = "Provo përsëri!";
        body.style.backgroundColor = "lightcoral";
        setTimeout(() => {
            body.style.backgroundColor = "blue";
        }, 1000);
    }
});

// Initialize Quiz
loadQuestion();