/* jshint esversion: 8 */

/* select all elements for main divs */
const flipcard = document.querySelector(".maincontainer");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");

/* select the required buttons */
const start_btn = document.getElementById("continue");
const next_btn = document.getElementById("next-btn");

const clearBoard_button = document.getElementById("clear-board");
const replay_quiz = document.getElementById("replay");
const exit_btn = document.getElementById("quit");

let timerRef = document.querySelector('.timer-sec');
let questionCount = document.getElementById("qs-count");
let option_list = document.querySelectorAll(".option");

/* Initialsing varibales relating to time */
let [milliseconds, seconds, minutes] = [0, 0, 0];
let int;
let UserTime;
let question_numb;

/* Initialsing varibales which hold values*/
const MAX_QUESTIONS = 10;
let timeTaken;
let UserScore = 0;
let que_count = 0;

/* Initialing variable which hold arrays */
// const savedTimes = JSON.parse(localStorage.getItem('highScores')) || [];
let savedScores = JSON.parse(localStorage.getItem('scores')) || [];

const highScoresList = document.getElementById("user-infromation");

let randomQuestionArray = [];

/**
 * This event listener listens for the DOM to load, once it does it calls the function to initialise variables
 * the function that starts the game 
 */
document.addEventListener('DOMContentLoaded', function () {
    initialseVariables();
});

/** This function sets all the variables to the condition they should be in to start the game, this function should be called
 * before the game either begins or restarts
 */
function initialseVariables() {
    [milliseconds, seconds, minutes] = [0, 0, 0];
    UserScore = 0;
    que_count = 0; 
    question_numb = 1; 
}

/**
 * This function calls the generateQuestion function when the DOM loads
 */
function startGame() {
    generateQuestions();
}

/** 
 * 
 * This will randomly display the questions to the user
 */
function generateQuestions() {
    for (let i = 0; i < MAX_QUESTIONS; i++) {
        let RandomQuestions = questions[Math.floor(Math.random() * questions.length)];
        randomQuestionArray.push(RandomQuestions);  
    }
    console.log(randomQuestionArray);
}



function showQuestions(questionBank) {
    let questions_to_user = document.getElementById("question");
    questions_to_user.innerHTML = questionBank.question;

    //Get relevant ids for all answer btns
    document.getElementById("ans1").innerText = questionBank.ans1;
    document.getElementById("ans2").innerText = questionBank.ans2;
    document.getElementById("ans3").innerText = questionBank.ans3;
    document.getElementById("ans4").innerText = questionBank.ans4;

    // const option = option_list123.querySelectorAll(".option_list");

    // set onclick attribute to all available options
    for (let i = 0; i < option_list.length; i++) {
        option_list[i].setAttribute("onclick", "optionSelected(this)");
    }
}

/**
 * Will remove any duplicate questions from the randomly selected questions in generateQuestions
 */



/**
 * Function which is called when the user wants to replay the quiz
 */
function resetGame() {
    resultBox.classList.add("hidden"); //hide results
    quizBox.classList.remove("hidden"); //show flipcard
    next_btn.classList.add("hidden");

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.length; //getting all option items

    for (let i = 0; i < allOptions; i++) {
        options[i].classList.remove("disabled"); //once user select an option then disabled all options
    }

    int = setInterval(startTimer, 10);
    randomQuestionArray = [];
    initialseVariables();
    questionCount.innerText = question_numb;
    startGame();
    showQuestions(randomQuestionArray[que_count]);  
}

/**
 * Function which is called when the user Quits the quiz
 */
function exitGame() {
    resultBox.classList.add("hidden"); //hide results
    flipcard.classList.remove("hidden"); //show flipcard 

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.length; //getting all option items

    for (let i = 0; i < allOptions; i++) {
        options[i].classList.remove("disabled"); //once user select an option then disabled all options
    }

    randomQuestionArray = [];
    initialseVariables();
    questionCount.innerText = question_numb;
}

//The Continue Button
start_btn.addEventListener("click", function () {
    flipcard.classList.add("hidden");
    quizBox.classList.remove("hidden");
    int = setInterval(startTimer, 10);
    next_btn.classList.add("hidden");
    generateQuestions();
    showQuestions(randomQuestionArray[que_count]);
});

//The Replay Button
replay_quiz.addEventListener("click", function () {
    resetGame();
});

//The Clear Board Button
clearBoard_button.addEventListener("click", function () {
    localStorage.clear();
    savedScores = [];
    displayScores();
});

// The Quit Quiz Button
exit_btn.addEventListener("click", function () {
    exitGame();
});

next_btn.addEventListener("click", function () {
    next_btn1();
});

function next_btn1(){

    option_list.forEach(option =>{
        option.classList.remove("correct", "incorrect");
    });

    if (que_count < 9) {
        next_btn.classList.add("hidden");
        const options = document.querySelectorAll(".option_list");
        const allOptions = options.length; //getting all option items

        for (let i = 0; i < allOptions; i++) {
            options[i].classList.remove("disabled"); 
        }

        que_count++;
        question_numb++;
        showQuestions(randomQuestionArray[que_count]); //works when questions is passed
        questionCount.innerText = question_numb;

    } else {
        showResult();
        clearInterval(int);
        UserTime = timeTaken; 
    }
}

/**
 * 
 * This will cause the timer to increase when the user starts the quiz 
 */
function startTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
            }
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${m} : ${s} : ${ms}`;

    timeTaken = `${m} : ${s} : ${ms}`;
}

/**
 * 
 * This will check if the users answer is the correct one
 */
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correcAns = randomQuestionArray[que_count].answer; 

    const options = document.querySelectorAll(".option_list");

    if (userAns == correcAns) { 
        UserScore += 1;
        answer.classList.add("correct");

    } else {
        answer.classList.add("incorrect");
    }

    const allOptions = options.length;
    for (let i = 0; i < allOptions; i++) {
        options[i].classList.add("disabled");
    }
    next_btn.classList.remove("hidden");
}

/**
 * Will show the results of the game to the user
 */
function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    addValuesToLocalStorage(UserScore, timeTaken);
}

function addValuesToLocalStorage(uscore, time) {
    let newScore = {
        "QsCorrect": uscore,
        "timeTaken": time
    };
    savedScores.push(newScore);
    localStorage.setItem('scores', JSON.stringify(savedScores));
    displayScores(); 
}

function displayScores(){
    console.log(savedScores);
    highScoresList.innerHTML = savedScores.map(score => {
        return `
        <tr>
            <td> ${score.timeTaken} </td>
            <td> ${score.QsCorrect + " / 10"} </td>
        </tr>
        `;
    }).join("");
}
