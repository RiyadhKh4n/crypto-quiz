/* select all elements for main divs */
const flipcard = document.querySelector(".maincontainer");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");

/* select the required buttons */
const start_btn = document.getElementById("continue");
const next_btn = quizBox.querySelector("next-btn");
const option_list = document.querySelectorAll(".option");
const clear_button = document.querySelector(".clear buttons");
const replay_quiz = document.querySelector(".replay buttons");
const exit_btn = document.querySelector(".quit buttons");

const timeText = document.querySelector(".timer .time-passed");
const timeCount = document.querySelector(".timer .timer-sec");

/* Initialsing / Declaring varibales needed for script */
let counter;

start_btn.onclick = ()=>{
    flipcard.classList.add("hidden"); //hide flipcard
    quizBox.classList.remove("hidden"); //remove hidden from quiz
}

