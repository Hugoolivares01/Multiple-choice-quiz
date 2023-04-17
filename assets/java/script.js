var highscore = document.querySelector("#Highscore");
var timerT = document.querySelector(".timertext");
var timerN = document.querySelector(".timernumbercount");
var QuizSBtn = document.querySelector(".Quiz-start");
var hidden = document.querySelector(".hidden");
var question = document.querySelector(".question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var Title = document.querySelector("#T1");
var InitialNameBtn = document.querySelector("#InitialNameSubmit");
var InitialNameText = document.querySelector("#Initialsname");
var InitialPreText = document.querySelector("#InitialsPreText");
var Back = document.querySelector("#Back");
var Clear = document.querySelector("#Clear");
let score = 0;
let InitialsArr = [];
let ScoreArr = [];
document.addEventListener("DOMContentLoaded", function () {
    InitialNameBtn.style.display = "none";
    InitialNameText.style.display = "none";
    InitialPreText.style.display = "none";
    Back.style.display = "none";
    Clear.style.display = "none";
});

QuizSBtn.addEventListener("click", function () {
    countercountdown();
    q1();
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
    QuizSBtn.style.display = "none";
    hidden.style.display = "inline";

}

function q1() {
    question.textContent = "What's the condition in an if/else statement enclosed with?";
    a1.textContent = "1.String";
    a2.textContent = "2.Boolean";
    a3.textContent = "3.Alert";
    a4.textContent = "4.Numbers";
    a1.addEventListener("click", function () {
        score--;
        q2(score);
    })
    a2.addEventListener("click", function () {
        score++;
        q2(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q2(score);
    })

    a4.addEventListener("click", function () {
        score--;
        q2(score);
    })
}


function q2(score) {
    question.textContent = ("the condition in and if / else staement is enclosed with ___?")
    a1.textContent = ("1.quotes")
    a2.textContent = ("2.curly brackets")
    a3.textContent = ("3.parentheses")
    a4.textContent = ("4.square brackets")
    a1.addEventListener("click", function () {
        score--;
        q3(score);
    })
    a2.addEventListener("click", function () {
        score--;
        q3(score);
    })
    a3.addEventListener("click", function () {
        score++;
        q3(score);
    })
    a4.addEventListener("click", function () {
        score--;
        q3(score);
    })
}

function q3(score) {
    question.textContent = ("Arrays in Javascript can be used to store ?")
    a1.textContent = ("1.number and strings")
    a2.textContent = ("2.booleans")
    a3.textContent = ("3.other arrays")
    a4.textContent = ("4.all of the above")
    a1.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a2.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q4(score);
    })

    a4.addEventListener("click", function () {
        score++;
        q4(score);
    })
}



function q4(score) {
    question.textContent = ("string values must be enclosed within ___ when being assigned to a varibles?")
    a1.textContent = ("1.commas")
    a2.textContent = ("2.curly brackets")
    a3.textContent = ("3.quotes")
    a4.textContent = ("4.parentheses")
    a1.addEventListener("click", function () {
        score--;
        q5(score);
    })

    a2.addEventListener("click", function () {
        score++;
        q5(score);
    })

    a3.addEventListener("click", function () {
        score--;
        q5(score);
    })

    a4.addEventListener("click", function () {
        score--;
        q5(score);
    })
}

function q5(score) {
    question.textContent = (" A very useful tool used during development and debugging for printing content to debugger is:")
    a1.textContent = ("1.javascript")
    a2.textContent = ("2.terminal/bash")
    a3.textContent = ("3.for loop")
    a4.textContent = ("4.console log")
    a1.addEventListener("click", function () {
        score--;
        storeinfo(score);
        HSNameInput(score);
    })

    a2.addEventListener("click", function () {
        score--;
        storeinfo(score);
        HSNameInput(score);
    })

    a3.addEventListener("click", function () {
        score++;
        storeinfo(score);
        HSNameInput(score);
    })

    a4.addEventListener("click", function () {
        score--;
        storeinfo(score);
        HSNameInput(score);
    })
}


function HSNameInput(score) {
    Title.textContent = ("All Done!")
    question.textContent = ("Your final score is  ") + score + (".");
    timerT.style.display = "none";
    timerN.style.display = "none";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    InitialNameBtn.style.display = "";
    InitialNameText.style.display = "";
    InitialPreText.style.display = "";

    InitialNameBtn.addEventListener("click", function () {
        var initials = InitialNameText.value;
        InitialsArr.push(initials);
        ScoreArr.push(score);
        localStorage.setItem("score", JSON.stringify(ScoreArr));
        localStorage.setItem("initials", JSON.stringify(InitialsArr));
        FinalHSPage();
        displayHighScores();
    });
}

function displayHighScores() {
    let initials = localStorage.getItem("initials");
    let score = localStorage.getItem("score");
    console.log(initials);
    console.log(score)
}
function FinalHSPage(score) {
    timerT.style.display = "none";
    timerN.style.display = "none";
    QuizSBtn.style.display = "none";
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    Title.textContent = ("Highscore");
    Back.style.display = "";
    Clear.style.display = "";
    question.style.display = "none";
    InitialNameBtn.style.display = "none";
    InitialNameText.style.display = "none";
    InitialPreText.style.display = "none";
}
function storeinfo() {

}
highscore.addEventListener("click", function () {
    FinalHSPage();
});



// <!-- q1= commonly used data types do not include?
// A= string, boolean(C) , alert, numbers -->

// <!-- q2= the condition in and if / else staement is enclosed with ___?
// A= quotes, curly brackets , parenthases(C), square brackets -->

// <!-- q3= Arrays in Javascript can be used to store ?
// A= number and strings, booleans , other arrays, all of the above (C) -->

// <!-- q4= string values must be enclosed within ___ when being assigned to a varibles?
// A= commas, curly brackets(C) , quotes, parentheses-->

// <!-- q5= A very useful tool used during development and debugging for printing content to debugger is:
// A= javascript, terminal/bash , for loops (C), console log -->