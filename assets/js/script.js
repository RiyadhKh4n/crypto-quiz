/* jshint esversion: 8 */

/* select all elements for main divs */
const flipcard = document.querySelector(".maincontainer");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");

/* select the required buttons */
const start_btn = document.getElementById("continue");
const next_btn = document.getElementById("next-btn");
const option_list = document.querySelectorAll(".option");

const clearBoard_button = document.getElementById("clear-board");
const replay_quiz = document.getElementById("replay");
const exit_btn = document.getElementById("quit");

let timerRef = document.querySelector('.timer-sec');
let questionCount = document.getElementById("qs-count");


/* Initialsing varibales needed for script */
let [milliseconds, seconds, minutes] = [0, 0, 0];
let int;
let UserTime;

let que_count = 1; //internal value used to iterating
let question_numb = 1; //the value the user will see
const MAX_QUESTIONS = 10;

let UserScore = 0;

let generateQ = new Object;
let gameQuestions = [];
let index = {};



/**
 * This event listener listens for the DOM to load, once it does it calls the function to initialise variables
 * the function that starts the game 
 */
document.addEventListener('DOMContentLoaded', function () {
    initialseVariables();
    startGame();
});

/** This function sets all the variables to the condition they should be in to start the game, this function should be called
 * before the game either begins or restarts
 */
function initialseVariables() {
    [milliseconds, seconds, minutes] = [0, 0, 0];
    int;
    UserTime;
    UserScore = 0;
    que_count = 1; //internal value used to iterating
    question_numb = 1; //the value the user will see
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
        generateQ = questions[Math.floor(Math.random() * questions.length)];
        console.log(generateQ);
    }
}

function showQuestions(index) {
    let questions_to_user = document.getElementById("question");
    questions_to_user.innerHTML = index.question;

    //Get relevant ids for all answer btns
    document.getElementById("ans1").innerText = index.ans1;
    document.getElementById("ans2").innerText = index.ans2;
    document.getElementById("ans3").innerText = index.ans3;
    document.getElementById("ans4").innerText = index.ans4;
}

/**
 * Will remove any duplicate questions from the randomly selected questions in generateQuestions
 */
function removeDuplicates() {

}

/**
 * Function which is called when the user wants to replay the quiz
 */
function resetGame() {
    resultBox.classList.add("hidden"); //hide results
    quizBox.classList.remove("hidden"); //show flipcard

    int = setInterval(startTimer, 10);
    initialseVariables();
    startGame();
    showQuestions(generateQ);
}

/**
 * Function which is called when the user Quits the quiz
 */
function exitGame() {
    resultBox.classList.add("hidden"); //hide results
    flipcard.classList.remove("hidden"); //show flipcard 

    initialseVariables();
    startGame();
    showQuestions(generateQ);
}

//The Continue Button
start_btn.addEventListener("click", function () {
    flipcard.classList.add("hidden");
    quizBox.classList.remove("hidden");
    int = setInterval(startTimer, 10);
    showQuestions(generateQ);
});

//The Replay Button
replay_quiz.addEventListener("click", function () {
    resetGame()
});

//The Clear Board Button
clearBoard_button.addEventListener("click", function () {
    // access local storage and clear <td></td>
    localStorage.clear();
});

// The Quit Quiz Button
exit_btn.addEventListener("click", function () {
    exitGame();
});

next_btn.addEventListener("click", function () {
    if (que_count < MAX_QUESTIONS) {
        console.log("Next Button is working");
        que_count++;
        question_numb++;
        showQuestions(inde);

        //need to increment question count for user every time its clicked
        //hide the #next-btn from the user
    } else {
        clearInterval(int); //stops watch
        UserTime = int; //saves time?
        showResult();
    }
});

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
}

/**
 * 
 * This will check if the users answer is the correct one
 */
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = generateQ[que_count].answer; //getting correct answer from array

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        UserScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        correcAns.classList.add(".correct");
    }

    for(i=0; i < allOptions; i++){
        options.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

/**
 * Will show the results of the game to the user
 */
function showResult() {

}