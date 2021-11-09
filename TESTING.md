
## Initial Testing

* The website was tested on Firefox, Microsoft Edge, Brave browsers and developed and tested on Google Chrome.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 7, iPhone 8 & iPhone 11.
* Testing was completed to ensure that the game worked and displayed as intended on different browsers and viewports.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Friyadhkh4n.github.io%2Fcrypto-quiz)
    ![HTML](docs/testing/w3chtml.png)


- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Friyadhkh4n.github.io%2Fcrypto-quiz)
    ![CSS](docs/testing/w3ccss.png)

- Validated JavaScript using [JSHint](https://jshint.com/)

    ![script.js](docs/testing/jshintupdate.png)
    ![questions.js](docs/testing/questionjshint.png)

- Lighthouse Score

    ![lighthouse](docs/testing/lighthouse.png)

## Website Testing (Solving Issues):

The first problem I had to solve on the JavaScript side, was that I needed to randomly generate 10 questions for the user to go through from my question bank. In order to do this, I had to first create my questions which contain the question itself, the correct answer as well as a list of four potential answers.

An output of some of the questions from the question bank is below: 
![question](docs/testing/questiontest.png)

Now that I have created a question bank, I have to then randomly select and store 10 questions from the total question bank which the users will answer. To do this I have created a function called displayQuestions() which holds the necessary code needed to generate and display the questions.

```
function displayQuestions(index){
    const questions_to_user = document.querySelector(".questions"); //store the question in var
    const choices = document.querySelectorAll(".option"); //store the for options in the var choices

    for(let i = 0; i < 10; i++){
        let game_question = {};
        let generateQ = questions[Math.floor(Math.random() * questions.length)];
        console.log(generateQ);
    } 
}
```

The main part of the function is the for loop which iterates 10 times, this is because I only want 10 questions to be displayed to the user. A variable called generateQ is created which stores the randomly selected questions from the question bank shown above. It uses Math.floor() and Math.random() which is needed in order to randomly select an element from my array. I then console.log() in order to test if I have correctly generated the questions.

An output of the selected questions is below: 

![FirstSet](docs/testing/firstset.png)
![SecondSet](docs/testing/secondset.png)

As you can see above, there are 10 questions which are selected and each time the program is run a different set of questions is selected meaning I have succesfully solved my problem. The next step is to then extract each element i.e question and answers and then display them in the html of the webpage.

---

The next issue I faced when developing Crypto Quiz was that I knew I wanted to implement a timer function which would start once the user begins the quiz, and then end once the user has answered the last question. Their time paired with their score would then be saved to local storage and displayed on a leaderbaord which could be seen at the end. 

To begin with I created and styled the section which would display how long they have been doing the quiz to the user:

![timer](docs/testing/timer.png)

Once it was styled I writting the functionality to which would allow the timer to start once the relevant buttons had been selected. I knew that there were two instances where I wanted the timer to begin; when they begin the quiz and if they decide to replay the quiz. The relevant buttons are displayed below: 


![start](docs/testing/continue.png)
![replay](docs/testing/replay.png)

So, when the 'Continue' button and 'Replay Quiz' button are selected I want the timer to begin counting up.

I began by adding an EventListener to the relevant button which can be seen below:

```
start_btn.addEventListener('click', ()=>{
    int = setInterval(startTimer, 10);
});

replay_quiz.addEventListener('click', ()=>{
    int = setInterval(startTimer, 10);
});
```

The following code will listen out for the button to be interacted with by the user, hence the 'click' will call the EventListener. If either buttons are clicked then the variable int which was delcared at the beginning of the file will be passed the setInterval method which itself contains the starTimer method which will contain all the code which is responsible for the clock functionality. 

The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval. It evaluates an expression or calls a function at given intervals. This method continues the calling of function until the window is closed or the clearInterval() method is called.

The startTimer() method is displayed below:

```
let [milliseconds, seconds, minutes] = [0,0,0];
let int;
```

```
 function startTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds ++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
            }
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds; 

    timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}
```
The first two lines of code create a variable which contains the relavant time intervants ie. ms, s and m and sets them all to zero. I then create another variable called int which is not initalised.

The function doesnt take any parameters as it is not needed. The function starts with miliseconds (ms) and increases its value by 10. If the value of ms equals 1000 which is the same as 1 second then it should reset its value and then increase the seconds. This same logic continues but instead of 1000 seconds its 60 as there are 60 seconds in 1 minute. 

Then three more variables are created against the respected time intervals I have chosen, and if else statements are created for each which will change their value depending if they meet the condition of being less than 10.

Finally, I change the html by accessing the the timerRef variable:

```
let timerRef = document.querySelector('.timer-sec');
```

This will cause the time to actually change in real time when the user selected one of the buttons mentioned earlier. A working view of the timer can be seen below:

![Working Timer](docs/testing/working_time.png)

---

When testing accessibility contrast of the game I made ensured that all scores where above 5, and output of the test are below:

![cont3](docs/testing/contrast3.png)
![cont1](docs/testing/contrast1.png)
![cont2](docs/testing/contrast2.png)
![cont4](docs/testing/contrast4.png)

When assessing the accessibility score of the answer buttons they score under 5 due to the colour contrasting so I changed the background of the buttons in order to improve the score.

![cont5](docs/tetsing/failedscore.png)]

