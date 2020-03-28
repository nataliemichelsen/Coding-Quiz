let questionArr = [
    {
        question: "Question 1",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    },
    {
        question: "Question 2",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    },
    {
        question: "Question 3",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    },
    {
        question: "Question 4",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    },
    {
        question: "Question 5",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    }
]

var startButton = document.getElementById("")
var questionDiv = document.getElementById("question")
var answerDiv = document.getElementById("answers")
var resultDiv = document.getElementById("result")
var counterDiv = document.getElementById("question-counter")
var quizDiv = document.getElementById("")
var timeDiv = document.getElementById("time-score-counter")

let timer = 60;
let qIndex = 0;

// function getScores
    // when page loads, get high scores from local storage
    // append data to high scores div

function getScores() {

}

// function startGame
    // fires when user clicks start button
    // initializes the game
    // calls startTimer
    // calls askQuestion

function startGame() {
    console.log("start")
    startButton.classList.add('hide')
    askQuestion()
}

// function startTimer
    // begins timer countdown from 60 seconds
    // appends timer to page for all questions
    // checks for game-end conditions

function startTimer() {
    var x = setInterval(function () {
        timer--;
        // inside if statement we must account for all game-end conditions
        // if all questions have been answered
        if (timer < 0) {
            clearInterval(x);
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
    if (!questionArr[qIndex]) {
        endGame();
    } else {
        var questionDisplay = document.createElement("h2");
        questionDisplay.textContent = questionArr[qIndex].question;
        questionDiv.appendChild(questionDisplay);
        var answers = questionArr[qIndex].answers;
        for (let i = 0; i < answers.length; i++) {
            const eachAnswer = answers[i];
            var answerDisplay = document.createElement("button").className =+"answer";
            answerDisplay.addEventListener("click", function(){
                checkAnswer(eachAnswer)
            });
            // add class of answer-button 
            // for check answer function, listen to clicks on answer button
            answerDisplay.textContent = eachAnswer
            answerDiv.appendChild(answerDisplay);
        }

    }

}
askQuestion()
// function checkAnswer
    // fires when an answer is clicked
    // captures value of clicked answer
    // compare to correct/actual answer
    // if correct, increments score
    // if incorrect, penalize time or decrements score
    // increment question index 
    // calls askQuestion

function checkAnswer(eachAnswer) {
    if (eachAnswer == questionArr[qIndex].correctAnswer) {
        score++
        qIndex++
    }
    else{
        alert("incorrect")
        time (-10)
        qIndex++
        askQuestion()
    }
}

// function endGame
    // show highscores div
    // display final score to user
    // ask for user input (name or initials)

function endGame() {

}

// function saveScore
    // capture user name or initials
    // capture user end score
    // save score to local storage
    // local storage should be an array of objects (similar to questionsArr)


function saveScore() {

}
