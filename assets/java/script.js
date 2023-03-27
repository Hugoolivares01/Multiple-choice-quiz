var highscore = document.querySelector(".Highscore");
var timerN = document.querySelector(".timernumbercount")
var QuizSBtn = document.querySelector(".Quiz-start")
document.addEventListener("DOMContentLoaded", function () {
    console.log("h");
});

QuizSBtn.addEventListener("click", function () {
    countercountdown();
    q1();
    q2();
    q3();
    q4();
    q5();
    HS();
    storeinfo();
});

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

function q1() {

}

function q2() {

}

function q3() {

}

function q4() {

}

function q5() {

}

function HS() {

}

function storeinfo() {

}