By changing the background-color to #006E91 I was able to get the score to 5.77 which meant it passed the accessibility test

![cont6](docs/testing/changedfail.png)

I still wanted to have the buttons to have a :hover affect with the background-color being #CF9FFF so in order to do this I also changed the font color to be #263A44 allowing me to get an accessibility score of 5.67

![cont7](docs/testing/hoverbtn.png)

```
button[id^=ans].option:hover{
   background: #CF9FFF;
   color: #263a44;
}
```

I had to change the colour of the timer text as this was giving be a score below 3, therefore I changed the font colour to #263a44 in order to get my score back above 5.

![cont8](docs/testing/timepassed.png)

When checking the results page several elements failed the accessibility test so I played with the colours of the background and font in order to get the best score possible

![cont9](docs/testing/resultsfailed.png)
![cont10](docs/testing/congratsfixed.png)
![cont11](docs/testing/cont111.png)
![cont12](docs/testing/title.png)
![cont13](docs/testing/btnres.png)
![cont14](docs/testing/btnresult.png)
![cont15](docs/testing/clearbtn.png)
![cont16](docs/testing/newclearbtn.png)

--- 
A problem I was having with my code was that my generateQuestions() and showQuestions(questionBank) functions were not working as intended. generateQuestions() takes in no parameters and its purpose is to randomly chose 10 questions from questions.js that will display to the user. I was able to get the questions generating fine but it is when I passed the questions which were held in RandomQuestions to showQuestions(questionBank) were the error occured, it would not let me access the individual elements of each question in questions.js. After several hours of debugging and getting help from Tutor Support I realised the error was occuring because although I was generating the questions I was not pushing them to the array correctly.

In order to fix the problem I declared an array called randomQuestionArray and set its contents to empty

```
let randomQuestionArray = [];
```

I then created a variable called RandomQuestions which would store the 10 randomly selected questions from questions[]

```
 let RandomQuestions = questions[Math.floor(Math.random() * questions.length)];
```

Within the for loop which ran 10 times, I would push the contents of RandomQuestions to randomQuestionArray allowing me to have the questions in an indexed way which I could access later on.

```
randomQuestionArray.push(RandomQuestions); 
```

As a test I console.log(randomQuestionArray) and ran the program twice to see if questions would generate and be different each time, the output is below:

![array](docs/testing/arrayoutput.png)
![array2](docs/testing/arrayoutput2.png)

As you can see I now have questions randomly generating each time the program is run which I can now access via index. This now meant when I wanted to call the function I could pass in que_count which is a varibale which increments as the user moves through the game allowing them to see the correct question and interact with the game as intended.

```
showQuestions(randomQuestionArray[que_count]);
```

However, the problems did not stop there. After running the game several times I found that sometimes 20 questions would generate and this would happen when the user selected either the 'Replay' or 'Quit' buttons at the end of the game. This was due to my exitGame() and resetGame() functions calling startGame() meaning a new batch of questions would be generated before the old batch were removed. In order to fix this issue, I changed how the functions worked ensuring I cleared the randomQuestionArray before new questions were generated.

The updated and working funcitons are displayed below:

```
function resetGame() {
    resultBox.classList.add("hidden"); 
    quizBox.classList.remove("hidden"); 
    next_btn.classList.add("hidden");

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.length; //getting all option items

    for (i = 0; i < allOptions; i++) {
        options[i].classList.remove("disabled"); //once user select an option then disabled all options
    }

    int = setInterval(startTimer, 10);
    randomQuestionArray = []; //clears array
    initialseVariables(); //resets variable values
    startGame(); // called generateQuestions()
    showQuestions(randomQuestionArray[que_count]);  
}
```

```
function exitGame() {
    resultBox.classList.add("hidden"); 
    flipcard.classList.remove("hidden"); 

    const options = document.querySelectorAll(".option_list");
    const allOptions = options.length; //getting all option items

    for (i = 0; i < allOptions; i++) {
        options[i].classList.remove("disabled"); //once user select an option then disabled all options
    }

    randomQuestionArray = [];
    initialseVariables();
}
```

##  Browser Compatibility & Responsiveness
---

The output of Crypto Quiz when being viewed on Microsoft Edge can be seen below:

