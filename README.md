# Crypto Quiz

[Link to Quiz Website Here](https://riyadhkh4n.github.io/crypto-quiz/)

The purpose of this project is to create an Interactive Frontend Website using HTML, CSS and JavaScript. In order to do this I have built a Cryptocurrency Quiz game, where the users have to answer 10 questions about the industry.

Crypto Quiz is a Javascript web application that is aimed at anyone who wishes to put their crypto knowledge to the test. This quiz is designed to test your knowledge and the questions are based from [Cryptools](https://riyadhkh4n.github.io/cryptools/), so having a read will give you a good foundation in order to succeed at the game. Questions and answers will be produced on the screen one after the other in a randomised order. The user will then select the correct option or the option they think is correct, where their score will be logged letting them know how they did. Once finished they will be met with a results screen allowing them to see their score give them the option to play again or quit. 

---
![AmIResponsive](docs/readme/amIresponsive.png)
---

# User Experience (UX) 

* ## Vision
   Crypto Quiz is a game which aims to test your knowledge about the world of cryptocurrencies and to engage people who want to learn and get into the space, whether you are a complete beginner or want to expand what you already know. This game will take you through the core concepts of cryptocurrencies and and test everything you have learnt. As someone who is invested in crypto and really believes in the technology behind it, I would have loved to have an interactive game where I could have tested my knowledge so I am doing just that and creating it myself. I want this game to be inclusive and accessible for everyone, I want it to be engaging and to encourage the you into getting involved in the space.

* ## Aims
   To give provide a platform for crypto newbies or experts to test what they know in an all in one game, and to allow them to quickly learn the core concepts of this complex industry giving them the opportunity to make smarter investment decisions, in a fun and interactive way. I want the game to be fun and have re-play value so I will make the questions random each time so you can play and get tested on different aspects of the industry. 

* ## Target Audience
    There are a number of target audiences for this game due to the fact that crypto is for everyone. We welcome new and experienced people from ages, to come and learn adn test their knowledge about this fascinating industry. However, Crypto Quiz is mainly aimed at educating people who know nothing about crypto as it the questions will not be extremly diffuclt and just touch on the main aspects of the indusrty. 

* ## User Stories
    * #### First Time Visitor Goals:
        a. As a First Time Visitor, I want to easily understand the purpose of the site and learn how to play the game.

        b. As a First Time Visitor, I want the game to be enjoyable and challenging.

        c. As a First Time Visitor, once the game is finished I want to be able to play again.

    * #### Returning Visitor Goals:
       a. As a Returning Visitor, I want the questions to be different than the previous ones.

       b. As a Returning Visitor, I want to be able to beat my previous scores.

       c.  As a Returning Visitor, I want to be able to see my previous scores.

    * #### Frequent Visitor Goals:
       a. As a Frequent Visitor, I want to see if any new questions have been added to the game.
       
       b. As a Frequent Visitor, I want to see if I can beat my old score.

* ## Design 

    * Colour Scheme:

        The three main colours for Cryptools are #CF9FFF, #006E91 and #263A44. This colour palette was generated for me by using ColorSpace and selecting their Dotting Palette, of course black and white are prominent colours in the game aswell and are used interchangeably. I tried to stay as consistent as possible however depending on the part of the game the user is on the main colour changes. I chose these colours because my favourite colour is purple so I used it for the background, I then wanted to use colours that compliment #CF9FFF and not clash with it, which is where ColorSpace came in handy.

        ![Colour](docs/readme/colour.png)

    * Typography:

        The font I have decided to use for the questions of the game is [Odibee Sans](https://fonts.google.com/specimen/Odibee+Sans?query=Odibee) as this is a retro game looking font which is eye - catching and I think fit the game well. For the answers to the questions and any other infromation I will use [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed?query=Roboto+Condensed) as it is a more readable font as contrasts nicely with the main font for the website. An example of how they look together is below:

        ![font](docs/readme/fontcomp.png)

    * Imagery & Videos:

        For Crypto Quiz there will be no videos linked as it is not necessary however I may add a few crypto related images throughout the game or in the background where I see fit.

    * Icons:
    
        I decided to use the [Font Awesome](https://fontawesome.com/start) icons. The icons that I chose fit in well with the overall theme of cryptocurrencies. The icons are styled in accordance with my website, with the same colors and font size.

* ## Scope 

    * When creating Crypto Quiz I will take a waterfall approach when developing. That is, creating sections of the website at a time and ensuring they work as intended before going onto the next section. I will be able to break up development by choosing small elements to work on daily, ensuring the website can be built and published in a timely fashion. As this porject incorporates JavaScript a large majoirty of my time will be spend developing and testing the logic behind the game as opposed to the aesthetics of the game as it will have a fairly simple design. 

* ## Structure 

    * I have chosen to create the game with a single html page which will have multiple sections which the user will see when playing the game, once they move onto the next part of the game the prvious sections will be hidden from view and the new section will be displayed to them. The game will not have a navigation bar at the top as I want the user to follow a set path when navigating the wesbite.

    * On the 'index.html page', I will have multiple divs which will contain each section of the game, for example, the 'Start Section' which is the first thing that will load when they open the game. The next section will be the 'Rules Section' which will explain the rules of the quiz and give them the option to either quit or continue. The section after this will be the actual game e.g. 'Quiz Section', this is where the questions and answers will be presented to them, as well as this where their scores will be present. Once the game is complete, they will be met with the 'Results Section' which will show them their score and give the user the option to exit or play again. As mentioned before, once the user progresses to the next section all previous sections will be hidden to them.

* ## Wireframes

    * I made some basic wireframes using Balsamiq at the beginning of the project, this allowed me to get a brief understadning of how I want Crypto Quiz to look as well as ensuring I have a rough model to follow. I found Balsamiq very helpful and easy to use, I didn't quite know what styling I wanted on my pages however I had a rough idea how I wanted the quiz to look. I knew how many pages I wanted my website to have and how the sections should link to one another. Balsamiq allowed me to create a visual of my idea and gave me a goal to work towards, below my wireframes.

    * ### Landing Page Wireframe

    ![StartGame Wireframe](docs/wireframe/wireframe1.png)


    * ### Instructions Page Wireframe

    ![Instructions Wireframe](docs/wireframe/wireframe2.png)

    * ### Quiz Page Wireframe

    ![Quiz](docs/wireframe/wireframe3.png)

    * ### Results Page Wireframe

    ![Results](docs/wireframe/wireframe4.png)


# Features 

Here describes the main features of the website and what the user can expect when viewing ~

## Existing Features:

* ### Landing Screen

    * This is the first thing the player will see when the launch the website. They will be met with a flip card which when they hover over will dipslay the rules for the game. Or for mobile users, they will click the card which would then cause the card to flip over.

    * Once the card has flipped over, the user will be able to click the 'Continue' button. If selected, this will cause the card to disapear and the quiz section of the game to appear for the users to begin playing. 

    ![Front of Card](docs/readme/flipcardfront.png)
     ![Back of Card](docs/readme/flipcardback.png)

* ### Quiz Interface

    * Here is the actual game part of the website. This is where the players will interact with and where all the questions and answers will be displayed for them to try and guess. It is made up of a header, main area and a footer. 

    * The header holds the name for the quiz as well as a section which will count how long the user has been playing the quiz for. This time as well as their score will be saved to local storage and imputted into a score board where they can keep track of their previous attempts and try and beat old high scores.

    * The main area is where the question will be displayed, as well as four buttons which will hold the possible answers to the questions. The user will have one chance to answer the question and hopefully make the right choice, if they do make the correct choice then their selection highlight in green, else their selection will go red and the correct answer will be highlighted in green.

    * The footer section holds the question count as well as the 'Next' button which will be made visible to the user once a selection has been made. The question count will iterate as they move through the questions until they reach to the final question which will be number 10. Where at that point the quiz section will be hidden from the user and the results box will be displayed.

    ![Quiz1](docs/readme/quiz.png)
    ![Quiz2](docs/readme/newquiz.png)

* ### Results Page

    * This is the final section of the game that the player will interact with. Once they have completed the quiz this screen will appear showing them their score as well as the time taken to complete the quiz. Once the user has played a couple games, their previous scores and times will be displayed in the score board for them to see.

    * The user will also be met with three buttons which they can interact with, a 'Clear Board' button which when clicked will wipe the leaderboard of all old times and scores. The 'Replay Quiz' button which will reload the game so they are back at question one and can play through the quiz again. Finally, the 'Quit Quiz' button which will reload the whole website so they are met with the landing screen again.

    ![Result](docs/readme/result_page.png)



## Features Left to Implement:

# Technologies 

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used:

1. [GitPod](https://www.gitpod.io/):
    * GitPod was the IDE used to create the site

2. [Google Fonts](https://fonts.google.com/):
    * Google fonts were used to import the 'Shrikhand', 'Work Sans' and 'Space Mono' font into the style.css file which is used on all pages throughout the project.

3. [Font Awesome](https://fontawesome.com/):
    * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

4. [Git](https://git-scm.com/):
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

5. [GitHub](https://github.com/):
    * GitHub is used to store the projects code after being pushed from Git. It was also used to deploy the project (GitHub Pages)

6. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/):
    * Flexbox was used to help with the layout and responsivness of the webpage

7. [Balsamiq](https://balsamiq.com/):
    * Balsamiq was used to create the wireframes during the design process.

8. [TinyPNG](https://tinypng.com/):
    * This was used to compress all images used in the website as well as the README.md

9. [ColourSpace](https://mycolor.space/):
    * This was used to chose the colour palette for the website

10. [Autoprefixer](https://autoprefixer.github.io/):
    * It allowed me to write your CSS rules without vendor prefixes, it takes care of doing that based on current browser popularity and property support.


# Testing 

## Initial Testing

* The website was tested on Google Chrome, Microsoft Edge, Brave browsers as well as Safari.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhone 11.
* Testing was completed to ensure that all pages were linking correctly from the navigation bar and footer.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input)


- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)


- Validated JavaScript using [JSHint](https://jshint.com/)

## Website Testing (Solving Issues):
---

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


##  Browser Compatibility & Responsivness
---

The output of Crypto Quiz when being viewed on Microsoft Edge can be seen below:

![edge]()

The output of Crypto Quiz when being viewed on Brave Browser can be seen below:

![brave]()

The output of Crypto Quiz when being viewed on Firefox can be seen below:

![firefox]()

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
![425px]()

Crypto Quiz when being viewed at mobile small (320px):

![320px](docs/testing/320px.png)
![320px](docs/testing/320px1.png)
![320px](docs/testing/320px2.png)
![320px]()

## Testing User Stories from User Experience (UX) Section

* ### First Time Visitor Goals:
    
* ### Returning Visitor Goals:
   
* ### Frequent User Goals:
   
## Bugs

# Deployment 

## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository

2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    Under "Source", click the dropdown called "None" and select "Master Branch".
   
4. The page will automatically refresh.
    
5. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

## Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.


## Making a Local Clone

1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.

    $ `git clone https://github.com/RiyadhKh4n/crypto-quiz.git` 

7. Press Enter. Your local clone will be created. 

```
$ git clone https://github.com/RiyadhKh4n/crypto-quiz
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

# Credits 

## Content:
* All information on the website was taken from different souces as well as a large marjority being my own - Links to all sources are below:

## Media

### Images

## Code
 
---
