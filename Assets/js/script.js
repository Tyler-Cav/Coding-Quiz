var questionNumber = 1
var questions = [
    {
        prompt: "What is the basic keyword to create a loop?",
        options: ["for", "door", "floor", "core"],
        answer: "for"
    },
    {
        prompt: "What other scope besides global exists?",
        options: ["secular", "singular", "neighbor", "local"],
        answer: "local"
    },
    {
        prompt: "What file extension makes HTML pretty?",
        options: [".html", ".js", ".css", ".jpeg"],
        answer: ".css"
    },
    {
        prompt: "What event listener responds to a mouse press?",
        options: ["click", "clock", "push", "poke"],
        answer: "click"
    },
    {
        prompt: "What is the keyword used in your terminal to communicate between your local computer and GitHub?",
        options: ["gat", "git", "get", "got"],
        answer: "git"
    }
] 

var timeLeftEl = document.getElementById("timer");
var h2TimeUpEl = document.getElementById("timeUp");
var secondsLeft = 0
var questionElement = document.getElementById("question")

var startUpButton = document.getElementById("startUp")
startUpButton.addEventListener("click", function() {
    secondsLeft = 90
    startTimer()
    startUpButton.classList.add("hide")
    questionElement.classList.remove("hide")
    let testQuestion = questions[questionNumber-1]
    console.log(testQuestion)
    let firstQuestionPrompt = document.getElementById("questionPrompt")
    firstQuestionPrompt.textContent = testQuestion.prompt
    let firstOption = document.getElementById("optionOne")
    let secondOption = document.getElementById("optionTwo")
    let thirdOption = document.getElementById("optionThree")
    let fourthOption = document.getElementById("optionFour")
    firstOption.textContent = testQuestion.options[0]
    firstOption.value = testQuestion.options[0]
    secondOption.textContent = testQuestion.options[1]
    secondOption.value = testQuestion.options[1]
    thirdOption.textContent = testQuestion.options[2]
    thirdOption.value = testQuestion.options[2]
    fourthOption.textContent = testQuestion.options[3]
    fourthOption.value = testQuestion.options[3]
    
    //have evnt listener on buttons already
    //current question tracker
})
function answer () {
    
}

function startTimer () {
    setInterval(function () {
        secondsLeft--;
        timeLeftEl.textContent = secondsLeft + " Seconds Remaining";
        if (secondsLeft == 0) {
            clearInterval(secondsInterval);
            timeLeftEl.textContent = "Times Up!";
            h2TimeUpEl.textContent = "Times Up!";
        }
    }, 1000);
}


var optionElements = document.querySelectorAll("#options li button")
//create event listener. Make function to see what it's calling for
optionElements.forEach(function(optionElement){
    optionElement.addEventListener("click", function(event) {
        console.log(event.target.value);
        //when user clicks an option
        //get the value of the button that has been clicked
        //compare teh value that was clicked to the current question answer
        //if both are the same, move onto next question
        //else remove 10 seconds, move onto next question
    })
});


