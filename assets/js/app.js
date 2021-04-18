var timer = document.getElementById("timer");
var time = 60;
timer.textContent = time;
var counter = 0;

var interval = setInterval(function(){
    time--;
    timer.textContent = time;
    if (time === 0){
        clearInterval(interval);
        endGame();
    }
}, 1000);
var answers = [];
function addAnswers(id) {
    answers.push(id);
    if (id === 'correct'){
        counter++
    } else if (id === 'incorrect') {
        time = time-5;
    }
    nextQuestion(); 
}
var i = 1;
function nextQuestion() {
    var question = document.getElementById(('q'+i));
    i++;
    if (i > 4){
        question.setAttribute("style", "display: none;");
        endGame();
        return;
    }
    question.setAttribute("style", "display: none;");
    var newQuestion = document.getElementById(('q'+i));
    newQuestion.setAttribute("style", "display: block;");

}
function endGame() {
    clearInterval(interval);
    var results = document.getElementById('results');
    results.setAttribute("style", "display: block;")
    results.textContent = "You scored " + counter + '/4';
    var userName = window.prompt("Enter Your name");
    window.localStorage.setItem('username', userName);
    window.localStorage.setItem('score', counter+'/4');
    displayScore();
}
function displayScore(){
    timer.innerText = 'Recent Score'
    document.getElementById('results').innerText = window.localStorage.getItem('username') + ' ' + window.localStorage.getItem('score');
}
