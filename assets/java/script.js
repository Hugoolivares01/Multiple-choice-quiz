var highscore = document.querySelector(".Highscore");
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
score = "";
document.addEventListener("DOMContentLoaded", function () {
    // InitialNameBtn.style.display = "none";
    // InitialNameText.style.display = "none";
    // InitialPreText.style.display = "none";
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
    a1.textContent = "String";
    a2.textContent = "Boolean";
    a3.textContent = "Alert";
    a4.textContent = "Numbers";
    a1.addEventListener("click", function () {
        q2();
    })

    a2.addEventListener("click", function () {
        q2();
    })

    a3.addEventListener("click", function () {
        q2();
    })

    a4.addEventListener("click", function () {
        q2();
    })
}


function q2() {
    question.textContent = ("the condition in and if / else staement is enclosed with ___?")
    a1.textContent = ("quotes")
    a2.textContent = ("curly brackets")
    a3.textContent = ("parentheses")
    a4.textContent = ("square brackets")
    a1.addEventListener("click", function () {
        q3();
    })
    a2.addEventListener("click", function () {
        q3();
    })
    a3.addEventListener("click", function () {
        q3();
    })
    a4.addEventListener("click", function () {
        q3();
    })
}

function q3() {
    question.textContent = ("Arrays in Javascript can be used to store ?")
    a1.textContent = ("number and strings")
    a2.textContent = ("booleans")
    a3.textContent = ("other arrays")
    a4.textContent = ("all of the above")
    a1.addEventListener("click", function () {
        q4();
    })

    a2.addEventListener("click", function () {
        q4();
    })

    a3.addEventListener("click", function () {
        q4();
    })

    a4.addEventListener("click", function () {
        q4();
    })
}



function q4() {
    question.textContent = ("string values must be enclosed within ___ when being assigned to a varibles?")
    a1.textContent = ("commas")
    a2.textContent = ("curly brackets")
    a3.textContent = ("quotes")
    a4.textContent = ("parentheses")
    a1.addEventListener("click", function () {
        q5();
    })

    a2.addEventListener("click", function () {
        q5();
    })

    a3.addEventListener("click", function () {
        q5();
    })

    a4.addEventListener("click", function () {
        q5();
    })
}

function q5() {
    question.textContent = (" A very useful tool used during development and debugging for printing content to debugger is:")
    a1.textContent = ("javascript")
    a2.textContent = ("terminal/bash")
    a3.textContent = ("for loop")
    a4.textContent = ("console log")
    a1.addEventListener("click", function () {
        storeinfo();
        HSNameInput();
    })

    a2.addEventListener("click", function () {
        storeinfo();
        HSNameInput();
    })

    a3.addEventListener("click", function () {
        storeinfo();
        HSNameInput();
    })

    a4.addEventListener("click", function () {
        storeinfo();
        HSNameInput();
    })
}

function HSNameInput() {
    Title.textContent = ("All Done!")
    question.textContent = ("Your final score is") + ("Place holder score")
    a1.style.display = "none"
    a2.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"

    // All done 
    //Your final score is
    // enter initials () btn

}
function FinalHSPage(){
    // Highscore
    // list of names 
    // (goback btn) (Clear Score)

}

function storeinfo() {

}

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