window.onload = getScores

let questionArr = [
    {
        question: "To every _______, there is always opposed an equal _________.",
        answers: ["sister, brother", "country, hunter", "players, physics", "action, reaction"],
        correctAnswer: "action, reaction"
    },
    {
        question: "If ________ be the food of _______, play on.",
        answers: ["music, love", "dairy, frogs", "grapes, toys", "laughter, life"],
        correctAnswer: "music, love"
    },
    {
        question: "The wisest men follow their own ___________.",
        answers: ["mother", "direction", "leader", "fences"],
        correctAnswer: "direction"
    },
    {
        question: "We do not _________ the Earth from our ancestors, we ________ it from our children.",
        answers: ["inherit, borrow", "take, return", "lead, make", "want, need"],
        correctAnswer: "inherit, borrow"
    },
    {
        question: "There is no wealth like ____________, no poverty like _____________.",
        answers: ["apples, firewood", "horses, ice cream", "knowledge, ignorance", "basketball, popcorn"],
        correctAnswer: "knowledge, ignorance"
    }
]

// question: "Question 1",
// answers: ["answer1", "answer2", "answer3", "answer4"],
// correctAnswer: "answer1"

let startButton = document.getElementById("start-button")
let questionDiv = document.getElementById("question")
let answerDiv = document.getElementById("answers")
// let resultDiv = document.getElementById("result")
// let counterDiv = document.getElementById("question-counter")
let timeDiv = document.getElementById("time-counter")
let scoreDiv = document.getElementById("score-counter")
let savedScores = document.getElementById("savedScores")
let initials = document.getElementById("initialContainer")
let initialsInput = document.getElementById("initialsInput")
let scoreValues = "<ul></ul>" 
let score = 0
let timer = 60;
let qIndex = 0;

// function getScores
// when page loads, get high scores from local storage
// append data to high scores div

savedScores.innerHTML = localStorage.getItem("savedScores1")

function getScores() {

}

// function startGame
// fires when user clicks start button
// initializes the game
// calls startTimer
// calls askQuestion

function startGame() {
    score = 0
    timer = 60;
    qIndex = 0;
    startTimer()
    askQuestion()
}

// function startTimer
// begins timer countdown from 60 seconds

// checks for game-end conditions
// inside if statement we must account for all game-end conditions
// if all questions have been answered

function startTimer() {
    timeDiv.textContent = timer
    scoreDiv.textContent = score
    var x = setInterval(function () {
        // console.log("hello" + timer + timeDiv.textContent)
        timer--;
        timeDiv.textContent = timer
        // console.log("hello" + timer + " " + timeDiv.textContent)
        if (!questionArr[qIndex] || timer <= 0) {
            clearInterval(x);
            if (timeDiv.textContent !== 0) timeDiv.textContent = 0 
            endGame();
        }
    }, 1000);
}

// function askQuestion
// check to see if current question index exists
// if it exists, move on
// if it does not exist, return
// create element for question
// append question text to element
// append elements to quiz div (in html)
// loop through answers array
// create element for each answer
// append each answer to answers div
// populate answers in questions (append new nodes)
// clear cashe for empty ID

function askQuestion() {
    questionDiv.innerHTML = "";
    answerDiv.innerHTML = "";
    if (!questionArr[qIndex]) {
        endGame();
    } else {
        var questionDisplay = document.createElement("h2");
        questionDisplay.textContent = questionArr[qIndex].question;
        questionDiv.appendChild(questionDisplay);
        var answers = questionArr[qIndex].answers;
        for (let i = 0; i < answers.length; i++) {
            const eachAnswer = answers[i];
            var answerDisplay = document.createElement("button")
            answerDisplay.setAttribute('class', 'choice')
            answerDisplay.textContent = eachAnswer
            answerDiv.appendChild(answerDisplay);
            answerDisplay.addEventListener('click', checkAnswer)
        }

    }

}
// askQuestion()
// function checkAnswer
// fires when an answer is clicked
// captures value of clicked answer
// compare to correct/actual answer
// if correct, increments score
// if incorrect, penalize time or decrements score
// increment question index 
// calls askQuestion

function checkAnswer() {
    // console.log(this.textContent)
    var userChoice = this.textContent
    if (userChoice === questionArr[qIndex].correctAnswer) {
        console.log("correct")
        score++
        qIndex++
        scoreDiv.textContent = score
        askQuestion()
    }
    else {
        console.log("incorrect")
        if (timer-10 < 0) timer = 0
        else timer-=10
        qIndex++
        askQuestion()
    }
}

// function endGame
// show highscores div
// display final score to user
// ask for user input (name or initials)
// loading initials > submit add score to local storage > load local storage into savedScores 

function endGame() {
    initials.style = "display: block;";
    // alert(`Your score is ${score} out of 5`)
}

// function saveScore
// capture user name or initials
// capture user end score
// save score to local storage
// local storage should be an array of objects (similar to questionsArr)

function saveScore() {
    let initials = initialsInput.value;
    scoreValues += `<li> name: ${initials} score: ${score}`;
    localStorage.setItem("savedScores1", scoreValues);
    initials.style = "display: none;";
    savedScores.innerHTML = scoreValues;
}
startButton.addEventListener("click", startGame)
initials.addEventListener("click", saveScore);