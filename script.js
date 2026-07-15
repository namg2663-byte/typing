const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "Coding is fun and rewarding.",
    "Never stop learning new things.",
    "Typing faster takes daily practice.",
    "JavaScript is a powerful programming language.",
    "Success comes from consistent effort.",
    "Stay focused and keep improving.",
    "Learning to code opens many opportunities.",
    "Believe in yourself and never give up."
];

let current = "";
let time = 60;
let timer = null;

const text = document.getElementById("text");
const input = document.getElementById("input");
const timeView = document.getElementById("time");
const accuracyView = document.getElementById("accuracy");

function randomSentence() {
    current = sentences[Math.floor(Math.random() * sentences.length)];
    text.textContent = current;
}

function startGame() {
    clearInterval(timer);

    randomSentence();

    input.value = "";
    input.disabled = false;
    input.focus();

    time = 60;
    timeView.textContent = time;
    accuracyView.textContent = "100";

    timer = setInterval(() => {
        time--;
        timeView.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            input.disabled = true;
            alert("Time's up!");
        }
    }, 1000);
}

input.addEventListener("input", () => {
    let value = input.value;
    let correct = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === current[i]) {
            correct++;
        }
    }

    let accuracy = Math.round((correct / current.length) * 100);
    if (accuracy < 0) accuracy = 0;

    accuracyView.textContent = accuracy;

    if (value === current) {
        alert("Correct!");

        input.value = "";
        randomSentence();
    }
});

startGame();