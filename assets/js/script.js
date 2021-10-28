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

let que_count = 0; //internal value used to iterating
let que_numb = 1; //the value the user will see
const MAX_QUESTIONS = 10;

let UserScore = 0;

let generateQ = [];


// generateQuestions();

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

function showQuestions(currentQuestion){
    let questions_to_user = document.getElementById("question"); 
    questions_to_user.innerHTML = currentQuestion.question;
   

    //Get relevant ids for all answer btns
    document.getElementById("ans1").innerText = currentQuestion.ans1;
    document.getElementById("ans2").innerText = currentQuestion.ans2;
    document.getElementById("ans3").innerText = currentQuestion.ans3;
    document.getElementById("ans4").innerText = currentQuestion.ans4; 
    
    if(que_count > 9){
        que_count = 0;
    }else{
        que_count++;
    } 
}

//The Continue Button
start_btn.addEventListener('click', () => {
    flipcard.classList.add("hidden"); 
    quizBox.classList.remove("hidden"); 
    int = setInterval(startTimer, 10);
    generateQuestions();
    showQuestions(generateQ);
    
});

//The Replay Button
replay_quiz.addEventListener('click', () => {
    int = setInterval(startTimer, 10);
    resultBox.classList.add("hidden"); //hide results
    quizBox.classList.remove("hidden"); //show flipcard

    que_count = 0;
    generateQuestions();
    showQuestions(generateQ);
});

//The Clear Board Button
clearBoard_button.addEventListener('click', () => {
    // access local storage and clear <td></td>
    localStorage.clear();
});

// The Quit Quiz Button
exit_btn.addEventListener('click',() => {
    resultBox.classList.add("hidden"); //hide results
    flipcard.classList.remove("hidden"); //show flipcard 
});

next_btn.onClick = () => {
    if (que_count < MAX_QUESTIONS) {
        que_count++;
        que_numb++;
        showQuestions(generateQ[que_count]);
        
        //need to increment question count for user every time its clicked
        next_btn.classList.add("hidden");
    } else {
        clearInterval(int); //stops watch
        UserTime = int; //saves time?
        showResult();
    }
};

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
function findCorrect(answer) {

}

/**
 * Will show the results of the game to the user
 */
function showResult() {

}