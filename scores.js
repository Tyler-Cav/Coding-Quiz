//creating a variable which is pulling from the "scores" key. Then sorting each submission by how much time is left.
var highscores = JSON.parse(localStorage.getItem("scores")) || []

highscores.sort(function(x, y) {
    return y.score - x.score 
})

highscores.forEach(function(score) {
    var liEl = document.createElement("li")
    liEl.textContent = score.initials + " - " + score.score
    document.querySelector("ol").append(liEl)
})