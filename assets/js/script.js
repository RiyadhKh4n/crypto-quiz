/* select all elements for main divs */
const flipcard = document.querySelector(".maincontainer");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");

/* select the required buttons */
const start_btn = document.getElementById("continue");
const next_btn = quizBox.querySelector("next-btn");
const option_list = document.querySelectorAll(".option");

const clear_button = document.getElementById("clear-board");
const replay_quiz = document.getElementById("replay")
const exit_btn = document.getElementById("quit")

const timeText = document.querySelector(".timer .time-passed");
const timeCount = document.querySelector(".timer .timer-sec");

const table_clear = document.querySelector('table > tbody');

/* Initialsing / Declaring varibales needed for script */
let counter;
let que_numb = 1;

start_btn.onclick = ()=>{
    flipcard.classList.add("hidden"); //hide flipcard
    quizBox.classList.remove("hidden"); //remove hidden from quiz
}

exit_btn.onclick = ()=>{
    resultBox.classList.add("hidden"); //hide results
    flipcard.classList.remove("hidden"); //show flipcard
   
}

replay_quiz.onclick = ()=>{
    resultBox.classList.add("hidden"); //hide results
    quizBox.classList.remove("hidden"); //show flipcard

    // add function which generates new questions 
}

clear_button.onClick = ()=>{

}

/**
 * 
 * This will randomly display the questions to the user
 */
function showQuestions(index){
    
}

/**
 * 
 * This will check if the users answer is the correct one
 */
function optionSelected(answer){

}

/**
 * 
 * This will cause the timer to increase when the user starts the quiz 
 */
function startTimer(time){

}
