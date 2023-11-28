
//Trying to create button/list elements that I can push into HTML for each question
 choiceOneEl = document.body.children[1].children[0].children[1].children[0]
 choiceTwoEl = document.body.children[1].children[0].children[1].children[1]
 choiceThreeEl = document.body.children[1].children[0].children[1].children[2]
 choiceFourEl = document.body.children[1].children[0].children[1].children[3]

function quizTime () {
    let timeLeftEl = document.getElementById("timer");
    let h2TimeUpEl = document.getElementById("timeUp");
    secondsLeft = 20
    let secondsInterval = setInterval(function () {
    secondsLeft--;
    timeLeftEl.textContent = secondsLeft + " Seconds Remaining";
    if (secondsLeft == 0) {
        clearInterval(secondsInterval);
        timeLeftEl.textContent = "Times Up!";
        h2TimeUpEl.textContent = "Times Up!";
        //Prompt end screen with scores based on what answers they were given.
    }
    },100);
}
quizTime();

// function questionOne{

// }

// function quizTime() {

//}


// looking for a way to create the question section. Quiz game function, 
//call the question function 5 times
//display questions in order