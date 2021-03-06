# Crypto Quiz

[Link to Live Site Here](https://riyadhkh4n.github.io/crypto-quiz/)

The purpose of this project is to create an Interactive Frontend Website using HTML, CSS and JavaScript. In order to do this I have built a Cryptocurrency Quiz game, where the users have to answer 10 questions about the industry.

Crypto Quiz is a Javascript web application that is aimed at anyone who wishes to put their crypto knowledge to the test. This quiz is designed to test your knowledge and the questions are based from [Cryptools](https://riyadhkh4n.github.io/cryptools/), so having a read will give you a good foundation in order to succeed at the game. Questions and answers will be produced on the screen one after the other in a randomised order. The user will then select the correct option or the option they think is correct, and their score will be logged and outputted at the end letting them know how they did. Once finished they will be met with a results screen allowing them to see their score and time taken and give them the option to play again or quit. 

---
![AmIResponsive](docs/testing/updatedamiresponsive.png)
---

# User Experience (UX) 

* ## Vision
   Crypto Quiz is a game which aims to test your knowledge about the world of cryptocurrencies and to engage people who want to learn and get into the space, whether you are a complete beginner or want to expand what you already know. This game will take you through the core concepts of cryptocurrencies and and test everything you have learnt. As someone who is invested in crypto and really believes in the technology behind it, I would have loved to have an interactive game where I could have tested my knowledge so I am doing just that and creating it myself. I want this game to be inclusive and accessible for everyone, I want it to be engaging and to encourage you into getting involved in the space.

* ## Aims
   To give provide a platform for crypto newbies or experts to test what they know in an all in one game, and to allow them to quickly learn the core concepts of this complex industry giving them the opportunity to make smarter investment decisions, in a fun and interactive way. I want the game to be fun and have re-play value so I will make the questions random each time so you can play and get tested on different aspects of the industry. 

* ## Target Audience
    There are a number of target audiences for this game due to the fact that crypto is for everyone. We welcome new and experienced people from ages, to come and learn and test their knowledge about this fascinating industry. However, Crypto Quiz is mainly aimed at educating people who know little about crypto as it the questions will not be extremly diffuclt and just touch on the main aspects of the indusrty. 

* ## User Stories
    * #### First Time Visitor Goals:
        a. As a First Time Visitor, I want to easily understand the purpose of the site and learn how to play the game.

        b. As a First Time Visitor, I want the game to be enjoyable and challenging.

        c. As a First Time Visitor, once the game is finished I want to be able to play again.

        d. As a First Time Visitor, once the game is finished I want to be able to exit the game

        e. As a First Time Visitor, I want to be able to set new scores and times

    * #### Returning Visitor Goals:
       a. As a Returning Visitor, I want the questions to be different than the previous ones.

       b. As a Returning Visitor, I want the game to be responsive to whichever device I am playing on.

       c.  As a Returning Visitor, I want to be able to see my previous scores and times.

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
    
        For Crypto Quiz I will use one icon which is taken from [Font Awesome](https://fontawesome.com/start). The icon will be used in the results page to help fill up the space and break up the section.

* ## Scope 

    * When creating Crypto Quiz I will take a waterfall approach when developing. That is, creating sections of the website at a time and ensuring they work as intended before going onto the next section. I will be able to break up development by choosing small elements to work on daily, ensuring the website can be built and published in a timely fashion. As this porject incorporates JavaScript a large majoirty of my time will be spend developing and testing the logic behind the game as opposed to the aesthetics of the game as it will have a fairly simple design. 

* ## Structure 

    * I have chosen to create the game with a single html page which will have multiple sections which the user will see when playing the game, once they move onto the next part of the game the prvious sections will be hidden from view and the new section will be displayed to them. The game will not have a navigation bar at the top as I want the user to follow a set path when navigating the wesbite.

    * On the 'index.html page', I will have multiple divs which will contain each section of the game, for example, the 'maincontainer' which is the first thing that will load when they open the game. The next section will be the 'Rules Section' which will explain the rules of the quiz and allow them to navigate to the quiz itself. The section after this will be the actual game e.g. 'Quiz Section', this is where the questions and answers will be presented to them, as well as this a timer will be present so they can see how long they have taken. Once the game is complete, they will be met with the 'Results Section' which will show them their score and give the user the option to exit or play again. As mentioned before, once the user progresses to the next section all previous sections will be hidden to them.

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
     ![Back of Card](docs/readme/flipcardbackupdated.png)

* ### Quiz Interface

    * Here is the actual game part of the website. This is where the players will interact with and where all the questions and answers will be displayed for them to try and guess. It is made up of a header, main area and a footer. 

    * The header holds the name for the quiz as well as a section which will count how long the user has been playing the quiz for. This time as well as their score will be saved to local storage and imputted into a score board where they can keep track of their previous attempts and try and beat old high scores.

    * The main area is where the question will be displayed, as well as four buttons which will hold the possible answers to the questions. The user will have one chance to answer the question and hopefully make the right choice, if they do make the correct choice then their selection highlight in green, else their selection will go red and the correct answer will be highlighted in green.

    * The footer section holds the question count as well as the 'Next' button which will be made visible to the user once a selection has been made. The question count will iterate as they move through the questions until they reach to the final question which will be number 10. Where at that point the quiz section will be hidden from the user and the results box will be displayed.

    ![Quiz1](docs/readme/quizplay.png)
    ![Quiz2](docs/readme/correctansquiz.png)
    ![Quiz3](docs/readme/incorrectansquiz.png)

* ### Results Page

    * This is the final section of the game that the player will interact with. Once they have completed the quiz this screen will appear showing them their score as well as the time taken to complete the quiz. Once the user has played a couple games, their previous scores and times will be displayed in the score board for them to see.

    * The user will also be met with three buttons which they can interact with, a 'Clear Board' button which when clicked will clear the leaderboard of all times and scores. The 'Replay Quiz' button which will reload the game so they are back at question one and can play through the quiz again. Finally, the 'Quit Quiz' button which will reload the whole website so they are met with the landing screen again.

    ![Result](docs/readme/emptyresultsbox.png)
    ![Result](docs/readme/quizresults.png)

## Future Features:

Some future features I would like to implement into Crypto Quiz:

* Ideally I'd like to add a proper contact form so users can contact me on any topics they would like to be implemented into the quiz or any suggestions they have in order to improve the game

* Add a level progression mode so users can chose the difficulty of the questions making the game more accessible

* Double the question bank to make the game more interesting and allow for more difficult questions to be added

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

11. [Google Developer Tools](https://developer.chrome.com/docs/devtools/):
    * Used to test code throughout development

# Testing 

Due to the size of the testing section for Crypto Quiz I have created [TESTING.md](TESTING.md), which holds my W3C Validator and JSHint outputs. It also shows all tested screenshots, any errors/bugs I encountered, and how I fixed them when creating this project. This is also where you can find any responsiveness screenshots, and browser compatibility tests.

[Link To Testing.md](TESTING.md)
   
# Deployment 

## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository

2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    Under "Source", click the dropdown called "None" and select "Main Branch".
   
4. The page will automatically refresh.
    
5. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

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
$ git clone https://github.com/RiyadhKh4n/crypto-quiz.git
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RiyadhKh4n/crypto-quiz)

# Credits 

## Content:
* All information on the website was taken from different souces as well as a large marjority being my own

 - Links to all sources where I got questions from are below:

    - [Survey Monkey](https://www.surveymonkey.com/survey-taken/?sm=foGJXlvgq3EfAV4uQN4438lZl7TVh9_2F92g4PRj6Ax8quTZUboqlP6nzfbDa4AP1hrcnH72SH7XDwP5UCkCXhdXI0jKGhjq7mOZgRfvGzUsQ_3D)

    - [Lovatts](https://lovattspuzzles.com/online-puzzles-competitions/crypto-quiz/)

    - [CryptoCompare](cryptocompare.com)

    - [Bloomberg](https://www.bloomberg.com/features/crypto-knowledge-quiz/)

    - [bitpanda](https://www.bitpanda.com/academy/en/tests/beginner-test/)

    - [COINTELEGRAPH](https://cointelegraph.com/category/quiz)

## Code

When developing the game I spent alot of time breaking down how I would code each section and what I needed to implement to ensure it looked and worked how I wanted it to. Therefore the vast majority of the code is orginal and my own however there were times where I did need help in progressing and when this happened I went on slack to ask fellow students if they knew how to help. If this did not work I would use StackOverflow and YouTube which more often then not allowed me to get to the bottom of my problem and progress in developing Crypto Quiz. 

When researching how to make JavaScript quizes I came across many different people who had made similar games to what I wanted to make. One YouTube video which I found particularly helpful was from [CodingNepal](https://www.youtube.com/watch?v=pQr4O1OITJo), I was inspired by the way their game looked hence why the quiz section of my game looks similar. I liked their clean and simple design however the styling is not copied line for line I only took sections from them and then styled the rest myself.

I knew I wanted to add a flip card affect for the start of my game so I did some research on how to implement it and I came across [this](https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c) article which allowed me to create one for myself which you can see working in the game.

The only code in the webiste that was copied from a third - party was the timer functionality in script.js which was taken from YouTube by [Coding Artist](https://www.youtube.com/watch?v=3Re18DCjJ4s) whose video is linked. 

I also used w3Schools JavaScript lessons as well as they provide very helpful guides and examples which allowed me to overcome a vast majority of issues I had when developing.

When developing Crypto Quiz, I did have a problem which I went to Tutor Support for however after three different tutors they were unable to help me hence I asked my Mentor, who after working with me was able to identify and fix the problem.

### Acknowledgements
* Tim - My Mentor
* Tutor Support