![edge](docs/testing/edgetest.png)
![edgeqs](docs/testing/edgeqs.png)
![edgeres](docs/testing/edgeresult.png)

The output of Crypto Quiz when being viewed on Brave Browser can be seen below:
* Only one output will be shown because the rest of the testing and devlopment was done on Brave Browser 
![brave](docs/testing/brave.png)

The output of Crypto Quiz when being viewed on Firefox can be seen below:

![firefox](docs/testing/firestart.png)
![firefoxqs](docs/testing/fireqs.png)
![fireres](docs/testing/fireres.png)

Crypto Quiz when being viewed at 1440px:

![1140px](docs/testing/1440px.png)
![1140px](docs/testing/1440px1.png)
![1140px](docs/testing/1440px2.png)
![1140px](docs/testing/1440px3.png)

Crypto Quiz when being viewed at 1024px: 

![1024px](docs/testing/1024px1.png)
![1024px](docs/testing/1024px.png)
![1024px](docs/testing/1024px2.png)
![1024px](docs/testing/1024px3.png)

Crypto Quiz when being viewed at 768px:

![768px](docs/testing/768px.png)
![768px](docs/testing/768px1.png)
![768px](docs/testing/768px2.png)
![768px](docs/testing/768px3.png)

Crypto Quiz when being viewed at mobile (425px):

![425px](docs/testing/425px1.png)
![425px](docs/testing/425pxup.png)
![425px](docs/testing/425px3.png)
![425px](docs/testing/425px4.png)

Crypto Quiz when being viewed at mobile small (320px):

![320px](docs/testing/320px.png)
![320px](docs/testing/320px1.png)
![320px](docs/testing/320px3.png)
![320px](docs/testing/320px2.png)

## Testing User Stories from User Experience (UX) Section

* ### First Time Visitor Goals:
a. As a First Time Visitor, I want to easily understand the purpose of the site and learn how to play the game.

![Back of Card](docs/readme/flipcardback.png)

- Here the user is given clear directions on how to navigate through the program via the buttons. Once they flip the card, they are met with a Rules section which highlights to the user how to play the game as intended.

b. As a First Time Visitor, I want the game to be enjoyable and challenging.

c. As a First Time Visitor, once the game is finished I want to be able to play again.

![Result](docs/readme/result_page.png)

- Once the user has played the game, they will be met with the Results Page which will show them their score and the time it took them to complete. They have the option to replay the quiz if they wish by 
selecting the appropriate button.

d. As a First Time Visitor, once the game is finished I want to be able to exit the game

![Result](docs/readme/result_page.png)

- Once the user has played the game, they will be met with the Results Page which will show them their score and the time it took them to complete. They have the option to quit the game if they wish by 
selecting the appropriate button.

e. As a First Time Visitor, I want to be able to set new scores and times

- By playing through the game the user is able to set new scores and times which are displayed at the end.

* ### Returning Visitor Goals:

a. As a Returning Visitor, I want the questions to be different than the previous ones.

![qs](docs/testing/diffqs.png)
![run1](docs/testing/run1.png)
![run2](docs/testing/run3.png)

- The image above outputs the array of questions generated each time a new game. Showing that the questions are different each time they play.

b. As a Returning Visitor, I want the game to be responsive to whichever device I am playing on.

- By navigating to the 'Browser Compatibility & Responsiveness' section of TESTING.md you will be able to see the game being played on different screen sizes 

c. As a Returning Visitor, I want to be able to see my previous scores and times.

![times](docs/testing/prevtimes.png)

- The above image shows all previous times and scores the user achieved
   
* ### Frequent User Goals:

a. As a Frequent Visitor, I want to see if any new questions have been added to the game.

- By playing through the game at a later date, if there have been new questions added they will generate when playing.

b. As a Frequent Visitor, I want to see if I can beat my old score.

- By playing through the game again, new scores and times can be generated allowing the player to attempt at beating old scores.

## Bugs

The game as a whole works as intended however there are a few bugs and responsivness issues that I have noticed when testing on different devices.

* When being viewed on a vertical monitor the styling causes the text on the flipcard to look out of place and there is a lot of white space. This is because I have used the 'vh' unit so when being viewed on a longer monitor the card takes up 90vh which makes it look stretched and because the text is not responsive on a longer monitor is makes the flip card look odd.

* Some of the questions are quite long, which means if you have a monitor which is not as tall the question can be cut off or the timer is hidden off the screen. However when being viewed on other monitors you are able to scroll in order to see the rest of the question. However when testing I noticed this is not always the case.

* On very specific monitor dimensions, the 'Continue' button on the back of the flip card can sometimes overflow and not be fully visible. Meaning sometimes the bottom half or quarter of the button will be off the card which is not ideal. 



