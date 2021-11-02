/* jshint esversion: 8 */

/* select all elements for main divs */
const flipcard = document.querySelector(".maincontainer");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");

/* select the required buttons */
const start_btn = document.getElementById("continue");
const next_btn = document.getElementById("next-btn");
// const option_list = document.querySelectorAll(".option");

const clearBoard_button = document.getElementById("clear-board");
const replay_quiz = document.getElementById("replay");
const exit_btn = document.getElementById("quit");

let timerRef = document.querySelector('.timer-sec');
let questionCount = document.getElementById("qs-count");

/* Initialsing varibales needed for script */
let [milliseconds, seconds, minutes] = [0, 0, 0];
let int;
let UserTime;

// let que_count = 0; //internal value used to iterating
// let question_numb = 1; //the value the user will see
const MAX_QUESTIONS = 9;

let UserScore = 0;
const savedScores =  JSON.parse(localStorage.getItem('scores')) || [];
let generateQ = [];
let questionBank = {};

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
    que_count = 0; //internal value used to iterating
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
        // console.log(generateQ);
    }
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
    const option_list = document.querySelectorAll(".option");
    for (i = 0; i < option_list.length; i++) {
        option_list[i].setAttribute("onclick", "optionSelected(this)");
    }
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
    next_btn.classList.add("hidden");

    int = setInterval(startTimer, 10);
    initialseVariables();
    startGame();
    showQuestions(questions[que_count]);
}

/**
 * Function which is called when the user Quits the quiz
 */
function exitGame() {
    resultBox.classList.add("hidden"); //hide results
    flipcard.classList.remove("hidden"); //show flipcard 

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.length; //getting all option items

    for (i = 0; i < allOptions; i++) {
        options[i].classList.remove("disabled"); //once user select an option then disabled all options
    }
    
    initialseVariables();
    startGame();
    showQuestions(questions[que_count]);
}

//The Continue Button
start_btn.addEventListener("click", function () {
    flipcard.classList.add("hidden");
    quizBox.classList.remove("hidden");
    int = setInterval(startTimer, 10);
    next_btn.classList.add("hidden");
    showQuestions(questions[que_count]);
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
        next_btn.classList.add("hidden");
        const options = document.querySelectorAll(".option_list");
        const allOptions = options.length; //getting all option items

        for (i = 0; i < allOptions; i++) {
            options[i].classList.remove("disabled"); //once user select an option then disabled all options
        }

        que_count++;
        question_numb++;
        showQuestions(questions[que_count]); //works when questions is passed
        questionCount.innerText = question_numb;
    } else {
        showResult();
        clearInterval(int); //stops watch
        UserTime = timerRef; //saves time?
        
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
function optionSelected(answer) {
    let userAns = answer.textContent; //getting user selected option
    console.log("[This is user answer] " + userAns);
    let correcAns = questions[que_count].answer; //getting correct answer from array
    console.log("[This is correct answer] " + correcAns);

    const options = document.querySelectorAll(".option_list");

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        UserScore += 1;
        console.log("UserScore: " + UserScore);
        //add green colour to btn
    } else {
        UserScore == UserScore;
        console.log("UserScore: " + UserScore);
        //add green colour to correct correctAns
        //add red colour to their userAns
    }

    const allOptions = options.length; 
    for (i = 0; i < allOptions; i++) {
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

    savedScores.push(UserScore);
    console.log(savedScores);
    localStorage.setItem('points', JSON.stringify(savedScores));
    // localStorage.setItem('time', [milliseconds, seconds, minutes]);

}