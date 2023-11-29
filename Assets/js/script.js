
//Trying to create button/list elements that I can push into HTML for each question
//Lines 4-8 are going to the changing variables for each question that pops up.
let questionEL = document.getElementById("questionPrompts")
let choiceOneEl = document.getElementById("optionOne");
let choiceTwoEl = document.getElementById("optionTwo");
let choiceThreeEl = document.getElementById("optionThree");
let choiceFourEl = document.getElementById("optionFour");


let timeLeftEl = document.getElementById("timer");
let h2TimeUpEl = document.getElementById("timeUp");
let secondsLeft = 20
let secondsInterval = setInterval(function () {
secondsLeft--;
timeLeftEl.textContent = secondsLeft + " Seconds Remaining";
if (secondsLeft == 0) {
    clearInterval(secondsInterval);
    timeLeftEl.textContent = "Times Up!";
    h2TimeUpEl.textContent = "Times Up!";
    }
},200);
//line below used as comparison example for when user gets question wrong
if (1 === 1) {
    secondsLeft = secondsLeft - 10
}

quizTime();

function questionPrompt() {
    questionEL.textContent = "WHAT DO YOU WANT FROM ME?";
    choiceOneEl.textContent = "Option 1";
    choiceTwoEl.textContent = "Option 2";
    choiceThreeEl.textContent = "Option 3";
    choiceFourEl.textContent = "Option 4";

}



questionPrompt();

// function questionOne{

// }

// function quizTime() {

//}


// looking for a way to create the question section. Quiz game function, 
//call the question function 5 times
//display questions in order