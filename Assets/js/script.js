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
}, 200);
//line below used as comparison example for when user gets question wrong
if (1 === 1) {
    secondsLeft = secondsLeft - 10
}

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