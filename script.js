// TODO
// * Timer countdown
// * score counter
// * answer correct or wrong notice
// * questions x5
// * answers x4 for each question
// * arrays for questions and answers
// * render lists for each questions
// * correct answer defined for each question
// * Make submit button work
// * Save answers to local storage
// to render li for each question
// renders the question to the page
// listens to click & checks answer
// keep track of index separately & increment the index after each question

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

var questionDiv = document.getElementById("question")
var answerDiv = document.getElementById("answers")
var resultDiv = document.getElementById("result")
var counterDiv = document.getElementById("question-counter")
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

function askQuestion() {
    if (!questionArr[qIndex]) {
        return;
    } else {
        var questionDisplay = document.createElement("button");
        // add bootstrap classes
        questionDisplay.textContent = questionArr[qIndex].question;
        questionDiv.appendChild(questionDisplay);
        var answers = questionArr[qIndex].answers;
        for (let i = 0; i < answers.length; i++) {
            const eachAnswer = answers[i];
            var answerDisplay = document.createElement("button");
            // add bootstrap classes
            // add class of answer-button 
            // for check answer function, listen to clicks on answer button
            answerDisplay.textContent = eachAnswer
            answerDiv.appendChild(answerDisplay);
        }

    }
    
    // let arr = ["answer1", "answer2", "answer3", "answer4"];
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     console.log(element)
    // }

    /**
     * qIndex = 0
     * questionArr[qIndex]
     * questionArr[0]     // the first question
     * checkAnswer will increment qIndex
     * qIndex = 1
     * questionArr[qIndex]
     * questionArr[1]     // the second question
     * 
     * repeat for 3rd and 4th question
     * 
     * qIndex = 4
     * questionArr[4]     // the last question
     * checkAnswer will increment qIndex
     * 
     * qIndex = 5
     * questionArr[5]     // undefined
     * 
     * if (questionArr[qIndex]) {
     *  return
     * } else {
     *  continue with the code
     * rest of the pseudocode
     * }
     */

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

function checkAnswer() {

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
