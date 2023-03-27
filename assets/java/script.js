var highscore = document.querySelector(".Highscore");
var timerN = document.querySelector(".timernumbercount");
var QuizSBtn = document.querySelector(".Quiz-start");
var hidden = document.querySelector(".hidden");
var question = document.querySelector(".question");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var score = 0;

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
    console.log(score);
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
    a1.textContent = "String";
    a2.textContent = "Boolean";
    a3.textContent = "Alert";
    a4.textContent = "Numbers";
    a1.addEventListener("click", function () {
        score--;
        q2();
    });

    a2.addEventListener("click", function () {
        score++;
        q2();
    });

    a3.addEventListener("click", function () {
        score--;
        q2();
    });

    a4.addEventListener("click", function () {
        score--;
        q2();
    });
}


function q2() {
    question.textContent = ("the condition in and if / else staement is enclosed with ___?")
    a1.textContent = ("quotes")
    a2.textContent = ("curly brackets")
    a3.textContent = ("parentheses")
    a4.textContent = ("square brackets")
    a1.addEventListener("click", function() {
        score--;
        q3();
      });
    
      a2.addEventListener("click", function() {
        score--;
        q3();
      });
    
      a3.addEventListener("click", function() {
        score++;
        q3();
      });
    
      a4.addEventListener("click", function() {
        score--;
        q3();
      });
}

function q3() {
    question.textContent = ("Arrays in Javascript can be used to store ?")
    a1.textContent = ("number and strings")
    a2.textContent = ("booleans")
    a3.textContent = ("other arrays")
    a4.textContent = ("all of the above")
    a1.addEventListener("click", function() {
        score--;
        q4();
      });
    
      a2.addEventListener("click", function() {
        score--;
        q4();
      });
    
      a3.addEventListener("click", function() {
        score--;
        q4();
      });
    
      a4.addEventListener("click", function() {
        score++;
        q4();
      });
}

function q4() {
    question.textContent = ("string values must be enclosed within ___ when being assigned to a varibles?")
    a1.textContent = ("commas")
    a2.textContent = ("curly brackets")
    a3.textContent = ("quotes")
    a4.textContent = ("parentheses")
    a1.addEventListener("click", function() {
        score--;
        q5();
      });
    
      a2.addEventListener("click", function() {
        score++;
        q5();
      });
    
      a3.addEventListener("click", function() {
        score--;
        q5();
      });
    
      a4.addEventListener("click", function() {
        score--;
        q5();
      });
}

function q5() {
    question.textContent = (" A very useful tool used during development and debugging for printing content to debugger is:")
    a1.textContent = ("javascript")
    a2.textContent = ("terminal/bash")
    a3.textContent = ("for loop")
    a4.textContent = ("console log")
    a1.addEventListener("click", function() {
        score--;
        HS();
      });
    
      a2.addEventListener("click", function() {
        score--;
        HS();
      });
    
      a3.addEventListener("click", function() {
        score++;
        HS();
      });
    
      a4.addEventListener("click", function() {
        score--;
        HS();
      });
}

function HS() {
    console.log("hello");
}

function storeinfo() {
    console.log("hey");
}