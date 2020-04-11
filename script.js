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

// questionArr[2].answers[2]
// questionArr[4].correctAnswer

// question: "Question 1",
// answers: ["answer1", "answer2", "answer3", "answer4"],
// correctAnswer: "answer1"

let startButton = document.getElementById("start-button")
let questionDiv = document.getElementById("question")
let answerDiv = document.getElementById("answers")
let resultDiv = document.getElementById("result")
let counterDiv = document.getElementById("question-counter")
let timeDiv = document.getElementById("time-counter")
let scoreDiv = document.getElementById("score-counter")
let score = 0
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
        timer--;
        timeDiv.textContent = timer
        if (!questionArr[qIndex] || timer <= 0) {
            clearInterval(x);
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
        timer = timer-10
        qIndex++
        askQuestion()
    }
}

// function endGame
// show highscores div
// display final score to user
// ask for user input (name or initials)

function endGame() {
    alert(`Your score is ${score} out of 5`)
}

// function saveScore
// capture user name or initials
// capture user end score
// save score to local storage
// local storage should be an array of objects (similar to questionsArr)


function saveScore() {

}
startButton.addEventListener("click", startGame)








// let obj = {
//     name: "Natalie",
//     rank: 100,
//     friends: [ "Jim", "John", "Jane" ],
//     portfolio: {
//         github: "nataliemichelsen",
//         projects: [
//             "Natalie",
//             100,
//             [ "Jim", "John", "Jane" ],
//             { 
//                 github: "nataliemichelsen" ,
//                 applications: [
//                     "App",
//                     [ "githubUrl", "herokuUrl" ]
//                 ]
//             }
//         ]
//     }
// }

// obj.portfolio.projects[3].applications[1][1]

// obj.name
// obj.friends[2]
// obj.portfolio.projects.links[0]

// // for objects {}, use dot notation
// // for arrays [], use bracket notation

// let arr = [
//     "Natalie",
//     100,
//     [ "Jim", "John", "Jane" ],
//     { 
//         github: "nataliemichelsen" ,
//         projects: [
//             "App",
//             [ "githubUrl", "liveUrl" ]
//         ]
//     }
// ]

// let simpleArr = [ 1, 3, "string", [ 1, 2], { name: "Natalie" }, { rank: 100 } ]

// arr[3][1]
// arr[4].projects[1]



// key-value pairs
// property: "value"

// <link href="./style.css">
// <img src="./image.jpg">
// text-align: center;


function adder(num1, num2) {
    return num1 + num2;
}

adder(5, 6)    // 11
adder()        // num1 is undefined


function multiplier(x, y) {
    return x * y;
}

multiplier(3, 4)


// write a function that takes an array and returns true if the array contains the number 7

function findSeven(givenArray) {
    for(let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] === 7) {
            return true;  
        }    
    }
    return false;
}


let arr1 = [1,3,4,6,3,5]
findSeven(arr1)      // false


let arr2 = [1,3,4,6,7,5]
findSeven(arr2)      // true


// write a function that takes an array and returns the sum of all the numbers in the array


let arr3 = [1,2,3,4,5];
findSum(arr3)       // 15

let arr4 = [14,16];
findSum(arr4)       // 30




let obj = {
    name: "Natalie",
    action: function() {
        console.log("hello");
    },
    speak: function(str) {
        console.log(str)
    }
}

obj.action()
obj.speak("Hello")


const arr = {
    "0": [],
    _proto_: {
        join: function() {
            console.log(this)
        },
        slice: function() {
            console.log(this)
        },
        split: function() {
            console.log(this)
        }
    }
}

arr.slice()

arr.action()

let newArray = [1,2,3]

newArray.length    // 3
newArray.join()
newArray.split()
newArray.map()
newArray.forEach()


join()   // undefined
        // bc this is a property of an array
        // so it must be called on an array
newArray.join()


TARGET.METHOD(VALUE)     // set a value
TARGET.METHOD()          // read a value

TARGET.METHOD = VALUE    // set a value
TARGET.METHOD            // read a value


.textContent
.appendChild()
.value()

// properties of dom elements, i.e. <p> <h1> <div> <button>

let button = document.getElementById("start-button")

console.log(button)    // <button>Start</button>

button.textContent = "Hello"
button.appendChild("<h1>Hello</h1>")


button = {
    value: "<button>Start</button>",
    textContent: function() {
        return this.value
    }
}