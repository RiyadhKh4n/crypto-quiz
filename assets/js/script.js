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

const timeText = document.querySelector(".timer .time-passed");
const timeCount = document.querySelector(".timer .timer-sec");

const table_clear = document.querySelector('table > tbody');

/* Initialsing / Declaring varibales needed for script */
let que_count = 0;
let que_numb = 1;
let UserScore = 0;
const MAX_QUESTIONS = 10;
let initialTime = 0;

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

clearBoard_button.onClick = ()=>{

}

next_btn.onClick = () =>{
    if(que_count < MAX_QUESTIONS){
        que_count++;
        que_numb++;
        document.querySelector(".qs-count").innerHTML=(que_numb);
        displayQuestions();
        next_btn.classList.add("hidden");
    }else{
        showResult();
    }

}

function getRandomQuestion(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min; 

    return result;
}

/**
 * 
 * This will randomly display the questions to the user
 */
function displayQuestions(index){
    const questions_to_user = document.querySelector(".questions"); //store the question in var
    const choices = document.querySelectorAll(".option"); //store the for options in the var choices

    choices.forEach((choice) => {
        choice.addEventListener("click", function(){

        });
    });

    let index = getRandomQuestion(1, MAX_QUESTIONS);
    result.innerText = questions[index];
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
function startTimer(initialTime){

}

/**
 * Will show the results of the game to the user
 */
function showResult(){

}


