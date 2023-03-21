var highscore = document.querySelector(".Highscore");
var timerN = document.querySelector(".timernumbercount")
var QuizSBtn = document.querySelector(".Quiz-start")

QuizSBtn.addEventListener("click", countercountdown);
function countercountdown() {
    let count = parseInt(timerN.textContent);
    const countdown = setInterval(() => {
        count--;
        if (count < 0) {
            clearInterval(countdown);
        } else {
            timerN.textContent = count;
        }
    }, 1000);
}

// function getinfo() {

// }

// quizstart.addEventListener("click", function () {

// });

// Question1.addEventListener("click", function () {

// });

// Question2.addEventListener("click", function () {

// });

// Question3.addEventListener("click", function () {

// });

// Question4.addEventListener("click", function () {

// });

// Question5.addEventListener("click", function () {

// });

// Enterfinalname.addEventListener("click", function () {

// });

// function saveinfo() {

// }
